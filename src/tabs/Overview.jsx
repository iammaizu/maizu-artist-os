import React from 'react';
import { Card, SectionLabel, ActionList, PriorityBox, TagBadge, HighlightBox } from '../components/ui';

const stat = (label, value, sub) => ({ label, value, sub });

const STATS = [
  stat('Monthly Listeners', '16,012', 'Spotify'),
  stat('Top Track Streams', '140,238', 'Vethalaiya × Mainaru Mashup'),
  stat('Followers', '4,497', 'Spotify'),
  stat('Tracks Released', '18+', 'Across platforms'),
];

const STRENGTHS = [
  'Bilingual production (Tamil + mainstream)',
  'Viral mashup potential — proven with 140K+ streams',
  'IT background → data-driven growth mindset',
  'Consistent discipline (gym + 9-5 + music)',
  'Multi-DAW workflow (Logic + Ableton)',
  'AI-augmented production via Suno AI',
];

const GAPS = [
  'No consistent release cadence yet',
  'Limited short-form video content (Reels/TikTok)',
  'BeatStars catalog not fully monetised',
  'No email list or direct fan channel',
  'YouTube SEO underutilised',
];

const PRIORITIES = [
  { number: 1, title: '2 Drops / Month', description: 'Minimum release cadence. One main track + one remix or beat tape snippet to keep algorithm momentum.', color: '#c9a84c' },
  { number: 2, title: 'Short-Form Video', description: 'Post 3× weekly Reels/TikTok. Behind-the-scenes studio, hook breakdowns, and mood edits.', color: '#5078ff' },
  { number: 3, title: 'BeatStars Revenue', description: 'Upload 10 exclusive beats, price $29–$99 leases. Activate exclusive licensing for sync deals.', color: '#3ecf8e' },
];

export default function Overview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Artist Header */}
      <HighlightBox variant="gold">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <SectionLabel>Artist Profile</SectionLabel>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '2.8rem', fontWeight: 800, color: '#e8e0d4', letterSpacing: '-0.02em', lineHeight: 1 }}>MAIZU</h1>
            <p style={{ color: '#8a8070', fontSize: '0.88rem', marginTop: '0.4rem' }}>Tamil Music Producer · IT Professional · Chennai / Global</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <TagBadge variant="gold">Producer</TagBadge>
            <TagBadge variant="blue">Tamil Music</TagBadge>
            <TagBadge variant="gray">IT Pro</TagBadge>
          </div>
        </div>
      </HighlightBox>

      {/* Stats Row */}
      <div>
        <SectionLabel>Current Metrics</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
          {STATS.map((s, i) => (
            <Card key={i} variant={i === 0 ? 'gold' : i === 1 ? 'blue' : 'none'}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '1.5rem', fontWeight: 700, color: i < 2 ? '#c9a84c' : '#e8e0d4', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#e8e0d4', marginTop: '0.4rem' }}>{s.label}</div>
              <div style={{ fontSize: '0.72rem', color: '#8a8070', marginTop: '0.2rem' }}>{s.sub}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Strengths + Gaps */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        <Card variant="green">
          <SectionLabel>Strengths</SectionLabel>
          <ActionList items={STRENGTHS} />
        </Card>
        <Card variant="red">
          <SectionLabel>Gaps to Close</SectionLabel>
          <ActionList items={GAPS} />
        </Card>
      </div>

      {/* Priority Boxes */}
      <div>
        <SectionLabel>Top 3 Priorities</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {PRIORITIES.map((p, i) => (
            <PriorityBox key={i} {...p} />
          ))}
        </div>
      </div>

      {/* Toolkit */}
      <Card>
        <SectionLabel>Current Toolkit</SectionLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['Logic Pro', 'Ableton Live', 'Splice', 'Suno AI', 'Google Ads', 'BeatStars'].map((tool) => (
            <TagBadge key={tool} variant="blue">{tool}</TagBadge>
          ))}
        </div>
      </Card>
    </div>
  );
}
