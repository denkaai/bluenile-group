/* =========================================================
   BLUE NILE GROUP | KIFARU STEEL
   Shared JavaScript — Cart, UI, Animations
   ========================================================= */

// ============================================================
// PRODUCT CATALOG (Single source of truth)
// ============================================================
const PRODUCTS = [
  {
    id: 1, category: 'TMT Bars', name: 'KIFARU™ TMT Bars', badge: 'Grade BS 4449',
    image: 'assets/products/tmt-bars-1.jpg',
    images: ['assets/products/tmt-bars-1.jpg','assets/products/tmt-bars-2.png'],
    description: 'Premium concrete reinforcement rebars with thermo-mechanical treatment for superior strength and seismic resistance.',
    fromPrice: 430,
    variants: [
      {label:'D8 (8mm) — 12m piece', price:430},
      {label:'D10 (10mm) — 12m piece', price:650},
      {label:'D12 (12mm) — 12m piece', price:850},
      {label:'D16 (16mm) — 12m piece', price:1490},
      {label:'D20 (20mm) — 12m piece', price:2250},
      {label:'D25 (25mm) — 12m piece', price:3190},
      {label:'D32 (32mm) — 12m piece', price:4390},
    ]
  },
  {
    id: 2, category: 'TMT Rings', name: 'KIFARU™ TMT Rings / Stirrups', badge: 'KEBS Certified',
    image: 'assets/products/tmt-rings-1.jpg',
    images: ['assets/products/tmt-rings-1.jpg','assets/products/tmt-rings-2.jpg'],
    description: 'Pre-bent column rings and stirrups for structural concrete reinforcement.',
    fromPrice: 30,
    variants: [
      {label:'6×6" — per piece', price:30},
      {label:'8×8" — per piece', price:40},
      {label:'9×9" — per piece', price:50},
      {label:'10×10" — per piece', price:60},
      {label:'12×12" — per piece', price:70},
      {label:'16×16" — per piece', price:80},
      {label:'18×18" — per piece', price:90},
    ]
  },
  {
    id: 3, category: 'BRC Mesh', name: 'KIFARU™ BRC Mesh', badge: 'KEBS Certified',
    image: 'assets/products/kifaru-brc-mesh-1.jpeg',
    images: ['assets/products/kifaru-brc-mesh-1.jpeg','assets/products/kifaru-brc-mesh-2.jpeg'],
    description: 'Reinforced concrete mesh panels for slabs, floors and structural reinforcement.',
    fromPrice: 5700,
    variants: [
      {label:'A610 (2.5mm) — per sheet', price:5700},
      {label:'A66 (3.0mm) — per sheet', price:7900},
      {label:'A65 (4.0mm) — per sheet', price:9800},
      {label:'A98 (5.0mm) — per sheet', price:11900},
      {label:'A142 (6.0mm) — per sheet', price:15900},
    ]
  },
  {
    id: 4, category: 'Chain Link', name: 'KIFARU™ Chain Link', badge: 'Galvanized',
    image: 'assets/products/chainlink-galvanized-1.jpg',
    images: ['assets/products/chainlink-galvanized-1.jpg','assets/products/chainlink-galvanized-2.jpg'],
    description: 'Galvanized and PVC-coated chain link fencing for security and boundary applications.',
    fromPrice: 1150,
    variants: [
      {label:'16G 1.6mm 5ft — per roll', price:1150},
      {label:'16G 1.6mm 8ft — per roll', price:1450},
      {label:'16G 1.6mm 11ft — per roll', price:1850},
      {label:'15G 1.8mm 5ft — per roll', price:1450},
      {label:'14G 2.0mm 5ft — per roll', price:1750},
      {label:'12.5G 2.5mm 5ft — per roll', price:2650},
      {label:'PVC 10G 3.2mm 5ft — per roll', price:3100},
      {label:'PVC 8G 4.0mm 5ft — per roll', price:4200},
    ]
  },
  {
    id: 5, category: 'Round Bars', name: 'KIFARU™ Round Bars', badge: 'KEBS Certified',
    image: 'assets/products/round-bars-1.jpeg',
    images: ['assets/products/round-bars-1.jpeg','assets/products/round-bars-2.jpg'],
    description: 'High-quality mild steel round bars for fabrication, fencing and general construction.',
    fromPrice: 130,
    variants: [
      {label:'R6 (6mm) — 12m piece', price:130},
      {label:'R8 (8mm) — 12m piece', price:330},
      {label:'R10 (10mm) — 12m piece', price:480},
      {label:'R12 (12mm) — 12m piece', price:680},
      {label:'R16 (16mm) — 12m piece', price:860},
      {label:'R20 (20mm) — 12m piece', price:1180},
      {label:'R25 (25mm) — 12m piece', price:1790},
      {label:'R32 (32mm) — 12m piece', price:2350},
    ]
  },
  {
    id: 6, category: 'Chicken Mesh', name: 'Galvanized Chicken Mesh', badge: 'KEBS Certified',
    image: 'assets/products/chicken-mesh-1.jpg',
    images: ['assets/products/chicken-mesh-1.jpg','assets/products/chicken-mesh-2.jpg'],
    description: 'Lightweight galvanized hexagonal mesh for poultry enclosures and agricultural fencing.',
    fromPrice: 1080,
    variants: [
      {label:'½" G22 — 3ft×30m roll', price:1180},
      {label:'½" G22 — 4ft×30m roll', price:1650},
      {label:'1" G20 — 3ft×30m roll', price:1080},
      {label:'1" G20 — 4ft×30m roll', price:1550},
      {label:'2" 18G — 4ft×30m roll', price:2100},
    ]
  },
  {
    id: 7, category: 'Mild Plate', name: 'KIFARU™ Mild Plate', badge: 'KEBS Certified',
    image: 'assets/products/mild-plate-1.jpg',
    images: ['assets/products/mild-plate-1.jpg','assets/products/mild-plate-2.jpg'],
    description: 'Versatile mild steel plates for fabrication, construction and industrial applications.',
    fromPrice: 2970,
    variants: [
      {label:'16G 1.6mm — 4ft×8ft sheet', price:2970},
      {label:'14G 2.0mm — 4ft×8ft sheet', price:3780},
      {label:'13G 2.5mm — 4ft×8ft sheet', price:4850},
      {label:'11G 3.0mm — 4ft×8ft sheet', price:5900},
      {label:'8G 4.0mm — 4ft×8ft sheet', price:6500},
    ]
  },
  {
    id: 8, category: 'Common Nails', name: 'Common Wire Nails', badge: 'Bulk Wholesale',
    image: 'assets/products/common-nails-1.jpg',
    images: ['assets/products/common-nails-1.jpg','assets/products/common-nails-2.jpg'],
    description: 'High-tensile common wire nails for general construction and carpentry.',
    fromPrice: 90,
    variants: [
      {label:'1 inch — per kg', price:90},
      {label:'4 inch — per kg', price:140},
      {label:'1 inch — 25kg bag', price:2250},
      {label:'4 inch — 25kg bag', price:3500},
    ]
  },
  {
    id: 9, category: 'Roofing Nails', name: 'Roofing Nails — Galvanized', badge: 'Galvanized',
    image: 'assets/products/roofing-nails-1.jpg',
    images: ['assets/products/roofing-nails-1.jpg','assets/products/roofing-nails-2.jpg','assets/products/roofing-nails-3.jpg'],
    description: 'Galvanized roofing nails with washers for iron sheet and tile roofing.',
    fromPrice: 190,
    variants: [
      {label:'2½ inch — per kg', price:190},
      {label:'2½ inch — 25kg bag', price:4750},
      {label:'2½ inch — 50kg bag', price:9500},
    ]
  },
  {
    id: 10, category: 'U-Nails', name: 'U-Nails (Staple Nails)', badge: 'Galvanized',
    image: 'assets/products/u-nails-1.jpg',
    images: ['assets/products/u-nails-1.jpg','assets/products/u-nails-2.jpg'],
    description: 'Galvanized U-shaped staple nails for fencing and wire attachment.',
    fromPrice: 240,
    variants: [
      {label:'1"–3" — per kg', price:240},
      {label:'1"–3" — 25kg bag', price:6000},
    ]
  },
  {
    id: 11, category: 'Anti-Climb Fence', name: 'Anti-Climb Security Fence', badge: 'High Security',
    image: 'assets/products/anti-climb-fence-1.jpg',
    images: ['assets/products/anti-climb-fence-1.jpg','assets/products/anti-climb-fence-2.jpg'],
    description: 'High-security anti-climb perimeter fencing panels for institutions and estates.',
    fromPrice: 5800,
    variants: [
      {label:'1.8m height — 3m panel', price:5800},
      {label:'2.1m height — 3m panel', price:7900},
      {label:'2.4m height — 3m panel', price:10900},
    ]
  },
  {
    id: 12, category: 'Wire Rods', name: 'Hot-Rolled Wire Rods', badge: 'Per Coil',
    image: 'assets/products/wire-rods-1.jpg',
    images: ['assets/products/wire-rods-1.jpg','assets/products/wire-rods-2.jpg'],
    description: 'Hot-rolled wire rods used as raw material for nail, mesh and wire manufacturing.',
    fromPrice: 97,
    variants: [
      {label:'5.5mm — per kg', price:97},
      {label:'6.0mm — per kg', price:101},
      {label:'6.5mm — per kg', price:107},
      {label:'8.0mm — per kg', price:114},
    ]
  },
  {
    id: 13, category: 'Concrete Nails', name: 'Concrete Nails — Hardened Steel', badge: 'Hardened',
    image: 'assets/products/concrete-nails-1.jpg',
    images: ['assets/products/concrete-nails-1.jpg','assets/products/concrete-nails-2.jpg'],
    description: 'Hardened steel concrete nails for masonry and concrete fixing.',
    fromPrice: 245,
    variants: [
      {label:'1"–4" — per kg', price:245},
      {label:'1"–4" — 25kg bag', price:6125},
    ]
  },
  {
    id: 14, category: 'Weld Mesh', name: 'KIFARU™ Weld Mesh', badge: 'KEBS Certified',
    image: 'assets/products/kifaru-weld-mesh-1.jpg',
    images: ['assets/products/kifaru-weld-mesh-1.jpg','assets/products/kifaru-weld-mesh-2.jpg','assets/products/kifaru-weld-mesh-3.jpg'],
    description: 'Welded wire mesh panels for partitions, cages, security grilles and reinforcement.',
    fromPrice: 350,
    variants: [
      {label:'Light 2.0mm — 2.4m×1.2m sheet', price:350},
      {label:'Medium 2.5mm — 2.4m×1.2m sheet', price:450},
      {label:'Heavy 3.0mm — 2.4m×1.2m sheet', price:650},
    ]
  },
  {
    id: 15, category: 'Expanded Metal', name: 'KIFARU™ Expanded Metal', badge: 'Heavy Duty',
    image: 'assets/products/kifaru-expanded-metal-1.jpg',
    images: ['assets/products/kifaru-expanded-metal-1.jpg','assets/products/kifaru-expanded-metal-2.jpg','assets/products/kifaru-expanded-metal-3.jpg'],
    description: 'Heavy-duty expanded metal sheets for security doors, grilles and industrial walkways.',
    fromPrice: 1500,
    variants: [
      {label:'Standard 2.0mm — 8ft×4ft sheet', price:1500},
      {label:'Heavy Duty 3.0mm — 8ft×4ft sheet', price:2500},
    ]
  },
  {
    id: 16, category: 'Copper Gas Rods', name: 'KIFARU™ Copper Gas Rods', badge: 'Premium Grade',
    image: 'assets/products/copper-gas-rods-1.jpg',
    images: ['assets/products/copper-gas-rods-1.jpg','assets/products/copper-gas-rods-2.jpg','assets/products/copper-gas-rods-3.jpg'],
    description: 'High-quality copper coated gas welding rods for industrial fabrication.',
    fromPrice: 1200,
    variants: [
      {label:'1.6mm — 5kg pack', price:1200},
      {label:'2.4mm — 5kg pack', price:1200},
    ]
  },
  {
    id: 17, category: 'Rectangular Hollow Sections', name: 'Kifaru Rectangular Hollow Sections (RHS)', badge: 'RHS',
    image: 'assets/products/kifaru-rectangular-hallow-1.jpeg',
    images: ['assets/products/kifaru-rectangular-hallow-1.jpeg','assets/products/kifaru-rectangular-hallow-2.jpg','assets/products/kifaru-rectangular-hallow-3.jpg'],
    description: 'High-quality Rectangular Hollow Sections (RHS) for structural applications and fabrication.',
    fromPrice: 790,
    variants: [
      {label:'20×40 mm 1.5 mm — 6m piece', price:790},
      {label:'20×40 mm 2.0 mm — 6m piece', price:970},
      {label:'25×50 mm 1.5 mm — 6m piece', price:970},
      {label:'25×50 mm 2.0 mm — 6m piece', price:1350},
      {label:'40×40 mm 1.5 mm — 6m piece', price:1350},
      {label:'40×40 mm 2.0 mm — 6m piece', price:1670},
      {label:'40×60 mm 2.0 mm — 6m piece', price:1890},
      {label:'50×50 mm 2.0 mm — 6m piece', price:2150},
      {label:'50×75 mm 2.5 mm — 6m piece', price:2650},
      {label:'75×75 mm 2.5 mm — 6m piece', price:2950},
      {label:'100×50 mm 2.5 mm — 6m piece', price:3150},
      {label:'100×100 mm 3.0 mm — 6m piece', price:3870},
    ]
  },
  {
    id: 18, category: 'Square Hollow Sections', name: 'Kifaru Square Hollow Sections (SHS)', badge: 'SHS',
    image: 'assets/products/kifaru-square-hallow-1.jpeg',
    images: ['assets/products/kifaru-square-hallow-1.jpeg','assets/products/kifaru-square-hallow-2.jpeg','assets/products/kifaru-square-hallow-3.jpeg'],
    description: 'Durable Square Hollow Sections (SHS) ideal for construction and structural frameworks.',
    fromPrice: 490,
    variants: [
      {label:'20×20 mm 1.5 mm — 6m piece', price:490},
      {label:'25×25 mm 1.5 mm — 6m piece', price:550},
      {label:'25×25 mm 2.0 mm — 6m piece', price:690},
      {label:'30×30 mm 1.5 mm — 6m piece', price:790},
      {label:'30×30 mm 2.0 mm — 6m piece', price:930},
      {label:'40×40 mm 1.5 mm — 6m piece', price:1090},
      {label:'40×40 mm 2.0 mm — 6m piece', price:1490},
      {label:'50×50 mm 2.0 mm — 6m piece', price:1850},
      {label:'60×60 mm 2.5 mm — 6m piece', price:2490},
      {label:'75×75 mm 2.5 mm — 6m piece', price:2980},
      {label:'100×100 mm 3.0 mm — 6m piece', price:3470},
    ]
  }
];

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

  buildWhatsAppMessage() {
    const items = this.get();
    if (!items.length) return '';
    let msg = 'Hello KIFARU Steel! 👋 I would like to place the following order:\n\n';
    items.forEach((item, i) => {
      msg += `${i+1}. *${item.name}*\n   Size/Type: ${item.variant}\n   Qty: ${item.qty}\n   Unit Price: Ksh ${item.price.toLocaleString()}\n   Subtotal: Ksh ${(item.price*item.qty).toLocaleString()}\n\n`;
    });
    msg += `*TOTAL: Ksh ${this.total().toLocaleString()}*\n\nPlease confirm availability, pricing and delivery. Thank you!`;
    return encodeURIComponent(msg);
  },

  openWhatsApp() {
    const msg = this.buildWhatsAppMessage();
    if (!msg) { alert('Your cart is empty. Please add items before ordering.'); return; }
    window.open(`https://wa.me/254755724090?text=${msg}`, '_blank');
  }
};

// ============================================================
// FORMAT PRICE
// ============================================================
function fmtPrice(n) {
  return 'Ksh ' + Number(n).toLocaleString();
}

// ============================================================
// CART DRAWER
// ============================================================
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
            <button class="qty-btn" onclick="Cart.updateQty('${item.key}', ${item.qty-1})">−</button>
            <input class="qty-input" type="number" value="${item.qty}" min="1" onchange="Cart.updateQty('${item.key}', parseInt(this.value)||1)">
            <button class="qty-btn" onclick="Cart.updateQty('${item.key}', ${item.qty+1})">+</button>
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
  // Try to find the image in the quick view modal first
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

  // Mobile nav
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('mobile-open');
    mobileToggle.innerHTML = navMenu?.classList.contains('mobile-open')
      ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  // Cart icon opens drawer
  document.getElementById('cart-icon-btn')?.addEventListener('click', openCartDrawer);

  // Close drawer
  document.getElementById('cart-overlay')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCartDrawer);

  // WhatsApp order from drawer
  document.getElementById('drawer-wa-btn')?.addEventListener('click', () => Cart.openWhatsApp());
  document.getElementById('wa-order-btn')?.addEventListener('click', () => Cart.openWhatsApp());

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
  document.querySelector('.hero-next')?.addEventListener('click', () => { showHeroSlide(curSlide+1); startHeroTimer(); });
  document.querySelector('.hero-prev')?.addEventListener('click', () => { showHeroSlide(curSlide-1); startHeroTimer(); });
  heroDots.forEach((dot, i) => dot.addEventListener('click', () => { showHeroSlide(i); startHeroTimer(); }));
  if (heroSlides.length) { showHeroSlide(0); startHeroTimer(); }

  // Shop page category filter
  const filterLinks = document.querySelectorAll('.sidebar-cats a[data-cat]');
  const shopCards = document.querySelectorAll('.shop-grid .product-card');
  filterLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      filterLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const cat = link.dataset.cat;
      shopCards.forEach(card => {
        card.style.display = cat === 'all' || card.dataset.category === cat ? '' : 'none';
      });
    });
  });

  // Search bar (shop page)
  const searchInput = document.getElementById('shop-search');
  searchInput?.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    shopCards.forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });

  // Sort
  document.getElementById('shop-sort')?.addEventListener('change', e => {
    const val = e.target.value;
    const grid = document.querySelector('.shop-grid');
    if (!grid) return;
    const cards = [...grid.children];
    cards.sort((a, b) => {
      const pa = parseInt(a.dataset.price || 0);
      const pb = parseInt(b.dataset.price || 0);
      if (val === 'price-asc') return pa - pb;
      if (val === 'price-desc') return pb - pa;
      return 0;
    });
    cards.forEach(c => grid.appendChild(c));
  });

  // Cart page render
  if (typeof renderCartPage === 'function') renderCartPage();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObserver.observe(el));

  // Header search (just placeholder behavior)
  document.getElementById('header-search-btn')?.addEventListener('click', () => {
    const q = document.getElementById('header-search-input')?.value?.trim();
    if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
  });

  // Read URL search param on shop page
  const urlParams = new URLSearchParams(window.location.search);
  const urlQ = urlParams.get('q');
  if (urlQ && searchInput) {
    searchInput.value = urlQ;
    searchInput.dispatchEvent(new Event('input'));
  }
});
