import React, { useState } from 'react';
import Overview from './tabs/Overview';
import Strategy from './tabs/Strategy';
import Content from './tabs/Content';
import Brand from './tabs/Brand';
import System from './tabs/System';
import Growth from './tabs/Growth';
import Revenue from './tabs/Revenue';

const TABS = [
  { id: 'overview',  label: '01 Overview' },
  { id: 'strategy',  label: '02 Strategy' },
  { id: 'content',   label: '03 Content' },
  { id: 'brand',     label: '04 Brand' },
  { id: 'system',    label: '05 System' },
  { id: 'growth',    label: '06 Growth' },
  { id: 'revenue',   label: '07 Revenue' },
];

const TAB_COMPONENTS = {
  overview: Overview,
  strategy: Strategy,
  content:  Content,
  brand:    Brand,
  system:   System,
  growth:   Growth,
  revenue:  Revenue,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#080810',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* CSS Grid Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Radial Glow — Gold top-left */}
      <div
        style={{
          position: 'fixed',
          top: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Radial Glow — Blue bottom-right */}
      <div
        style={{
          position: 'fixed',
          bottom: '-20%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,120,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main Layout */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Top Header Bar */}
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 0 0',
            borderBottom: '1px solid #1e1e2e',
            marginBottom: '0',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#c9a84c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
              Artist Management OS
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 800, color: '#e8e0d4', letterSpacing: '-0.02em' }}>
              MAIZU
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#8a8070', background: '#0f0f1c', border: '1px solid #1e1e2e', borderRadius: '4px', padding: '0.3rem 0.6rem' }}>
              16,012 listeners
            </div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#8a8070', background: '#0f0f1c', border: '1px solid #1e1e2e', borderRadius: '4px', padding: '0.3rem 0.6rem' }}>
              v1.0 · 2025
            </div>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav
          style={{
            display: 'flex',
            gap: '0',
            borderBottom: '1px solid #1e1e2e',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #c9a84c' : '2px solid transparent',
                  padding: '1rem 1.1rem',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: isActive ? '#c9a84c' : '#8a8070',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  outline: 'none',
                  marginBottom: '-1px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = '#e8e0d4';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = '#8a8070';
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Content Area */}
        <main style={{ padding: '2rem 0 4rem' }}>
          <ActiveComponent />
        </main>

        {/* Footer */}
        <footer
          style={{
            borderTop: '1px solid #1e1e2e',
            padding: '1.5rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#8a8070' }}>
            MAIZU Artist OS · Built for the nocturnal producer
          </span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#1e1e2e' }}>
            ///
          </span>
        </footer>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 700px) {
          nav button {
            padding: 0.75rem 0.7rem !important;
            font-size: 0.55rem !important;
          }
        }
      `}</style>
    </div>
  );
}
