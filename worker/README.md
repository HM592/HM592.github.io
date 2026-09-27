# AI chat Worker

Cloudflare Worker that proxies the "Ask about me" chat tab to Gemini. It is
the only thing that ever talks to the Gemini API — the browser only ever
talks to this Worker, over a locked-down CORS/rate-limit/validation gate.
See `src/index.js` for the full request path.

## One-time setup

```sh
cd worker
npm install

# Log in (opens a browser)
npx wrangler login

# Create the KV namespace used for the 10-minute/daily rate-limit counters
npx wrangler kv namespace create RATE_LIMIT_KV
# → paste the returned "id" into wrangler.toml's [[kv_namespaces]] block

# Store the Gemini key as a Worker secret (never written to any file)
npx wrangler secret put GEMINI_API_KEY
# → paste the key when prompted
```

Get a Gemini API key from Google AI Studio (https://aistudio.google.com/apikey).

## Where the key lives

`GEMINI_API_KEY` is stored only in Cloudflare's encrypted secret store for
this Worker, set via `wrangler secret put`. It:

- is **never** written to `wrangler.toml`, `src/*.js`, or any other file in
  this repo
- is **not** in `.dev.vars.example` (that file is a template with a
  placeholder value, safe to commit)
- only exists locally, if you use it, in your own `worker/.dev.vars`, which
  is gitignored (see the root `.gitignore`) and never staged by `git add`
- is injected into the Worker at runtime by Cloudflare, read as
  `env.GEMINI_API_KEY` in `src/index.js`, and sent to Google over a header
  (`x-goog-api-key`) on the server side only — it never reaches the browser

Run `git status` / `git diff` before committing if you ever touch this
directory, as a general check — but there is no file here that should ever
contain the real key.

## Local dev

```sh
cd worker
cp .dev.vars.example .dev.vars
# edit .dev.vars and put a real (or test) Gemini key in it
npx wrangler dev
```

This serves the Worker on `http://localhost:8787`. Point the frontend's
`AI_WORKER_URL` (in `src/components/ai/ChatPanel.jsx`) at that while
testing locally — `ALLOWED_ORIGINS` in `wrangler.toml` already includes
`http://localhost:5173` so a local Vite dev server can call it.

## Deploy

```sh
cd worker
npx wrangler deploy
```

This prints the deployed URL, e.g. `https://hm592-ai-chat.<your-subdomain>.workers.dev`.
Put that into `AI_WORKER_URL` in `src/components/ai/ChatPanel.jsx` — it's
not a secret (it's the public endpoint the browser calls; all real
protection is server-side), so it's fine to commit.

## Rate limiting design note

Cloudflare's native Rate Limiting binding only supports 10-second or
60-second windows, so it can't directly express "10 per 10 minutes" or "30
per day". This Worker uses it as a cheap first-pass burst gate (10
req/60s) that runs before anything else, and implements the actual
10-per-10-minutes and 30-per-day caps as fixed-window counters in
`RATE_LIMIT_KV`, keyed by a salted hash of the visitor's IP (the raw IP is
never stored or logged — see `hashIp` in `src/index.js`).

## Keeping CV content in sync

`src/cvData.js` is a plain-text mirror of `../src/data/cv.js` (the site's
real source of truth). It's a separate file because this Worker can't
import the site's `cv.js` directly — that file imports logo images, which
have no loader in a Wrangler build. Update both when CV content changes.
