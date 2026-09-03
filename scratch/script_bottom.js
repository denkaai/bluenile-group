// ============================================================
// CART MANAGER
// ============================================================
const Cart = {
  KEY: 'kifaru_cart',

  get() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadge();
    if (typeof renderCartDrawer === 'function') renderCartDrawer();
    if (typeof renderCartPage === 'function') renderCartPage();
    if (typeof renderCartReviewPage === 'function') renderCartReviewPage();
    if (typeof renderCheckoutSummary === 'function') renderCheckoutSummary();
  },

  add(productId, variantLabel, variantPrice, qty = 1) {
    const items = this.get();
    const key = `${productId}__${variantLabel}`;
    const existing = items.find(i => i.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      const prod = PRODUCTS.find(p => p.id === productId);
      items.push({ key, productId, name: prod.name, variant: variantLabel, price: variantPrice, qty, image: prod.image });
    }
    this.save(items);
  },

  updateQty(key, qty) {
    const items = this.get();
    const item = items.find(i => i.key === key);
    if (item) { item.qty = Math.max(1, qty); }
    this.save(items);
  },

  remove(key) {
    const items = this.get().filter(i => i.key !== key);
    this.save(items);
  },

  total() {
    return this.get().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  count() {
    return this.get().reduce((sum, i) => sum + i.qty, 0);
  },

  updateBadge() {
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = this.count();
      el.style.display = this.count() > 0 ? 'flex' : 'none';
    });
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this.updateBadge();
  }
};

function fmtPrice(val) {
  return 'Ksh ' + Number(val).toLocaleString('en-KE');
}

// Render cart drawer items
function renderCartDrawer() {
  const drawer = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('cart-subtotal-amount');
  if (!drawer) return;
  const items = Cart.get();
  if (items.length === 0) {
    drawer.innerHTML = `<div class="cart-empty-msg"><i class="fa-solid fa-cart-shopping"></i><p>Your cart is empty.</p><p style="margin-top:8px;font-size:13px;">Browse our products and add items to your order.</p></div>`;
  } else {
    drawer.innerHTML = items.map(item => `
      <div class="cart-item">
        <img src="${item.image}" class="cart-item-img" alt="${item.name}" onerror="this.src='assets/logo-2.png'">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.variant}</div>
          <div class="cart-item-price">${fmtPrice(item.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="Cart.updateQty('${item.key}', ${item.qty - 1})">−</button>
            <input class="qty-input" type="number" value="${item.qty}" min="1" onchange="Cart.updateQty('${item.key}', parseInt(this.value)||1)">
            <button class="qty-btn" onclick="Cart.updateQty('${item.key}', ${item.qty + 1})">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="Cart.remove('${item.key}')" title="Remove"><i class="fa-solid fa-xmark"></i></button>
      </div>`).join('');
  }
  if (subtotalEl) subtotalEl.textContent = fmtPrice(Cart.total());
}

// Open/close drawer
function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartDrawer() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// QUICK VIEW MODAL
// ============================================================
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;
  const prodImages = prod.images && prod.images.length > 0 ? prod.images : [prod.image];
  modal.querySelector('.modal-img-wrap').innerHTML = `
    <div style="position:relative; width:100%; height:100%;">
      <img src="${prod.image}" alt="${prod.name}" class="modal-main-img" data-images="${prodImages.join(',')}" data-index="0" style="width:100%;height:100%;object-fit:cover;">
      ${prodImages.length > 1 ? `
      <button onclick="nextImg(event, -1)" class="carousel-nav-btn left" style="width:36px;height:36px;font-size:16px;">&#10094;</button>
      <button onclick="nextImg(event, 1)" class="carousel-nav-btn right" style="width:36px;height:36px;font-size:16px;">&#10095;</button>
      ` : ''}
    </div>
  `;

  modal.querySelector('.modal-title').textContent = prod.name;
  modal.querySelector('.modal-price').textContent = `From ${fmtPrice(prod.fromPrice)}`;
  modal.querySelector('.modal-desc').textContent = prod.description;

  const sel = modal.querySelector('.modal-variant-select');
  sel.innerHTML = prod.variants.map(v => `<option value="${v.price}" data-label="${v.label}">${v.label} — ${fmtPrice(v.price)}</option>`).join('');
  modal.querySelector('.modal-qty-val').value = 1;
  modal.dataset.productId = productId;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeQuickView() {
  document.getElementById('quick-view-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function nextImg(event, delta) {
  const btn = event.currentTarget;
  const modal = btn.closest('#quick-view-modal');
  const img = modal?.querySelector('.modal-main-img') ?? btn.closest('.product-img-wrap')?.querySelector('img');
  if (!img) return;
  const images = img.dataset.images ? img.dataset.images.split(',') : [img.src];
  let idx = parseInt(img.dataset.index || '0', 10);
  idx = (idx + delta + images.length) % images.length;
  img.dataset.index = idx;
  img.src = images[idx];
}

// ============================================================
// MAIN DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  Cart.updateBadge();
  renderCartDrawer();

  // Scroll header effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ============================================================
  // MOBILE NAVIGATION DRAWER (Fully functional on Android & iOS)
  // ============================================================
  function ensureMobileNavDrawer() {
    let drawer = document.getElementById('mobile-nav-drawer');
    let backdrop = document.getElementById('mobile-nav-backdrop');

    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'mobile-nav-backdrop';
      backdrop.className = 'mobile-nav-backdrop';
      document.body.appendChild(backdrop);
      backdrop.addEventListener('click', closeMobileNav);
      backdrop.addEventListener('touchstart', (e) => {
        e.preventDefault();
        closeMobileNav();
      }, { passive: false });
    }

    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'mobile-nav-drawer';
      drawer.className = 'mobile-nav-drawer';

      const path = window.location.pathname.toLowerCase();
      const isShop = path.includes('shop');
      const isCart = path.includes('cart');
      const isCheckout = path.includes('checkout');
      const isHome = !isShop && !isCart && !isCheckout;

      drawer.innerHTML = `
        <div class="m-drawer-header">
          <div class="m-drawer-brand">
            <img src="assets/logo-2.png" alt="Blue Nile Group" onerror="this.style.display='none'">
            <span class="m-drawer-title">Navigation Menu</span>
          </div>
          <button class="m-drawer-close" id="mobile-drawer-close-btn" aria-label="Close Menu">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="m-drawer-body">
          <ul class="m-drawer-links">
            <li>
              <a href="index.html" class="m-link ${isHome ? 'active' : ''}">
                <span class="m-icon-box"><i class="fa-solid fa-house"></i></span>
                <span class="m-link-text">Home</span>
                <i class="fa-solid fa-chevron-right m-arrow"></i>
              </a>
            </li>
            <li>
              <a href="shop.html" class="m-link ${isShop ? 'active' : ''}">
                <span class="m-icon-box"><i class="fa-solid fa-store"></i></span>
                <span class="m-link-text">Shop All Products</span>
                <i class="fa-solid fa-chevron-right m-arrow"></i>
              </a>
            </li>
            <li class="m-divider-label">Product Categories</li>
            <li>
              <a href="shop.html?cat=TMT Bars" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-bars-staggered"></i></span>
                <span class="m-link-text">TMT Bars & Rings</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=BRC Mesh" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-border-all"></i></span>
                <span class="m-link-text">BRC Mesh</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Chain Link" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-link"></i></span>
                <span class="m-link-text">Chain Link (Galv & PVC)</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Corrugated Mabati" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-layer-group"></i></span>
                <span class="m-link-text">Corrugated Mabati</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Box Profile" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-cube"></i></span>
                <span class="m-link-text">Box Profile Mabati</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Versatile Mabati" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-shield"></i></span>
                <span class="m-link-text">Tile & Versatile Mabati</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Cement" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-trowel-bricks"></i></span>
                <span class="m-link-text">Cements (Simba, Bamburi, etc.)</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Tanks" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-water"></i></span>
                <span class="m-link-text">Water Tanks</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Tile" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-shapes"></i></span>
                <span class="m-link-text">Floor & Wall Tiles</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Toilets & Urinals" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-toilet"></i></span>
                <span class="m-link-text">Toilets & Urinals</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Cabinets" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-box-archive"></i></span>
                <span class="m-link-text">Bathroom Vanity Cabinets</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Nails" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-thumbtack"></i></span>
                <span class="m-link-text">Wire & Concrete Nails</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Chicken Mesh" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-grip"></i></span>
                <span class="m-link-text">Chicken & Poultry Mesh</span>
              </a>
            </li>
            <li>
              <a href="shop.html?cat=Mild Plate" class="m-link sub-link">
                <span class="m-icon-box"><i class="fa-solid fa-sheet-plastic"></i></span>
                <span class="m-link-text">Mild Steel Plates</span>
              </a>
            </li>
            <li class="m-divider-label">Cart & Helpline</li>
            <li>
              <a href="cart.html" class="m-link ${isCart ? 'active' : ''}">
                <span class="m-icon-box"><i class="fa-solid fa-cart-shopping"></i></span>
                <span class="m-link-text">View Cart</span>
                <span class="m-badge cart-count" id="m-drawer-cart-badge" style="display:none;">0</span>
                <i class="fa-solid fa-chevron-right m-arrow"></i>
              </a>
            </li>
            <li>
              <a href="index.html#contact" class="m-link" id="m-drawer-contact-link">
                <span class="m-icon-box"><i class="fa-solid fa-phone-volume"></i></span>
                <span class="m-link-text">Contact & Factory Location</span>
                <i class="fa-solid fa-chevron-right m-arrow"></i>
              </a>
            </li>
          </ul>

          <div class="m-drawer-footer">
            <a href="https://wa.me/254755627028?text=Hello%20KIFARU%20Steel!%20I%20want%20to%20place%20an%20order." target="_blank" class="m-footer-wa-btn">
              <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
            </a>
            <a href="tel:0202013800" class="m-footer-call-btn">
              <i class="fa-solid fa-phone"></i> Helpline: 0202 013 800
            </a>
          </div>
        </div>
      `;
      document.body.appendChild(drawer);

      drawer.querySelector('#mobile-drawer-close-btn')?.addEventListener('click', closeMobileNav);
      drawer.querySelector('#mobile-drawer-close-btn')?.addEventListener('touchstart', (e) => {
        e.preventDefault();
        closeMobileNav();
      }, { passive: false });

      drawer.querySelectorAll('.m-link').forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href === 'index.html#contact') {
            const currentPath = window.location.pathname.toLowerCase();
            if (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '') {
              e.preventDefault();
              closeMobileNav();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              return;
            }
          }
          closeMobileNav();
        });
      });
    }
    return drawer;
  }

  function openMobileNav() {
    const drawer = ensureMobileNavDrawer();
    const backdrop = document.getElementById('mobile-nav-backdrop');
    drawer.classList.add('mobile-open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    if (mobileToggle) {
      mobileToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
  }

  function closeMobileNav() {
    const drawer = document.getElementById('mobile-nav-drawer');
    const backdrop = document.getElementById('mobile-nav-backdrop');
    drawer?.classList.remove('mobile-open');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    if (mobileToggle) {
      mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  }

  function toggleMobileNav() {
    const drawer = ensureMobileNavDrawer();
    if (drawer.classList.contains('mobile-open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  const mobileToggle = document.getElementById('mobile-nav-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileNav();
    });
    mobileToggle.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileNav();
    }, { passive: false });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
  });

  // Cart icon opens drawer
  document.getElementById('cart-icon-btn')?.addEventListener('click', openCartDrawer);

  // Close drawer
  document.getElementById('cart-overlay')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCartDrawer);

  // Drawer checkout and cart review buttons
  document.getElementById('drawer-wa-btn')?.addEventListener('click', () => {
    const items = Cart.get();
    if (!items.length) {
      alert('Your cart is empty. Please add items before proceeding.');
      return;
    }
    closeCartDrawer();
    window.location.href = 'checkout.html#customer-details-step';
  });

  document.getElementById('wa-order-btn')?.addEventListener('click', () => {
    window.location.href = 'checkout.html#customer-details-step';
  });

  // Cart view button
  document.getElementById('cart-view-btn')?.addEventListener('click', () => {
    closeCartDrawer();
    window.location.href = 'cart.html';
  });

  // Quick view modal close
  document.getElementById('quick-view-close')?.addEventListener('click', closeQuickView);
  document.getElementById('quick-view-modal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeQuickView();
  });

  // Quick view add to cart
  document.getElementById('modal-add-btn')?.addEventListener('click', () => {
    const modal = document.getElementById('quick-view-modal');
    const prodId = parseInt(modal.dataset.productId);
    const sel = modal.querySelector('.modal-variant-select');
    const price = parseInt(sel.value);
    const label = sel.options[sel.selectedIndex].dataset.label;
    const qty = parseInt(modal.querySelector('.modal-qty-val').value) || 1;
    Cart.add(prodId, label, price, qty);
    closeQuickView();
    openCartDrawer();
  });

  // Quick view direct proceed to checkout
  document.getElementById('modal-checkout-btn')?.addEventListener('click', () => {
    const modal = document.getElementById('quick-view-modal');
    const prodId = parseInt(modal.dataset.productId);
    const sel = modal.querySelector('.modal-variant-select');
    const price = parseInt(sel.value);
    const label = sel.options[sel.selectedIndex].dataset.label;
    const qty = parseInt(modal.querySelector('.modal-qty-val').value) || 1;
    Cart.add(prodId, label, price, qty);
    closeQuickView();
    window.location.href = 'checkout.html#customer-details-step';
  });

  // Modal qty buttons
  document.getElementById('modal-qty-minus')?.addEventListener('click', () => {
    const input = document.getElementById('modal-qty-val');
    if (input) input.value = Math.max(1, parseInt(input.value) - 1);
  });
  document.getElementById('modal-qty-plus')?.addEventListener('click', () => {
    const input = document.getElementById('modal-qty-val');
    if (input) input.value = (parseInt(input.value) || 1) + 1;
  });

  // Hero slider
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  let curSlide = 0, heroTimer;
  function showHeroSlide(i) {
    heroSlides.forEach(s => s.classList.remove('active'));
    heroDots.forEach(d => d.classList.remove('active'));
    curSlide = (i + heroSlides.length) % heroSlides.length;
    heroSlides[curSlide]?.classList.add('active');
    heroDots[curSlide]?.classList.add('active');
  }
  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => showHeroSlide(curSlide + 1), 5500);
  }
  document.querySelector('.hero-next')?.addEventListener('click', () => { showHeroSlide(curSlide + 1); startHeroTimer(); });
  document.querySelector('.hero-prev')?.addEventListener('click', () => { showHeroSlide(curSlide - 1); startHeroTimer(); });
  heroDots.forEach((dot, i) => dot.addEventListener('click', () => { showHeroSlide(i); startHeroTimer(); }));
  if (heroSlides.length) { showHeroSlide(0); startHeroTimer(); }

  // Shop page pagination, category filter, search, and sort
  let currentCat = 'all';
  let currentSearch = '';
  let currentSort = 'default';
  let currentPage = 1;
  const itemsPerPage = 24;

  const filterLinks = document.querySelectorAll('.sidebar-cats a[data-cat]');
  const searchInput = document.getElementById('shop-search');
  const sortSelect = document.getElementById('shop-sort');
  const shopGrid = document.querySelector('.shop-grid');
  const paginationContainer = document.querySelector('.pagination');

  function applyFilters() {
    if (!shopGrid) return;
    let shopCards = Array.from(document.querySelectorAll('.shop-grid .product-card'));

    // 1. Flexible category and keyword filter
    let visibleCards = [];
    const cTarget = currentCat.toLowerCase();

    shopCards.forEach(card => {
      const cardCat = (card.dataset.category || '').toLowerCase();
      let matchCat = cTarget === 'all';
      if (!matchCat) {
        if (cTarget === 'nails') {
          matchCat = cardCat.includes('nail');
        } else if (cTarget === 'tile' || cTarget === 'tiles') {
          matchCat = cardCat.includes('tile');
        } else if (cTarget === 'mabati') {
          matchCat = cardCat.includes('mabati') || cardCat.includes('profile') || cardCat.includes('roof');
        } else if (cTarget === 'tmt' || cTarget === 'tmt bars') {
          matchCat = cardCat.includes('tmt');
        } else if (cTarget === 'toilets' || cTarget === 'urinals' || cTarget.includes('toilet')) {
          matchCat = cardCat.includes('toilet');
        } else if (cTarget === 'cabinets' || cTarget.includes('cabinet')) {
          matchCat = cardCat.includes('cabinet');
        } else if (cTarget === 'tanks' || cTarget.includes('tank')) {
          matchCat = cardCat.includes('tank');
        } else if (cTarget === 'chicken mesh' || cTarget.includes('mesh')) {
          matchCat = cardCat.includes('mesh');
        } else {
          matchCat = cardCat === cTarget || cardCat.includes(cTarget) || cTarget.includes(cardCat);
        }
      }

      const matchSearch = card.textContent.toLowerCase().includes(currentSearch);
      if (matchCat && matchSearch) {
        visibleCards.push(card);
      } else {
        card.style.display = 'none';
      }
    });

    // 2. Sort visible cards
    visibleCards.sort((a, b) => {
      const pa = parseInt(a.dataset.price || 0);
      const pb = parseInt(b.dataset.price || 0);
      if (currentSort === 'price-asc') return pa - pb;
      if (currentSort === 'price-desc') return pb - pa;
      return parseInt(a.dataset.id || 0) - parseInt(b.dataset.id || 0);
    });

    // Re-append to preserve sort order in DOM
    visibleCards.forEach(c => shopGrid.appendChild(c));

    // 3. Paginate
    const totalPages = Math.ceil(visibleCards.length / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    visibleCards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });

    // 4. Update Pagination UI
    if (paginationContainer) {
      if (totalPages > 1) {
        paginationContainer.style.display = 'flex';
        let html = '';
        for (let i = 1; i <= totalPages; i++) {
          html += `<span class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}" style="cursor:pointer">${i}</span>`;
        }
        paginationContainer.innerHTML = html;

        paginationContainer.querySelectorAll('.page-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            currentPage = parseInt(btn.dataset.page);
            applyFilters();
            window.scrollTo({ top: shopGrid.offsetTop - 100, behavior: 'smooth' });
          });
        });
      } else {
        paginationContainer.style.display = 'none';
      }
    }

    // 5. Update Toolbar Count
    const shopCount = document.querySelector('.shop-count');
    if (shopCount) {
      if (visibleCards.length === 0) {
        shopCount.innerHTML = `Showing <strong>0</strong> products`;
      } else {
        shopCount.innerHTML = `Showing <strong>${startIndex + 1}-${Math.min(endIndex, visibleCards.length)}</strong> of <strong>${visibleCards.length}</strong> products`;
      }
    }
  }

  filterLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      filterLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      currentCat = link.dataset.cat;
      currentPage = 1;
      applyFilters();
    });
  });

  searchInput?.addEventListener('input', () => {
    currentSearch = searchInput.value.toLowerCase();
    currentPage = 1;
    applyFilters();
  });

  sortSelect?.addEventListener('change', e => {
    currentSort = e.target.value;
    currentPage = 1;
    applyFilters();
  });

  // Read URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const urlCat = urlParams.get('cat');
  if (urlCat) {
    currentCat = urlCat;
    filterLinks.forEach(l => {
      if (l.dataset.cat.toLowerCase() === urlCat.toLowerCase() ||
          urlCat.toLowerCase().includes(l.dataset.cat.toLowerCase())) {
        filterLinks.forEach(item => item.classList.remove('active'));
        l.classList.add('active');
      }
    });
  }

  const urlQ = urlParams.get('q');
  if (urlQ && searchInput) {
    searchInput.value = urlQ;
    currentSearch = urlQ.toLowerCase();
  }

  // Initial filter run
  setTimeout(() => {
    applyFilters();
  }, 100);

  // Cart page render
  if (typeof renderCartPage === 'function') renderCartPage();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObserver.observe(el));

  // Header search
  document.getElementById('header-search-btn')?.addEventListener('click', () => {
    const q = document.getElementById('header-search-input')?.value?.trim();
    if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
  });

  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50
    });
  }
});

/* =========================================================
   BILLING & DELIVERY INFORMATION FORM LOGIC
   ========================================================= */
(function () {
  var WHATSAPP_NUMBER = "254755627028";
  var form = document.getElementById('bnDeliveryForm');
  if (!form) return;

  var shipToggle = document.getElementById('bnShipDifferent');
  var shipFields = document.getElementById('bnShippingFields');
  if (shipToggle && shipFields) {
    shipToggle.addEventListener('change', function () {
      shipFields.style.display = this.checked ? 'block' : 'none';
    });
  }

  var status = document.getElementById('bnStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Please fill in all required fields.";
      status.className = "bn-status bn-error";
      return;
    }
    var v = Object.fromEntries(new FormData(form).entries());
    var cartItems = (typeof Cart !== 'undefined') ? Cart.get() : [];

    var lines = [
      cartItems.length > 0 ? "*New Order & Billing Request*" : "*New Billing & Delivery Information*", "",
      "*BILLING DETAILS*",
      "*Name:* " + v.firstName + " " + v.lastName,
      v.company ? "*Company:* " + v.company : null,
      v.kraPin ? "*Company PIN:* " + v.kraPin : null,
      "*Country:* Kenya",
      "*Street Address:* " + v.address1 + (v.address2 ? ", " + v.address2 : ""),
      "*Town / City:* " + v.city,
      "*County:* " + v.county,
      v.postcode ? "*Postcode / ZIP:* " + v.postcode : null,
      "*Phone:* " + v.phone,
      "*Email:* " + v.email
    ].filter(Boolean);

    if (v.shipDifferent) {
      lines.push("");
      lines.push("*SHIPPING DETAILS (Different Address)*");
      if (v.shipFirstName || v.shipLastName) lines.push("*Recipient Name:* " + (v.shipFirstName || "") + " " + (v.shipLastName || ""));
      if (v.shipCompany) lines.push("*Company:* " + v.shipCompany);
      if (v.shipKraPin) lines.push("*Company PIN:* " + v.shipKraPin);
      lines.push("*Country:* Kenya");
      if (v.shipAddress1) lines.push("*Street Address:* " + v.shipAddress1 + (v.shipAddress2 ? ", " + v.shipAddress2 : ""));
      if (v.shipCity) lines.push("*Town / City:* " + v.shipCity);
      if (v.shipCounty) lines.push("*County:* " + v.shipCounty);
      if (v.shipPostcode) lines.push("*Postcode / ZIP:* " + v.shipPostcode);
      if (v.recipientPhone) lines.push("*Recipient Phone:* " + v.recipientPhone);
    }

    if (cartItems.length > 0) {
      lines.push("");
      lines.push("*ORDER ITEMS*");
      cartItems.forEach(function (item, i) {
        lines.push((i + 1) + ". *" + item.name + "*");
        lines.push("   Size/Type: " + item.variant);
        lines.push("   Qty: " + item.qty);
        lines.push("   Unit Price: Ksh " + item.price.toLocaleString());
        lines.push("   Subtotal: Ksh " + (item.price * item.qty).toLocaleString());
        lines.push("");
      });
      lines.push("*TOTAL ORDER VALUE: Ksh " + Cart.total().toLocaleString() + "*");
    }

    lines.push("");
    lines.push("I confirm the above information is accurate and I agree to Blue Nile Rolling Mills' Terms & Conditions.");

    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank");
    status.textContent = "Opening WhatsApp… Order details sent!";
    status.className = "bn-status bn-ok";
  });
})();
