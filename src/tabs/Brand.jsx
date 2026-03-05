import React from 'react';
import { Card, SectionLabel, ActionList, TagBadge, HighlightBox } from '../components/ui';

const VISUAL = [
  'Colour palette: Deep navy (#080810) + gold (#c9a84c) + electric blue (#5078ff)',
  'Typography: Syne (headers) + Space Mono (labels) — brutalist-minimal',
  'Photography: Dark studio, dramatic side lighting, smoke/haze aesthetics',
  'Motifs: Grid lines, vinyl textures, South Indian temple geometry abstracted',
  'Logo: Wordmark "MAIZU" in Syne ExtraBold, optionally + waveform glyph',
  'Cover art: Always dark background, minimal text, motion-blur or grain texture',
];

const PERSONALITY = [
  { trait: 'Nocturnal', desc: 'Content drops after 9PM. References late nights, 2AM sessions, darkness as creative space.' },
  { trait: 'Disciplined', desc: 'Gym + 9-5 + music. The grind is part of the brand. Not lazy — intentional.' },
  { trait: 'Rooted', desc: 'Tamil pride without performative nationalism. The music carries the culture organically.' },
  { trait: 'Minimal', desc: 'Speaks through music more than words. No filler content. Every post has purpose.' },
];

const LORE = `MAIZU began as a name whispered in late-night studio sessions — a Tamil word repurposed as 
an alias for a producer who worked in silence while the city slept. By day, he writes code. 
By night, he writes sound. His beats are built from two worlds: the rhythmic pulse of classical 
mridangam and the weight of modern 808s. Every track is a letter to the diaspora — a reminder 
that you can carry your roots into any genre and not lose them.`;

const RELEASE_THEMES = [
  { title: 'NIGHT CITY TAMIL', desc: 'Urban Tamil soundscapes. Trap hi-hats + veena samples. For the late-night driver.', color: '#c9a84c' },
  { title: 'ANCESTRAL BASS', desc: 'Percussive, ritual energy. Dhol meets 808. For the ones who never forgot where they came from.', color: '#5078ff' },
  { title: 'DIASPORA DREAMS', desc: 'Melancholic, slow-building. Flute loops + reverb. For homesickness turned into art.', color: '#3ecf8e' },
  { title: 'MACHINE TEMPLE', desc: 'Industrial Tamil. Synths that sound like temple bells processed through distortion.', color: '#ff4d6d' },
];

export default function Brand() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Artist Lore */}
      <HighlightBox variant="gold">
        <SectionLabel>Artist Lore</SectionLabel>
        <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#e8e0d4', lineHeight: 1.75 }}>{LORE}</p>
      </HighlightBox>

      {/* Visual Direction */}
      <Card variant="gold">
        <SectionLabel>Visual Direction</SectionLabel>
        <ActionList items={VISUAL} />
      </Card>

      {/* Personality Traits */}
      <div>
        <SectionLabel>Brand Personality</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {PERSONALITY.map((p, i) => (
            <Card key={i}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#c9a84c', marginBottom: '0.4rem' }}>{p.trait}</div>
              <p style={{ fontSize: '0.83rem', color: '#8a8070', lineHeight: 1.55 }}>{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Release Themes */}
      <div>
        <SectionLabel>Release Theme Universes</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {RELEASE_THEMES.map((t, i) => (
            <div
              key={i}
              style={{
                background: '#0f0f1c',
                border: `1px solid ${t.color}33`,
                borderTop: `2px solid ${t.color}`,
                borderRadius: '8px',
                padding: '1.25rem',
              }}
            >
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', fontWeight: 700, color: t.color, letterSpacing: '0.12em', marginBottom: '0.5rem' }}>{t.title}</div>
              <p style={{ fontSize: '0.83rem', color: '#8a8070', lineHeight: 1.55 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sound Identity */}
      <Card variant="blue">
        <SectionLabel>Sound Identity</SectionLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
          {['Dark', 'Melodic', 'Tamil Classical Samples', 'Trap Elements', '808 Bass', 'Cinematic', 'Emotional', 'Late-night', 'Diaspora Soul', 'High Fidelity Mix'].map((tag) => (
            <TagBadge key={tag} variant="blue">{tag}</TagBadge>
          ))}
        </div>
      </Card>
    </div>
  );
}
