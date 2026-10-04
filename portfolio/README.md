# Shivansh Verma — Portfolio

The source code for my personal software engineering portfolio: production features, measurable engineering impact, and selected full-stack / AI work. V2 evolves the original dark animated React portfolio with restrained violet accents, a lightweight interactive sphere, and a focus on professional experience.

## Tech stack

- React 18 + Vite 7, with the official React build plugin
- Framer Motion for restrained, reduced-motion-aware interactions
- Plain CSS with shared design tokens and responsive grids
- EmailJS, loaded on form submission; React Hot Toast for feedback
- Build-time rendering with React DOM Server, followed by client hydration
- PropTypes for shared component contracts

## Features

- Sticky navigation with active section state and keyboard-accessible mobile disclosure
- Hero, engineering profile, experience, selected work, technical expertise, impact, education, contact, and footer
- Data-driven content with professional case studies first and older projects in a disclosure
- Existing portrait and project screenshots converted to WebP
- Native project detail disclosures, visible focus states, skip link, labeled form, and reduced-motion support
- Local downloadable resume and working direct email / social links
- Form validation, duplicate-submission protection, loading / success / error states, and message preservation on failure
- Search-readable prerendered HTML, Person structured data, social image, favicon, sitemap, and robots.txt

## Local setup

Use Node **22.12+** (or Node 20.19+) and npm. Node 22 is configured for Netlify.

```sh
git clone https://github.com/shivansh-verma13/Portfolio.git
cd Portfolio/portfolio
npm install
cp .env.example .env.local
# Populate the three EmailJS public configuration values.
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp` if preferred.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `VITE_EMAILJS_TEMPLATE_ID` | Template expecting `name`, `email`, and `message` fields |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS browser public key |

Existing public EmailJS browser identifiers are configured in the repository-root `netlify.toml` for Netlify builds. Copy these into ignored `.env.local` for local development. Host environment settings can override the defaults. `VITE_*` values are embedded in public browser code: **never place private EmailJS credentials, mail passwords, or other secrets here**. Configure permitted origins and abuse protection in EmailJS. A honeypot reduces basic spam but is not a substitute for server-side protection.

Without configuration the site still renders, direct email remains available, and submitting the form explains that email should be used instead. Actual delivery requires a working EmailJS account/template and quota.

## Commands

```sh
npm run dev      # Vite development server
npm run lint     # ESLint; no warnings allowed
npm test         # Contact transport success/failure/configuration tests (no email sent)
npm run build    # Vite production bundle + HTML prerendering
npm run preview  # Preview the production build
```

## Deployment

Netlify configuration is provided at the repository root in `netlify.toml`: base `portfolio`, command `npm run build`, publish directory `dist`. The existing public EmailJS configuration is included; update host environment settings if the values change. No hosting account or production deployment is created by this upgrade.

For any static host, build from `portfolio/` and upload `dist/`. The root document is prerendered; this is a single-page site with section anchors, not a client-side multi-route application. Cache hashed `/assets/*` files immutably; revalidate HTML after releases.

When changing domains, update the canonical, Open Graph URL/image, Twitter image, structured data URL in `index.html`, and the URLs in `public/robots.txt` and `public/sitemap.xml`.

## Content maintenance

- Identity, links, navigation, impact and education: `src/data/profile.js`
- Experience: `src/data/experience.js`
- Projects, highlights, and verified source URLs: `src/data/projects.js`
- Skills and emphasis: `src/data/skills.js`
- Design tokens / shared layouts: `src/index.css`
- Replace `public/Shivansh_Verma_AgenticAI_SoftwareDeveloper_2026-10.pdf` when publishing a new resume, and update its path in `profile.js` if renamed.

Internal projects do not show invented repository or demo links. Illustrations are conceptual workflows, not client screenshots. Individual dates for PgVala and Hattyhood have not been invented: the source resume groups both under September–November 2023. Redis, PostgreSQL, LangChain, SSE, Kubernetes, Postman, and Anthropic are not presented as confirmed expertise without supporting experience; add them if applicable.

## Project structure

```text
Portfolio/
├── netlify.toml
└── portfolio/
    ├── public/             # WebP images, resume, metadata assets
    ├── src/
    │   ├── components/     # Section components and shared UI
    │   ├── data/           # Profile, experience, projects, skills
    │   ├── lib/contact.js  # Lazy EmailJS transport
    │   ├── App.jsx
    │   ├── main.jsx        # Hydration in production / client rendering in dev
    │   └── index.css       # Tokens, layouts, responsive and accessibility rules
    ├── scripts/prerender.mjs
    ├── tests/contact.test.mjs
    ├── docs/               # Audit; preserved legacy artwork
    ├── .env.example
    └── index.html
```

See `docs/V2-AUDIT.md` for the architectural decisions and `docs/V2-VERIFICATION.md` for recorded verification and limits. Lighthouse targets are goals; report measured results rather than assuming a score from the bundle size.

Theme control cycles through system, light, and dark. Preferences persist locally; system mode follows live device theme changes.
