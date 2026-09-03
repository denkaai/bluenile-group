/* =========================================================
   BLUE NILE GROUP | KIFARU STEEL
   Shared JavaScript � Cart, UI, Animations
   ========================================================= */

// ============================================================
// PRODUCT CATALOG (Single source of truth)
// ============================================================
const PRODUCTS = [
  {
    id: 1, category: 'TMT Bars', name: 'KIFARU™ TMT Bars', badge: 'Grade BS 4449',
    image: 'assets/products/tmt-bars-1.jpg',
    images: ['assets/products/tmt-bars-1.jpg', 'assets/products/tmt-bars-2.png'],
    description: 'Premium concrete reinforcement rebars with thermo-mechanical treatment for superior strength and seismic resistance.',
    fromPrice: 430,
    variants: [
      { label: 'D8 (8mm) — 12m piece', price: 430 },
      { label: 'D10 (10mm) — 12m piece', price: 650 },
      { label: 'D12 (12mm) — 12m piece', price: 850 },
      { label: 'D16 (16mm) — 12m piece', price: 1490 },
      { label: 'D20 (20mm) — 12m piece', price: 2250 },
      { label: 'D25 (25mm) — 12m piece', price: 3190 },
      { label: 'D32 (32mm) — 12m piece', price: 4390 },
    ]
  },
  {
    id: 2, category: 'TMT Rings', name: 'KIFARU™ TMT Rings / Stirrups', badge: 'KEBS Certified',
    image: 'assets/products/tmt-rings-1.jpg',
    images: ['assets/products/tmt-rings-1.jpg', 'assets/products/tmt-rings-2.jpg'],
    description: 'Pre-bent column rings and stirrups for structural concrete reinforcement.',
    fromPrice: 30,
    variants: [
      { label: '6×6" — per piece', price: 30 },
      { label: '8×8" — per piece', price: 40 },
      { label: '9×9" — per piece', price: 50 },
      { label: '10×10" — per piece', price: 60 },
      { label: '12×12" — per piece', price: 70 },
      { label: '16×16" — per piece', price: 80 },
      { label: '18×18" — per piece', price: 90 },
    ]
  },
  {
    id: 3, category: 'BRC Mesh', name: 'KIFARU™ BRC Mesh', badge: 'KEBS Certified',
    image: 'assets/products/kifaru-brc-mesh-1.jpeg',
    images: ['assets/products/kifaru-brc-mesh-1.jpeg', 'assets/products/kifaru-brc-mesh-2.jpeg'],
    description: 'Reinforced concrete mesh panels for slabs, floors and structural reinforcement.',
    fromPrice: 5700,
    variants: [
      { label: 'A610 (2.5mm) — per sheet', price: 5700 },
      { label: 'A66 (3.0mm) — per sheet', price: 7900 },
      { label: 'A65 (4.0mm) — per sheet', price: 9800 },
      { label: 'A98 (5.0mm) — per sheet', price: 11900 },
      { label: 'A142 (6.0mm) — per sheet', price: 15900 },
    ]
  },
  {
    id: 4, category: 'Chain Link', name: 'KIFARU™ Chain Link (Wholesale Galvanized)', badge: '18m Roll',
    image: 'assets/products/chainlink-galvanized-1.jpg',
    images: ['assets/products/chainlink-galvanized-1.jpg', 'assets/products/chainlink-galvanized-2.jpg', 'assets/products/chainlink-galvanized-3.png'],
    description: 'Wholesale prices for Galvanized Chain Link (Length 18 meters). High-durability boundary fencing.',
    fromPrice: 1250,
    variants: [
      { label: '16G (1.6mm) — 4 ft (18m)', price: 1250 },
      { label: '16G (1.6mm) — 5 ft (18m)', price: 1870 },
      { label: '16G (1.6mm) — 6 ft (18m)', price: 2490 },
      { label: '16G (1.6mm) — 7 ft (18m)', price: 2960 },
      { label: '16G (1.6mm) — 8 ft (18m)', price: 3740 },
      { label: '16G (1.6mm) — 9 ft (18m)', price: 4340 },
      { label: '16G (1.6mm) — 10 ft (18m)', price: 4825 },
      { label: '16G (1.6mm) — 11 ft (18m)', price: 5285 },
      { label: '16G (1.6mm) — 12 ft (18m)', price: 5680 },
      { label: '15G (1.8mm) — 4 ft (18m)', price: 1850 },
      { label: '15G (1.8mm) — 5 ft (18m)', price: 2270 },
      { label: '15G (1.8mm) — 6 ft (18m)', price: 2650 },
      { label: '15G (1.8mm) — 7 ft (18m)', price: 2980 },
      { label: '15G (1.8mm) — 8 ft (18m)', price: 3540 },
      { label: '15G (1.8mm) — 9 ft (18m)', price: 3950 },
      { label: '15G (1.8mm) — 10 ft (18m)', price: 4540 },
      { label: '15G (1.8mm) — 11 ft (18m)', price: 4960 },
      { label: '15G (1.8mm) — 12 ft (18m)', price: 5420 },
      { label: '14G (2.0mm) — 4 ft (18m)', price: 2380 },
      { label: '14G (2.0mm) — 5 ft (18m)', price: 2960 },
      { label: '14G (2.0mm) — 6 ft (18m)', price: 3465 },
      { label: '14G (2.0mm) — 7 ft (18m)', price: 3965 },
      { label: '14G (2.0mm) — 8 ft (18m)', price: 4460 },
      { label: '14G (2.0mm) — 9 ft (18m)', price: 4950 },
      { label: '14G (2.0mm) — 10 ft (18m)', price: 5360 },
      { label: '14G (2.0mm) — 11 ft (18m)', price: 5970 },
      { label: '14G (2.0mm) — 12 ft (18m)', price: 6450 },
      { label: '12.5G (2.5mm) — 4 ft (18m)', price: 3270 },
      { label: '12.5G (2.5mm) — 5 ft (18m)', price: 3755 },
      { label: '12.5G (2.5mm) — 6 ft (18m)', price: 3970 },
      { label: '12.5G (2.5mm) — 7 ft (18m)', price: 4180 },
      { label: '12.5G (2.5mm) — 8 ft (18m)', price: 4780 },
      { label: '12.5G (2.5mm) — 9 ft (18m)', price: 5460 },
      { label: '12.5G (2.5mm) — 10 ft (18m)', price: 5945 },
      { label: '12.5G (2.5mm) — 11 ft (18m)', price: 6650 },
      { label: '12.5G (2.5mm) — 12 ft (18m)', price: 7170 },
    ]
  },
  {
    id: 5, category: 'Round Bars', name: 'KIFARU™ Round Bars', badge: 'KEBS Certified',
    image: 'assets/products/round-bars-1.jpeg',
    images: ['assets/products/round-bars-1.jpeg', 'assets/products/round-bars-2.jpg'],
    description: 'High-quality mild steel round bars for fabrication, fencing and general construction.',
    fromPrice: 130,
    variants: [
      { label: 'R6 (6mm) — 12m piece', price: 130 },
      { label: 'R8 (8mm) — 12m piece', price: 330 },
      { label: 'R10 (10mm) — 12m piece', price: 480 },
      { label: 'R12 (12mm) — 12m piece', price: 680 },
      { label: 'R16 (16mm) — 12m piece', price: 860 },
      { label: 'R20 (20mm) — 12m piece', price: 1180 },
      { label: 'R25 (25mm) — 12m piece', price: 1790 },
      { label: 'R32 (32mm) — 12m piece', price: 2350 },
    ]
  },
  {
    id: 6, category: 'Chicken Mesh', name: 'Galvanized Hexagonal Chicken Mesh', badge: 'Hexagonal',
    image: 'assets/products/chicken-mesh-1.jpg',
    images: ['assets/products/chicken-mesh-1.jpg', 'assets/products/chicken-mesh-2.jpg'],
    description: 'Galvanized hexagonal wire mesh opening for poultry enclosures, agricultural fences and partitions.',
    fromPrice: 1080,
    variants: [
      { label: 'Gauge 22 ½" (13 mm) — 3ft × 30m', price: 1180 },
      { label: 'Gauge 22 ½" (13 mm) — 4ft × 30m', price: 1650 },
      { label: 'Gauge 20 1" (25 mm) — 3ft × 30m', price: 1080 },
      { label: 'Gauge 20 1" (25 mm) — 4ft × 30m', price: 1550 },
      { label: 'Gauge 20 1" (25 mm) — 6ft × 30m', price: 2150 },
      { label: '18 Gauge 2" (50 mm) — 4ft × 30m', price: 2100 },
      { label: '18 Gauge 2" (50 mm) — 6ft × 30m', price: 2950 },
    ]
  },
  {
    id: 7, category: 'Mild Plate', name: 'KIFARU™ Mild Plate', badge: 'KEBS Certified',
    image: 'assets/products/mild-plate-1.jpg',
    images: ['assets/products/mild-plate-1.jpg', 'assets/products/mild-plate-2.jpg'],
    description: 'Versatile mild steel plates for fabrication, construction and industrial applications.',
    fromPrice: 2970,
    variants: [
      { label: '16G 1.6mm — 4ft×8ft sheet', price: 2970 },
      { label: '14G 2.0mm — 4ft×8ft sheet', price: 3780 },
      { label: '13G 2.5mm — 4ft×8ft sheet', price: 4850 },
      { label: '11G 3.0mm — 4ft×8ft sheet', price: 5900 },
      { label: '8G 4.0mm — 4ft×8ft sheet', price: 6500 },
    ]
  },
  {
    id: 8, category: 'Common Nails', name: 'Common Wire Nails', badge: 'Wholesale',
    image: 'assets/products/common-nails-1.jpg',
    images: ['assets/products/common-nails-1.jpg', 'assets/products/common-nails-2.jpg'],
    description: 'High-tensile common wire nails for general construction, roofing and carpentry.',
    fromPrice: 90,
    variants: [
      { label: '1 inch — per kg', price: 90 },
      { label: '4 inch — per kg', price: 140 },
      { label: '1 inch — 25kg bag', price: 2250 },
      { label: '4 inch — 25kg bag', price: 3500 },
    ]
  },
  {
    id: 9, category: 'Roofing Nails', name: 'Roofing Nails — Galvanized', badge: 'Galvanized',
    image: 'assets/products/roofing-nails-1.jpg',
    images: ['assets/products/roofing-nails-1.jpg', 'assets/products/roofing-nails-2.jpg', 'assets/products/roofing-nails-3.jpg'],
    description: 'Galvanized roofing nails with leak-proof washers for corrugated and tile roofing sheets.',
    fromPrice: 190,
    variants: [
      { label: '2½ inch — per kg', price: 190 },
      { label: '2½ inch — 25kg bag', price: 4750 },
      { label: '2½ inch — 50kg bag', price: 9500 },
    ]
  },
  {
    id: 10, category: 'U-Nails', name: 'U-Nails (Staple Nails)', badge: 'Galvanized',
    image: 'assets/products/u-nails-1.jpg',
    images: ['assets/products/u-nails-1.jpg', 'assets/products/u-nails-2.jpg'],
    description: 'Galvanized U-shaped staple nails for fencing, wire attachment and agricultural post fastening.',
    fromPrice: 240,
    variants: [
      { label: '1"–3" — per kg', price: 240 },
      { label: '1"–3" — 25kg bag', price: 6000 },
    ]
  },
  {
    id: 11, category: 'Anti-Climb Fence', name: 'Anti-Climb Security Fence', badge: 'High Security',
    image: 'assets/products/anti-climb-fence-1.jpg',
    images: ['assets/products/anti-climb-fence-1.jpg', 'assets/products/anti-climb-fence-2.jpg'],
    description: 'High-security anti-climb perimeter fencing panels for residential estates, factories and institutions.',
    fromPrice: 5800,
    variants: [
      { label: '1.8m height — 3m panel', price: 5800 },
      { label: '2.1m height — 3m panel', price: 7900 },
      { label: '2.4m height — 3m panel', price: 10900 },
    ]
  },
  {
    id: 12, category: 'Wire Rods', name: 'Hot-Rolled Wire Rods', badge: 'Per Kg',
    image: 'assets/products/wire-rods-1.jpg',
    images: ['assets/products/wire-rods-1.jpg', 'assets/products/wire-rods-2.jpg'],
    description: 'Hot-rolled wire rods used as raw material for nail, mesh and wire manufacturing.',
    fromPrice: 97,
    variants: [
      { label: '5.5mm — per kg', price: 97 },
      { label: '6.0mm — per kg', price: 101 },
      { label: '6.5mm — per kg', price: 107 },
      { label: '8.0mm — per kg', price: 114 },
    ]
  },
  {
    id: 13, category: 'Concrete Nails', name: 'Concrete Nails — Hardened Steel', badge: 'Hardened',
    image: 'assets/products/concrete-nails-1.jpg',
    images: ['assets/products/concrete-nails-1.jpg', 'assets/products/concrete-nails-2.jpg', 'assets/products/concrete-nails-3.png.png', 'assets/products/concrete-nails-4.png.png'],
    description: 'Hardened steel concrete nails for masonry, concrete walls and brick fixing.',
    fromPrice: 245,
    variants: [
      { label: '1"–4" — per kg', price: 245 },
      { label: '1"–4" — 25kg bag', price: 6125 },
    ]
  },
  {
    id: 14, category: 'Weld Mesh', name: 'KIFARU™ Weld Mesh', badge: 'KEBS Certified',
    image: 'assets/products/kifaru-weld-mesh-1.jpg',
    images: ['assets/products/kifaru-weld-mesh-1.jpg', 'assets/products/kifaru-weld-mesh-2.jpg', 'assets/products/kifaru-weld-mesh-3.jpg'],
    description: 'Welded wire mesh panels for partitions, cages, security grilles and floor reinforcement.',
    fromPrice: 350,
    variants: [
      { label: 'Light 2.0mm — 2.4m×1.2m sheet', price: 350 },
      { label: 'Medium 2.5mm — 2.4m×1.2m sheet', price: 450 },
      { label: 'Heavy 3.0mm — 2.4m×1.2m sheet', price: 650 },
    ]
  },
  {
    id: 15, category: 'Expanded Metal', name: 'KIFARU™ Expanded Metal', badge: 'Heavy Duty',
    image: 'assets/products/kifaru-expanded-metal-1.jpg',
    images: ['assets/products/kifaru-expanded-metal-1.jpg', 'assets/products/kifaru-expanded-metal-2.jpg', 'assets/products/kifaru-expanded-metal-3.jpg'],
    description: 'Heavy-duty expanded metal sheets for security doors, window grilles and industrial walkways.',
    fromPrice: 1500,
    variants: [
      { label: 'Standard 2.0mm — 8ft×4ft sheet', price: 1500 },
      { label: 'Heavy Duty 3.0mm — 8ft×4ft sheet', price: 2500 },
    ]
  },
  {
    id: 16, category: 'Copper Gas Rods', name: 'KIFARU™ Copper Gas Rods', badge: 'Premium Grade',
    image: 'assets/products/copper-gas-rods-1.jpg',
    images: ['assets/products/copper-gas-rods-1.jpg', 'assets/products/copper-gas-rods-2.jpg', 'assets/products/copper-gas-rods-3.jpg'],
    description: 'High-quality copper coated gas welding rods for industrial steel and pipe fabrication.',
    fromPrice: 1200,
    variants: [
      { label: '1.6mm — 5kg pack', price: 1200 },
      { label: '2.4mm — 5kg pack', price: 1200 },
    ]
  },
  {
    id: 17, category: 'Rectangular Hollow Sections', name: 'Kifaru Rectangular Hollow Sections (RHS)', badge: 'RHS',
    image: 'assets/products/kifaru-rectangular-hallow-1.jpeg',
    images: ['assets/products/kifaru-rectangular-hallow-1.jpeg', 'assets/products/kifaru-rectangular-hallow-2.jpg', 'assets/products/kifaru-rectangular-hallow-3.jpg'],
    description: 'High-quality Rectangular Hollow Sections (RHS) for structural steel frameworks and gates.',
    fromPrice: 790,
    variants: [
      { label: '20×40 mm 1.5 mm — 6m piece', price: 790 },
      { label: '20×40 mm 2.0 mm — 6m piece', price: 970 },
      { label: '25×50 mm 1.5 mm — 6m piece', price: 970 },
      { label: '25×50 mm 2.0 mm — 6m piece', price: 1350 },
      { label: '40×40 mm 1.5 mm — 6m piece', price: 1350 },
      { label: '40×40 mm 2.0 mm — 6m piece', price: 1670 },
      { label: '40×60 mm 2.0 mm — 6m piece', price: 1890 },
      { label: '50×50 mm 2.0 mm — 6m piece', price: 2150 },
      { label: '50×75 mm 2.5 mm — 6m piece', price: 2650 },
      { label: '75×75 mm 2.5 mm — 6m piece', price: 2950 },
      { label: '100×50 mm 2.5 mm — 6m piece', price: 3150 },
      { label: '100×100 mm 3.0 mm — 6m piece', price: 3870 },
    ]
  },
  {
    id: 18, category: 'Square Hollow Sections', name: 'Kifaru Square Hollow Sections (SHS)', badge: 'SHS',
    image: 'assets/products/kifaru-square-hallow-1.jpeg',
    images: ['assets/products/kifaru-square-hallow-1.jpeg', 'assets/products/kifaru-square-hallow-2.jpeg', 'assets/products/kifaru-square-hallow-3.jpeg'],
    description: 'Durable Square Hollow Sections (SHS) ideal for construction and structural frameworks.',
    fromPrice: 490,
    variants: [
      { label: '20×20 mm 1.5 mm — 6m piece', price: 490 },
      { label: '25×25 mm 1.5 mm — 6m piece', price: 550 },
      { label: '25×25 mm 2.0 mm — 6m piece', price: 690 },
      { label: '30×30 mm 1.5 mm — 6m piece', price: 790 },
      { label: '30×30 mm 2.0 mm — 6m piece', price: 930 },
      { label: '40×40 mm 1.5 mm — 6m piece', price: 1090 },
      { label: '40×40 mm 2.0 mm — 6m piece', price: 1490 },
      { label: '50×50 mm 2.0 mm — 6m piece', price: 1850 },
      { label: '60×60 mm 2.5 mm — 6m piece', price: 2490 },
      { label: '75×75 mm 2.5 mm — 6m piece', price: 2980 },
      { label: '100×100 mm 3.0 mm — 6m piece', price: 3470 },
    ]
  },
  {
    id: 19, category: 'Corrugated Mabati', name: 'KIFARU Corrugated Mabati (Gauge 30)', badge: 'Gauge 30',
    image: 'assets/products/corrugated-mabati-1.jpg',
    images: ['assets/products/corrugated-mabati-1.jpg'],
    description: 'High-quality corrugated roofing sheets. Gauge 30 @ Ksh 300 per meter.',
    fromPrice: 600,
    variants: [
      { label: '2 meter', price: 600 },
      { label: '2.5 meter', price: 750 },
      { label: '3 meter', price: 900 },
    ]
  },
  {
    id: 20, category: 'Box Profile', name: 'KIFARU Box Profile Mabati (Gauge 30)', badge: 'Gauge 30',
    image: 'assets/products/box-profile-1.jpg',
    images: ['assets/products/box-profile-1.jpg', 'assets/products/box-profile-2.jpg'],
    description: 'Durable modern box profile roofing sheets. Gauge 30 @ Ksh 350 per meter.',
    fromPrice: 700,
    variants: [
      { label: '2 meter', price: 700 },
      { label: '2.5 meter', price: 875 },
      { label: '3 meter', price: 1050 },
    ]
  },
  {
    id: 21, category: 'Cement', name: 'National Cement (Simba Brand)', badge: 'KEBS Approved',
    image: 'assets/products/simba-cement-1.jpg',
    images: ['assets/products/simba-cement-1.jpg', 'assets/products/simba-cement-2.jpg', 'assets/products/simba-cement-3.jpg', 'assets/products/simba-cement-4.jpg'],
    description: 'National Cement - Simba Brand. High-strength cement for structural and general construction.',
    fromPrice: 550,
    variants: [
      { label: 'National Cement (Simba 32.5R)', price: 550 },
      { label: 'National Cement (Simba Power 42.5N / 42.5R)', price: 580 },
    ]
  },
  {
    id: 22, category: 'Cement', name: 'Bamburi Cement', badge: 'Premium',
    image: 'assets/products/bamburi-cement-1.jpg',
    images: ['assets/products/bamburi-cement-1.jpg', 'assets/products/bamburi-cement-2.jpg', 'assets/products/bamburi-cement-3.jpg', 'assets/products/bamburi-cement-4.jpg'],
    description: 'Premium quality Bamburi cement for solid concrete foundations, columns and slabs.',
    fromPrice: 630,
    variants: [
      { label: 'Bamburi Cement — 50kg bag', price: 630 },
    ]
  },
  {
    id: 23, category: 'Chain Link', name: 'PVC Coated Chain Link (Green, Black, Brown)', badge: '18m Length',
    image: 'assets/products/pvc-coated-chain-link-1.jpeg',
    images: ['assets/products/pvc-coated-chain-link-1.jpeg', 'assets/products/pvc-coated-chain-link-2.jpeg', 'assets/products/pvc-coated-chain-link-3.jpeg'],
    description: 'Premium PVC Coated Chain link (available in Green, Black, Brown). Length 18 meters roll.',
    fromPrice: 2450,
    variants: [
      { label: '10 Gauge (3.2mm) — 4 ft', price: 2450 },
      { label: '10 Gauge (3.2mm) — 5 ft', price: 2850 },
      { label: '10 Gauge (3.2mm) — 6 ft', price: 3150 },
      { label: '10 Gauge (3.2mm) — 7 ft', price: 3350 },
      { label: '10 Gauge (3.2mm) — 8 ft', price: 3850 },
      { label: '10 Gauge (3.2mm) — 9 ft', price: 4350 },
      { label: '10 Gauge (3.2mm) — 10 ft', price: 4750 },
      { label: '10 Gauge (3.2mm) — 11 ft', price: 5350 },
      { label: '10 Gauge (3.2mm) — 12 ft', price: 6150 },
      { label: '8 Gauge (4.0mm) — 4 ft', price: 3450 },
      { label: '8 Gauge (4.0mm) — 5 ft', price: 3950 },
      { label: '8 Gauge (4.0mm) — 6 ft', price: 4350 },
      { label: '8 Gauge (4.0mm) — 7 ft', price: 4750 },
      { label: '8 Gauge (4.0mm) — 8 ft', price: 5350 },
      { label: '8 Gauge (4.0mm) — 9 ft', price: 5630 },
      { label: '8 Gauge (4.0mm) — 10 ft', price: 5970 },
      { label: '8 Gauge (4.0mm) — 11 ft', price: 6340 },
      { label: '8 Gauge (4.0mm) — 12 ft', price: 6885 },
    ]
  },
  {
    id: 24, category: 'Cement', name: 'Savannah Cement', badge: 'High Quality',
    image: 'assets/products/savannah-cement-1.jpg',
    images: ['assets/products/savannah-cement-1.jpg'],
    description: 'High quality Savannah cement for reliable construction work.',
    fromPrice: 580,
    variants: [
      { label: 'Savannah Cement — 50kg bag', price: 580 },
    ]
  },
  {
    id: 25, category: 'Cement', name: 'Rai Cement', badge: 'Premium',
    image: 'assets/products/rai-cement-1.jpg',
    images: ['assets/products/rai-cement-1.jpg'],
    description: 'Premium quality Rai cement for residential and commercial masonry.',
    fromPrice: 560,
    variants: [
      { label: 'Rai Cement — 50kg bag', price: 560 },
    ]
  },
  {
    id: 26, category: 'Tile Mabati', name: 'Roman, Elegant & Eurotile Mabati', badge: 'Gauge 28',
    image: 'assets/products/roman-tile-1.jpg',
    images: ['assets/products/roman-tile-1.jpg', 'assets/products/roman-tile-2.jpg', 'assets/products/roman-tile-3.jpg', 'assets/products/roman-tile-4.jpg'],
    description: 'Roman tile, Elegant tile, and Eurotile Mabati. Gauge 28 @ Ksh 450 per meter.',
    fromPrice: 900,
    variants: [
      { label: '2 meter', price: 900 },
      { label: '2.5 meter', price: 1125 },
      { label: '3 meter', price: 1350 },
    ]
  },
  {
    id: 27, category: 'Versatile Mabati', name: 'Charcoal Grey Versatile Mabati', badge: 'Gauge 28',
    image: 'assets/products/charcoal-grey-mabati-1.jpg',
    images: ['assets/products/charcoal-grey-mabati-1.jpg', 'assets/products/charcoal-grey-mabati-2.jpg', 'assets/products/charcoal-grey-mabati-3.jpg'],
    description: 'Premium Charcoal Grey Versatile Mabati. Gauge 28 @ Ksh 550 per meter.',
    fromPrice: 1100,
    variants: [
      { label: '2 meter', price: 1100 },
      { label: '2.5 meter', price: 1375 },
      { label: '3 meter', price: 1650 },
    ]
  },
  {
    id: 28, category: 'Roofing Accessories', name: 'Ridge and Valley (Gauge 28)', badge: 'Gauge 28',
    image: 'assets/products/ridge-valley-mabati-1.jpg',
    images: ['assets/products/ridge-valley-mabati-1.jpg', 'assets/products/ridge-valley-mabati-2.jpg', 'assets/products/ridge-valley-mabati-3.jpg', 'assets/products/ridge-valley-mabati-4.jpg'],
    description: 'Ridge and Valley Gauge 28 for roof finishing and weatherproofing.',
    fromPrice: 350,
    variants: [
      { label: 'Glazed Ridges (per piece)', price: 450 },
      { label: 'Flat Ridges (per piece)', price: 400 },
      { label: 'Valley Trays (per piece)', price: 350 },
      { label: 'Plain Sheets (per meter)', price: 350 },
    ]
  },
  {
    id: 29, category: 'Hoop Iron', name: 'Standard Hoop Iron Roll', badge: 'Standard',
    image: 'assets/products/standard-hoop-iron-roll-1.jpg',
    images: ['assets/products/standard-hoop-iron-roll-1.jpg', 'assets/products/standard-hoop-iron-roll-2.jpg'],
    description: 'Standard Hoop Iron Roll for truss binding and masonry reinforcement.',
    fromPrice: 2100,
    variants: [
      { label: 'Standard Hoop Iron Roll', price: 2100 }
    ]
  },
  {
    id: 30, category: 'Binding Wire', name: 'Binding Wire', badge: 'High Tensile',
    image: 'assets/products/binding-wire-1.jpg',
    images: ['assets/products/binding-wire-1.jpg', 'assets/products/binding-wire-2.jpg'],
    description: 'High quality annealed binding wire available in various gauges and rolls.',
    fromPrice: 90,
    variants: [
      { label: '18G 1.2mm (Price per kg)', price: 90 },
      { label: '18G 1.2mm (Price per Roll)', price: 2250 },
      { label: '16G 1.6mm (Price per kg)', price: 109 },
      { label: '16G 1.6mm (Price per Roll)', price: 2725 },
      { label: '14G 2.0mm (Price per kg)', price: 124 },
      { label: '14G 2.0mm (Price per Roll)', price: 3100 },
      { label: '12G 2.5mm (Price per kg)', price: 156 },
      { label: '12G 2.5mm (Price per Roll)', price: 3900 }
    ]
  },
  {
    id: 31, category: 'Gabion Boxes', name: 'Gabion Boxes', badge: 'Typical Mesh',
    image: 'assets/products/Gabion-boxes-1.jpg',
    images: ['assets/products/Gabion-boxes-1.jpg', 'assets/products/Gabion-boxes-2.jpg'],
    description: 'Heavy duty Gabion Boxes (Typical Mesh 80x100mm) for river bank protection and soil retention.',
    fromPrice: 1350,
    variants: [
      { label: '1 × 1 × 1 meter', price: 1350 },
      { label: '2 × 1 × 0.5 meter', price: 1850 },
      { label: '2 × 1 × 1 meter', price: 2350 },
      { label: '3 × 1 × 1 meter', price: 3150 },
      { label: '4 × 1 × 1 meter', price: 4250 }
    ]
  },
  {
    id: 32, category: 'Razor Wire', name: 'Razor Wire', badge: 'Security',
    image: 'assets/products/razor-wire-1.jpg',
    images: ['assets/products/razor-wire-1.jpg', 'assets/products/razor-wire-2.jpg'],
    description: 'High quality concertina razor wire for high-security perimeter protection.',
    fromPrice: 1050,
    variants: [
      { label: 'Galvanized 450mm - 8mtrs', price: 1050 },
      { label: 'PVC-Coated 450mm - 10mtrs', price: 1250 },
      { label: 'Galvanized Heavy Duty 730mm - 8mtrs', price: 1800 },
      { label: 'PVC-Coated Heavy Duty 730mm - 10mtrs', price: 2300 },
      { label: 'Industrial Razor Wire 980mm - (7mtrs)', price: 3100 }
    ]
  },
  {
    id: 33, category: 'Barbed Wire', name: 'Barbed Wire', badge: 'Galvanized',
    image: 'assets/products/barbed-wire-1.png',
    images: ['assets/products/barbed-wire-1.png', 'assets/products/barbed-wire-2.jpg', 'assets/products/barbed-wire-3.jpg'],
    description: 'High-tensile galvanized barbed wire for agricultural and perimeter fencing.',
    fromPrice: 1150,
    variants: [
      { label: '12.5G - 20Kgs (240m)', price: 1150 },
      { label: '12.5G - 25Kgs (480m)', price: 2450 },
      { label: '12.5G - 30kgs (610m)', price: 3150 },
      { label: '16G - 20Kgs (240m)', price: 1580 },
      { label: '16G - 25Kgs (480m)', price: 2850 },
      { label: '16G - 30kgs (610m)', price: 3750 }
    ]
  },
  {
    id: 34, category: 'Wire Rods', name: 'Wire Rods (Bulk Coils)', badge: 'Metric Tonnes',
    image: 'assets/products/wire-rods-2.jpg',
    images: ['assets/products/wire-rods-1.jpg', 'assets/products/wire-rods-2.jpg'],
    description: 'High quality industrial wire rod coils in metric tonnes for manufacturing.',
    fromPrice: 97,
    variants: [
      { label: '5.5mm (Price Per Kg)', price: 97 },
      { label: '6.0mm (Price Per Kg)', price: 101 },
      { label: '6.5mm (Price Per Kg)', price: 107 },
      { label: '8.0mm (Price Per Kg)', price: 114 },
      { label: '1.8 (MT) Metric tonnes (Per Coil)', price: 127000 },
      { label: '2.0 (MT) Metric tonnes (Per Coil)', price: 140000 },
      { label: '2.2 (MT) Metric tonnes (Per Coil)', price: 175000 }
    ]
  },
  {
    id: 35, category: 'Galvanized Wire', name: 'Galvanized Wire', badge: 'Standard',
    image: 'assets/products/Galvanized-wire-1.jpg',
    images: ['assets/products/Galvanized-wire-1.jpg', 'assets/products/Galvanized-wire-2.jpg'],
    description: 'Rust-resistant galvanized steel wire for general fencing and fabrication.',
    fromPrice: 85,
    variants: [
      { label: '16G 1.6mm (Price per kg)', price: 120 },
      { label: '16G 1.6mm (Price per 50kg Roll)', price: 6000 },
      { label: '14G 2.0mm (Price per kg)', price: 112 },
      { label: '14G 2.0mm (Price per 50kg Roll)', price: 5600 },
      { label: '12.5G 2.5mm (Price per kg)', price: 105 },
      { label: '12.5G 2.5mm (Price per 50kg Roll)', price: 5250 },
      { label: '10G 3.2mm (Price per kg)', price: 95 },
      { label: '10G 3.2mm (Price per 50kg Roll)', price: 4750 },
      { label: '8G 4.0mm (Price per kg)', price: 85 },
      { label: '8G 4.0mm (Price per 50kg Roll)', price: 4250 }
    ]
  },
  {
    id: 36, category: 'Angle Lines', name: 'Angle Lines', badge: '6m Long',
    image: 'assets/products/angle-lines-1.jpg',
    images: ['assets/products/angle-lines-1.jpg', 'assets/products/angle-lines-2.jpg'],
    description: 'High quality structural angle lines. Factory price per 6m length.',
    fromPrice: 280,
    variants: [
      { label: '20 × 20 mm (3 mm) — 6m', price: 280 },
      { label: '25 × 25 mm (3 mm) — 6m', price: 375 },
      { label: '30 × 30 mm (3 mm) — 6m', price: 495 },
      { label: '40 × 40 mm (4 mm) — 6m', price: 740 },
      { label: '50 × 50 mm (5 mm) — 6m', price: 965 },
      { label: '65 × 65 mm (6 mm) — 6m', price: 1487 },
      { label: '75 × 75 mm (6 mm) — 6m', price: 1939 },
      { label: '90 × 90 mm (8 mm) — 6m', price: 2680 },
      { label: '100 × 100 mm (10 mm) — 6m', price: 3470 }
    ]
  },
  {
    id: 37, category: 'Round Pipes', name: 'Round Pipes', badge: '6m Long',
    image: 'assets/products/round-pipes-1.jpg',
    images: ['assets/products/round-pipes-1.jpg', 'assets/products/round-pipes-2.jpg'],
    description: 'Durable round steel pipes. Factory price per 6m length.',
    fromPrice: 250,
    variants: [
      { label: '½" (18G) — 6m', price: 250 },
      { label: '¾" (18G) — 6m', price: 330 },
      { label: '1" (16G) — 6m', price: 480 },
      { label: '1¼" (16G) — 6m', price: 640 },
      { label: '1½" (16G) — 6m', price: 880 },
      { label: '2" (14G) — 6m', price: 1080 },
      { label: '2½" (14G) — 6m', price: 1390 },
      { label: '3" (14G) — 6m', price: 1840 },
      { label: '4" (12G) — 6m', price: 2450 }
    ]
  },
  {
    id: 38, category: 'Stainless Steel Chrome Pipes', name: 'Stainless Steel Chrome Pipes', badge: '6m Long',
    image: 'assets/products/stainless-steel-chrome-pipes-1.jpg',
    images: ['assets/products/stainless-steel-chrome-pipes-1.jpg', 'assets/products/stainless-steel-chrome-pipes-2.jpg', 'assets/products/stainless-steel-chrome-pipes-3.jpg'],
    description: 'Stainless Steel Chrome Pipes for handrails, balustrades and furniture. Factory price per 6m.',
    fromPrice: 580,
    variants: [
      { label: '19 mm / ¾" (0.8 mm) — 6m', price: 580 },
      { label: '25 mm / 1" (0.8 mm) — 6m', price: 780 },
      { label: '32 mm / 1¼" (1.0 mm) — 6m', price: 990 },
      { label: '38 mm / 1½" (1.0 mm) — 6m', price: 1340 },
      { label: '50 mm / 2" (1.2 mm) — 6m', price: 1870 },
      { label: '63 mm / 2½" (1.2 mm) — 6m', price: 2390 },
      { label: '76 mm / 3" (1.5 mm) — 6m', price: 2830 }
    ]
  },
  {
    id: 39, category: 'Floor Tile', name: 'Floor Tile', badge: 'Tiles',
    image: 'assets/products/floor-tile-1.jpg',
    images: ['assets/products/floor-tile-1.jpg', 'assets/products/floor-tile-2.jpg', 'assets/products/floor-tile-3.jpg', 'assets/products/floor-tile-4.jpg'],
    description: 'High quality durable ceramic and porcelain Floor Tiles.',
    fromPrice: 470,
    variants: [
      { label: '30×30 (17 Pcs per box)', price: 470 },
      { label: '40×40 (12 Pcs per box)', price: 640 },
      { label: '50×50 (7 Pcs per box)', price: 830 },
      { label: '60×60 (4 Pcs per box)', price: 1150 }
    ]
  },
  {
    id: 40, category: 'Wall Tile', name: 'Wall Tile', badge: 'Tiles',
    image: 'assets/products/wall-tile-1.jpg',
    images: ['assets/products/wall-tile-1.jpg', 'assets/products/wall-tile-2.jpg'],
    description: 'Beautiful glazed ceramic Wall Tiles for kitchens and bathrooms.',
    fromPrice: 530,
    variants: [
      { label: '25×40 (15 Pcs per box)', price: 530 },
      { label: '30×60 (8 Pcs per box)', price: 790 }
    ]
  },
  {
    id: 41, category: 'Tanks', name: 'Water Tanks', badge: 'Various Brands',
    image: 'assets/products/tank-1.jpg',
    images: ['assets/products/tank-1.jpg', 'assets/products/tank-2.jpg', 'assets/products/tank-3.jpg', 'assets/products/tank-4.jpg', 'assets/products/tank-5.jpg', 'assets/products/tank-6.jpg', 'assets/products/tank-7.jpg', 'assets/products/tank-8.jpg'],
    description: 'High quality water storage tanks. Available brands: Kentank, Roto, Polytanks, Reliance & Royal Tanks.',
    fromPrice: 3300,
    variants: [
      { label: '500 Ltrs', price: 3300 },
      { label: '1000 Ltrs', price: 6500 },
      { label: '1500 Ltrs', price: 8500 },
      { label: '2000 Ltrs', price: 10500 },
      { label: '3000 Ltrs', price: 14500 },
      { label: '4000 Ltrs', price: 18500 },
      { label: '5000 Ltrs', price: 26500 },
      { label: '6000 Ltrs', price: 28500 },
      { label: '8000 Ltrs', price: 32500 },
      { label: '10000 Ltrs', price: 48500 },
      { label: '16000 Ltrs', price: 69500 },
      { label: '20000 Ltrs', price: 99500 },
      { label: '24000 Ltrs', price: 146500 }
    ]
  },
  {
    id: 42, category: 'Chicken Mesh', name: 'Plastic Poultry Mesh (HDPE)', badge: 'HDPE Mesh',
    image: 'assets/products/plastic-poultry-mesh-1.jpeg',
    images: ['assets/products/plastic-poultry-mesh-1.jpeg', 'assets/products/plastic-poultry-mesh-2.jpeg', 'assets/products/plastic-poultry-mesh-3.jpg'],
    description: 'Durable Plastic Poultry Mesh (HDPE). UV stabilized, rust-proof, ideal for poultry runs and garden enclosures.',
    fromPrice: 3500,
    variants: [
      { label: '1 m × 25 m roll', price: 3500 },
      { label: '1 m × 50 m roll', price: 4800 }
    ]
  },
  {
    id: 43, category: 'Toilets & Urinals', name: 'White Tetragon Rimless Wall-Hung Toilet Pan', badge: 'Rimless',
    image: 'assets/products/toilets&urinals/white_tetragon_wall_hung_toilet_pan.jpg',
    images: ['assets/products/toilets&urinals/white_tetragon_wall_hung_toilet_pan.jpg'],
    description: 'Premium modern rimless wall-hung toilet pan in brilliant white ceramic.',
    fromPrice: 12780,
    variants: [
      { label: 'Complete Pan Unit', price: 12780 }
    ]
  },
  {
    id: 44, category: 'Toilets & Urinals', name: 'Boston White Rimless Wall-Hung Pan', badge: 'Wall-Hung',
    image: 'assets/products/toilets&urinals/toilet-1.jpg',
    images: ['assets/products/toilets&urinals/toilet (2).jpg', 'assets/products/toilets&urinals/toilet (3).jpg', 'assets/products/toilets&urinals/toilet-1.jpg'],
    description: 'Sleek Boston white rimless wall-hung pan with ergonomic design and hygienic flush.',
    fromPrice: 10498,
    variants: [
      { label: 'Standard Unit', price: 10498 }
    ]
  },
  {
    id: 45, category: 'Toilets & Urinals', name: 'Soul Compact Wall-Hung Toilet Pan', badge: 'Compact',
    image: 'assets/products/toilets&urinals/soul-wall-hung-pan.webp',
    images: ['assets/products/toilets&urinals/soul-wall-hung-pan.webp'],
    description: 'Space-saving compact wall-hung toilet pan ideal for modern bathrooms and powder rooms.',
    fromPrice: 9970,
    variants: [
      { label: 'Standard Unit', price: 9970 }
    ]
  },
  {
    id: 46, category: 'Toilets & Urinals', name: 'White Maya Dual-Flush Close-Coupled Toilet Suite', badge: 'Dual-Flush',
    image: 'assets/products/toilets&urinals/white-maya-toilet-suite.webp',
    images: ['assets/products/toilets&urinals/white-maya-toilet-suite.webp'],
    description: 'Water-saving dual-flush close-coupled toilet suite with soft-close seat and cistern.',
    fromPrice: 9450,
    variants: [
      { label: 'Complete Suite (Pan + Cistern)', price: 9450 }
    ]
  },
  {
    id: 47, category: 'Toilets & Urinals', name: 'Inca Maya Premium Close-Coupled Toilet Suite', badge: 'Premium',
    image: 'assets/products/toilets&urinals/inca-maya-toilet-suite.webp',
    images: ['assets/products/toilets&urinals/inca-maya-toilet-suite.webp'],
    description: 'High-end Inca Maya close-coupled ceramic suite offering luxury styling and silent flush mechanism.',
    fromPrice: 11390,
    variants: [
      { label: 'Complete Suite', price: 11390 }
    ]
  },
  {
    id: 48, category: 'Toilets & Urinals', name: 'Cotto Simply Modish Dual Top-Flush Toilet Suite', badge: 'Cotto',
    image: 'assets/products/toilets&urinals/toilet (2).jpg',
    images: ['assets/products/toilets&urinals/toilet (2).jpg', 'assets/products/toilets&urinals/toilet (3).jpg', 'assets/products/toilets&urinals/toilet-1.jpg'],
    description: 'Top-of-the-line Cotto Simply Modish dual top-flush designer toilet suite.',
    fromPrice: 16767,
    variants: [
      { label: 'Complete Luxury Suite', price: 16767 }
    ]
  },
  {
    id: 49, category: 'Toilets & Urinals', name: 'Senso Automatic Infrared Sensor Urinal', badge: 'Sensor',
    image: 'assets/products/toilets&urinals/senso-whung-sensor-urinal.jpg',
    images: ['assets/products/toilets&urinals/senso-whung-sensor-urinal.jpg'],
    description: 'Touchless automatic infrared sensor urinal for commercial offices, hotels and institutions.',
    fromPrice: 17599,
    variants: [
      { label: 'Automatic Sensor Urinal Unit', price: 17599 }
    ]
  },
  {
    id: 50, category: 'Toilets & Urinals', name: 'Novo Wall-Hung Ceramic Urinal', badge: 'Ceramic',
    image: 'assets/products/toilets&urinals/novo-wall-hung-urinal.jpg',
    images: ['assets/products/toilets&urinals/novo-wall-hung-urinal.jpg'],
    description: 'Durable commercial wall-hung ceramic urinal bowl with high splash resistance.',
    fromPrice: 5780,
    variants: [
      { label: 'Wall-Hung Bowl', price: 5780 }
    ]
  },
  {
    id: 51, category: 'Toilets & Urinals', name: 'Cotto Chrome Urinal Flush Valve', badge: 'Chrome',
    image: 'assets/products/toilets&urinals/toilet (3).jpg',
    images: ['assets/products/toilets&urinals/toilet (2).jpg', 'assets/products/toilets&urinals/toilet (3).jpg', 'assets/products/toilets&urinals/toilet-1.jpg'],
    description: 'Heavy duty chrome-plated brass urinal flush valve engineered for high traffic use.',
    fromPrice: 3249,
    variants: [
      { label: 'Chrome Flush Valve Unit', price: 3249 }
    ]
  },
  {
    id: 52, category: 'Toilets & Urinals', name: 'Unix Push-Button Urinal Flush Valve', badge: 'Push Button',
    image: 'assets/products/toilets&urinals/toilet (2).jpg',
    images: ['assets/products/toilets&urinals/toilet (2).jpg', 'assets/products/toilets&urinals/toilet (3).jpg', 'assets/products/toilets&urinals/toilet-1.jpg'],
    description: 'Reliable Unix push-button mechanical urinal flush valve for commercial restrooms.',
    fromPrice: 2678,
    variants: [
      { label: 'Push-Button Valve', price: 2678 }
    ]
  },
  {
    id: 53, category: 'Toilets & Urinals', name: 'White Beta Floor-Mounted Ceramic Bidet', badge: 'Bidet',
    image: 'assets/products/toilets&urinals/white-beta-bidet.jpg',
    images: ['assets/products/toilets&urinals/white-beta-bidet.jpg'],
    description: 'Classic floor-mounted ceramic bidet in pristine white porcelain finish.',
    fromPrice: 8466,
    variants: [
      { label: 'Floor-Mounted Bidet', price: 8466 }
    ]
  },
  {
    id: 54, category: 'Cabinets', name: 'Casa White Mirror Bathroom Cabinet', badge: 'Vanity',
    image: 'assets/products/cabinets/casa-white-mirror-cabinet.webp',
    images: ['assets/products/cabinets/casa-white-mirror-cabinet.webp'],
    description: 'Elegant Casa white wall-hung bathroom mirror vanity cabinet with internal shelving.',
    fromPrice: 15000,
    variants: [
      { label: 'Casa White Cabinet Unit', price: 15000 }
    ]
  },
  {
    id: 55, category: 'Cabinets', name: 'Ekos Cabinet Basin', badge: 'With Basin',
    image: 'assets/products/cabinets/ekos-cabinet-basin.webp',
    images: ['assets/products/cabinets/ekos-cabinet-basin.webp'],
    description: 'Contemporary Ekos bathroom storage cabinet integrated with a premium ceramic wash basin.',
    fromPrice: 18000,
    variants: [
      { label: 'Cabinet + Basin Suite', price: 18000 }
    ]
  },
  {
    id: 56, category: 'Cabinets', name: 'Le Luxe White Mirror Cabinet', badge: 'Luxury',
    image: 'assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg',
    images: ['assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg'],
    description: 'High-end luxury Le Luxe white bathroom vanity with multi-tier mirror storage.',
    fromPrice: 22000,
    variants: [
      { label: 'Le Luxe Vanity Suite', price: 22000 }
    ]
  },
  {
    id: 57, category: 'Cabinets', name: 'Spazio Grey Mirror Cabinet', badge: 'Modern Grey',
    image: 'assets/products/cabinets/spazio-grey-mirror-cabinet.webp',
    images: ['assets/products/cabinets/spazio-grey-mirror-cabinet.webp'],
    description: 'Sophisticated Spazio slate-grey bathroom mirror vanity unit with soft-close doors.',
    fromPrice: 19500,
    variants: [
      { label: 'Spazio Grey Vanity Unit', price: 19500 }
    ]
  },
  {
    id: 58, category: 'Cabinets', name: 'Deluxe Modern Bathroom Vanity Cabinet Suite', badge: 'Suite',
    image: 'assets/products/cabinets/cabinets.jpg',
    images: ['assets/products/cabinets/cabinets.jpg', 'assets/products/cabinets/casa-white-mirror-cabinet.webp', 'assets/products/cabinets/ekos-cabinet-basin.webp', 'assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg', 'assets/products/cabinets/spazio-grey-mirror-cabinet.webp'],
    description: 'Complete deluxe modular bathroom vanity and mirror cabinet set with maximum storage.',
    fromPrice: 24500,
    variants: [
      { label: 'Deluxe Vanity Suite', price: 24500 }
    ]
  },
  {
    id: 59, category: 'Kitchen Sinks', name: 'Trendy Black Quartz Double Bowl Kitchen Sink', badge: 'Quartz',
    image: 'assets/products/kitchen sinks/trendy-black-quartz.jpg',
    images: ['assets/products/kitchen sinks/trendy-black-quartz.jpg'],
    description: 'High-quality Trendy Black Quartz Double Bowl Kitchen Sink.',
    fromPrice: 18600,
    variants: [{ label: 'Trendy Black Quartz Double Bowl', price: 18600 }]
  },
  {
    id: 60, category: 'Kitchen Sinks', name: 'SUS304 Stainless Steel Double Bowl Sink with Board', badge: 'SUS304',
    image: 'assets/products/kitchen sinks/sus304-stainless-steel.jpg',
    images: ['assets/products/kitchen sinks/sus304-stainless-steel.jpg'],
    description: 'Premium SUS304 Stainless Steel Double Bowl Sink with drain board.',
    fromPrice: 9200,
    variants: [{ label: 'SUS304 Double Bowl Sink with Board', price: 9200 }]
  },
  {
    id: 61, category: 'Kitchen Sinks', name: 'Stainless Steel Deep Single Bowl Undermount Sink', badge: 'Undermount',
    image: 'assets/products/kitchen sinks/stainless-deep-single.jpg',
    images: ['assets/products/kitchen sinks/stainless-deep-single.jpg'],
    description: 'Durable Stainless Steel Deep Single Bowl Undermount Sink.',
    fromPrice: 5500,
    variants: [{ label: 'Deep Single Bowl Undermount', price: 5500 }]
  },
  {
    id: 62, category: 'Kitchen Sinks', name: 'Stainless Steel Double Bowl Drop-In Sink with Board', badge: 'Drop-In',
    image: 'assets/products/kitchen sinks/stainless-double-dropin.jpg',
    images: ['assets/products/kitchen sinks/stainless-double-dropin.jpg'],
    description: 'Convenient Stainless Steel Double Bowl Drop-In Sink with drain board.',
    fromPrice: 7800,
    variants: [{ label: 'Double Bowl Drop-In with Board', price: 7800 }]
  },
  {
    id: 63, category: 'Kitchen Sinks', name: 'Commercial Grade Satin Stainless Steel Double Bowl Sink', badge: 'Commercial',
    image: 'assets/products/kitchen sinks/commercial-satin-stainless.jpg',
    images: ['assets/products/kitchen sinks/commercial-satin-stainless.jpg'],
    description: 'Heavy-duty Commercial Grade Satin Stainless Steel Double Bowl Sink.',
    fromPrice: 10900,
    variants: [{ label: 'Satin Stainless Steel Double Bowl', price: 10900 }]
  },
  {
    id: 64, category: 'Kitchen Sinks', name: 'Fantasy Composite Granite Kitchen Sink (Grey)', badge: 'Granite',
    image: 'assets/products/kitchen sinks/fantasy-composite-granite.jpg',
    images: ['assets/products/kitchen sinks/fantasy-composite-granite.jpg'],
    description: 'Elegant Fantasy Composite Granite Kitchen Sink in Grey finish.',
    fromPrice: 16800,
    variants: [{ label: 'Fantasy Composite Granite (Grey)', price: 16800 }]
  },

  {
    id: 65, category: 'Anti-Twist', name: 'Shaka Black & Chrome Nylon-Silicone Anti-Twist Hose', badge: 'Anti-Twist',
    image: 'assets/products/anti-twist/shaka-black-chrome.jpg',
    images: ['assets/products/anti-twist/shaka-black-chrome.jpg'],
    description: 'Flexible Shaka Black & Chrome Nylon-Silicone Anti-Twist Shower Hose.',
    fromPrice: 980,
    variants: [{ label: 'Black & Chrome Nylon-Silicone', price: 980 }]
  },
  {
    id: 66, category: 'Anti-Twist', name: 'Shaka Chrome Luxe Spyral Anti-Twist Shower Hose', badge: 'Luxe',
    image: 'assets/products/anti-twist/shaka-chrome-luxe.jpg',
    images: ['assets/products/anti-twist/shaka-chrome-luxe.jpg'],
    description: 'Premium Shaka Chrome Luxe Spyral Anti-Twist Shower Hose.',
    fromPrice: 1150,
    variants: [{ label: 'Chrome Luxe Spyral', price: 1150 }]
  },
  {
    id: 67, category: 'Anti-Twist', name: 'Shaka White & Chrome Anti-Twist Shower Hose', badge: 'Anti-Twist',
    image: 'assets/products/anti-twist/shaka-white-chrome.jpg',
    images: ['assets/products/anti-twist/shaka-white-chrome.jpg'],
    description: 'Durable Shaka White & Chrome Anti-Twist Shower Hose.',
    fromPrice: 1050,
    variants: [{ label: 'White & Chrome', price: 1050 }]
  },
  {
    id: 68, category: 'Anti-Twist', name: 'Shaka White Anti-Twist Hose with Nickel Plated Nuts', badge: 'Nickel Plated',
    image: 'assets/products/anti-twist/shaka-white-nickel.jpg',
    images: ['assets/products/anti-twist/shaka-white-nickel.jpg'],
    description: 'Shaka White Anti-Twist Hose with durable Nickel Plated Nuts.',
    fromPrice: 970,
    variants: [{ label: 'White with Nickel Plated Nuts', price: 970 }]
  },

  {
    id: 69, category: 'Showers', name: 'Corner Pentagon Glass Shower Enclosure with Tray', badge: 'Enclosure',
    image: 'assets/products/showers/corner-pentagon-glass.jpg',
    images: ['assets/products/showers/corner-pentagon-glass.jpg'],
    description: 'Modern Corner Pentagon Glass Shower Enclosure complete with Tray.',
    fromPrice: 19600,
    variants: [{ label: 'Corner Pentagon Glass Enclosure', price: 19600 }]
  },
  {
    id: 70, category: 'Showers', name: 'Chrome Adjustable Pivot Shower Door', badge: 'Pivot Door',
    image: 'assets/products/showers/chrome-adjustable-pivot.jpg',
    description: 'Sleek Chrome Adjustable Pivot Shower Door for modern bathrooms.',
    fromPrice: 14500,
    variants: [{ label: 'Chrome Adjustable Pivot Door', price: 14500 }]
  },
  {
    id: 71, category: 'Showers', name: 'Square Corner Glass Shower Enclosure (White Frame)', badge: 'Enclosure',
    image: 'assets/products/showers/square-corner-glass.jpg',
    images: ['assets/products/showers/square-corner-glass.jpg'],
    description: 'Stylish Square Corner Glass Shower Enclosure with White Frame.',
    fromPrice: 18500,
    variants: [{ label: 'Square Corner Glass (White Frame)', price: 18500 }]
  },
  {
    id: 72, category: 'Showers', name: 'Ekos Pentagon Acrylic Shower Tray', badge: 'Shower Tray',
    image: 'assets/products/showers/ekos-pentagon-acrylic.jpg',
    images: ['assets/products/showers/ekos-pentagon-acrylic.jpg'],
    description: 'High-quality Ekos Pentagon Acrylic Shower Tray.',
    fromPrice: 6500,
    variants: [{ label: 'Ekos Pentagon Acrylic Tray', price: 6500 }]
  },
  {
    id: 73, category: 'Showers', name: 'Shaka Chrome Luxe Spyral Anti-Twist Shower Hose (Showers)', badge: 'Luxe',
    image: 'assets/products/showers/shaka-chrome-luxe-shower.jpg',
    images: ['assets/products/showers/shaka-chrome-luxe-shower.jpg'],
    description: 'Premium Shaka Chrome Luxe Spyral Anti-Twist Shower Hose.',
    fromPrice: 1100,
    variants: [{ label: 'Chrome Luxe Spyral', price: 1100 }]
  },
  {
    id: 74, category: 'Showers', name: 'Shaka White & Chrome Anti-Twist Shower Hose (Showers)', badge: 'Anti-Twist',
    image: 'assets/products/showers/shaka-white-chrome-shower.jpg',
    images: ['assets/products/showers/shaka-white-chrome-shower.jpg'],
    description: 'Durable Shaka White & Chrome Anti-Twist Shower Hose.',
    fromPrice: 1030,
    variants: [{ label: 'White & Chrome', price: 1030 }]
  },
  {
    id: 75, category: 'Showers', name: 'Matte Black Aluminum Corner Shower Caddy Shelf', badge: 'Caddy',
    image: 'assets/products/showers/matte-black-aluminum.jpg',
    images: ['assets/products/showers/matte-black-aluminum.jpg'],
    description: 'Convenient Matte Black Aluminum Corner Shower Caddy Shelf.',
    fromPrice: 2080,
    variants: [{ label: 'Matte Black Corner Caddy', price: 2080 }]
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
