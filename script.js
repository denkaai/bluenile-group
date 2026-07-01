/* =========================================================
   BLUE NILE GROUP | KIFARU STEEL — Main JavaScript
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------
     1. Dark Mode Toggle
  ------------------------------------------------------------------ */
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark'
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    themeToggle.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }

  /* ------------------------------------------------------------------
     2. Header — Glassmorphism on scroll
  ------------------------------------------------------------------ */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ------------------------------------------------------------------
     3. Mobile Menu Toggle
  ------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobile-toggle');
  const primaryNav = document.getElementById('primary-nav');
  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', () => {
      primaryNav.classList.toggle('mobile-open');
      mobileToggle.innerHTML = primaryNav.classList.contains('mobile-open')
        ? '<i class="fa-solid fa-xmark"></i>'
        : '&#9776;';
    });
  }

  // Close menu when a link is clicked
  document.querySelectorAll('#primary-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (primaryNav) primaryNav.classList.remove('mobile-open');
      if (mobileToggle) mobileToggle.innerHTML = '&#9776;';
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
      }
    });
  });

  /* ------------------------------------------------------------------
     4. Hero Slider
  ------------------------------------------------------------------ */
  const heroSlides = document.querySelectorAll('.hero .slide');
  const heroDots  = document.querySelectorAll('.hero > .dots .dot');
  let currentSlide = 0;
  let heroTimer;

  function showSlide(index) {
    heroSlides.forEach(s => s.classList.remove('active'));
    heroDots.forEach(d => d.classList.remove('active'));
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    if (heroSlides[currentSlide]) heroSlides[currentSlide].classList.add('active');
    if (heroDots[currentSlide])  heroDots[currentSlide].classList.add('active');
  }

  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => showSlide(currentSlide + 1), 5500);
  }

  document.querySelector('.hero .next')?.addEventListener('click', () => { showSlide(currentSlide + 1); startHeroTimer(); });
  document.querySelector('.hero .prev')?.addEventListener('click', () => { showSlide(currentSlide - 1); startHeroTimer(); });
  heroDots.forEach((dot, idx) => dot.addEventListener('click', () => { showSlide(idx); startHeroTimer(); }));

  startHeroTimer();

  /* ------------------------------------------------------------------
     5. Product Card Carousels
  ------------------------------------------------------------------ */
  document.querySelectorAll('.carousel').forEach(carousel => {
    const imgs = carousel.querySelectorAll('img');
    const dots = carousel.querySelectorAll('.dot');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    let idx = 0;

    function showImg(i) {
      imgs.forEach(im => im.classList.remove('active'));
      dots.forEach(d  => d.classList.remove('active'));
      idx = (i + imgs.length) % imgs.length;
      if (imgs[idx]) imgs[idx].classList.add('active');
      if (dots[idx]) dots[idx].classList.add('active');
    }

    prev?.addEventListener('click', e => { e.stopPropagation(); showImg(idx - 1); });
    next?.addEventListener('click', e => { e.stopPropagation(); showImg(idx + 1); });
    dots.forEach((dot, dIdx) => dot.addEventListener('click', () => showImg(dIdx)));
  });

  /* ------------------------------------------------------------------
     6. Category Filter
  ------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter button');
  const allCards   = document.querySelectorAll('.card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      allCards.forEach(card => {
        const matches = filter === 'All' || card.dataset.category === filter;
        card.style.display = matches ? '' : 'none';
      });
    });
  });

  /* ------------------------------------------------------------------
     7. Live Search
  ------------------------------------------------------------------ */
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      // Reset filter buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      document.querySelector('.filter button[data-filter="All"]')?.classList.add('active');

      allCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = !q || text.includes(q) ? '' : 'none';
      });
    });
  }

  /* ------------------------------------------------------------------
     8. Price Table Toggle
  ------------------------------------------------------------------ */
  document.querySelectorAll('.price-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const table = btn.nextElementSibling;
      if (!table) return;
      const open = table.style.display === 'block';
      table.style.display = open ? 'none' : 'block';
      btn.innerHTML = open
        ? '<i class="fa-solid fa-tag"></i> View Prices'
        : '<i class="fa-solid fa-tag"></i> Hide Prices';
    });
  });

  /* ------------------------------------------------------------------
     9. Scroll Reveal Animation (IntersectionObserver)
  ------------------------------------------------------------------ */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  /* ------------------------------------------------------------------
     10. Stagger card animations
  ------------------------------------------------------------------ */
  document.querySelectorAll('.card').forEach((card, i) => {
    card.style.transitionDelay = `${(i % 4) * 0.08}s`;
  });

});
