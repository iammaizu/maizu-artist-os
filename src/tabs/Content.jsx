import React from 'react';

const T = { t1: '#f0ece4', t2: '#888', t3: '#444', gold: '#c9a84c', blue: '#4f7cff', green: '#3ecf8e', red: '#ff4d6d', surface: '#0e0e1a', border: 'rgba(255,255,255,0.06)' };

const WEEK = [
  { day: 'MON', type: 'REEL', task: 'MAIZU NIGHTS beat preview', color: T.gold },
  { day: 'TUE', type: 'REST', task: 'No post — focus on production', color: T.t3 },
  { day: 'WED', type: 'SHORT', task: 'ROOTS & DRUMS breakdown', color: T.blue },
  { day: 'THU', type: 'REST', task: 'Studio session — save content', color: T.t3 },
  { day: 'FRI', type: 'DROP', task: 'New track release day', color: T.green },
  { day: 'SAT', type: 'REEL', task: '9-5 Producer vlog', color: T.gold },
  { day: 'SUN', type: 'SHORTS', task: 'THE PROCESS time-lapse', color: '#a78bfa' },
];

const HOOKS = [
  { platform: 'TikTok', hook: 'POV: You discovered this Tamil producer at 2AM and your whole playlist changed forever' },
  { platform: 'Instagram', hook: 'The beat that made 140,000 people feel something they didn\'t know they were missing' },
  { platform: 'YouTube', hook: 'How I made a Tamil banger in Logic Pro in one hour (full breakdown)' },
  { platform: 'Spotify Pitch', hook: 'Where Ilayaraja meets Travis Scott — late-night Tamil beats for the diaspora soul' },
  { platform: 'TikTok', hook: 'This Tamil producer works a 9-5 and still drops heat — here\'s the system' },
];

const SERIES = [
  { title: 'MAIZU NIGHTS', desc: 'Weekly 60-sec beat preview. Posted 10PM.', platform: 'TikTok · IG', color: T.gold },
  { title: 'ROOTS & DRUMS', desc: 'Tamil classical + trap breakdown. Educational.', platform: 'YouTube · IG', color: T.blue },
  { title: 'THE PROCESS', desc: 'Time-lapse of full beat. No talking, just music.', platform: 'TikTok · YT', color: T.green },
  { title: '9-5 PRODUCER', desc: 'Honest content: career + music balance.', platform: 'IG · TikTok', color: '#ff4d6d' },
  { title: 'SAMPLE FLIP', desc: 'Take old Tamil song → flip into modern beat.', platform: 'YouTube', color: '#a78bfa' },
  { title: 'BEAT TAPE', desc: 'Monthly 5-track instrumental compilation.', platform: 'Spotify · YT', color: T.gold },
];

export default function Content() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Weekly Calendar */}
      <div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.t3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Weekly Content Calendar</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', overflowX: 'auto' }}>
          {WEEK.map((d, i) => (
            <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, borderTop: `2px solid ${d.color}`, borderRadius: '4px', padding: '12px 8px', minWidth: '90px' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: T.t3, letterSpacing: '0.1em', marginBottom: '6px' }}>{d.day}</div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: d.color, background: `${d.color}15`, border: `1px solid ${d.color}30`, borderRadius: '3px', padding: '1px 5px', display: 'inline-block', marginBottom: '7px' }}>{d.type}</span>
              <div style={{ fontSize: '0.72rem', color: T.t1, lineHeight: 1.4 }}>{d.task}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hook Templates */}
      <div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.t3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Hook Templates</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {HOOKS.map((h, i) => (
            <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: '4px', padding: '14px 18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: T.gold, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '3px', padding: '2px 7px', flexShrink: 0, marginTop: '1px' }}>{h.platform}</span>
              <span style={{ fontStyle: 'italic', fontSize: '0.83rem', color: T.t1, lineHeight: 1.55 }}>"{h.hook}"</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Series */}
      <div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.t3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Repeatable Series</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
          {SERIES.map((s, i) => (
            <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${s.color}`, borderRadius: '4px', padding: '16px' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', fontWeight: 700, color: s.color, letterSpacing: '0.08em', marginBottom: '5px' }}>{s.title}</div>
              <div style={{ fontSize: '0.78rem', color: T.t2, lineHeight: 1.5, marginBottom: '8px' }}>{s.desc}</div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: T.t3 }}>{s.platform}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
