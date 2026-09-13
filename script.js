const PHOTOS = [
  { src: 'images/bedroom.jpg', alt: 'Bedroom with double bed and single extension', label: 'Bedroom'     },
  { src: 'images/living-room.avif', alt: 'Living room with 50-inch Smart TV and sofa',   label: 'Living room' },
  { src: 'images/kitchen.avif', alt: 'Kitchen with full cookware and appliances',    label: 'Kitchen'     },
  { src: 'images/pool.avif', alt: 'Shared outdoor pool at Residencia Magayon',    label: 'Pool'        },
  { src: 'images/bathroom.jpeg', alt: 'Bathroom with hot shower and bidet',           label: 'Bathroom'    },
  { src: 'images/balcony.jpeg', alt: 'Balcony with plants, table and chair',         label: 'Balcony'     },
  { src: 'images/dining.avif', alt: 'Dining area with 4-seater table',             label: 'Dining area' },
];

/* ============================================================
   SITE CONFIG — price & other quick facts you'll update often
   Change the number below, save, push — every element marked
   [data-price] in index.html updates automatically.
   ============================================================ */
const SITE_CONFIG = {
  pricePerNight: 3000,   // ← CHANGE THIS whenever your Airbnb price changes (digits only, no commas)
  currency: '₱'
};

function applySiteConfig() {
  document.querySelectorAll('[data-price]').forEach(el => {
    el.textContent = SITE_CONFIG.currency + SITE_CONFIG.pricePerNight.toLocaleString('en-US');
  });
}

const REVIEWS_CONFIG = {
  totalReviews: 15,
  overallRating: 5.0,
  categories: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkin: 5.0,
    communication: 5.0,
    location: 5.0,
    value: 5.0
  }
};

function applyReviewStats() {
  document.querySelectorAll('[data-review-count]').forEach(el => {
    el.textContent = REVIEWS_CONFIG.totalReviews;
  });
  document.querySelectorAll('[data-review-count-plus]').forEach(el => {
    el.textContent = REVIEWS_CONFIG.totalReviews + '+';
  });
  document.querySelectorAll('[data-overall-rating]').forEach(el => {
    el.textContent = REVIEWS_CONFIG.overallRating.toFixed(1);
  });
  document.querySelectorAll('[data-cat-bar]').forEach(el => {
    const cat = el.getAttribute('data-cat-bar');
    const val = REVIEWS_CONFIG.categories[cat];
    if (val != null) {
      el.style.width = (val / 5 * 100) + '%';
      const valEl = el.closest('.bar-row')?.querySelector('.bar-val');
      if (valEl) valEl.textContent = val.toFixed(1);
    }
  });
}

function injectPhotos() {
  document.querySelectorAll('.cell[data-index]').forEach(cell => {
    const i = parseInt(cell.dataset.index);
    const photo = PHOTOS[i];
    if (!photo || !photo.src) return;

    const img = document.createElement('img');
    img.src     = photo.src;
    img.alt     = photo.alt;
    img.loading = i === 0 ? 'eager' : 'lazy';
    img.decoding = 'async';

    cell.innerHTML = '';
    cell.appendChild(img);
  });

  document.querySelectorAll('#galleryGrid .g-cell').forEach(cell => {
    const i = parseInt(cell.dataset.index);
    cell.addEventListener('click', () => openLightbox(i));
    cell.setAttribute('role', 'button');
    cell.setAttribute('tabindex', '0');
    cell.setAttribute('aria-label', 'View photo: ' + (PHOTOS[i]?.label || ''));
    cell.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(i);
    });
  });

  document.querySelectorAll('.photo-strip .cell').forEach(cell => {
    const i = parseInt(cell.dataset.index);
    cell.addEventListener('click', () => openLightbox(i));
  });

  document.querySelectorAll('.about-photos .cell').forEach(cell => {
    const i = parseInt(cell.dataset.index);
    cell.addEventListener('click', () => openLightbox(i));
  });
}

let currentIndex = 0;
let prevFocus    = null;

function openLightbox(index) {
  prevFocus    = document.activeElement;
  currentIndex = index;
  renderSlide(index);
  document.getElementById('lightbox').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('lbClose').focus();
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
  if (prevFocus) prevFocus.focus();
}

function navigate(dir) {
  currentIndex = (currentIndex + dir + PHOTOS.length) % PHOTOS.length;
  renderSlide(currentIndex);
}

function renderSlide(index) {
  const wrap    = document.getElementById('lbContent');
  const counter = document.getElementById('lbCounter');
  const photo   = PHOTOS[index];
  wrap.innerHTML = '';

  if (photo && photo.src) {
    const img    = document.createElement('img');
    img.src      = photo.src;
    img.alt      = photo.alt;
    img.decoding = 'async';
    wrap.appendChild(img);
  } else {
    const div       = document.createElement('div');
    div.className   = 'lb-empty';
    div.innerHTML   = `<span>📷</span><p>${photo ? photo.label : ''}</p><small>Add: images/${photo?.label?.toLowerCase().replace(/ /g, '-')}.jpg</small>`;
    wrap.appendChild(div);
  }

  if (counter) counter.textContent = (index + 1) + ' / ' + PHOTOS.length;
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click',  () => navigate(-1));
document.getElementById('lbNext').addEventListener('click',  () => navigate(1));
document.getElementById('showAllBtn').addEventListener('click', () => openLightbox(0));
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').classList.contains('hidden')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   navigate(-1);
  if (e.key === 'ArrowRight')  navigate(1);
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const panel = document.getElementById('tab-' + btn.dataset.tab);
    if (panel) panel.classList.add('active');
  });
  btn.addEventListener('keydown', e => {
    const all = [...document.querySelectorAll('.tab-btn')];
    const i   = all.indexOf(btn);
    if (e.key === 'ArrowRight') { e.preventDefault(); all[(i + 1) % all.length].focus(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); all[(i - 1 + all.length) % all.length].focus(); }
  });
});

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', e => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

const cookieBanner = document.getElementById('cookieBanner');
if (!localStorage.getItem('bb_consent')) {
  setTimeout(() => cookieBanner.classList.add('show'), 1400);
}
document.getElementById('ckAccept').addEventListener('click', () => {
  localStorage.setItem('bb_consent', 'yes');
  cookieBanner.classList.remove('show');
});
document.getElementById('ckDecline').addEventListener('click', () => {
  localStorage.setItem('bb_consent', 'no');
  cookieBanner.classList.remove('show');
});

document.getElementById('yr').textContent = new Date().getFullYear();

injectPhotos();
applyReviewStats();
applySiteConfig();