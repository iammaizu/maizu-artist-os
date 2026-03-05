import React from 'react';
import { Card, SectionLabel, ActionList, TagBadge, HighlightBox } from '../components/ui';

const ROADMAP = [
  { quarter: 'Q1', months: 'Jan–Mar', focus: 'Foundation', items: ['Establish release schedule (2/month)', 'Set up BeatStars catalog (10 beats)', 'Launch TikTok + IG Reels consistently', 'Define visual brand identity'], color: '#c9a84c' },
  { quarter: 'Q2', months: 'Apr–Jun', focus: 'Growth', items: ['Hit 25K monthly listeners', 'Release Tamil EP (5 tracks)', 'Start YouTube Shorts strategy', 'First sync licensing pitch'], color: '#5078ff' },
  { quarter: 'Q3', months: 'Jul–Sep', focus: 'Scale', items: ['50K monthly listeners target', 'Collab with Tamil artists', 'Google Ads campaign for top track', 'Build email list (500+)'], color: '#3ecf8e' },
  { quarter: 'Q4', months: 'Oct–Dec', focus: 'Monetise', items: ['Full revenue system active', 'Live performance / DJ set', 'Year-end Tamil hits remix', 'Plan 2026 strategy'], color: '#ff4d6d' },
];

const POSITIONING = [
  'Night-time Tamil producer for the diaspora',
  'Bridge between classical Tamil emotion and trap/electronic energy',
  'The producer who soundtracks your 2AM gym session',
  'Authentic Tamil culture — not watered-down fusion',
];

const NICHE = [
  { name: 'Tamil Hip-Hop Fusion', density: 'Low competition, high cultural pull', badge: 'SWEET SPOT', color: '#3ecf8e' },
  { name: 'Tamil Remixes / Mashups', density: 'High demand (proven: 140K+ streams)', badge: 'PROVEN', color: '#c9a84c' },
  { name: 'Study / Focus Beats', density: 'Algorithm-friendly, passive growth', badge: 'EXPAND', color: '#5078ff' },
  { name: 'Workout / Gym Tamil', density: 'Underserved niche, personal brand fit', badge: 'UNIQUE', color: '#ff4d6d' },
];

export default function Strategy() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Positioning */}
      <HighlightBox variant="gold">
        <SectionLabel>Core Positioning Statement</SectionLabel>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#e8e0d4', lineHeight: 1.4, marginBottom: '1rem' }}>
          "The nocturnal Tamil producer — where ancient emotion meets modern sound."
        </h2>
        <ActionList items={POSITIONING} />
      </HighlightBox>

      {/* 12-Month Roadmap */}
      <div>
        <SectionLabel>12-Month Roadmap</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {ROADMAP.map((q) => (
            <Card key={q.quarter} style={{ borderLeft: `3px solid ${q.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: q.color }}>{q.quarter}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#8a8070' }}>{q.months}</div>
                </div>
                <TagBadge variant={q.color === '#c9a84c' ? 'gold' : q.color === '#5078ff' ? 'blue' : q.color === '#3ecf8e' ? 'green' : 'red'}>
                  {q.focus}
                </TagBadge>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {q.items.map((item, i) => (
                  <li key={i} style={{ fontSize: '0.8rem', color: '#e8e0d4', display: 'flex', gap: '0.5rem', lineHeight: 1.4 }}>
                    <span style={{ color: q.color, flexShrink: 0 }}>·</span> {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Niche Map */}
      <div>
        <SectionLabel>Niche Map</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {NICHE.map((n, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#0f0f1c',
                border: '1px solid #1e1e2e',
                borderRadius: '8px',
                padding: '1rem 1.25rem',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#e8e0d4', marginBottom: '0.2rem' }}>{n.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#8a8070' }}>{n.density}</div>
              </div>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: n.color,
                  background: `${n.color}18`,
                  border: `1px solid ${n.color}44`,
                  padding: '0.25rem 0.6rem',
                  borderRadius: '4px',
                }}
              >
                {n.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Metrics Targets */}
      <Card variant="blue">
        <SectionLabel>2025 Milestone Targets</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
          {[
            { metric: '50K', label: 'Monthly Listeners' },
            { metric: '10K', label: 'Spotify Followers' },
            { metric: '5K', label: 'IG/TikTok Followers' },
            { metric: '$500/mo', label: 'Beat Sales Revenue' },
          ].map((m, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0.75rem', background: 'rgba(80,120,255,0.05)', borderRadius: '6px', border: '1px solid rgba(80,120,255,0.15)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '1.4rem', fontWeight: 700, color: '#5078ff' }}>{m.metric}</div>
              <div style={{ fontSize: '0.75rem', color: '#8a8070', marginTop: '0.25rem' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
