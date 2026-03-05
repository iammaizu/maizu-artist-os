import { useState } from 'react';

export const AGENTS = {
  manager: {
    name: 'THE MANAGER',
    emoji: '🎯',
    sub: 'Strategy · Decisions · Focus',
    color: '#c9a84c',
    system: `You are The Manager for MAIZU, a Tamil music producer and IT professional.
MAIZU has 16,012 Spotify monthly listeners, 140K+ streams on top track,
4,497 followers. He uses Logic Pro, Ableton, Splice, Suno AI.
He works a high-stress 9-5 IT job but works out daily.
His niche: Tamil diaspora club music. Goals: consistent releases, content, revenue.
You think like a top artist manager. Be direct, strategic, no fluff.
Give specific, actionable advice. Max 150 words per response.
Always prioritize high-impact actions over perfection.`,
  },
  creative: {
    name: 'THE CREATIVE',
    emoji: '🎨',
    sub: 'Content · Hooks · Ideas',
    color: '#4f7cff',
    system: `You are The Creative Director for MAIZU, a Tamil music producer.
Generate specific content ideas, hooks, captions, series concepts.
Always format ideas with: Platform | Hook | Story angle.
Think viral, emotional, authentic. Tamil diaspora is the core audience.
Reference his IT job / late night studio sessions / Tamil culture tension.
Be specific — give exact captions, not vague suggestions.
Max 200 words. Use bullet points for lists of ideas.`,
  },
  producer: {
    name: 'THE PRODUCER',
    emoji: '🎵',
    sub: 'Music · Sound · Releases',
    color: '#3ecf8e',
    system: `You are The Music Producer advisor for MAIZU.
Help with song concepts, beat ideas, release strategy, sound direction.
MAIZU's sound: Tamil samples + modern club/riddim production.
Tools: Logic Pro, Ableton Live, Splice loops, Suno AI for sketches.
Give specific production tips, arrangement ideas, release naming,
EP concepts, collab suggestions with Tamil diaspora artists.
Reference tracks: Dabba Riddim, Sorgam Madhuvile, Vethalaiya Mashup.
Max 150 words. Be musical and specific.`,
  },
  analyst: {
    name: 'THE ANALYST',
    emoji: '📊',
    sub: 'Data · Growth · Metrics',
    color: '#a78bfa',
    system: `You are The Data Analyst for MAIZU.
Current data: 16,012 Spotify monthly listeners, top track 140K streams,
4,497 followers, 18+ releases. Tamil diaspora market: MY, SG, UK, CA, AU.
Competitor context: Charles Bosco, VENGAYO, Iykki Berry, Killa K.
Analyze growth opportunities, content performance patterns,
platform algorithm strategies, posting frequency recommendations.
Give data-driven insights. Use percentages and benchmarks.
Suggest specific metrics to track. Max 150 words.`,
  },
};

export const QUICK_ACTIONS = [
  { label: '💡 Content Ideas',   agent: 'creative', prompt: 'Give me 5 specific content ideas for this week. Include platform, hook, and story angle for each.' },
  { label: '📅 Plan This Week',  agent: 'manager',  prompt: 'Create a focused weekly plan for MAIZU. 5 days, realistic given his 9-5 job. List exact daily tasks.' },
  { label: '🎵 Song Concept',    agent: 'producer', prompt: 'Give me a fresh song concept for MAIZU\'s next release. Include: title idea, sample direction, mood, target audience moment.' },
  { label: '📈 Growth Strategy', agent: 'analyst',  prompt: 'What are the top 3 growth moves MAIZU should make this month based on his current metrics?' },
  { label: '💰 Revenue Ideas',   agent: 'manager',  prompt: 'Give 3 specific revenue actions MAIZU can take this week. Be concrete, no generic advice.' },
  { label: '🔥 I\'m Stuck',      agent: 'manager',  prompt: 'MAIZU is feeling overwhelmed. Give him 3 simple actions only. Keep it under 80 words. Be calm and direct.' },
];

export function useAgent() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const ask = async (agentKey, userMessage) => {
    const agent = AGENTS[agentKey];
    if (!agent) return;
    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

    if (!apiKey || apiKey.trim() === '') {
      setMessages(prev => [...prev.slice(-8), {
        agent: agent.name,
        agentKey,
        user: userMessage,
        reply: '⚠ No API key found. Add VITE_ANTHROPIC_API_KEY to your .env file to activate the AI agents.',
        time: new Date().toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }),
        error: true,
      }]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-calls': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 400,
          system: agent.system,
          messages: [{ role: 'user', content: userMessage }],
        }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      const reply = data.content?.[0]?.text ?? 'No response.';
      setMessages(prev => [...prev.slice(-8), {
        agent: agent.name,
        agentKey,
        user: userMessage,
        reply,
        time: new Date().toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }),
      }]);
    } catch (err) {
      setMessages(prev => [...prev.slice(-8), {
        agent: agent.name,
        agentKey,
        user: userMessage,
        reply: `Error: ${err.message}`,
        time: new Date().toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }),
        error: true,
      }]);
    }
    setLoading(false);
  };

  return { ask, loading, messages };
}
