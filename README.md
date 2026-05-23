# Soumil Gupta — Portfolio Site

A personal portfolio for Soumil Gupta, built with **Next.js 14** (App Router) + TypeScript. Designed for Vercel deployment.

---

## ⚠️ One thing to check before deploying

The site serves a single resume from `public/resumes/Soumil_Gupta_Resume.pdf`.

That file currently holds the `Soumil_Gupta_Resume.pdf` Soumil originally provided. Before launch, swap it out for the final consolidated resume — same exact filename — and the download button will pick it up automatically.

For ATS optimisation, the resume should mention these keyword clusters at least once: **financial modeling, DCF, comparable company analysis, equity research, fixed income, credit analysis, portfolio management, performance attribution, scenario analysis, Bloomberg Terminal, Excel/VBA, Python, SQL, Power BI**.

---

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

---

## Deploying to Vercel

### Option A — One-click via the web (easiest)

1. Create a new GitHub repo and push this folder to it.
2. Go to <https://vercel.com/new>, import the repo.
3. Vercel auto-detects Next.js. Just click **Deploy**.
4. Done — you'll get a live URL like `soumil-gupta.vercel.app` in ~60 seconds.

### Option B — Via the Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts; accept the defaults.

### Custom domain (optional)

In the Vercel project dashboard → Settings → Domains. Add e.g. `soumilgupta.com` and Vercel will tell you which DNS records to set at the registrar.

---

## Editing content

All copy lives in `app/page.tsx`. Section by section:

- **Hero** — the name, the location/availability line, and the four-fact panel on the right.
- **About** (`#about`) — the three paragraphs and the four stat tiles.
- **Experience** (`#experience`) — three roles, each as an `<article className="exp-item">`. To add a new role, copy one and edit it.
- **Resumes** (`#resumes`) — five `<a className="resume-card">` blocks. Edit the title, tag, and roles for each.
- **Skills** (`#skills`) — four groups of `<li>` items.
- **Contact** (`#contact`) — email, phone, LinkedIn.

Styling is in `app/globals.css`. The whole palette is at the top in CSS variables (`--paper`, `--ink`, `--accent`, etc.) — change those four and the entire site re-themes.

---

## Tech notes

- No external UI library; pure CSS to keep the bundle tiny.
- Fonts (Fraunces, Newsreader, JetBrains Mono) load from Google Fonts.
- No client-side JS beyond what Next ships by default — fully static, instant TTFB on Vercel.
- Fully responsive down to ~360px.

---

Built May 2026.
