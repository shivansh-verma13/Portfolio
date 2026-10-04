# Portfolio V2 audit and decisions

Audited the full source tree, every JSX and CSS file, package manifest, lockfile, Vite/ESLint configuration, index.html, README, and every public asset before coding. Also inspected the deployed site's accessibility tree and visual state.

## Original architecture

React 18 / Vite application with Navbar → Hero → full-screen parallax → Services → parallax → Portfolio → Contact. Framer Motion drives entrances, scroll transforms and cursor tracking. Hero uses a dense distorted Three.js sphere and a floating portrait. Material UI is used only for theme/media queries. EmailJS sends a form; React Hot Toast displays outcomes. Content lives directly in components. All sections inherit 100vh and mandatory scroll snapping.

## Findings and implementation

| Area | Original finding | V2 change |
| --- | --- | --- |
| Positioning | Student-oriented hero and generic services; no professional experience | Software engineering positioning; profile, four experience cards, impact and education |
| Navigation | Unlabeled toggle, clipped sidebar links can remain focusable; identity hidden on mobile | Named disclosure with hidden closed state, Escape/outside/focus handling, sticky navigation and section state |
| Semantics | Multiple h1s and anchors inside buttons | One h1, section h2s, card h3s, native anchors/buttons and details |
| Mobile | Fixed heights, negative margins and hidden service descriptions | Content-height sections, mobile-first grid changes, no substantive mobile content removed |
| Motion | 500px entrance/scroll transforms, infinitely moving giant text, continuous WebGL | Restrained once-only reveals and spring-based orb pointer movement; reduced-motion support |
| Cursor | Per-mousemove React state, no pointer-events guard or preference detection | Removed in favor of native pointer and a local hero interaction; no global cursor listeners |
| Projects | Duplicate numeric ID 4, index keys, basic projects dominate, generic alt text | Unique IDs; professional systems first; detailed cards and older projects disclosure; descriptive images |
| Form | Four-second reveal delay, placeholders without labels, no loading lock; clears on failure | Immediate labeled form, native validation and trim checks, loading lock, live feedback, failure preservation, direct email |
| Configuration | EmailJS identifiers directly in source | Ignored local environment and tracked blank `.env.example`; deployment setup documented |
| CSS | Global span rules, global textarea selectors, repeated button rules, scattered colors, empty media queries | Shared tokens and primitives with scoped section styles |
| Assets | Large PNGs and decorative scene images | WebP derivatives for displayed images; obsolete art preserved outside the production public directory |
| Dependencies | Three/R3F/Drei and MUI/Emotion used for costly decoration/media queries; unused dotenv | Removed unused runtime packages; native media queries and lightweight SVG; official React plugin for portable builds |
| SEO | Name-only title, no description/social/structured metadata | Complete metadata, favicon, social image, Person schema, robots and sitemap; prerendered HTML |
| Quality | Template README and missing direct prop-types declaration | Maintenance/setup README, shared PropTypes, strict lint, contact transport tests |

## Content provenance

Current role dates, SecureBlink dates, education, GPA, earlier internship range and established metrics come from the supplied resume. New AI work, latency figures and project details come from the user's instructions. No customer-sensitive implementation details or made-up project URLs are included. Institution names are omitted from the public case study to keep attention on the engineering work. No exact separate dates are assumed for the earlier internships.

## Preserved personality and features

Dark palette, restrained violet accents, sphere motif, Framer Motion, portrait, original public project/demo URLs, project images, EmailJS and toast feedback remain. Oversized cartoon parallax is replaced by a lighter engineering visualization; the global cursor is replaced by local pointer response. Older recipe/notepad/chat projects remain available. No framework migration or new design system dependency was introduced.
