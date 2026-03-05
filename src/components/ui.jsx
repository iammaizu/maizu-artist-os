import React from 'react';

// ─── SectionLabel ────────────────────────────────────────────────────────────
export function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={className}
      style={{
        fontFamily: "'Space Mono', monospace",
        color: '#c9a84c',
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
      }}
    >
      {children}
    </p>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
const BORDER_COLORS = {
  gold: '#c9a84c',
  blue: '#5078ff',
  green: '#3ecf8e',
  red: '#ff4d6d',
  none: 'transparent',
};

export function Card({ children, variant = 'none', className = '', style = {} }) {
  return (
    <div
      className={className}
      style={{
        background: '#0f0f1c',
        border: '1px solid #1e1e2e',
        borderLeft: variant !== 'none' ? `3px solid ${BORDER_COLORS[variant]}` : '1px solid #1e1e2e',
        borderRadius: '8px',
        padding: '1.25rem',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── TagBadge ─────────────────────────────────────────────────────────────────
const BADGE_STYLES = {
  gold:  { background: 'rgba(201,168,76,0.15)',  color: '#c9a84c',  border: '1px solid rgba(201,168,76,0.3)' },
  blue:  { background: 'rgba(80,120,255,0.15)',  color: '#5078ff',  border: '1px solid rgba(80,120,255,0.3)' },
  green: { background: 'rgba(62,207,142,0.15)', color: '#3ecf8e', border: '1px solid rgba(62,207,142,0.3)' },
  red:   { background: 'rgba(255,77,109,0.15)',  color: '#ff4d6d',  border: '1px solid rgba(255,77,109,0.3)' },
  gray:  { background: 'rgba(138,128,112,0.15)', color: '#8a8070', border: '1px solid rgba(138,128,112,0.3)' },
};

export function TagBadge({ children, variant = 'gray' }) {
  return (
    <span
      style={{
        ...BADGE_STYLES[variant],
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.6rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '0.2rem 0.55rem',
        borderRadius: '4px',
        display: 'inline-block',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
}

// ─── ActionList ───────────────────────────────────────────────────────────────
export function ActionList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: '#e8e0d4', lineHeight: 1.5 }}>
          <span style={{ color: '#c9a84c', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', marginTop: '0.1rem', flexShrink: 0 }}>→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── HighlightBox ─────────────────────────────────────────────────────────────
export function HighlightBox({ children, variant = 'gold', style = {} }) {
  const colors = {
    gold: { bg: 'rgba(201,168,76,0.08)', border: 'rgba(201,168,76,0.25)' },
    blue: { bg: 'rgba(80,120,255,0.08)', border: 'rgba(80,120,255,0.25)' },
  };
  return (
    <div
      style={{
        background: colors[variant].bg,
        border: `1px solid ${colors[variant].border}`,
        borderRadius: '8px',
        padding: '1rem 1.25rem',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── PriorityBox ──────────────────────────────────────────────────────────────
export function PriorityBox({ number, title, description, color = '#c9a84c' }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#0f0f1c', border: '1px solid #1e1e2e', borderRadius: '8px', padding: '1.25rem' }}>
      <div
        style={{
          position: 'absolute',
          top: '-0.5rem',
          right: '0.5rem',
          fontFamily: "'Syne', sans-serif",
          fontSize: '5rem',
          fontWeight: 800,
          color: color,
          opacity: 0.07,
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        {number}
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", color, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
          #{number}
        </div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#e8e0d4', marginBottom: '0.5rem' }}>{title}</div>
        <div style={{ fontSize: '0.83rem', color: '#8a8070', lineHeight: 1.55 }}>{description}</div>
      </div>
    </div>
  );
}

// ─── MetricBar ────────────────────────────────────────────────────────────────
export function MetricBar({ label, value, percent, color = '#c9a84c' }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: '#e8e0d4' }}>{label}</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color }}>{value}</span>
      </div>
      <div style={{ height: '4px', background: '#1e1e2e', borderRadius: '2px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${percent}%`,
            background: color,
            borderRadius: '2px',
            transition: 'width 1s ease-out',
          }}
        />
      </div>
    </div>
  );
}

// ─── HookCard ─────────────────────────────────────────────────────────────────
export function HookCard({ platform, hook, color = '#c9a84c' }) {
  return (
    <div style={{ background: '#0f0f1c', border: '1px solid #1e1e2e', borderRadius: '8px', padding: '1rem 1.25rem' }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        {platform}
      </div>
      <div style={{ fontStyle: 'italic', fontSize: '0.88rem', color: '#e8e0d4', lineHeight: 1.6 }}>
        "{hook}"
      </div>
    </div>
  );
}

// ─── PlatformRow ──────────────────────────────────────────────────────────────
export function PlatformRow({ icon, name, description, color = '#c9a84c' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.85rem 0', borderBottom: '1px solid #1e1e2e' }}>
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: `rgba(${color === '#c9a84c' ? '201,168,76' : '80,120,255'},0.15)`,
          border: `1px solid ${color}33`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#e8e0d4', marginBottom: '0.2rem' }}>{name}</div>
        <div style={{ fontSize: '0.82rem', color: '#8a8070', lineHeight: 1.5 }}>{description}</div>
      </div>
    </div>
  );
}

// ─── ScheduleBlock ────────────────────────────────────────────────────────────
export function ScheduleBlock({ time, task, sub, color = '#c9a84c' }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '0.6rem 0', borderBottom: '1px solid #1e1e2e11' }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color, width: '80px', flexShrink: 0, paddingTop: '0.1rem' }}>
        {time}
      </div>
      <div>
        <div style={{ fontSize: '0.85rem', color: '#e8e0d4', fontWeight: 500 }}>{task}</div>
        {sub && <div style={{ fontSize: '0.75rem', color: '#8a8070', marginTop: '0.15rem' }}>{sub}</div>}
      </div>
    </div>
  );
}

// ─── WeekGrid ─────────────────────────────────────────────────────────────────
export function WeekGrid({ days }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '0.5rem',
        overflowX: 'auto',
      }}
    >
      {days.map((day, i) => (
        <div
          key={i}
          style={{
            background: day.highlight ? 'rgba(201,168,76,0.06)' : '#0f0f1c',
            border: day.highlight ? '1px solid rgba(201,168,76,0.2)' : '1px solid #1e1e2e',
            borderRadius: '8px',
            padding: '0.85rem 0.6rem',
            minWidth: '110px',
          }}
        >
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: day.highlight ? '#c9a84c' : '#8a8070', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            {day.name}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {day.tasks.map((t, j) => (
              <li key={j} style={{ fontSize: '0.73rem', color: '#e8e0d4', lineHeight: 1.4 }}>· {t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ─── RevenueItem ──────────────────────────────────────────────────────────────
export function RevenueItem({ name, description, potential, status }) {
  const potentialVariant = { HIGH: 'green', MED: 'gold', LOW: 'gray' }[potential] || 'gray';
  const statusVariant = { ACTIVE: 'blue', SETUP: 'gold', PLANNED: 'gray' }[status] || 'gray';
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1rem 0', borderBottom: '1px solid #1e1e2e', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#e8e0d4', marginBottom: '0.25rem' }}>{name}</div>
        <div style={{ fontSize: '0.8rem', color: '#8a8070', lineHeight: 1.5 }}>{description}</div>
      </div>
      <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
        <TagBadge variant={potentialVariant}>{potential}</TagBadge>
        <TagBadge variant={statusVariant}>{status}</TagBadge>
      </div>
    </div>
  );
}
