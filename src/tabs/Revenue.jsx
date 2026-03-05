import React, { useState } from 'react';

const T = { t1: '#f0ece4', t2: '#888', t3: '#444', gold: '#c9a84c', blue: '#4f7cff', green: '#3ecf8e', red: '#ff4d6d', amber: '#f59e0b', surface: '#0e0e1a', border: 'rgba(255,255,255,0.06)' };

const STATUS_STYLE = {
  ACTIVE:  { color: T.green,  bg: 'rgba(62,207,142,0.1)',  border: 'rgba(62,207,142,0.25)' },
  BUILD:   { color: T.gold,   bg: 'rgba(201,168,76,0.1)',  border: 'rgba(201,168,76,0.25)' },
  FUTURE:  { color: T.t3,     bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)' },
};

const STREAMS = [
  { name: 'Beat Licensing — BeatStars', desc: 'Lease $29–$99 · Exclusive $299+', potential: 'HIGH', status: 'BUILD' },
  { name: 'Streaming Royalties', desc: 'Spotify + Apple — grows with listeners', potential: 'MED', status: 'ACTIVE' },
  { name: 'YouTube Ad Revenue', desc: 'Monetise at 1K subs + 4K watch hours', potential: 'MED', status: 'BUILD' },
  { name: 'Sync Licensing', desc: 'Tamil film/web series placements $500–5K', potential: 'HIGH', status: 'FUTURE' },
  { name: 'Custom Commissions', desc: 'Bespoke production for Tamil artists $300–1K', potential: 'HIGH', status: 'FUTURE' },
  { name: 'Google Ads ROI', desc: '$5/day → compounding stream growth', potential: 'MED', status: 'ACTIVE' },
  { name: 'Live DJ Sets', desc: 'Tamil cultural events $200–1K per gig', potential: 'MED', status: 'FUTURE' },
];

const SPRINT = [
  { task: 'Create BeatStars Pro account + upload 5 beats', done: false },
  { task: 'Run Google Ads campaign on top track ($5/day)', done: false },
  { task: 'Pitch to Spotify editorial 7 days before next release', done: false },
  { task: 'DM 10 Tamil artists for collab / beat placement', done: false },
];

const ESTIMATES = [
  { period: 'Month 1', est: '$50–100', note: 'BeatStars launch' },
  { period: 'Month 2', est: '$100–200', note: 'Streams + beats' },
  { period: 'Month 3', est: '$200–400', note: 'First commissions' },
  { period: 'Month 6', est: '$500–1K', note: 'Full system active' },
];

export default function Revenue() {
  const [checked, setChecked] = useState({});
  const toggle = i => setChecked(c => ({ ...c, [i]: !c[i] }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Streams */}
      <div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.t3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>7 Revenue Streams</div>
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: '4px', overflow: 'hidden' }}>
          {STREAMS.map((s, i) => {
            const ss = STATUS_STYLE[s.status];
            return (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderBottom: i < STREAMS.length - 1 ? `1px solid ${T.border}` : 'none', gap: '12px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: T.t1, fontWeight: 400, marginBottom: '2px' }}>{s.name}</div>
                  <div style={{ fontSize: '0.72rem', color: T.t3 }}>{s.desc}</div>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: s.potential === 'HIGH' ? T.green : T.t2, background: s.potential === 'HIGH' ? 'rgba(62,207,142,0.08)' : 'rgba(255,255,255,0.04)', border: `1px solid ${s.potential === 'HIGH' ? 'rgba(62,207,142,0.2)' : T.border}`, borderRadius: '3px', padding: '2px 7px' }}>{s.potential}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: ss.color, background: ss.bg, border: `1px solid ${ss.border}`, borderRadius: '3px', padding: '2px 7px' }}>{s.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sprint + Estimates side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
        {/* 30-Day Sprint */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${T.gold}`, borderRadius: '4px', padding: '20px' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.gold, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>30-Day Sprint</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {SPRINT.map((s, i) => (
              <div key={i} onClick={() => toggle(i)} style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                <div style={{
                  width: '16px', height: '16px', borderRadius: '3px', flexShrink: 0, marginTop: '1px',
                  border: `1px solid ${checked[i] ? T.gold : 'rgba(255,255,255,0.15)'}`,
                  background: checked[i] ? 'rgba(201,168,76,0.2)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.65rem', color: T.gold,
                }}>
                  {checked[i] && '✓'}
                </div>
                <span style={{ fontSize: '0.8rem', color: checked[i] ? T.t3 : T.t1, lineHeight: 1.5, textDecoration: checked[i] ? 'line-through' : 'none', transition: 'all 0.15s' }}>{s.task}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Estimates */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${T.green}`, borderRadius: '4px', padding: '20px' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.green, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Revenue Projection</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {ESTIMATES.map((e, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < ESTIMATES.length - 1 ? `1px solid rgba(255,255,255,0.04)` : 'none' }}>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: T.t3 }}>{e.period}</div>
                  <div style={{ fontSize: '0.72rem', color: T.t2, marginTop: '1px' }}>{e.note}</div>
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', color: T.green }}>{e.est}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
