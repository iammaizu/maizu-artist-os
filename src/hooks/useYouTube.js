import { useState, useEffect } from 'react';

const BASE = 'https://www.googleapis.com/youtube/v3';

function relativeDate(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  return `${mins} min ago`;
}

function fmtNum(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
  return String(n);
}

export { fmtNum, relativeDate };

export function useYouTube() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 'missing_key' | 'api_error' | null

  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    if (!apiKey || apiKey === 'your_key_here') {
      setError('missing_key');
      setLoading(false);
      return;
    }
    fetchAll();
  }, [apiKey]);

  async function fetchAll() {
    try {
      setLoading(true);
      setError(null);

      // 1. Channel stats + uploads playlist ID
      const chRes = await fetch(
        `${BASE}/channels?part=statistics,contentDetails,snippet&forHandle=iammaizu&key=${apiKey}`
      );
      const chJson = await chRes.json();
      if (chJson.error) throw new Error(chJson.error.message);
      if (!chJson.items?.length) throw new Error('Channel @iammaizu not found');

      const ch = chJson.items[0];
      const uploadsId = ch.contentDetails.relatedPlaylists.uploads;
      const stats = ch.statistics;

      // 2. Last 10 uploads
      const plRes = await fetch(
        `${BASE}/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=10&key=${apiKey}`
      );
      const plJson = await plRes.json();
      if (plJson.error) throw new Error(plJson.error.message);

      const videoIds = plJson.items
        .map(i => i.snippet.resourceId.videoId)
        .join(',');

      // 3. Video statistics
      const vRes = await fetch(
        `${BASE}/videos?part=statistics,snippet&id=${videoIds}&key=${apiKey}`
      );
      const vJson = await vRes.json();
      if (vJson.error) throw new Error(vJson.error.message);

      const videos = vJson.items.map(v => {
        const views = parseInt(v.statistics.viewCount || 0);
        const likes = parseInt(v.statistics.likeCount || 0);
        const comments = parseInt(v.statistics.commentCount || 0);
        const engagement = views > 0 ? ((likes + comments) / views) * 100 : 0;
        return {
          id: v.id,
          title: v.snippet.title,
          thumbnail: `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`,
          publishedAt: relativeDate(v.snippet.publishedAt),
          publishedRaw: v.snippet.publishedAt,
          views, likes, comments,
          engagement: parseFloat(engagement.toFixed(2)),
        };
      });

      const totalVidViews = videos.reduce((s, v) => s + v.views, 0);
      const avgViews = videos.length ? Math.round(totalVidViews / videos.length) : 0;
      const bestVideo = videos.reduce((best, v) => v.views > (best?.views ?? 0) ? v : best, null);

      // Views this month: count videos published this month
      const now = new Date();
      const monthViews = videos
        .filter(v => {
          const d = new Date(v.publishedRaw);
          return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        })
        .reduce((s, v) => s + v.views, 0);

      setData({
        channel: {
          subscribers: parseInt(stats.subscriberCount || 0),
          totalViews: parseInt(stats.viewCount || 0),
          videoCount: parseInt(stats.videoCount || 0),
        },
        videos,
        avgViews,
        bestVideo,
        monthViews,
      });
    } catch (err) {
      setError('api_error:' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, refetch: fetchAll };
}
