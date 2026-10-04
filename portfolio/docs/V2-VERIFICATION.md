# Portfolio V2 — implementation and verification

Implemented on 4 October 2026 in a local clone of `https://github.com/shivansh-verma13/Portfolio.git`, with the frontend in `portfolio/`. Local branch: `portfolio-v2`. Base commit: `d5fe015a9c2ba3627d7aa587d39fcc0fc30053c9`. The changes have not been pushed or deployed.

## 1. Redesign summary

Evolved the original dark animated site into a production-focused Software Engineer portfolio. Retained violet accents, the sphere motif, the original portrait and project assets, Framer Motion, EmailJS, and toast feedback. Replaced full-screen cartoon parallax, oversized moving text, and a continuous WebGL render loop with readable sections and a local pointer-responsive SVG orb.

## 2. UX changes

Sticky navigation, active section state (including reset when returning home), accessible mobile menu with Escape dismissal, destination focus transfer, prominent resume access, professional hero positioning, concise engineering profile, four experience cards, professional work first, expandable engineering highlights, older projects disclosure, grouped technical skills, compact impact metrics, education, and improved contact/CTA/footer. No substantive mobile content is discarded.

## 3. Engineering changes

Data is centralized in `src/data/`. Shared section headings, reveal wrapper, and arrow icon remove repeated markup. Unique project IDs replace duplicates and array-index keys. CSS variables control design tokens and reusable buttons/tags/grids. EmailJS loads only at submission. Contact fields retain the original template contract. Production HTML is prerendered with React DOM Server and hydrated on the client; Vite remains the application architecture. Source is consistently formatted. Original unused art is preserved under `docs/legacy-assets/`, outside production public assets.

## 4. Files created
- `README.md`
- `netlify.toml`
- `portfolio/.env.example`
- `portfolio/docs/V2-AUDIT.md`
- `portfolio/public/Shivansh_Verma_AgenticAI_SoftwareDeveloper_2026-10.pdf`
- `portfolio/public/favicon.svg`
- `portfolio/public/images/chat.webp`
- `portfolio/public/images/chatbot.webp`
- `portfolio/public/images/shivansh.webp`
- `portfolio/public/images/video-meet.webp`
- `portfolio/public/robots.txt`
- `portfolio/public/sitemap.xml`
- `portfolio/public/social-preview.png`
- `portfolio/scripts/prerender.mjs`
- `portfolio/src/components/About/About.jsx`
- `portfolio/src/components/Education/Education.jsx`
- `portfolio/src/components/Experience/Experience.jsx`
- `portfolio/src/components/Footer/Footer.jsx`
- `portfolio/src/components/Impact/Impact.jsx`
- `portfolio/src/components/Skills/Skills.jsx`
- `portfolio/src/components/shared/Arrow.jsx`
- `portfolio/src/components/shared/Reveal.jsx`
- `portfolio/src/components/shared/SectionHeading.jsx`
- `portfolio/src/data/experience.js`
- `portfolio/src/data/profile.js`
- `portfolio/src/data/projects.js`
- `portfolio/src/data/skills.js`
- `portfolio/src/lib/contact.js`
- `portfolio/tests/contact.test.mjs`
- `.gitattributes`
- `portfolio/docs/V2-VERIFICATION.md`

## 5. Files significantly modified
- `portfolio/.gitignore`
- `portfolio/README.md`
- `portfolio/index.html`
- `portfolio/package-lock.json`
- `portfolio/package.json`
- `portfolio/src/App.jsx`
- `portfolio/src/components/Contact/Contact.jsx`
- `portfolio/src/components/Contact/contact.css`
- `portfolio/src/components/Hero/Hero.jsx`
- `portfolio/src/components/Hero/hero.css`
- `portfolio/src/components/Navbar/Navbar.css`
- `portfolio/src/components/Navbar/Navbar.jsx`
- `portfolio/src/components/Portfolio/Portfolio.jsx`
- `portfolio/src/components/Portfolio/portfolio.css`
- `portfolio/src/index.css`
- `portfolio/src/main.jsx`
- `portfolio/vite.config.js`

### Removed obsolete source
- `portfolio/src/assets/react.svg`
- `portfolio/src/components/Cursor/Cursor.jsx`
- `portfolio/src/components/Cursor/cursor.css`
- `portfolio/src/components/Services/Services.jsx`
- `portfolio/src/components/Services/services.css`
- `portfolio/src/components/Sidebar/Links/Links.jsx`
- `portfolio/src/components/Sidebar/Sidebar.jsx`
- `portfolio/src/components/Sidebar/Togglebuttons/ToggleButton.jsx`
- `portfolio/src/components/Sidebar/sidebar.css`
- `portfolio/src/components/parallax/Parallax.jsx`
- `portfolio/src/components/parallax/parallax.css`

### Preserved/moved assets
- `portfolio/public/broom.png → portfolio/docs/legacy-assets/broom.png`
- `portfolio/public/building.png → portfolio/docs/legacy-assets/building.png`
- `portfolio/public/chatbot.png → portfolio/docs/legacy-assets/chatbot.png`
- `portfolio/public/chattingApp.png → portfolio/docs/legacy-assets/chattingApp.png`
- `portfolio/public/github.png → portfolio/docs/legacy-assets/github.png`
- `portfolio/public/hero1.png → portfolio/docs/legacy-assets/hero1.png`
- `portfolio/public/instagram.png → portfolio/docs/legacy-assets/instagram.png`
- `portfolio/public/linkedin.png → portfolio/docs/legacy-assets/linkedin.png`
- `portfolio/public/mountains.png → portfolio/docs/legacy-assets/mountains.png`
- `portfolio/public/notepad.png → portfolio/docs/legacy-assets/notepad.png`
- `portfolio/public/people.webp → portfolio/docs/legacy-assets/people.webp`
- `portfolio/public/recipleBlog.png → portfolio/docs/legacy-assets/recipleBlog.png`
- `portfolio/public/scroll.png → portfolio/docs/legacy-assets/scroll.png`
- `portfolio/public/stars.png → portfolio/docs/legacy-assets/stars.png`
- `portfolio/public/twitter.png → portfolio/docs/legacy-assets/twitter.png`
- `portfolio/public/ufo.png → portfolio/docs/legacy-assets/ufo.png`
- `portfolio/public/videoMeet.png → portfolio/docs/legacy-assets/videoMeet.png`

## 6. Dependencies

Added `prop-types` as a direct dependency (the original source used it transitively) and the official `@vitejs/plugin-react` build plugin. Updated Vite from 5 to 7.3.6 to clear inherited development-server advisories. The SWC plugin was replaced with the official React plugin because this Windows environment rejected its native cache ownership; the app remains React 18 + Vite. Removed `@react-three/drei`, `@react-three/fiber`, `three`, `@mui/material`, `@emotion/react`, `@emotion/styled`, and unused `dotenv`. Framer Motion, EmailJS and React Hot Toast remain. No new UI framework was introduced. Browser verification, Lighthouse, and Prettier were installed only in the scratch tools directory, not added to the application.

`npm install` completed. The refreshed dependency tree reports **0 vulnerabilities**.

## 7. Performance and accessibility

- Main JS bundle: approximately 290.24 kB / 95.48 kB gzip; lazy EmailJS chunk: 3.57 kB / 1.46 kB gzip.
- CSS: 19.35 kB / 4.69 kB gzip.
- Displayed portrait and three project images total approximately 129 kB as WebP, compared with 2.28 MB for their source PNGs.
- No web font request or WebGL render loop; native cursor remains intact.
- One h1, hierarchical headings, landmarks, semantic anchors/buttons, skip link, visible focus rings, descriptive image alternatives, labeled fields, and live form status.
- Reduced-motion setting disables CSS motion/smooth scrolling and Framer animations; touch movement does not drive the hero orb.
- Embedded axe-core audits at desktop and mobile widths reported **0 violations**. Gradients produce manual-review flags for contrast; primary/secondary/muted tokens were checked against the darkest surfaces and the strongest tinted background. Muted text was raised to improve the contrast margin.
- Lighthouse mobile-emulation report from the local production build:

| Category | Score |
| --- | --- |
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| Seo | 100 |

Measured FCP: 1.4s; LCP: 1.7s; total blocking time: 10ms; CLS: 0. The report was recorded immediately before the final active-section reset correction; that correction was separately rebuilt and browser-verified. Local simulated scores do not establish production field performance.

## 8. Content, links, and deployment inputs

No visible placeholder links or fabricated repositories/demos are present. Internal work is presented at a high level with conceptual diagrams, without confidential source or client-sensitive implementation details. No separate PgVala/Hattyhood dates were fabricated; their resume lists a combined Sep–Nov 2023 range. Optional refinements: supply separate dates and approved public GitHub/demo links for internal case studies if available. Additional skills such as Redis/PostgreSQL/LangChain/SSE/Kubernetes/Anthropic can be added after confirmation.

Original EmailJS browser identifiers were migrated to ignored `.env.local` in the implementation checkout. Source ZIP and patch exclude local environment files. A separate `Portfolio_V2_EmailJS.env` deliverable holds those public browser identifiers; copy its values into `.env.local` or host environment settings. It contains no private EmailJS credentials. The live service, quota, template configuration, and real inbox delivery were **not** tested by sending email. Form success/failure was tested with local mocks.

External checks: GitHub profile HTTP 200; VideoMeet HTTP 200 (MERN-VideoApp); all four YouTube videos returned HTTP 200 with matching walkthrough titles via YouTube oEmbed. LinkedIn returned anti-automation HTTP 999; its user-supplied profile URL is retained. Local resume endpoint returned HTTP 200 with `application/pdf` and a valid `%PDF-1.4` signature. Automated browser download was canceled in this environment; the file's HTTP availability is verified, actual browser saving is not claimed.

## 9. Lint result

`npm run lint`: **PASS**, no errors or warnings, with `--max-warnings 0`.

## 10. Build and behavior results

`npm run build`: **PASS**, including full-content HTML prerendering (approximately 28.7 kB final HTML). Compiler execution required the host's elevated runner due to Windows sandbox directory restrictions; the project itself builds correctly there.

`npm test`: **3/3 PASS**, configuration guard, success contract, and delivery-error propagation.

Browser verification:
- Vite development page and production preview render meaningful content; no Vite overlay.
- Production page has no console errors, React warnings, or hydration errors.
- 320, 375, 430, 768, 1024, 1440 and 1920 px widths: no horizontal overflow; screenshots captured.
- Mobile menu opens; Escape closes it and restores toggle focus; choosing Work closes it and focuses the destination.
- Desktop Experience navigation and returning to Home update/clear the active state correctly.
- Internal anchors all resolve; exactly one h1; all rendered images have alt text.
- Engineering highlights and all four older projects expand correctly.
- Lazy project image loads successfully and displays its original screenshot.
- Required-field validation works; blocked/mock transport failure preserves input and allows retry; delayed local mock shows disabled submit and aria-busy; success resets the form and re-enables submission. No real email was delivered.
- Reduced-motion emulation reports `scroll-behavior: auto` and leaves the full portfolio usable.

## Using the deliverables

`Portfolio_V2_Source.zip` contains the updated repository source (excluding `.git`, `node_modules`, `dist`, and local env files). Run setup from its `portfolio/` folder and provide the public EmailJS environment values.

`Portfolio_V2.patch` is a binary-capable Git patch against the base commit. From an unchanged checkout at that commit, run `git apply --check Portfolio_V2.patch`, then `git apply Portfolio_V2.patch`. The patch is separately checked against an archive of the original base.

`Portfolio_V2_Production.zip` contains the built static `dist/` output. Netlify can instead build the source using the included repository-root `netlify.toml`.

The production preview is served locally at `http://127.0.0.1:4173/`. No remote branch was pushed, PR created, or production deployment changed.

## Theme update

Theme cycling, saved dark preference after reload, live system-theme updates, and 320px layout were verified in the production preview. Lint, 3 contact tests, and production build pass. Existing public EmailJS identifiers are configured in netlify.toml; real delivery remains unverified.
