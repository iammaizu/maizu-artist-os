import React from 'react';
import { TopTracksChart, GrowthLineChart } from '../components/charts';

const T = { t1: '#f0ece4', t2: '#888', t3: '#444', gold: '#c9a84c', blue: '#4f7cff', green: '#3ecf8e', red: '#ff4d6d', surface: '#0e0e1a', border: 'rgba(255,255,255,0.06)' };

function StatCard({ value, label, accent }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${accent}`, borderRadius: '4px', padding: '16px 18px' }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.6rem', color: accent, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: T.t2, marginTop: '5px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

export default function Analytics() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* YouTube */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '6px' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.t3, letterSpacing: '0.15em', textTransform: 'uppercase' }}>YouTube · Channel</div>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: T.t3, background: 'rgba(255,255,255,0.04)', border: `1px solid ${T.border}`, borderRadius: '3px', padding: '2px 8px' }}>Hardcoded — connect API to make live</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '16px' }}>
          <StatCard value="2.1K" label="Subscribers" accent={T.gold} />
          <StatCard value="310K" label="Total Views" accent={T.blue} />
          <StatCard value="23" label="Videos" accent={T.green} />
          <StatCard value="13.5K" label="Avg Views/Video" accent="#a78bfa" />
        </div>
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: '4px', padding: '18px' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: T.t3, letterSpacing: '0.12em', marginBottom: '12px' }}>TOP TRACKS — STREAM COUNT</div>
          <TopTracksChart />
        </div>
      </div>

      {/* Instagram */}
      <div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.t3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Instagram · Profile</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
          <StatCard value="4,497" label="Followers" accent={T.gold} />
          <StatCard value="—" label="Posts" accent={T.blue} />
          <StatCard value="—" label="Avg Likes" accent={T.green} />
          <StatCard value="—" label="Eng. Rate" accent={T.red} />
        </div>
      </div>

      {/* Growth */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${T.blue}`, borderRadius: '4px', padding: '18px' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: T.t3, letterSpacing: '0.12em', marginBottom: '12px' }}>SPOTIFY MONTHLY LISTENERS — 6 MONTH GROWTH (ESTIMATED)</div>
        <GrowthLineChart />
      </div>

      {/* Connect API CTA */}
      <div style={{ background: 'rgba(79,124,255,0.04)', border: '1px solid rgba(79,124,255,0.15)', borderRadius: '4px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: T.t1, marginBottom: '3px' }}>Connect APIs to make this live</div>
          <div style={{ fontSize: '0.78rem', color: T.t2 }}>YouTube Data API v3 + Instagram Graph API. See README for setup.</div>
        </div>
        <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" style={{
          fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: T.blue,
          background: 'rgba(79,124,255,0.1)', border: '1px solid rgba(79,124,255,0.25)',
          borderRadius: '4px', padding: '7px 14px', textDecoration: 'none',
          transition: 'all 0.15s', flexShrink: 0,
        }}>
          Get API Key →
        </a>
      </div>
    </div>
  );
}
