import React from 'react';
import { Card, SectionLabel, ActionList, ScheduleBlock, WeekGrid, TagBadge } from '../components/ui';

const WEEK_DAYS = [
  {
    name: 'MON',
    tasks: ['Morning gym', 'Work 9–6PM', 'Beat sketch (30 min)', 'Content planning'],
    highlight: false,
  },
  {
    name: 'TUE',
    tasks: ['Morning gym', 'Work 9–6PM', 'Production session (1hr)', 'TikTok hook write'],
    highlight: false,
  },
  {
    name: 'WED',
    tasks: ['Morning gym', 'Work 9–6PM', 'MAIZU NIGHTS shoot', 'Post Reel 9PM'],
    highlight: false,
  },
  {
    name: 'THU',
    tasks: ['Morning gym', 'Work 9–6PM', 'Mix review + polish', 'Email follow-ups'],
    highlight: false,
  },
  {
    name: 'FRI',
    tasks: ['Morning gym', 'Work 9–6PM', 'Track release day', 'Engage audience 8PM'],
    highlight: false,
  },
  {
    name: 'SAT',
    tasks: ['Extended session 3–4hrs', 'New beat from scratch', 'Content batch shoot', '9-5 vlog record'],
    highlight: true,
  },
  {
    name: 'SUN',
    tasks: ['Mix + master session', 'Week plan review', 'Upload schedule set', 'Rest / recovery'],
    highlight: true,
  },
];

const DAILY_SCHEDULE = [
  { time: '05:30', task: 'Wake up', sub: 'No phone first 10 minutes' },
  { time: '06:00', task: 'Gym', sub: '60 min workout' },
  { time: '07:30', task: 'Breakfast + Listen', sub: 'Study reference tracks while eating' },
  { time: '09:00', task: '9-5 Work', sub: 'Deep work mode, music off' },
  { time: '18:30', task: 'DAW Session', sub: '45–60 min — sketch or polish, not both' },
  { time: '19:30', task: 'Content Window', sub: 'Post, engage, reply DMs (30 min cap)' },
  { time: '20:00', task: 'Dinner + Decompress', sub: 'No screens if possible' },
  { time: '21:00', task: 'Late Session (optional)', sub: 'Only if energy is there — 45 min max' },
  { time: '22:30', task: 'Wind down', sub: 'No social. Read or journal.' },
];

const TOOLS = [
  { name: 'Logic Pro', use: 'Primary DAW — full track production and mixing', badge: 'CORE', color: '#c9a84c' },
  { name: 'Ableton Live', use: 'Live performance sketching + sound design', badge: 'CORE', color: '#c9a84c' },
  { name: 'Splice', use: 'Sample discovery — curate Tamil + ethnic packs', badge: 'ACTIVE', color: '#5078ff' },
  { name: 'Suno AI', use: 'Vocal idea generation, reference demos, concept testing', badge: 'AI', color: '#3ecf8e' },
  { name: 'Google Ads', use: 'Paid promotion for top releases — YouTube pre-roll focus', badge: 'GROWTH', color: '#ff4d6d' },
  { name: 'BeatStars', use: 'Beat licensing marketplace — needs full activation', badge: 'MONETISE', color: '#c9a84c' },
  { name: 'Spotify for Artists', use: 'Playlist pitching, stats tracking, editorial push', badge: 'PLATFORM', color: '#5078ff' },
  { name: 'CapCut / DaVinci', use: 'Video editing for Reels, Shorts, and content', badge: 'CONTENT', color: '#8a8070' },
];

const WEEKEND_BLOCK = [
  'Saturday 10AM–1PM: Primary production block — one full beat or full mix pass',
  'Saturday 2PM–4PM: Content batch — shoot 5–7 clips for the week',
  'Saturday 7PM: Optional collab session or track listening party (online/offline)',
  'Sunday 9AM–12PM: Mix, master, and upload prep for Monday release',
  'Sunday 2PM: Weekly review — what worked, what to drop, what to double down on',
];

export default function System() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Weekly Calendar Grid */}
      <div>
        <SectionLabel>Weekly Calendar Grid</SectionLabel>
        <WeekGrid days={WEEK_DAYS} />
        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#8a8070' }}>
            <div style={{ width: '8px', height: '8px', background: 'rgba(201,168,76,0.4)', borderRadius: '2px' }} />
            Weekend Power Block
          </div>
        </div>
      </div>

      {/* Daily Schedule */}
      <Card variant="gold">
        <SectionLabel>Daily Schedule (Weekday)</SectionLabel>
        {DAILY_SCHEDULE.map((s, i) => (
          <ScheduleBlock key={i} {...s} />
        ))}
      </Card>

      {/* Weekend Power Block */}
      <Card variant="blue">
        <SectionLabel>Weekend Power Block</SectionLabel>
        <ActionList items={WEEKEND_BLOCK} />
      </Card>

      {/* Tool Stack */}
      <div>
        <SectionLabel>Tool Stack</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {TOOLS.map((t, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#0f0f1c',
                border: '1px solid #1e1e2e',
                borderRadius: '8px',
                padding: '0.85rem 1.25rem',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <div>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#e8e0d4', marginRight: '0.75rem' }}>{t.name}</span>
                <span style={{ fontSize: '0.8rem', color: '#8a8070' }}>{t.use}</span>
              </div>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: t.color,
                  background: `${t.color}18`,
                  border: `1px solid ${t.color}44`,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                }}
              >
                {t.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
