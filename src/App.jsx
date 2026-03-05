import React, { useState } from 'react';
import AgentPanel from './components/AgentPanel';
import Overview from './tabs/Overview';
import Content from './tabs/Content';
import System from './tabs/System';
import Analytics from './tabs/Analytics';
import Revenue from './tabs/Revenue';

const TABS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'content',   label: 'Content' },
  { id: 'system',    label: 'System' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'revenue',   label: 'Revenue' },
];

const TAB_COMPONENTS = {
  overview:  Overview,
  content:   Content,
  system:    System,
  analytics: Analytics,
  revenue:   Revenue,
};

const STATS = [
  { label: 'Spotify', value: '16,012' },
  { label: 'Top Track', value: '140K' },
  { label: 'Followers', value: '4.5K' },
];

const S = {
  gold: '#c9a84c',
  t1: '#f0ece4',
  t2: '#888',
  t3: '#444',
  surface: '#0e0e1a',
  border: 'rgba(255,255,255,0.06)',
};

export default function App() {
  const [tab, setTab] = useState('overview');
  const ActiveTab = TAB_COMPONENTS[tab];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
        borderBottom: `1px solid ${S.border}`,
        background: 'rgba(14,14,26,0.8)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        flexWrap: 'wrap',
        gap: '10px',
      }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.2rem', color: S.t1, letterSpacing: '-0.01em' }}>
          MAIZU <span style={{ color: S.t3, fontWeight: 700 }}>OS</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {STATS.map(s => (
            <div key={s.label} style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.62rem',
              color: S.t2,
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${S.border}`,
              borderRadius: '20px',
              padding: '4px 12px',
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
            }}>
              <span style={{ color: S.t3 }}>{s.label}</span>
              <span style={{ color: S.gold }}>{s.value}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Main layout */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: '24px',
        padding: '24px 32px',
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
        alignItems: 'start',
      }}>
        {/* Left column */}
        <div style={{ minWidth: 0 }}>
          {/* Tab nav */}
          <nav style={{
            display: 'flex',
            gap: '4px',
            marginBottom: '24px',
            padding: '4px',
            background: S.surface,
            border: `1px solid ${S.border}`,
            borderRadius: '6px',
            width: 'fit-content',
            flexWrap: 'wrap',
          }}>
            {TABS.map(t => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.05em',
                    fontWeight: active ? 700 : 400,
                    color: active ? '#07070f' : S.t2,
                    background: active ? S.gold : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '7px 14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    whiteSpace: 'nowrap',
                    outline: 'none',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = S.t1; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = S.t2; }}
                >
                  {t.label}
                </button>
              );
            })}
          </nav>

          {/* Tab content */}
          <div key={tab} className="fade-in">
            <ActiveTab />
          </div>
        </div>

        {/* Right column — AI Panel */}
        <div style={{
          position: 'sticky',
          top: '73px',
          height: 'calc(100vh - 73px - 48px)',
        }}>
          <AgentPanel />
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 360px"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="position: sticky"][style*="top: 73px"] {
            position: static !important;
            height: auto !important;
          }
          header { padding: 12px 20px !important; }
          div[style*="padding: 24px 32px"] { padding: 16px 20px !important; }
        }
      `}</style>
    </div>
  );
}
