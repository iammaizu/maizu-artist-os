import React from 'react';

const T = { t1: '#f0ece4', t2: '#888', t3: '#444', gold: '#c9a84c', blue: '#4f7cff', green: '#3ecf8e', red: '#ff4d6d', surface: '#0e0e1a', border: 'rgba(255,255,255,0.06)' };

function Tag({ label, color = T.gold }) {
  return (
    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.1em', color, background: `${color}15`, border: `1px solid ${color}30`, borderRadius: '3px', padding: '2px 8px' }}>
      {label}
    </span>
  );
}

function StatCard({ value, label, accent = T.gold }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${accent}`, borderRadius: '4px', padding: '18px 20px' }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: accent, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.t2, marginTop: '5px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

function ListCard({ title, items, accent }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${accent}`, borderRadius: '4px', padding: '20px' }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.82rem', color: T.t1, lineHeight: 1.5 }}>
            <span style={{ color: accent, flexShrink: 0, marginTop: '2px', fontSize: '0.7rem' }}>→</span>{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PriorityCard({ n, title, desc, color }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: '4px', padding: '20px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-8px', right: '12px', fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '4.5rem', color, opacity: 0.06, lineHeight: 1, userSelect: 'none' }}>{n}</div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color, letterSpacing: '0.12em', marginBottom: '6px' }}>0{n}</div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: T.t1, marginBottom: '6px' }}>{title}</div>
      <div style={{ fontSize: '0.8rem', color: T.t2, lineHeight: 1.55 }}>{desc}</div>
    </div>
  );
}

export default function Overview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Artist card */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${T.gold}`, borderRadius: '4px', padding: '24px' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: T.t3, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '6px' }}>Artist Profile</div>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '2.5rem', color: T.t1, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}>MAIZU</h1>
        <div style={{ fontSize: '0.82rem', color: T.t2, marginBottom: '14px' }}>Tamil Music Producer · IT Professional · Nocturnal</div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <Tag label="PRODUCER" color={T.gold} />
          <Tag label="TAMIL MUSIC" color={T.blue} />
          <Tag label="IT PRO" color={T.t2} />
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
        <StatCard value="16K" label="Monthly Listeners" accent={T.gold} />
        <StatCard value="140K" label="Top Track Streams" accent={T.blue} />
        <StatCard value="4.5K" label="Followers" accent={T.green} />
        <StatCard value="18+" label="Tracks Released" accent="#a78bfa" />
      </div>

      {/* Strengths / Gaps */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
        <ListCard title="Strengths" accent={T.green} items={[
          'Bilingual production — Tamil + mainstream',
          'Proven viral potential: 140K+ streams on mashup',
          'IT background → data-driven growth mindset',
          'Multi-DAW workflow: Logic + Ableton',
          'AI-augmented production via Suno AI',
          'Consistent discipline: gym + 9-5 + music',
        ]} />
        <ListCard title="Gaps to Close" accent={T.red} items={[
          'No consistent short-form video content',
          'BeatStars catalog not fully monetised',
          'No email list or direct fan channel',
          'YouTube SEO underutilised',
          'Release cadence not yet consistent',
        ]} />
      </div>

      {/* Priorities */}
      <div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.t3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Top 3 Priorities</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          <PriorityCard n={1} color={T.gold} title="2 Drops / Month" desc="Minimum release cadence. One main track + one remix or beat snippet per month." />
          <PriorityCard n={2} color={T.blue} title="Short-Form Video" desc="3× weekly Reels/TikTok. Studio BTS, hook breakdowns, Tamil producer POV." />
          <PriorityCard n={3} color={T.green} title="BeatStars Revenue" desc="Upload 10 exclusive beats. Activate $29–$99 lease pricing immediately." />
        </div>
      </div>
    </div>
  );
}
