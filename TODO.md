# Thunder-Art Roadmap & TODO

Tracking upcoming tasks, polish items, and future feature ideas for [Thunder-Art](https://github.com/Jaketa-CS/Thunder-Art).

---

## 🎯 Short-Term Tasks (Immediate Priority)

- [ ] **Rich Social Embeds & SEO (OpenGraph & Twitter Cards)**
  - Update `thunder-web/index.html` with OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Card (`twitter:card`, `twitter:image`) meta tags.
  - Set `<meta name="theme-color" content="#00E5FF">` for electric cyan Discord embed borders.
  - Ensure links shared on Discord, Telegram, Bluesky, and Twitter generate rich art previews with character bio.

- [ ] **Modernize `README.md`**
  - Add GitHub Actions CI workflow status badge (`CI: passing`).
  - Document the updated tech stack: React 19, Tailwind CSS v4, TypeScript, Vite, Vitest (`happy-dom`), Playwright E2E.
  - Provide quick terminal commands for running the dev server, linting, unit tests, and Playwright tests.

- [ ] **Git Branch Housekeeping**
  - Remove merged local feature branches (`refactor/tailwind-components` and `feat/tailwind`) to keep `git branch` clean.

---

## 🎨 Content & Portfolio Updates

- [ ] **Hero Section Activation**
  - Download or render background loop video (`hero.mp4`).
  - Place in `thunder-web/public/hero.mp4`.
  - Un-comment and enable the video banner in `thunder-web/src/components/HeroSection.tsx`.

- [ ] **Gallery Expansion**
  - Add new illustrations and animation loops to `thunder-web/src/data/mockArt.ts`.
  - Verify tags (`Animation`, `Illustration`) for filter pill support.

- [ ] **Convention Log Book Maintenance**
  - Review 2026 convention attendance in `thunder-web/src/components/ConSchedule.tsx`.
  - Add booth numbers or updated convention logos as confirmed.

- [ ] **Commission Pricing & Terms**
  - Review pricing tiers and add-ons in `thunder-web/src/data/commissionsData.tsx`.
  - Toggle commission status (`OPEN` / `CLOSED`) in `thunder-web/src/data/siteConfig.ts` when accepting slots.

---

## 🚀 Future Enhancements (Backlog)

- [ ] **Serverless Commission / Contact Webhook**
  - Create a lightweight serverless edge function (e.g. Cloudflare Worker or Telegram Bot webhook) for on-site commission request submissions without exposing email.
- [ ] **Dynamic Queue Integration**
  - Fetch live public commission status directly from Trello or Notion API.
- [ ] **Cloud Asset Storage**
  - Transition large media files to Cloudflare R2 / S3 if GitHub repository size grows significantly.

---

## ✅ Completed Milestones

- [x] **Tailwind CSS v4 Migration:** Converted all components, pages, and modals from verbose inline styles (`style={{ ... }}`) to pure utility classes.
- [x] **Cascade Layer Reset Fix:** Moved global resets to `@layer base` in `index.css` so utility padding/margins render cleanly.
- [x] **UI/UX Polish:** Fixed vertical alignment in `Navbar`, dynamic aspect ratios (`aspect-square` for Icons/Badges) in `CommissionItem`, and Framer Motion viewport animation triggers in `ConSchedule` and `FursuitMakers`.
- [x] **CI & Automated Testing Suite:** Set up ESLint, Vitest + `happy-dom`, Playwright E2E with full-page dark/light screenshot verification, and TruffleHog secret scanning in GitHub Actions.
- [x] **Dependabot Hardening:** Configured `ignore: semver-major` in `.github/dependabot.yml` to prevent breaking peer dependency updates.
- [x] **Zero Vulnerabilities:** Upgraded dependencies to achieve 0 audit vulnerabilities across root and `thunder-web`.
