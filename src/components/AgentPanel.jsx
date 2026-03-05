import React, { useState, useRef, useEffect } from 'react';
import { useAgent, AGENTS, QUICK_ACTIONS } from '../hooks/useAgent';

const S = {
  panel: {
    background: '#0e0e1a',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
  },
  panelHeader: {
    padding: '20px 20px 16px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    flexShrink: 0,
  },
  label: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.6rem',
    color: '#c9a84c',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom: '2px',
  },
  subtitle: {
    fontSize: '0.75rem',
    color: '#888',
    fontWeight: 300,
  },
  scrollArea: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
};

function PulseDot({ color = '#c9a84c' }) {
  return (
    <div style={{ position: 'relative', width: '7px', height: '7px', flexShrink: 0 }}>
      <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: color }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%', background: color,
        animation: 'pulse-dot 2s ease-in-out infinite',
      }} />
    </div>
  );
}

function AgentCard({ agentKey, active, onSelect, disabled }) {
  const agent = AGENTS[agentKey];
  return (
    <div
      onClick={() => !disabled && onSelect(agentKey)}
      style={{
        background: active ? `${agent.color}10` : 'transparent',
        border: `1px solid ${active ? agent.color + '44' : 'rgba(255,255,255,0.06)'}`,
        borderLeft: `2px solid ${active ? agent.color : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '4px',
        padding: '10px 12px',
        cursor: disabled ? 'default' : 'pointer',
        transition: 'all 0.15s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
      onMouseEnter={e => { if (!active && !disabled) e.currentTarget.style.borderColor = agent.color + '33'; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
    >
      <span style={{ fontSize: '1rem', flexShrink: 0 }}>{agent.emoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: active ? agent.color : '#f0ece4', fontWeight: 700, letterSpacing: '0.05em' }}>
          {agent.name}
        </div>
        <div style={{ fontSize: '0.7rem', color: '#888', marginTop: '1px' }}>{agent.sub}</div>
      </div>
      {active && <PulseDot color={agent.color} />}
    </div>
  );
}

function ThinkingDots() {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center', padding: '4px 0' }}>
      {[0,1,2].map(i => (
        <div key={i} style={{
          width: '5px', height: '5px', borderRadius: '50%',
          background: '#c9a84c',
          animation: `think 1.2s ease-in-out ${i * 0.2}s infinite`,
        }} />
      ))}
    </div>
  );
}

function MessageBubble({ msg }) {
  const agent = AGENTS[msg.agentKey];
  const color = agent?.color ?? '#c9a84c';
  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {/* User message */}
      <div style={{ alignSelf: 'flex-end', maxWidth: '85%' }}>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '4px 4px 2px 4px',
          padding: '8px 10px',
          fontSize: '0.78rem',
          color: '#f0ece4',
          lineHeight: 1.5,
        }}>
          {msg.user}
        </div>
      </div>

      {/* Agent reply */}
      <div style={{ alignSelf: 'flex-start', maxWidth: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color, letterSpacing: '0.08em' }}>{msg.agent}</span>
          <span style={{ fontSize: '0.55rem', color: '#444' }}>{msg.time}</span>
        </div>
        <div style={{
          background: msg.error ? 'rgba(255,77,109,0.05)' : `${color}08`,
          border: `1px solid ${msg.error ? 'rgba(255,77,109,0.2)' : color + '22'}`,
          borderRadius: '4px 4px 4px 2px',
          padding: '10px 12px',
          fontSize: '0.78rem',
          color: msg.error ? '#ff4d6d' : '#f0ece4',
          lineHeight: 1.65,
          whiteSpace: 'pre-wrap',
        }}>
          {msg.reply}
        </div>
      </div>
    </div>
  );
}

export default function AgentPanel() {
  const [activeAgent, setActiveAgent] = useState('manager');
  const [input, setInput] = useState('');
  const { ask, loading, messages } = useAgent();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    ask(activeAgent, text);
  };

  const handleQuickAction = (action) => {
    setActiveAgent(action.agent);
    ask(action.agent, action.prompt);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const agent = AGENTS[activeAgent];

  return (
    <div style={{ ...S.panel, minHeight: 0 }}>
      {/* Header */}
      <div style={S.panelHeader}>
        <div style={S.label}>Production Team</div>
        <div style={S.subtitle}>Your AI crew. Always on.</div>
      </div>

      <div style={S.scrollArea}>
        {/* Agent cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '8px' }}>
          {Object.keys(AGENTS).map(key => (
            <AgentCard key={key} agentKey={key} active={activeAgent === key} onSelect={setActiveAgent} disabled={loading} />
          ))}
        </div>

        {/* Quick actions */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '12px', marginTop: '4px',
        }}>
          <div style={{ ...S.label, marginBottom: '8px' }}>Quick Actions</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
            {QUICK_ACTIONS.map((qa, i) => (
              <button
                key={i}
                onClick={() => !loading && handleQuickAction(qa)}
                disabled={loading}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                  padding: '7px 8px',
                  fontSize: '0.68rem',
                  color: loading ? '#444' : '#f0ece4',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  textAlign: 'left',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.15s',
                  lineHeight: 1.3,
                }}
                onMouseEnter={e => { if (!loading) { e.target.style.borderColor = 'rgba(201,168,76,0.3)'; e.target.style.color = '#c9a84c'; } }}
                onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.06)'; e.target.style.color = loading ? '#444' : '#f0ece4'; }}
              >
                {qa.label}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        {messages.length > 0 && (
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '12px', marginTop: '4px',
            display: 'flex', flexDirection: 'column', gap: '14px',
          }}>
            {messages.map((msg, i) => <MessageBubble key={i} msg={msg} />)}
            {loading && (
              <div className="fade-in" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: agent.color }}>{agent.name}</span>
                <ThinkingDots />
              </div>
            )}
          </div>
        )}

        {loading && messages.length === 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', color: agent.color }}>{agent.name}</span>
            <ThinkingDots />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}>
        {/* Active agent indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '7px' }}>
          <PulseDot color={agent.color} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: agent.color }}>{agent.name}</span>
          <span style={{ fontSize: '0.68rem', color: '#444' }}>is listening</span>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            rows={2}
            disabled={loading}
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
              padding: '8px 10px',
              fontSize: '0.78rem',
              color: '#f0ece4',
              fontFamily: "'DM Sans', sans-serif",
              resize: 'none',
              outline: 'none',
              lineHeight: 1.5,
            }}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            style={{
              background: loading || !input.trim() ? 'rgba(201,168,76,0.08)' : 'rgba(201,168,76,0.15)',
              border: `1px solid ${loading || !input.trim() ? 'rgba(201,168,76,0.1)' : 'rgba(201,168,76,0.3)'}`,
              borderRadius: '4px',
              padding: '0 12px',
              color: loading || !input.trim() ? '#444' : '#c9a84c',
              cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.05em',
              flexShrink: 0,
              transition: 'all 0.15s',
            }}
          >
            →
          </button>
        </div>
        <div style={{ fontSize: '0.62rem', color: '#444', marginTop: '5px' }}>Enter to send · Shift+Enter for newline</div>
      </div>
    </div>
  );
}
