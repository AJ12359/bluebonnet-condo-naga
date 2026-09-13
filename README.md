BLUEBONNET CONDO NAGA — Complete Project Blueprint
Everything built, how to edit, and how to grow it.
=====================================================

THE WEBSITE AT A GLANCE
Name: Bluebonnet Condo Naga
Purpose: Marketing & info site — drives bookings to Airbnb
Hosting: Vercel (free forever) — LIVE at bluebonnet-condo-naga.vercel.app
GitHub: github.com/AJ12359/bluebonnet-condo-naga
Stack: HTML · CSS · Vanilla JavaScript (no frameworks, no npm)
Legal: Philippines Data Privacy Act RA 10173 compliant
Built: September 2026
Status: DEPLOYED AND LIVE

FILE STRUCTURE
bluebonnet/
├── index.html      ← Main website (all 10 sections)
├── styles.css      ← All design: colors, fonts, layout, responsive
├── script.js       ← Photos, review stats, lightbox, tabs, nav, cookies
├── privacy.html    ← Privacy Policy + Terms of Use (standalone page)
└── images/         ← All real photos (bedroom, living-room, kitchen,
                       pool, bathroom, balcony, dining — mixed .jpg/.jpeg/.avif)

ALL SECTIONS (in order)

HERO
- Full-bleed photo strip (4 photos + "Show all photos" button) — LIVE PHOTOS
- Tagline: "We share the beauty of Bluebonnet with you."
- Location label: Residencia Magayon, Naga City, Camarines Sur
- Badges: ★ 5.0 · Guest Favorite | Up to 4 guests | Self check-in | Free parking
- Facts strip: price/night (STILL PLACEHOLDER ₱X,XXX) · 34 sqm · Floor 5 · ~25 min to airport
- Booking card: Book on Airbnb button + auto-filled review stats (see REVIEWS below)
- AirCover guarantee note

ABOUT
- Welcome paragraph (story of the condo)
- Unit facts: 34 sqm · Floor 5 · ~25 min to Naga Airport (building-opened year removed — not confirmed)
- 4 feature highlights: Self check-in | Gated & secure | Shared pool | Guest parking
- Host card: Salvacion · Responds within an hour · 100% response rate · 8 months hosting
- Two stacked photos (living room main + balcony accent)

GALLERY
- 7-photo mosaic grid (1 featured big + 6 regular) — LIVE PHOTOS
- Click any photo → opens lightbox viewer
- Lightbox: keyboard arrows (← →), Escape to close, photo counter (1/7)

VIDEO TOUR
- NOT embedded — links out to Facebook instead (opens in new tab)
- Reason: Facebook reel could not be reliably downloaded (yt-dlp parsing
  error) or embedded (iframe blocked/"Video Unavailable" for logged-out
  visitors). Linking out avoids a broken embed.
- Known limitation: visitors need to be logged into Facebook to actually
  play the video once there.
- To upgrade later: get the ORIGINAL video file (not from Facebook) from
  whoever recorded it → upload to YouTube (Unlisted) → swap the link back
  to a proper YouTube iframe embed for a no-login viewing experience.

AMENITIES (5 tabs)
- Comfort: AC, 50" Smart TV, Netflix, WiFi, full bed + sofa, curtains, fan, hair dryer, mirror
- Kitchen: Full cookware, rice cooker, microwave, toaster, induction, kettle, fridge, washer, dining ware
- Bathroom: Hot shower, bidet, shampoo/conditioner/body wash, dental kit, towels
- Building: 24/7 security, elevator, pool, parking, smartlock, cameras, lobby phone, jogging path
- For fun: Karaoke, chess, Sungka, Scrabble, Uno, cards, books

REVIEWS — now centrally editable (see HOW TO EDIT below)
- 5.0★ score display
- 6 rating bars: Cleanliness · Accuracy · Check-in · Communication · Location · Value
- 3 guest review cards: Jo Marie · Aubrey Mel · Windelyn
- Each card: guest photo (or initial fallback) + name + stars + review text
- Template block included for adding new reviews easily
- All numbers (total review count, overall rating, category bars) now pull
  from ONE config block in script.js — no more editing multiple spots

HOW TO BOOK (6 steps)
Step 1: Check availability on Airbnb
Step 2: Send a booking request
Step 3: Pay securely (credit card, GCash, etc.)
Step 4: Get check-in details (smartlock code via Airbnb message)
Step 5: Arrive any time (self check-in)
Step 6: Check out & leave a review

LOCATION
- Google Maps embed (Residencia Magayon area)
- Walking/driving distances: Robinsons Place Naga — 8 min walk ·
  Bicol Medical Center — 16 min walk · SM City Naga — 16 min walk / 3 min drive ·
  Naga City Hall — 20 min walk / 4 min drive · Naga Metropolitan Cathedral —
  6 min drive · Naga Airport (WNP) — ~25 min drive

HOUSE RULES (6 cards)
- Check-in 3:00 PM / Check-out 11:00 AM
- No smoking (inside or balcony)
- No pets
- Quiet hours: 10:00 PM – 7:00 AM
- Max 4 guests (unregistered visitors out by 10 PM)
- Leave it tidy (dishes, trash, furniture)

CONTACT
- Phone / Viber / WhatsApp (STILL PLACEHOLDER: +63 9XX XXX XXXX)
- Facebook Messenger link — LIVE
- Facebook Page link — LIVE
- Address: Residencia Magayon, Naga City, Camarines Sur 4400
- Response time: Within 1 hour · 100% response rate
- Airbnb card (live) + VRBO card (coming soon)

FOOTER
- Logo + tagline
- Quick contact: phone (placeholder) + Messenger + Airbnb link
- Full nav links: About · Gallery · Video · Amenities · Reviews ·
                  How to Book · Location · House Rules · Contact ·
                  Privacy Policy · Terms of Use
- Copyright auto-updates every year (no manual change needed)
- RA 10173 compliance note

PRIVACY PAGE (privacy.html)
- Our commitment (no data selling)
- Who we are
- What we collect (name, contact, anonymous usage)
- How we use it
- Legal basis: RA 10173 (consent, contractual necessity, legitimate interest)
- Third parties: Airbnb · Facebook · Google · Vercel
- Cookies policy (strictly necessary + optional analytics)
- Your rights: informed · access · correction · erasure · object · NPC complaint
- Data retention periods
- Terms of Use
- Governing law: Republic of the Philippines, Naga City courts
- NPC contact: privacy.gov.ph · info@privacy.gov.ph · +632 8234-2228

FEATURES & INTERACTIONS
✅ Photo lightbox (click any photo, keyboard nav, Escape to close)
✅ Amenity tabs (5 tabs, keyboard arrow navigation)
✅ Mobile hamburger menu (animated open/close)
✅ Sticky nav with scroll shadow
✅ Cookie consent banner (Accept/Decline, remembers choice)
✅ Smooth scroll to all sections
✅ Auto copyright year in footer
✅ Centralized review stats (edit once, updates everywhere)
✅ Fully responsive (desktop · tablet · mobile)
✅ Reduced motion respected (accessibility)
✅ Keyboard accessible throughout
✅ Screen reader friendly (ARIA labels, semantic HTML)

DESIGN SYSTEM (styles.css :root variables)
Colors:
--plum #2D1B69   Deep purple — headings, nav brand
--violet #5B3FA6 Mid violet — accents, tab active
--vlight #8B6FCC Light violet — hover states
--vtint #F0EBFF  Very light violet — feature backgrounds
--vpale #F7F4FE  Section dark background
--gold #B8832A   Warm gold — CTA buttons
--goldl #D4A853  Gold hover
--sage #5A7A5A   Green — walking times, live badge
--ink #1C1830    Near-black body text
--inkm #4A4468   Mid body text
--inkl #7A728E   Muted text, labels
--rule #E8E2F5   Borders and dividers
--night #1A1030  Footer + CTA band background

Fonts:
--serif Playfair Display (headings, italic hero, brand name)
--sans DM Sans (body, buttons, nav, labels)

HOW TO EDIT — QUICK REFERENCE

PHOTOS (script.js, top of file):
const PHOTOS = [
  { src: 'images/bedroom.jpg', label: 'Bedroom' },
  { src: 'images/living-room.avif', label: 'Living room' },
  { src: 'images/kitchen.avif', label: 'Kitchen' },
  { src: 'images/pool.avif', label: 'Pool' },
  { src: 'images/bathroom.jpeg', label: 'Bathroom' },
  { src: 'images/balcony.jpeg', label: 'Balcony' },
  { src: 'images/dining.avif', label: 'Dining area' },
];
Note: filenames must match extensions exactly — mix of .jpg/.jpeg/.avif is fine.

REVIEW STATS (script.js — REVIEWS_CONFIG block near the top):
const REVIEWS_CONFIG = {
  totalReviews: 15,
  overallRating: 5.0,
  categories: { cleanliness: 5.0, accuracy: 5.0, checkin: 5.0,
                communication: 5.0, location: 5.0, value: 5.0 }
};
Change these numbers whenever Airbnb updates — every number on the page
(hero stat, reviews total, all 6 bars) updates automatically. No need to
touch index.html for stats anymore.

PHONE NUMBER (index.html — search "+63 9XX"):
<a href="tel:+639XXXXXXXXX">+63 9XX XXX XXXX</a>
Replace both the href number AND the visible text. Appears in 2 places
(Contact section + Footer).

VIDEO (index.html — search "video-wrap"):
Currently a clickable card linking to Facebook. To upgrade to a YouTube
embed later: get the original file → upload to YouTube (Unlisted) → copy
the video ID → replace the <a class="video-wrap"> block with a YouTube
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1">.

REVIEW TEXT/NAMES (index.html — search "CHANGE NAME HERE" area):
Change name: <div class="rc-name">Jo Marie</div>
Change text: <p class="rc-text">Your new review text...</p>
Add photo: <img src="images/review-name.jpg" alt="Name"/>
Add review: Copy the commented Review 4 template block
Remove review: Delete the full <article class="review-card"> block
(Remember: also update REVIEWS_CONFIG.totalReviews in script.js if the
count changes.)

FACTS STILL TO ADD:
- Price per night (still ₱X,XXX placeholder — appears in hero facts strip)
- Building opened year (removed from About section — not confirmed yet)

VRBO (index.html — search "Coming soon"):
Replace <div class="p-card p-card-off"> with:
<a class="p-card" href="YOUR_VRBO_URL" target="_blank" rel="noopener">

DEPLOYMENT — DONE
GitHub repo: github.com/AJ12359/bluebonnet-condo-naga
Vercel project: connected, auto-deploys on every push to main
Live URL: bluebonnet-condo-naga.vercel.app

Every future update:
1. Edit files in VS Code → save
2. git add .
3. git commit -m "describe your change"
4. git push
5. Vercel auto-deploys in ~30 seconds — no manual redeploy needed

Custom domain (~₱700/year, optional):
Buy from Namecheap/GoDaddy/Porkbun → Vercel → Project Settings → Domains
→ Add domain → add the DNS records Vercel shows you at your registrar.

WHAT TO DO NEXT (in order)
[x] 1. Push to GitHub
[x] 2. Deploy on Vercel
[x] 3. Add photos to images/ folder + update script.js
[x] 4. Add facts (unit size, floor, airport distance)
[x] 5. Set up centralized review stats system
[ ] 6. Add your real phone number in index.html
[ ] 7. Add price per night in index.html
[ ] 8. Get original video file → upload to YouTube → proper embed
[ ] 9. Add review photos (images/review-name.jpg)
[ ] 10. Buy a domain (optional but recommended)
[ ] 11. Add VRBO listing when ready
[ ] 12. Update reviews whenever you get new ones on Airbnb

LONG-TERM MAINTENANCE
Task                     How often    What to do
────────────────────     ────────     ────────────────────────────────────
Update review stats      As needed    Edit REVIEWS_CONFIG in script.js, push
Add/change photos        As needed    Update images/ + PHOTOS in script.js, push
Update phone/contact     As needed    Find and replace in index.html
Renew domain             Yearly       Your registrar emails a reminder
Review privacy policy    Yearly       Check npc.gov.ph for any changes
Check Vercel free plan   Yearly       Vercel emails if anything changes

NO npm to update. NO framework to patch. NO server to maintain.
This site will work exactly the same in 2035.