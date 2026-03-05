import React from 'react';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, Cell,
} from 'recharts';

const AXIS_STYLE = { fill: '#555', fontSize: 9, fontFamily: "'Space Mono', monospace" };

function DarkTooltip({ active, payload, label, unit = '' }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: '#1a1a2e',
      border: '1px solid rgba(201,168,76,0.3)',
      borderRadius: '4px',
      padding: '8px 12px',
      fontFamily: "'Space Mono', monospace",
      fontSize: '0.65rem',
    }}>
      <div style={{ color: '#888', marginBottom: '3px' }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color }}>{p.value.toLocaleString()}{unit}</div>
      ))}
    </div>
  );
}

export function TopTracksChart() {
  const data = [
    { name: 'Vethalaiya × Mainaru', views: 140238 },
    { name: 'Dabba Riddim', views: 42300 },
    { name: 'Sorgam Madhuvile', views: 31800 },
    { name: 'Night Drive Tamil', views: 18500 },
    { name: 'Kolatta Beats', views: 12100 },
  ];

  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
        <XAxis type="number" tick={AXIS_STYLE} axisLine={false} tickLine={false} tickFormatter={v => v >= 1000 ? (v/1000).toFixed(0)+'K' : v} />
        <YAxis type="category" dataKey="name" tick={AXIS_STYLE} axisLine={false} tickLine={false} width={90}
          tickFormatter={v => v.length > 12 ? v.slice(0, 12) + '…' : v} />
        <Tooltip content={<DarkTooltip />} cursor={{ fill: 'rgba(201,168,76,0.04)' }} />
        <Bar dataKey="views" radius={[0,3,3,0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={i === 0 ? '#c9a84c' : `rgba(201,168,76,${0.55 - i * 0.08})`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function GrowthLineChart() {
  const data = [
    { month: 'Oct', listeners: 8200 },
    { month: 'Nov', listeners: 10100 },
    { month: 'Dec', listeners: 11400 },
    { month: 'Jan', listeners: 13200 },
    { month: 'Feb', listeners: 14800 },
    { month: 'Mar', listeners: 16012 },
  ];

  return (
    <ResponsiveContainer width="100%" height={140}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
        <XAxis dataKey="month" tick={AXIS_STYLE} axisLine={false} tickLine={false} />
        <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} tickFormatter={v => (v/1000).toFixed(0)+'K'} />
        <Tooltip content={<DarkTooltip />} cursor={{ stroke: 'rgba(79,124,255,0.2)', strokeWidth: 1 }} />
        <Line
          type="monotone" dataKey="listeners" stroke="#4f7cff" strokeWidth={2}
          dot={{ fill: '#4f7cff', r: 3, strokeWidth: 0 }}
          activeDot={{ r: 5, fill: '#4f7cff', strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
