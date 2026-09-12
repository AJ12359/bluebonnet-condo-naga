# Bluebonnet Condo Naga — Website v2

Clean, maintainable, production-ready static site.  
**Stack:** HTML · CSS · Vanilla JS · Vercel (hosting) · GitHub (CI/CD)

---

## Files

```
bluebonnet-v2/
├── index.html      ← Main page (all 8 sections)
├── styles.css      ← Full design system (tokens, components, responsive)
├── script.js       ← Photos config + all interactions
├── privacy.html    ← Privacy Policy + Terms of Use (RA 10173 compliant)
├── images/         ← CREATE THIS FOLDER — put your photos here
│   ├── bedroom.jpg
│   ├── living-room.jpg
│   └── ...
└── README.md       ← This file
```

---

## Step 1 — Add your photos

Open `script.js` and find the `PHOTOS` array near the top.  
Fill in the `src` field for each photo:

```js
const PHOTOS = [
  { src: 'images/bedroom.jpg',     alt: 'Bedroom with double bed...', slot: 'Bedroom',     hero: true },
  { src: 'images/living-room.jpg', alt: 'Living room with Smart TV',  slot: 'Living room', hero: true },
  // ... etc
];
```

**Photo tips:**
- Put files in an `images/` folder next to `index.html`
- Recommended size: 1600×1066px, JPEG 80% quality (~300–600 KB each)
- Name them simply: `bedroom.jpg`, `pool.jpg`, `kitchen.jpg`
- First 4 photos with `hero: true` appear in the top mosaic strip
- All photos appear in the gallery and lightbox

---

## Step 2 — Update contact info

In `index.html`, search for `61584902198196` — replace with your actual link if you get a different Facebook page URL or add Messenger/WhatsApp:

```html
<!-- Messenger deep link (replace PAGE_ID) -->
href="https://m.me/PAGE_ID"

<!-- WhatsApp (replace with your number, no + or spaces) -->
href="https://wa.me/639XXXXXXXXX"
```

---

## Step 3 — Add VRBO listing (when ready)

In `index.html`, find the disabled VRBO card and replace it:

```html
<!-- BEFORE (disabled) -->
<div class="pcard pcard-disabled">

<!-- AFTER (live link) -->
<a class="pcard" href="https://www.vrbo.com/YOUR-LISTING-ID" target="_blank" rel="noopener noreferrer">
```

---

## Deploy to Vercel (free, CI/CD auto-deploy)

### First time:

1. Create a free account at [vercel.com](https://vercel.com) — sign in with GitHub
2. Create a GitHub repository: [github.com/new](https://github.com/new)
3. Upload these files to the repo (drag-and-drop in GitHub's web UI, or use `git push`)
4. In Vercel → "Add New Project" → pick your repo → click **Deploy**
5. No build settings needed — it's a static site

You'll get a free URL like `bluebonnet-naga.vercel.app` immediately.

### Add a custom domain (optional, ~₱700/year):

1. Buy a domain (Namecheap, GoDaddy, or local PH registrars)
2. In Vercel → Project → Settings → Domains → Add domain
3. Follow Vercel's DNS instructions (takes ~10 minutes)

### After that — updating the site forever:

```bash
# Make a change to any file, then:
git add .
git commit -m "Update amenities list"
git push

# Vercel auto-deploys in ~30 seconds. Done.
```

---

## Custom domain email (optional, looks professional)

Add a contact email like `hello@bluebonnet-naga.com`:
- Free option: [Zoho Mail free tier](https://www.zoho.com/mail/free-email-hosting.html) — 1 account free with custom domain
- Paid option: Google Workspace (~₱200/month)

---

## Privacy & Legal

`privacy.html` covers:
- Philippines Data Privacy Act (RA 10173) compliance
- Cookie consent (banner in `script.js`)
- Third-party disclosures (Airbnb, Facebook, Google, Vercel)
- House rules (incorporated by reference)
- Terms of Use

**Update before launch:**
- Replace placeholder contact email in `privacy.html` with your real email or Messenger link
- If you add analytics (Google Analytics, Plausible), update Section 7 (Cookies) in `privacy.html`

---

## 10-year maintenance plan

| Task | Frequency | How |
|------|-----------|-----|
| Update photos | As needed | Edit `PHOTOS` in `script.js`, push |
| Update text/prices | As needed | Edit `index.html`, push |
| Renew domain | Yearly | Your registrar sends a reminder |
| Check Vercel free plan | Yearly | Vercel emails if limits change |
| Review privacy policy | Yearly | Check NPC guidelines at privacy.gov.ph |

No npm packages. No framework updates. No server to patch. This site will work identically in 2035.

---

## Structure notes (for future developers)

- **CSS custom properties** in `:root` — change colors/fonts site-wide by editing 6 lines
- **PHOTOS array** in `script.js` — single source of truth for all images
- **Semantic HTML** — proper `<main>`, `<article>`, `<nav>`, `<section>`, `<footer>` for SEO
- **ARIA labels** on all interactive elements — screen reader accessible
- **`prefers-reduced-motion`** respected — animations skipped for accessibility
- **Focus styles** visible — keyboard navigable throughout