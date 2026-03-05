import React from 'react';
import { Card, SectionLabel, ActionList, MetricBar, TagBadge, HighlightBox } from '../components/ui';

const ALGO_TIPS = [
  'Release consistently — Spotify algorithm rewards 2+ drops/month',
  'Pitch to editorial playlists 7 days before release via Spotify for Artists',
  'TikTok sounds: upload your beat as a TikTok sound — others using it = passive reach',
  'YouTube: post Shorts first → if it pops, expand to full video',
  'Cross-post every Reel to TikTok within 24hrs for double exposure',
  'IG saves > likes for algorithm — create "save-worthy" content (tips, breakdowns)',
  'Respond to ALL comments in first 2 hours after posting — signals engagement',
  'Collab tag strategy: tag 2 Tamil artists per post to tap their audience',
];

const AUDIENCE_PSYCHOLOGY = [
  { trigger: 'Identity', insight: 'Tamil diaspora wants music that validates who they are. Lead with cultural pride.', color: '#c9a84c' },
  { trigger: 'Aspiration', insight: 'The "9-5 producer" story is aspirational. Others in the same position will follow your journey.', color: '#5078ff' },
  { trigger: 'Discovery', insight: 'Niche audiences share aggressively because they feel they\'ve "found" something before others did.', color: '#3ecf8e' },
  { trigger: 'Nostalgia', insight: 'Tamil samples trigger deep emotional memory. Lead hooks with recognizable melodic phrases.', color: '#ff4d6d' },
];

const GOOGLE_ADS = [
  'Target: YouTube pre-roll for Tamil film soundtrack keywords (Kollywood, Tamil BGM)',
  'Audience: Tamil diaspora (UK, Canada, Singapore, UAE, USA) + ages 18–35',
  'Ad format: 30-sec non-skippable — use your most emotional hook in first 5 sec',
  'Budget: $5–10/day per campaign. Run for 14 days minimum before evaluating',
  'Retargeting: Anyone who watched 50%+ of your video gets served the next ad',
  'Conversion goal: Spotify profile visit or YouTube subscriber — track UTM links',
  'Creative tip: Show face in first 3 seconds — faces drive higher retention',
];

const MILESTONES = [
  { label: 'Monthly Listeners', value: '16,012 / 50,000', percent: 32, color: '#c9a84c' },
  { label: 'Spotify Followers', value: '4,497 / 10,000', percent: 45, color: '#5078ff' },
  { label: 'IG / TikTok Followers', value: '~500 / 5,000', percent: 10, color: '#3ecf8e' },
  { label: 'Beat Sales Revenue', value: '$0 / $500 mo', percent: 0, color: '#ff4d6d' },
  { label: 'Email List', value: '0 / 500', percent: 0, color: '#c9a84c' },
  { label: 'YouTube Subscribers', value: 'Est. 200 / 2,000', percent: 10, color: '#5078ff' },
];

export default function Growth() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Milestone Metric Bars */}
      <Card variant="gold">
        <SectionLabel>Milestone Tracker</SectionLabel>
        <div style={{ marginTop: '0.5rem' }}>
          {MILESTONES.map((m, i) => (
            <MetricBar key={i} {...m} />
          ))}
        </div>
      </Card>

      {/* Algorithm Strategy */}
      <Card variant="blue">
        <SectionLabel>Algorithm Strategy</SectionLabel>
        <ActionList items={ALGO_TIPS} />
      </Card>

      {/* Audience Psychology */}
      <div>
        <SectionLabel>Audience Psychology</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {AUDIENCE_PSYCHOLOGY.map((a, i) => (
            <div
              key={i}
              style={{
                background: '#0f0f1c',
                border: `1px solid ${a.color}33`,
                borderLeft: `3px solid ${a.color}`,
                borderRadius: '8px',
                padding: '1.1rem',
              }}
            >
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: a.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Trigger: {a.trigger}
              </div>
              <p style={{ fontSize: '0.82rem', color: '#e8e0d4', lineHeight: 1.55 }}>{a.insight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Google Ads Tips */}
      <Card variant="green" style={{ borderLeft: '3px solid #3ecf8e' }}>
        <SectionLabel>Google Ads Strategy</SectionLabel>
        <ActionList items={GOOGLE_ADS} />
      </Card>

      {/* Growth Hacks */}
      <HighlightBox variant="blue">
        <SectionLabel>Quick Growth Hacks</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
          {[
            { tip: 'Spotify Canvas', detail: 'Add 8-second looping video to every track — increases repeat listens by ~20%' },
            { tip: 'Playlist Pitching', detail: 'Submit to indie Tamil playlists on SubmitHub and Groover — $15–30 per campaign' },
            { tip: 'TikTok Sound Strategy', detail: 'Upload 15-sec hooks as TikTok sounds — create a simple trend challenge' },
            { tip: 'Discord Community', detail: 'Start a Tamil producers Discord — builds superfan base and collab pipeline' },
          ].map((h, i) => (
            <div key={i} style={{ background: 'rgba(80,120,255,0.06)', border: '1px solid rgba(80,120,255,0.15)', borderRadius: '6px', padding: '0.85rem' }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: '#5078ff', marginBottom: '0.3rem' }}>{h.tip}</div>
              <div style={{ fontSize: '0.78rem', color: '#8a8070', lineHeight: 1.5 }}>{h.detail}</div>
            </div>
          ))}
        </div>
      </HighlightBox>
    </div>
  );
}
