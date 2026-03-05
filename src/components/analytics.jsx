import React from 'react';
import { fmtNum } from '../hooks/useYouTube';

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bg: '#080810',
  card: 'rgba(255,255,255,0.02)',
  border: '1px solid rgba(255,255,255,0.06)',
  gold: '#c9a84c',
  blue: '#5078ff',
  green: '#3ecf8e',
  red: '#ff4d6d',
  amber: '#f59e0b',
  text: '#e8e0d4',
  muted: '#8a8070',
  surface: '#0d0d1a',
};

// ─── SectionHeader ────────────────────────────────────────────────────────────
export function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: C.gold, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
        {label}
      </div>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: C.text, margin: 0 }}>
        {title}
      </h2>
    </div>
  );
}

// ─── LiveIndicator ────────────────────────────────────────────────────────────
export function LiveIndicator({ label, color = C.green, live = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
      <div style={{ position: 'relative', width: '8px', height: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
        {live && (
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '8px', height: '8px', borderRadius: '50%',
            background: color, opacity: 0.4,
            animation: 'pulse 2s infinite',
          }} />
        )}
      </div>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: C.muted, letterSpacing: '0.1em' }}>{label}</span>
    </div>
  );
}

// ─── StatCard ─────────────────────────────────────────────────────────────────
export function StatCard({ value, label, accent = C.gold, trend = null, sub = null }) {
  return (
    <div style={{
      background: C.card,
      border: C.border,
      borderLeft: `3px solid ${accent}`,
      borderRadius: '4px',
      padding: '1.1rem 1.25rem',
    }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '2rem', color: accent, lineHeight: 1, marginBottom: '0.3rem' }}>
        {value}
        {trend !== null && (
          <span style={{ fontSize: '0.75rem', color: trend >= 0 ? C.green : C.red, marginLeft: '0.4rem', fontFamily: "'Space Mono', monospace" }}>
            {trend >= 0 ? '↑' : '↓'}{Math.abs(trend)}%
          </span>
        )}
      </div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</div>
      {sub && <div style={{ fontSize: '0.72rem', color: C.muted, marginTop: '0.25rem' }}>{sub}</div>}
    </div>
  );
}

// ─── EngagementBadge ──────────────────────────────────────────────────────────
export function EngagementBadge({ rate }) {
  const color = rate >= 5 ? C.green : rate >= 2 ? C.amber : C.red;
  const label = rate >= 5 ? 'HIGH' : rate >= 2 ? 'MED' : 'LOW';
  return (
    <span style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: '0.55rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      color,
      background: `${color}18`,
      border: `1px solid ${color}44`,
      borderRadius: '3px',
      padding: '0.15rem 0.45rem',
    }}>
      {rate.toFixed(1)}% {label}
    </span>
  );
}

// ─── VideoCard ────────────────────────────────────────────────────────────────
export function VideoCard({ video }) {
  return (
    <div style={{
      background: C.card,
      border: C.border,
      borderRadius: '4px',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', paddingTop: '56.25%', background: '#0a0a18', overflow: 'hidden' }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
        />
        <div style={{
          position: 'absolute', bottom: '0.4rem', right: '0.4rem',
          background: 'rgba(0,0,0,0.75)', borderRadius: '2px',
          padding: '0.1rem 0.35rem',
          fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: C.text,
        }}>
          {fmtNum(video.views)} views
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '0.85rem' }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.83rem', color: C.text, fontWeight: 500,
          overflow: 'hidden', display: '-webkit-box',
          WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          lineHeight: 1.45, marginBottom: '0.6rem',
          minHeight: '2.4rem',
        }}>
          {video.title}
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
          {[
            { icon: '▶', val: fmtNum(video.views), label: 'views' },
            { icon: '♥', val: fmtNum(video.likes), label: 'likes' },
            { icon: '💬', val: fmtNum(video.comments), label: 'cmts' },
          ].map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ fontSize: '0.6rem', color: C.muted }}>{s.icon}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: C.text }}>{s.val}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <EngagementBadge rate={video.engagement} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: C.muted }}>{video.publishedAt}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────
export function SkeletonCard() {
  return (
    <div style={{ background: C.card, border: C.border, borderRadius: '4px', overflow: 'hidden' }}>
      <div style={{ paddingTop: '56.25%', background: 'rgba(255,255,255,0.03)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)', animation: 'shimmer 1.5s infinite' }} />
      </div>
      <div style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ height: '10px', background: 'rgba(255,255,255,0.04)', borderRadius: '2px', width: '90%' }} />
        <div style={{ height: '10px', background: 'rgba(255,255,255,0.04)', borderRadius: '2px', width: '65%' }} />
        <div style={{ height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '2px', width: '50%', marginTop: '0.25rem' }} />
      </div>
    </div>
  );
}

export function SkeletonStat() {
  return (
    <div style={{ background: C.card, border: C.border, borderLeft: `3px solid rgba(201,168,76,0.2)`, borderRadius: '4px', padding: '1.1rem 1.25rem' }}>
      <div style={{ height: '2rem', width: '60%', background: 'rgba(255,255,255,0.04)', borderRadius: '2px', marginBottom: '0.4rem' }} />
      <div style={{ height: '8px', width: '80%', background: 'rgba(255,255,255,0.03)', borderRadius: '2px' }} />
    </div>
  );
}

// ─── ErrorBanner ──────────────────────────────────────────────────────────────
export function ErrorBanner({ type, message }) {
  if (type === 'missing_key') {
    return (
      <div style={{
        background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '4px', padding: '1rem 1.25rem', marginBottom: '1.5rem',
        display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
      }}>
        <span style={{ color: C.gold, fontSize: '1rem', flexShrink: 0 }}>⚠</span>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: C.gold, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
            YouTube API Key Missing
          </div>
          <div style={{ fontSize: '0.82rem', color: C.muted, lineHeight: 1.5 }}>
            Add <code style={{ background: 'rgba(201,168,76,0.1)', color: C.gold, padding: '0.1rem 0.3rem', borderRadius: '2px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem' }}>VITE_YOUTUBE_API_KEY=your_key</code> to your <code style={{ background: 'rgba(201,168,76,0.1)', color: C.gold, padding: '0.1rem 0.3rem', borderRadius: '2px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem' }}>.env</code> file to enable live data. See README for setup instructions.
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{
      background: 'rgba(255,77,109,0.06)', border: '1px solid rgba(255,77,109,0.2)',
      borderRadius: '4px', padding: '1rem 1.25rem', marginBottom: '1.5rem',
      display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
    }}>
      <span style={{ color: '#ff4d6d', fontSize: '1rem', flexShrink: 0 }}>✕</span>
      <div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: '#ff4d6d', fontSize: '0.9rem', marginBottom: '0.25rem' }}>API Unavailable</div>
        <div style={{ fontSize: '0.82rem', color: C.muted }}>{message}</div>
      </div>
    </div>
  );
}

// ─── InstagramPlaceholderCard ─────────────────────────────────────────────────
export function IGPlaceholderCard() {
  return (
    <div style={{
      background: C.card, border: C.border, borderRadius: '4px',
      paddingTop: '100%', position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '0.3rem',
      }}>
        <div style={{ fontSize: '1.25rem', opacity: 0.2 }}>📷</div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: C.muted, textAlign: 'center' }}>Add post data</div>
      </div>
    </div>
  );
}
