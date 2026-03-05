import React from 'react';

const T = { t1: '#f0ece4', t2: '#888', t3: '#444', gold: '#c9a84c', blue: '#4f7cff', green: '#3ecf8e', surface: '#0e0e1a', border: 'rgba(255,255,255,0.06)' };

const SCHEDULE = [
  { time: '05:30', task: 'Wake up', note: 'No phone for 10 min' },
  { time: '06:00', task: 'Gym', note: '60 min — non-negotiable' },
  { time: '07:30', task: 'Breakfast + Listen', note: 'Study reference tracks' },
  { time: '09:00', task: '9-5 Work', note: 'Deep work, music off' },
  { time: '18:30', task: 'DAW Session', note: '45–60 min max — sketch OR polish' },
  { time: '19:30', task: 'Content Window', note: 'Post + engage (30 min cap)' },
  { time: '21:00', task: 'Late Session', note: 'Optional — only if energy allows' },
  { time: '22:30', task: 'Wind down', note: 'No screens. Journal or read.' },
];

const WEEKLY_OS = [
  { day: 'MON', focus: 'Beat sketch + post preview', highlight: false },
  { day: 'TUE', focus: 'Production session', highlight: false },
  { day: 'WED', focus: 'Content shoot + post', highlight: false },
  { day: 'THU', focus: 'Mix review + polish', highlight: false },
  { day: 'FRI', focus: 'Release day + engage', highlight: false },
  { day: 'SAT', focus: '3hr studio + batch content', highlight: true },
  { day: 'SUN', focus: 'Mix/master + week review', highlight: true },
];

const TOOLS = ['Logic Pro', 'Ableton Live', 'Splice', 'Suno AI', 'Later', 'DistroKid'];

const OVERWHELM = [
  { n: 1, step: 'Open one project', detail: 'Not to finish — just to open it and make one sound.' },
  { n: 2, step: 'Post something small', detail: 'Behind the scenes, a loop, a thought. 60 seconds.' },
  { n: 3, step: 'Drink water, go outside', detail: 'Music is a marathon. Recovery is production.' },
];

export default function System() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Daily schedule */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${T.gold}`, borderRadius: '4px', padding: '20px' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.gold, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Daily Schedule — Weekday</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {SCHEDULE.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', padding: '9px 0', borderBottom: i < SCHEDULE.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: T.gold, width: '46px', flexShrink: 0, paddingTop: '1px' }}>{s.time}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.83rem', color: T.t1, fontWeight: 400 }}>{s.task}</div>
                <div style={{ fontSize: '0.72rem', color: T.t3, marginTop: '1px' }}>{s.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly OS */}
      <div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.t3, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Weekly Operating System</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', overflowX: 'auto' }}>
          {WEEKLY_OS.map((d, i) => (
            <div key={i} style={{ background: d.highlight ? 'rgba(201,168,76,0.04)' : T.surface, border: `1px solid ${d.highlight ? 'rgba(201,168,76,0.15)' : T.border}`, borderRadius: '4px', padding: '10px 8px', minWidth: '80px' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: d.highlight ? T.gold : T.t3, letterSpacing: '0.1em', marginBottom: '5px' }}>{d.day}</div>
              <div style={{ fontSize: '0.7rem', color: T.t2, lineHeight: 1.4 }}>{d.focus}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tool stack + Overwhelm protocol side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${T.blue}`, borderRadius: '4px', padding: '20px' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.blue, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Tool Stack</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {TOOLS.map(t => (
              <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: T.blue, background: 'rgba(79,124,255,0.1)', border: '1px solid rgba(79,124,255,0.2)', borderRadius: '3px', padding: '4px 10px' }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderLeft: `2px solid ${T.green}`, borderRadius: '4px', padding: '20px' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', color: T.green, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Overwhelm Protocol</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {OVERWHELM.map(o => (
              <div key={o.n} style={{ display: 'flex', gap: '10px' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: T.green, flexShrink: 0, width: '16px' }}>{o.n}.</div>
                <div>
                  <div style={{ fontSize: '0.82rem', color: T.t1, marginBottom: '2px' }}>{o.step}</div>
                  <div style={{ fontSize: '0.72rem', color: T.t3, lineHeight: 1.45 }}>{o.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
