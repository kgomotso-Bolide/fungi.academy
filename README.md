# Fungi · AI Skills Programme — Website Blueprint

> **AI Skills for the Modern Workforce**
> Professional online AI training for Fungi teams, delivered in association with Centenary Networks,
> a QCTO-accredited Skills Development Provider — plus a nationally accredited qualification for
> technical staff who want to take it further.

This repository is the public-facing website for the programme. This README is the **blueprint**:
it captures the positioning and messaging spine and documents how the site is built so anyone can
maintain or extend it.

---

## 1. The Spine (positioning — do not drift from this)

**What we sell:** **courses.** Professional online AI short courses for teams, plus the nationally
accredited **Occupational Certificate: Computer Technician** offered alongside them.

> ⚠️ **Do not reintroduce the "credit-bearing" framing.** An earlier revision positioned the product
> as credit-bearing modules laddering toward a qualification, with B-BBEE Skills Development returns
> as the buying reason. That was reverted (30 Jul 2026, boss's instruction): **no "credit-bearing,"
> no "stackable credits," no B-BBEE sales angle.** We offer courses, straight. Credit counts may
> still appear as a factual attribute of the accredited qualification (NQF 5, 282 credits) — never
> as the product model.

The three supporting pillars on the home page:

1. **Backed by an Accredited Provider** — the academy operates in association with Centenary Networks, a QCTO-accredited Skills Development Provider, so accredited qualifications carry real national recognition.
2. **Built for Business** — investing in your people supports workforce transformation goals, turning staff development into measurable return.
3. **Fully Online** — learn from anywhere in South Africa; flexible virtual delivery, no travel, no downtime.

**Audience:** Fungi Utilities — a **digital utility business** (smart metering, billing, utility data). Framing is workforce
development for an AI-disrupted sector, aimed at decision-makers and the metering technicians, field and
billing teams who'll learn.

**The industry line:** *"For a digital utility business, this means metering technicians, field teams, and billing and support
teams building real technical and AI capability — practical courses that fit around the working day,
and a credentialed path for the people who want to take it further as utilities go digital."*

**Primary calls to action:** `Explore Courses` · `Talk to Our Team`

### Approved hero copy (current)
- **Badge / eyebrow:** AI · Live & Hands-On — AI Skills · Online · South Africa
- **Headline:** AI Skills for the *Modern Workforce*
- **Subtext:** Professional online AI training for your teams — delivered by Fungi, in association with
  Centenary Networks, a QCTO-accredited Skills Development Provider.

---

## The Engine — One Platform, Many Companies (white-label)

This site is the **first instance of a reusable platform ("the engine")**. The *same* platform will be
**replicated across Newgx-invested companies** — e.g. **SPS, Fungi, Maziv, Inhance** — each as its own
website: identical engine and product model, different company brand.

The **product never changes** between companies: professional online AI courses, plus an accredited
qualification delivered through an accredited provider.

| Changes per company (the re-skin) | Stays the same (the engine) |
|---|---|
| Company name & logo (`sps-dark-logo.svg`) | Page structure, sections & components |
| Brand palette (`:root` colour tokens in `styles.css`) | Design system & component styling |
| Contact details (email, phone, hours) | The three pillars + courses-first positioning |
| Industry line (Fungi = digital utility; SPS = solar; etc.) | `course.html` template + catalog/content model |
| Hero wording nuance | Video-lightbox + PDF-download mechanics |
| Accreditation partner/number (if not Centenary Networks) | Nav, footer, CTA patterns (`Explore Courses` / `Talk to Our Team`) |

**Recommended build:** centralise every company-specific value into a single **`BRAND` config block**
(name, logo path, accent colours, contact, industry line, accreditation details). Launching a new
company site then = copy the repo, edit one block, drop in the logo. *Status: proposed — not yet
refactored; the current site has Fungi values inline.*

**Repo model:** one repo + GitHub Pages site per company (this one is `kgomotso-bolide/fungi.academy`).

---

## 2. Brand & Design System

| Token | Value | Use |
|-------|-------|-----|
| **Cyan (primary)** | `--orange: #00a1c6` / `--orange-deep: #0083a3` / `--orange-light: #33c2e0` | Nav bar, buttons, eyebrows, CTA bands, card titles |
| **Deep teal (secondary)** | `--green: #0e6d80` / `--green-deep: #0a5666` | QCTO badge, accents |
| Canvas | `#ffffff` / `#f4f8fa` (white / cool off-white) | Backgrounds |
| Ink | `#2b2b2b` / `#4d4c4d` | Body & heading text |
| Dark | `--dark: #10333f` | Nav-adjacent dark sections, footer |

**Rule:** the site leads with the **Fungi cyan** (#00a1c6, taken from fungienergy.co.za), with deep teal as the secondary accent, on a white
canvas. (A monochrome black/white/grey revision existed briefly and was reverted on 30 Jul 2026 —
don't reintroduce it.)

- **Logo:** `Fungi-logos-03.webp` — supplied **white-on-transparent**. This is why the nav bar is cyan rather than white: a white bar would make the logo invisible. Swap in a dark version before changing the nav background.
- **Type:** system font stack led by Inter — no external font files.
- **Imagery:** real topic-matched photography (Unsplash CDN) on course cards; the rest is
  self-contained CSS gradients + inline SVG, so there are almost no binary image assets to manage.
- **Motion:** subtle scroll-reveal; a low-key grey neural-network canvas in the hero; all respects
  `prefers-reduced-motion`.

---

## 3. Site Map & Files

```
sps/
├── index.html              # Home (lean): hero, 3 pillars, popular-courses teaser, CTA
├── courses.html            # Courses hub: full catalogue + accredited qualification
├── about.html              # About: positioning, energy-sector line, accreditation
├── ai-in-action.html       # Interactive AI demo + impact stats
├── contact.html            # Contact details + working enquiry form
├── course.html             # ONE data-driven COURSE template — renders any course via ?c=<slug>
├── ai-fundamentals.html    # Legacy URL → redirects to course.html?c=ai-fundamentals
├── thanks.html             # Form submission confirmation page
│
├── styles.css              # SHARED stylesheet for every page (orange/green design system)
├── site.js                 # SHARED: nav toggle, scroll shadow, scroll-reveal
├── cards.js                # SHARED: course-card photo banners + links (Home + Courses)
├── assistant.js            # SHARED: client-side "Ask the Academy" AI assistant
├── neural.js               # Home hero neural-network canvas
├── demo.js                 # AI-in-Action typewriter demo + counters
│
├── sps-dark-logo.svg       # Brand mark
├── resources/*.pdf         # Downloadable PDF resources (placeholders, swappable)
├── .gitattributes          # Marks PDFs/images as binary (prevents corruption)
└── README.md               # This blueprint
```

**Multi-page, shared-asset architecture** (no build step). Every page links `styles.css` + `site.js`
+ `assistant.js`, so design/behaviour lives in **one place** — ideal for the white-label goal
(re-skin = edit `styles.css` tokens + swap logo). Nav links navigate between real pages; the current
page is marked with `class="active"`.

### Key pages
- **Home / About / Courses / AI in Action / Contact** — one independent, lean, course-focused page each.
- **`course.html`** — the **Harvard-Online-style** COURSE template, **video-heavy with PDF
  downloads**, driven by a JS catalog (20 courses, each with its own curriculum). Sections: hero with
  intro video · "what you'll learn" · module/lesson accordion (video lightbox) · video gallery ·
  downloadable resources · facilitator · CTA. ("Module" here means a *unit inside a course* — a
  chapter of lessons — not a product.)

---

## 4. Content Model

All course content lives in one place: the **`COURSES` catalog** inside `course.html`.

```js
"<slug>": {
  title:  "…",            // course title
  cat:    "Business",     // category → drives the "what you'll learn" defaults
  mode:   "Online · Self-paced",
  level:  "Beginner",
  img:    "<unsplash-id>", // hero/card photo
  lead:   "…",            // description paragraph
  avail:  "Coming Soon",  // optional status
  accred: true,           // optional — flags the accredited qualification
  modules:[ { t:"Module title", lessons:[ "Lesson 1", … ] }, … ]  // optional bespoke curriculum
}
```

- **20 courses** are catalogued today. Cards on the home page auto-link to `course.html?c=<slug>`.
- **Videos:** each lesson has a `data-src`. Empty = "unlocks on enrolment"; `SAMPLE` = a placeholder
  preview stream. Swap in a real `.mp4`/Vimeo/YouTube URL to go live.
- **PDFs:** the five files in `resources/` are real, valid, downloadable placeholders. Replace the
  files (keep the names) to ship real content.

> ⚠️ **Placeholder content:** module outlines, durations ("6 weeks / 18 videos"), the facilitator,
> the sample videos and the PDFs are **demonstration placeholders**. The footers say so. Replace
> before any public launch.

---

## 5. Tech Stack & Hosting

- **Static HTML/CSS/JS** — no framework, no backend, no database, no build.
- **Hosting:** GitHub Pages (free), served from `main` branch root.
  - Repo: `https://github.com/kgomotso-bolide/fungi.academy`
  - Live: **https://kgomotso-bolide.github.io/fungi.academy/**
- **Deploy = push.** Every push to `main` triggers a Pages rebuild (~1 min).

```bash
# from the fungi/ folder
git add -A
git commit -m "…"
git push          # site updates automatically
```

---

## 6. How To… (maintenance recipes)

- **Add a course** → add one entry to the `COURSES` object in `course.html`, and one
  `["<title fragment>","<slug>","<unsplash-id>"]` row to the `CARDS` array in `cards.js`.
  No new file needed.
- **Swap in a real video** → set the lesson's `data-src` to the video URL in the catalog.
- **Swap a PDF** → replace the file in `resources/` with the same filename.
- **Change copy** → hero copy lives in `index.html`; course copy in the `COURSES` catalog.
- **Adjust colour** → edit the CSS variables in `:root` in `styles.css`.

---

## 7. Accreditation (legal — keep verbatim)

> Accredited qualifications are delivered in association with **Centenary Networks (Pty) Ltd**,
> accredited by the **Quality Council for Trades and Occupations (QCTO)** as a Skills Development
> Provider. Accreditation No. **07-QCTO/SDP180526182035**, valid **15 May 2026 – 14 May 2031**.

The accredited qualification itself is the **Occupational Certificate: Computer Technician**
(NQF 5, Qualification ID **101408**, 282 credits).

Per the boss, this block should appear on the **credentials / about section** (it's rendered in the
About section's accreditation note) as well as the footer.

Non-accredited short courses must be labelled as such; only the Computer Technician pathway is the
accredited qualification.

---

## 8. Roadmap / Open Items

- [x] **Reverted to courses-first positioning (30 Jul 2026)** — removed all credit-bearing / stackable-credits / B-BBEE language site-wide, restored the courses-first palette, renamed `modules.html` → `courses.html` and "Modules" → "Courses" throughout. See the warning in §1.
- [x] **Per-course outlines** — each of the 20 courses has its own tailored curriculum (`MOD_*` arrays in `course.html`).
- [x] **Catalogue expanded to 800 (4 Aug 2026)** — announcement band + stat row on the home page, a catalogue notice on `courses.html`, and updated copy on about / skills-gap / the assistant. Framed as a **mixed catalogue** ("800 qualifications and courses", accredited items badged individually) because the accreditation status of the full 800 is not yet confirmed — see the open item below before upgrading that wording.
- [x] **Intake announced: 10 September 2026 (12 Aug 2026)** — Centenary confirmed the start date, so it's
  on the landing page as a dark band under the hero, on the catalogue card, on the qualification page
  (via a `starts` field on the course record) and as the planner default. The date is the provider's;
  the per-module dates on `pm-schedule` are still ours, and that page now names the difference rather
  than blurring it. `OFFICIAL_DATES` stays null — we have a start, not a programme calendar.
- [ ] **Confirm what the 800 actually are** — how many are accredited, and under whose scope (Centenary's QCTO accreditation, or another provider). "Accredited qualification" is a regulated claim in SA and the footer already cites Centenary's accreditation number. If all 800 are accredited under that scope, the wording can be strengthened site-wide in one pass.
- [ ] **Load the remaining catalogue** — only 20 items are on the site; the copy is explicit that the rest is coming and tells staff to ask HR in the meantime. The Skills Gap tool also only recommends from the 20, and says so.
- [x] **Internal voice (3 Aug 2026)** — site rewritten as Fungi's in-house academy speaking to Fungi staff, not a provider selling to clients. Signed GM message from Matt Koller on the home page; "Enquire for pricing" → "Fully funded by Fungi"; "Talk to Our Team" → "Register Your Interest"; group-rate/corporate-quote copy removed.
- [x] **Working registration form** — wired to **FormSubmit.co → academy@fungienergy.co.za** (redirects to `thanks.html`); fields are internal (employee number, department, line manager, course). *First submission triggers a one-time activation email to academy@fungienergy.co.za — click it or registrations are silently dropped.* General enquiries listed as `info@fungienergy.co.za`. **Phone number is still the `012 345 6789` placeholder.**
- [x] **AI assistant** — self-contained client-side helper (`Ask the Academy`) on every page: finds courses, explains how the academy works, routes to `academy@fungienergy.co.za`. No backend/API key (safe on static hosting); upgradeable to a live LLM later if a backend is added.
- [x] **Fungi photography** — `images/matt-koller.jpg` (GM message, home), `images/class-one-2025.jpg` + `images/six-years-team.jpeg` (paired poster block on home and about). Branded posters with baked-in text — display whole, do not crop.
- [x] **Project Manager NQF 5, in full (12 Aug 2026)** — ported from SPS so all three academies carry
  the same structure. Adds the registered qualification (SAQA **101869**, curriculum 121905000, NQF 5,
  240 credits) plus everything around it:
  - `module.html` + `pm-modules.js` — the 11 knowledge modules as study guides: 51 topics with their
    registered weightings, 265 sub-topic areas, the defining idea for each. Credits sum to 80 and every
    module's weightings sum to 100, asserted in the browser so a bad edit fails loudly.
  - `pm-pathway.html` — how the Google Project Management Certificate maps onto the qualification.
    Carries **Centenary's own 50% overlap figure**, attributed to them, not our earlier mapping.
  - `pm-schedule.html` / `pm-schedule.js` — pace → module dates → `.ics` calendar invites. Its
    `BRAND`/`UID_HOST` constants name this academy, because they end up inside the downloaded file.
  - `pm-progress.html` / `pm-progress.js` — self-reported progress, submitted to HR, printable with a
    manager countersignature. Deliberately **no backend**; see the SPS README for the POPIA reasoning.
  - `locks.js` — the switch for narrowing the catalogue to a named set of courses. **Off here** (12 Aug
    2026): the whole catalogue is open. SPS runs it on while the Project Manager material is prepared;
    each academy sets it independently. Set `LOCKS_ON = true` in that one file to narrow this one, and
    the `OPEN_TITLES` / `OPEN_SLUGS` lists are left intact so it returns to exactly its previous state.
  - **Documents are not hosted here.** Assessment papers, marking memos and facilitator guides are
    excluded outright; learner guides and workbooks sit behind Drive/SharePoint links set in `DOCS`.
  - Bug found during this port: `pm-progress.js` hardcoded `window.SPSProfile`, so progress silently
    disabled itself on Fungi (`FungiProfile`). It now discovers whichever profile global the site
    exposes. Worth remembering — the three sites do not share global names.
- [ ] **Fill in the `DOCS` links in `pm-modules.js`** — 33 slots (guide/workbook/video × 11) are `null`,
  so every module currently reads "Ask HR for a copy". Set each file's sharing permissions *before*
  pasting its link: these pages are public, so a link is only as private as its own sharing setting.
- [ ] **Real content** — videos + PDFs + facilitator bios from Fungi/Centenary.
- [ ] **Confirm "Fully funded by Fungi"** — appears on 26 course cards as a factual claim; soften if any course needs budget/manager approval.
- [ ] **Real phone number** — replace the `012 345 6789` placeholder on the contact page and in the assistant.
- [ ] **Custom domain** (e.g. `academy.sps…`) once decided.

---

*Project for Fungi Utilities (Pty) Ltd, in association with Centenary Networks (QCTO).
Blueprint shared with the SPS Academy site (same engine, different brand).*
