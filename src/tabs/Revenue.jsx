import React from 'react';
import { Card, SectionLabel, ActionList, RevenueItem, TagBadge, HighlightBox } from '../components/ui';

const REVENUE_STREAMS = [
  {
    name: 'Beat Licensing (BeatStars)',
    description: 'Lease: $29–$99. Exclusive: $250–$500. Upload 10 beats minimum. Focus on Tamil hip-hop and cinematic genres.',
    potential: 'HIGH',
    status: 'SETUP',
  },
  {
    name: 'Streaming Royalties (Spotify/Apple)',
    description: 'Currently generating passive income from 16K+ monthly listeners. Grows with more releases and playlist placement.',
    potential: 'MED',
    status: 'ACTIVE',
  },
  {
    name: 'YouTube Ad Revenue',
    description: 'Monetise at 1,000 subs + 4,000 watch hours. CPM is high for music content. Beats + tutorials both earn.',
    potential: 'MED',
    status: 'PLANNED',
  },
  {
    name: 'Sync Licensing',
    description: 'Pitch Tamil beats to Tamil film/web series production houses. One placement = $500–$5,000+. Long-tail opportunity.',
    potential: 'HIGH',
    status: 'PLANNED',
  },
  {
    name: 'Custom Beat Commissions',
    description: 'Offer bespoke production for Tamil artists ($300–$1,000/track). Market via Twitter/X, DM outreach, and Fiverr.',
    potential: 'HIGH',
    status: 'PLANNED',
  },
  {
    name: 'Google Ads (Paid Promotion ROI)',
    description: 'Invest $5/day in Google/YouTube Ads to grow streams. Treat as a marketing budget that compounds over time.',
    potential: 'MED',
    status: 'ACTIVE',
  },
  {
    name: 'Live DJ Sets / Events',
    description: 'Local Tamil cultural events, college fests, diaspora parties. $200–$1,000 per gig once brand is established.',
    potential: 'MED',
    status: 'PLANNED',
  },
];

const BEATSTARS_ACTIONS = [
  'Create BeatStars Pro account ($19.99/mo — worth it for unlimited uploads)',
  'Upload 10 beats in first week — Tamil, cinematic, dark trap genres',
  'Price leases at: Basic $29 / Premium $69 / Exclusive $299',
  'Add professional beat cover art (dark aesthetic, consistent branding)',
  'Tag every beat: "Tamil beat", "Kollywood type beat", "Tamil hip hop", "dark Tamil"',
  'Link BeatStars to your Instagram bio and Spotify artist profile',
  'Run a launch discount: "First 48hrs — all leases $19" to drive initial sales',
  'Activate BeatStars marketing tools — email your buyers automatically',
];

const SPRINT_30 = [
  { day: '1–3', task: 'Set up BeatStars Pro + upload 5 beats', badge: 'REVENUE', color: '#c9a84c' },
  { day: '4–7', task: 'Release first track of month + pitch to Spotify editorial', badge: 'RELEASE', color: '#5078ff' },
  { day: '8–10', task: 'Launch Google Ads campaign — $5/day on top track', badge: 'ADS', color: '#ff4d6d' },
  { day: '11–14', task: 'Upload 5 more beats to BeatStars + run launch discount', badge: 'REVENUE', color: '#c9a84c' },
  { day: '15–17', task: 'Second track drop + 3 Reels promoting it', badge: 'RELEASE', color: '#5078ff' },
  { day: '18–21', task: 'DM 10 Tamil artists for beat collab / placement offers', badge: 'OUTREACH', color: '#3ecf8e' },
  { day: '22–25', task: 'Review Ads performance — scale winning creative', badge: 'ADS', color: '#ff4d6d' },
  { day: '26–30', task: 'Month wrap: track all revenue, set next month targets', badge: 'REVIEW', color: '#8a8070' },
];

export default function Revenue() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Revenue Summary */}
      <HighlightBox variant="gold">
        <SectionLabel>Revenue Architecture</SectionLabel>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#e8e0d4', marginBottom: '0.75rem' }}>
          7 Active Revenue Streams — Build them in parallel, not sequentially.
        </h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <TagBadge variant="green">2 Active</TagBadge>
          <TagBadge variant="gold">1 Setup</TagBadge>
          <TagBadge variant="gray">4 Planned</TagBadge>
        </div>
      </HighlightBox>

      {/* Revenue Streams List */}
      <Card>
        <SectionLabel>Revenue Streams</SectionLabel>
        {REVENUE_STREAMS.map((r, i) => (
          <RevenueItem key={i} {...r} />
        ))}
      </Card>

      {/* BeatStars Action Plan */}
      <Card variant="gold">
        <SectionLabel>BeatStars Activation Plan</SectionLabel>
        <ActionList items={BEATSTARS_ACTIONS} />
      </Card>

      {/* 30-Day Sprint */}
      <div>
        <SectionLabel>30-Day Revenue Sprint</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {SPRINT_30.map((s, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: '#0f0f1c',
                border: '1px solid #1e1e2e',
                borderRadius: '8px',
                padding: '0.85rem 1.25rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#8a8070', width: '50px', flexShrink: 0 }}>
                D{s.day}
              </div>
              <div style={{ flex: 1, fontSize: '0.85rem', color: '#e8e0d4' }}>{s.task}</div>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: s.color,
                  background: `${s.color}18`,
                  border: `1px solid ${s.color}44`,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  flexShrink: 0,
                }}
              >
                {s.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Projection */}
      <Card variant="green" style={{ borderLeft: '3px solid #3ecf8e' }}>
        <SectionLabel>6-Month Revenue Projection</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
          {[
            { month: 'Month 1', est: '$50–100', note: 'BeatStars launch' },
            { month: 'Month 2', est: '$100–200', note: 'Streams growing' },
            { month: 'Month 3', est: '$200–350', note: 'First commissions' },
            { month: 'Month 4', est: '$300–500', note: 'YouTube monetised' },
            { month: 'Month 5', est: '$400–700', note: 'Sync + beats scale' },
            { month: 'Month 6', est: '$500–1,000', note: 'Full system active' },
          ].map((p, i) => (
            <div key={i} style={{ background: 'rgba(62,207,142,0.05)', border: '1px solid rgba(62,207,142,0.15)', borderRadius: '6px', padding: '0.75rem', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: '#8a8070', marginBottom: '0.35rem' }}>{p.month}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#3ecf8e', marginBottom: '0.2rem' }}>{p.est}</div>
              <div style={{ fontSize: '0.68rem', color: '#8a8070' }}>{p.note}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
