# MAIZU Artist OS

Dark-themed artist management dashboard for Tamil music producer MAIZU.

## Setup — YouTube Live Analytics

### Step 1: Get a free YouTube Data API v3 key

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Click **New Project** → name it `maizu-artist-os` → Create
3. In the search bar type **YouTube Data API v3** → click it → click **Enable**
4. Go to **Credentials** (left sidebar) → click **+ Create Credentials** → **API key**
5. Copy the generated key
6. Click **Edit API key** → under **API restrictions** select **Restrict key** → choose **YouTube Data API v3** → Save

### Step 2: Add to project

```bash
# Create .env file in project root
cp .env.example .env

# Paste your key
# VITE_YOUTUBE_API_KEY=AIzaSy...your_actual_key
```

### Step 3: Run

```bash
npm install --include=dev
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) → click the **08 Analytics** tab.

## Free tier limits

YouTube Data API v3 gives you **10,000 units/day** free. Each page load of the Analytics tab uses ~5 units (3 API calls). At normal usage you'll never hit the limit.

## Tech stack

- React 18 + Vite 5
- Tailwind CSS 3 (PostCSS)
- Recharts (bar + line charts)
- Syne / Space Mono / DM Sans (Google Fonts)
- Azure Static Web Apps (hosting)
