import React from 'react';
import { Card, SectionLabel, ActionList, HookCard, PlatformRow, TagBadge } from '../components/ui';

const HOOKS = [
  { platform: 'TikTok', hook: 'POV: You discovered this Tamil producer at 2AM and your whole playlist changed forever', color: '#c9a84c' },
  { platform: 'Instagram Reels', hook: 'The beat that made 140,000 people feel something they didn\'t know they were missing', color: '#5078ff' },
  { platform: 'YouTube Shorts', hook: 'How I made a Tamil banger in Logic Pro in one hour (full breakdown)', color: '#3ecf8e' },
  { platform: 'Spotify Pitch', hook: 'Where Ilayaraja meets Travis Scott — late-night Tamil beats for the diaspora soul', color: '#ff4d6d' },
  { platform: 'TikTok', hook: 'This Tamil producer works a 9-5 and still drops heat — here\'s the system', color: '#c9a84c' },
  { platform: 'Instagram Reels', hook: 'I sampled a 30-year-old Tamil classic and made this [before/after]', color: '#5078ff' },
];

const PLATFORMS = [
  { icon: '🎵', name: 'TikTok / IG Reels', description: '3× per week. Studio process videos, beat breakdowns, "Tamil producer life" POV content. Use trending sounds + Tamil audio.', color: '#c9a84c' },
  { icon: '▶', name: 'YouTube', description: 'Music videos, full beat tapes, "Making of" series (20–30 min). SEO: "Tamil beats", "Tamil hip hop instrumental", "Tamil lofi". Weekly upload.', color: '#ff4d6d' },
  { icon: '🎧', name: 'Spotify', description: 'Pitch 6 weeks in advance via Spotify for Artists. Target playlists: Tamil Hits, Desi Hip-Hop, Late Night Vibes. Maintain 2 releases/month.', color: '#3ecf8e' },
  { icon: '📸', name: 'Instagram (Static)', description: 'Weekly carousel: "5 Tamil beats you need to hear this week". Studio aesthetics, equipment shots, dark/moody visuals.', color: '#5078ff' },
];

const SERIES = [
  { title: 'MAIZU NIGHTS', desc: 'Weekly 60-sec preview of a beat in-progress. Posted at 10PM. Builds anticipation + consistency.', badge: 'TikTok · IG', color: '#c9a84c' },
  { title: 'ROOTS & DRUMS', desc: 'Tamil classical element + modern trap breakdown. Educational + culturally resonant. Great for shares.', badge: 'YouTube · IG', color: '#5078ff' },
  { title: 'THE PROCESS', desc: 'Time-lapse of a full beat from scratch. No talking, just music. ASMR-style for focus audiences.', badge: 'TikTok · YouTube', color: '#3ecf8e' },
  { title: '9-5 PRODUCER', desc: 'Honest content about balancing career + music. Relatable angle for working adults in the diaspora.', badge: 'IG · TikTok', color: '#ff4d6d' },
];

export default function Content() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Hook Templates */}
      <div>
        <SectionLabel>Hook Templates</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
          {HOOKS.map((h, i) => (
            <HookCard key={i} {...h} />
          ))}
        </div>
      </div>

      {/* Platform Strategy */}
      <Card variant="gold">
        <SectionLabel>Platform Strategy</SectionLabel>
        <div>
          {PLATFORMS.map((p, i) => (
            <PlatformRow key={i} {...p} />
          ))}
        </div>
      </Card>

      {/* Content Series */}
      <div>
        <SectionLabel>Content Series Ideas</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {SERIES.map((s, i) => (
            <Card key={i} style={{ borderLeft: `3px solid ${s.color}` }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#e8e0d4', marginBottom: '0.35rem' }}>{s.title}</div>
              <div style={{ fontSize: '0.82rem', color: '#8a8070', lineHeight: 1.55, marginBottom: '0.75rem' }}>{s.desc}</div>
              <TagBadge variant={s.color === '#c9a84c' ? 'gold' : s.color === '#5078ff' ? 'blue' : s.color === '#3ecf8e' ? 'green' : 'red'}>
                {s.badge}
              </TagBadge>
            </Card>
          ))}
        </div>
      </div>

      {/* Content Calendar Framework */}
      <Card variant="blue">
        <SectionLabel>Weekly Content Framework</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginTop: '0.5rem' }}>
          {[
            { day: 'MON', task: 'MAIZU NIGHTS beat preview', type: 'TikTok · IG' },
            { day: 'WED', task: 'ROOTS & DRUMS breakdown', type: 'YouTube Shorts' },
            { day: 'FRI', task: 'New track or collab drop', type: 'All platforms' },
            { day: 'SAT', task: '9-5 PRODUCER / vlog', type: 'IG · TikTok' },
            { day: 'SUN', task: 'THE PROCESS time-lapse', type: 'TikTok · YouTube' },
          ].map((c, i) => (
            <div key={i} style={{ background: 'rgba(80,120,255,0.05)', border: '1px solid rgba(80,120,255,0.15)', borderRadius: '6px', padding: '0.75rem' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: '#5078ff', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>{c.day}</div>
              <div style={{ fontSize: '0.8rem', color: '#e8e0d4', fontWeight: 500, marginBottom: '0.25rem' }}>{c.task}</div>
              <div style={{ fontSize: '0.7rem', color: '#8a8070' }}>{c.type}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
