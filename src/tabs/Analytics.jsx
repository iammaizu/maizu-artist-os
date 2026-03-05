import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { useYouTube, fmtNum } from '../hooks/useYouTube';
import {
  StatCard, VideoCard, EngagementBadge,
  SectionHeader, LiveIndicator,
  SkeletonCard, SkeletonStat, ErrorBanner,
  IGPlaceholderCard,
} from '../components/analytics';

// ─── Design tokens (local) ────────────────────────────────────────────────────
const C = {
  bg: '#080810', card: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.06)',
  gold: '#c9a84c', blue: '#5078ff', green: '#3ecf8e',
  red: '#ff4d6d', amber: '#f59e0b',
  text: '#e8e0d4', muted: '#8a8070',
};

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
function DarkTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '4px', padding: '0.5rem 0.75rem',
      fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: C.text,
    }}>
      <div style={{ color: C.muted, marginBottom: '0.2rem', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color }}>{p.name}: {typeof p.value === 'number' && p.value > 100 ? fmtNum(p.value) : p.value}{p.name === 'Eng%' ? '%' : ''}</div>
      ))}
    </div>
  );
}

// ─── Chart axis tick style ────────────────────────────────────────────────────
const axisStyle = { fill: '#8a8070', fontSize: 9, fontFamily: "'Space Mono', monospace" };

// ─── YouTube Section ──────────────────────────────────────────────────────────
function YouTubeSection() {
  const { data, loading, error } = useYouTube();
  const isMissingKey = error === 'missing_key';
  const isApiError = error && !isMissingKey;

  const chartData = data?.videos.map(v => ({
    name: v.title.slice(0, 16) + '…',
    Views: v.views,
    'Eng%': v.engagement,
  })) ?? [];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <SectionHeader label="Platform · YouTube" title="Channel Analytics" />
        <LiveIndicator label={isMissingKey || isApiError ? 'API OFFLINE' : 'YOUTUBE LIVE'} color={isMissingKey || isApiError ? C.amber : C.green} live={!isMissingKey && !isApiError} />
      </div>

      {isMissingKey && <ErrorBanner type="missing_key" />}
      {isApiError && <ErrorBanner type="api_error" message={error.replace('api_error:', '')} />}

      {/* Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {loading ? (
          [1,2,3,4].map(i => <SkeletonStat key={i} />)
        ) : data ? (
          <>
            <StatCard value={fmtNum(data.channel.subscribers)} label="Subscribers" accent={C.gold} />
            <StatCard value={fmtNum(data.channel.totalViews)} label="Total Views" accent={C.blue} />
            <StatCard value={fmtNum(data.channel.videoCount)} label="Videos" accent={C.green} />
            <StatCard value={fmtNum(data.avgViews)} label="Avg Views / Video" accent={C.amber} />
          </>
        ) : (
          <>
            <StatCard value="—" label="Subscribers" accent={C.gold} />
            <StatCard value="—" label="Total Views" accent={C.blue} />
            <StatCard value="—" label="Videos" accent={C.green} />
            <StatCard value="—" label="Avg Views" accent={C.amber} />
          </>
        )}
      </div>

      {/* Best Video Callout */}
      {data?.bestVideo && (
        <div style={{
          background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: '4px', padding: '0.85rem 1.1rem', marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
        }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: C.gold, letterSpacing: '0.15em', flexShrink: 0 }}>TOP TRACK</div>
          <div style={{ flex: 1, fontSize: '0.83rem', color: C.text, fontWeight: 500 }}>{data.bestVideo.title}</div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: C.gold, flexShrink: 0 }}>{fmtNum(data.bestVideo.views)} views</div>
        </div>
      )}

      {/* Charts */}
      {(data || loading) && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {/* Views Bar Chart */}
          <div style={{ background: C.card, border: C.border, borderRadius: '4px', padding: '1rem' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: C.muted, letterSpacing: '0.12em', marginBottom: '0.75rem' }}>VIEWS · LAST 10 VIDEOS</div>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} interval={0} angle={-30} textAnchor="end" height={40} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} tickFormatter={v => fmtNum(v)} />
                <Tooltip content={<DarkTooltip />} cursor={{ fill: 'rgba(201,168,76,0.05)' }} />
                <Bar dataKey="Views" radius={[2,2,0,0]}>
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? C.gold : 'rgba(201,168,76,0.4)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Engagement Line Chart */}
          <div style={{ background: C.card, border: C.border, borderRadius: '4px', padding: '1rem' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: C.muted, letterSpacing: '0.12em', marginBottom: '0.75rem' }}>ENGAGEMENT RATE %</div>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={chartData} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} interval={0} angle={-30} textAnchor="end" height={40} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} tickFormatter={v => v + '%'} />
                <Tooltip content={<DarkTooltip />} cursor={{ stroke: 'rgba(80,120,255,0.2)', strokeWidth: 1 }} />
                <Line type="monotone" dataKey="Eng%" stroke={C.blue} strokeWidth={2} dot={{ fill: C.blue, r: 3, strokeWidth: 0 }} activeDot={{ r: 5, fill: C.blue }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Video Grid */}
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: C.muted, letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
        LATEST VIDEOS
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
        {loading
          ? [1,2,3,4,5,6].map(i => <SkeletonCard key={i} />)
          : data?.videos.map(v => <VideoCard key={v.id} video={v} />)
        }
      </div>
    </div>
  );
}

// ─── Instagram Section ────────────────────────────────────────────────────────
const IG_STATS = {
  followers: 4497,
  following: 0,
  posts: 0,
  avgLikes: 0,
  engRate: '0.0',
};

function InstagramSection() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <SectionHeader label="Platform · Instagram" title="Profile Analytics" />
        <LiveIndicator label="MANUAL DATA" color={C.amber} live={false} />
      </div>

      {/* Note */}
      <div style={{
        background: 'rgba(80,120,255,0.05)', border: '1px solid rgba(80,120,255,0.15)',
        borderRadius: '4px', padding: '0.75rem 1rem', marginBottom: '1.25rem',
        display: 'flex', alignItems: 'center', gap: '0.6rem',
      }}>
        <span style={{ color: C.blue, fontSize: '0.8rem' }}>ℹ</span>
        <span style={{ fontSize: '0.78rem', color: C.muted }}>Connect Instagram Graph API to make this live. Update <code style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: C.blue }}>IG_STATS</code> in Analytics.jsx for now.</span>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <StatCard value={fmtNum(IG_STATS.followers)} label="Followers" accent={C.gold} />
        <StatCard value={IG_STATS.following || '—'} label="Following" accent={C.blue} />
        <StatCard value={IG_STATS.posts || '—'} label="Posts" accent={C.green} />
        <StatCard value={IG_STATS.avgLikes || '—'} label="Avg Likes" accent={C.amber} />
        <StatCard value={IG_STATS.engRate + '%'} label="Eng. Rate" accent={C.red} />
      </div>

      {/* Placeholder Post Grid */}
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: C.muted, letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
        RECENT POSTS
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
        {[1,2,3,4,5,6].map(i => <IGPlaceholderCard key={i} />)}
      </div>
    </div>
  );
}

// ─── Combined Insights ────────────────────────────────────────────────────────
function CombinedInsights({ ytData }) {
  const items = [
    { label: 'Top opportunity', value: 'BeatStars beats page — link in every video description', color: C.gold },
    { label: 'Algorithm tip', value: 'Upload Shorts version of every beat within 24hrs of main upload', color: C.blue },
    { label: 'Cross-platform', value: 'Post IG Reel 48hrs after YouTube drop to avoid cannibalisation', color: C.green },
    { label: 'SEO keywords', value: '"Tamil beats", "Kollywood type beat", "Tamil hip hop instrumental"', color: C.amber },
  ];
  return (
    <div style={{ marginTop: '2rem' }}>
      <SectionHeader label="Analytics · Insights" title="Combined Growth Signals" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
        {items.map((item, i) => (
          <div key={i} style={{
            background: C.card, border: C.border,
            borderLeft: `3px solid ${item.color}`,
            borderRadius: '4px', padding: '0.9rem 1.1rem',
          }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: item.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>{item.label}</div>
            <div style={{ fontSize: '0.82rem', color: C.text, lineHeight: 1.5 }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Analytics Page ──────────────────────────────────────────────────────
export default function Analytics() {
  const { data: ytData } = useYouTube();

  return (
    <div>
      {/* Status bar */}
      <div style={{
        display: 'flex', gap: '1.5rem', padding: '0.65rem 1rem',
        background: 'rgba(255,255,255,0.015)', border: C.border,
        borderRadius: '4px', marginBottom: '2rem', flexWrap: 'wrap',
      }}>
        <LiveIndicator label="YouTube Live" color={C.green} live />
        <LiveIndicator label="Instagram Manual" color={C.amber} live={false} />
        <div style={{ marginLeft: 'auto', fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: C.muted }}>
          Last refresh: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Two column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        alignItems: 'start',
      }}>
        <YouTubeSection />
        <InstagramSection />
      </div>

      <CombinedInsights ytData={ytData} />

      {/* Keyframe styles */}
      <style>{`
        @keyframes pulse { 0%,100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(2.2); opacity: 0; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </div>
  );
}
