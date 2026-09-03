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
    id: 4, category: 'Chain Link', name: 'KIFARU™ Chain Link (Wholesale)', badge: 'Galvanized',
    image: 'assets/products/chainlink-galvanized-1.jpg',
    images: ['assets/products/chainlink-galvanized-1.jpg', 'assets/products/chainlink-galvanized-2.jpg'],
    description: 'Wholesale prices for Galvanized Chain Link (18m length).',
    fromPrice: 1250,
    variants: [
      { label: '16G (1.6mm) 4ft — per roll', price: 1250 },
      { label: '16G (1.6mm) 5ft — per roll', price: 1870 },
      { label: '16G (1.6mm) 6ft — per roll', price: 2490 },
      { label: '16G (1.6mm) 7ft — per roll', price: 2960 },
      { label: '16G (1.6mm) 8ft — per roll', price: 3740 },
      { label: '16G (1.6mm) 9ft — per roll', price: 4340 },
      { label: '16G (1.6mm) 10ft — per roll', price: 4825 },
      { label: '16G (1.6mm) 11ft — per roll', price: 5285 },
      { label: '16G (1.6mm) 12ft — per roll', price: 5680 },
      { label: '15G (1.8mm) 4ft — per roll', price: 1850 },
      { label: '15G (1.8mm) 5ft — per roll', price: 2270 },
      { label: '15G (1.8mm) 6ft — per roll', price: 2650 },
      { label: '15G (1.8mm) 7ft — per roll', price: 2980 },
      { label: '15G (1.8mm) 8ft — per roll', price: 3540 },
      { label: '15G (1.8mm) 9ft — per roll', price: 3950 },
      { label: '15G (1.8mm) 10ft — per roll', price: 4540 },
      { label: '15G (1.8mm) 11ft — per roll', price: 4960 },
      { label: '15G (1.8mm) 12ft — per roll', price: 5420 },
      { label: '14G (2.0mm) 4ft — per roll', price: 2380 },
      { label: '14G (2.0mm) 5ft — per roll', price: 2960 },
      { label: '14G (2.0mm) 6ft — per roll', price: 3465 },
      { label: '14G (2.0mm) 7ft — per roll', price: 3965 },
      { label: '14G (2.0mm) 8ft — per roll', price: 4460 },
      { label: '14G (2.0mm) 9ft — per roll', price: 4950 },
      { label: '14G (2.0mm) 10ft — per roll', price: 5360 },
      { label: '14G (2.0mm) 11ft — per roll', price: 5970 },
      { label: '14G (2.0mm) 12ft — per roll', price: 6450 },
      { label: '12.5G (2.5mm) 4ft — per roll', price: 3270 },
      { label: '12.5G (2.5mm) 5ft — per roll', price: 3755 },
      { label: '12.5G (2.5mm) 6ft — per roll', price: 3970 },
      { label: '12.5G (2.5mm) 7ft — per roll', price: 4180 },
      { label: '12.5G (2.5mm) 8ft — per roll', price: 4780 },
      { label: '12.5G (2.5mm) 9ft — per roll', price: 5460 },
      { label: '12.5G (2.5mm) 10ft — per roll', price: 5945 },
      { label: '12.5G (2.5mm) 11ft — per roll', price: 6650 },
      { label: '12.5G (2.5mm) 12ft — per roll', price: 7170 },
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
    id: 6, category: 'Chicken Mesh', name: 'Galvanized Hexagonal Chicken Mesh', badge: 'KEBS Certified',
    image: 'assets/products/chicken-mesh-1.jpg',
    images: ['assets/products/chicken-mesh-1.jpg', 'assets/products/chicken-mesh-2.jpg'],
    description: 'Lightweight galvanized hexagonal mesh for poultry enclosures and agricultural fencing.',
    fromPrice: 1080,
    variants: [
      { label: 'G22 ½" (13 mm) — 3ft×30m', price: 1180 },
      { label: 'G22 ½" (13 mm) — 4ft×30m', price: 1650 },
      { label: 'G20 1" (25 mm) — 3ft×30m', price: 1080 },
      { label: 'G20 1" (25 mm) — 4ft×30m', price: 1550 },
      { label: 'G20 1" (25 mm) — 6ft×30m', price: 2150 },
      { label: '18G 2" (50 mm) — 4ft×30m', price: 2100 },
      { label: '18G 2" (50 mm) — 6ft×30m', price: 2950 },
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
    id: 8, category: 'Common Nails', name: 'Common Wire Nails', badge: 'Bulk Wholesale',
    image: 'assets/products/common-nails-1.jpg',
    images: ['assets/products/common-nails-1.jpg', 'assets/products/common-nails-2.jpg'],
    description: 'High-tensile common wire nails for general construction and carpentry.',
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
    description: 'Galvanized roofing nails with washers for iron sheet and tile roofing.',
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
    description: 'Galvanized U-shaped staple nails for fencing and wire attachment.',
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
    description: 'High-security anti-climb perimeter fencing panels for institutions and estates.',
    fromPrice: 5800,
    variants: [
      { label: '1.8m height — 3m panel', price: 5800 },
      { label: '2.1m height — 3m panel', price: 7900 },
      { label: '2.4m height — 3m panel', price: 10900 },
    ]
  },
  {
    id: 12, category: 'Wire Rods', name: 'Hot-Rolled Wire Rods', badge: 'Per Coil',
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
    images: ['assets/products/concrete-nails-1.jpg', 'assets/products/concrete-nails-2.jpg'],
    description: 'Hardened steel concrete nails for masonry and concrete fixing.',
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
    description: 'Welded wire mesh panels for partitions, cages, security grilles and reinforcement.',
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
    description: 'Heavy-duty expanded metal sheets for security doors, grilles and industrial walkways.',
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
    description: 'High-quality copper coated gas welding rods for industrial fabrication.',
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
    description: 'High-quality Rectangular Hollow Sections (RHS) for structural applications and fabrication.',
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
    description: 'High-quality corrugated roofing sheets. Gauge 30.',
    fromPrice: 600,
    variants: [
      { label: '2 meter', price: 600 },
      { label: '2.5 meter', price: 750 },
      { label: '3 meter', price: 900 },
    ]
  },
  {
    id: 20, category: 'Box Profile', name: 'KIFARU Box Profile (Gauge 30)', badge: 'Gauge 30',
    image: 'assets/products/box-profile-1.jpg',
    images: ['assets/products/box-profile-1.jpg', 'assets/products/box-profile-2.jpg'],
    description: 'Durable box profile roofing sheets for modern designs. Gauge 30.',
    fromPrice: 700,
    variants: [
      { label: '2 meter', price: 700 },
      { label: '2.5 meter', price: 875 },
      { label: '3 meter', price: 1050 },
    ]
  },
  {
    id: 21, category: 'Cement', name: 'National Cement (Simba Brand)', badge: 'High Quality',
    image: 'assets/products/simba-cement-1.jpg',
    images: ['assets/products/simba-cement-1.jpg', 'assets/products/simba-cement-2.jpg', 'assets/products/simba-cement-3.jpg', 'assets/products/simba-cement-4.jpg'],
    description: 'National Cement - Simba Brand. High quality cement for construction.',
    fromPrice: 550,
    variants: [
      { label: 'Simba 32.5R', price: 550 },
      { label: 'Simba Power 42.5N', price: 580 },
    ]
  },
  {
    id: 22, category: 'Cement', name: 'Bamburi Cement', badge: 'Premium',
    image: 'assets/products/bamburi-cement-1.jpg',
    images: ['assets/products/bamburi-cement-1.jpg', 'assets/products/bamburi-cement-2.jpg', 'assets/products/bamburi-cement-3.jpg', 'assets/products/bamburi-cement-4.jpg'],
    description: 'Premium quality Bamburi cement for all your construction needs.',
    fromPrice: 630,
    variants: [
      { label: 'Bamburi Cement', price: 630 },
    ]
  },
  {
    id: 23, category: 'Chain Link', name: 'PVC Coated Chain Link', badge: '18m Length',
    image: 'assets/products/pvc-chainlink-1.jpg',
    images: ['assets/products/pvc-chainlink-1.jpg', 'assets/products/pvc-chainlink-2.jpg', 'assets/products/pvc-coated-chain-link-1.jpeg', 'assets/products/pvc-coated-chain-link-2.jpeg', 'assets/products/pvc-coated-chain-link-3.jpeg'],
    description: 'High quality PVC coated chain link fence (Green, Black, Brown). 18 meters length roll.',
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
    description: 'High quality Savannah cement for reliable construction.',
    fromPrice: 580,
    variants: [
      { label: 'Savannah Cement', price: 580 },
    ]
  },
  {
    id: 25, category: 'Cement', name: 'Rai Cement', badge: 'Premium',
    image: 'assets/products/rai-cement-1.jpg',
    images: ['assets/products/rai-cement-1.jpg'],
    description: 'Premium quality Rai cement.',
    fromPrice: 560,
    variants: [
      { label: 'Rai Cement', price: 560 },
    ]
  },
  {
    id: 26, category: 'Tile Mabati', name: 'Roman, Elegant & Eurotile Mabati', badge: 'Gauge 28',
    image: 'assets/products/roman-tile-1.jpg',
    images: ['assets/products/roman-tile-1.jpg', 'assets/products/roman-tile-2.jpg', 'assets/products/roman-tile-3.jpg', 'assets/products/roman-tile-4.jpg'],
    description: 'High-quality Roman tile, Elegant tile, and Eurotile Mabati. Gauge 28.',
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
    description: 'Charcoal Grey, Versatile Mabati. Gauge 28.',
    fromPrice: 1100,
    variants: [
      { label: '2 meter', price: 1100 },
      { label: '2.5 meter', price: 1375 },
      { label: '3 meter', price: 1650 },
    ]
  },
  {
    id: 28, category: 'Roofing Accessories', name: 'Ridges & Valleys', badge: 'Gauge 28',
    image: 'assets/products/ridge-valley-mabati-1.jpg',
    images: ['assets/products/ridge-valley-mabati-1.jpg', 'assets/products/ridge-valley-mabati-2.jpg', 'assets/products/ridge-valley-mabati-3.jpg', 'assets/products/ridge-valley-mabati-4.jpg'],
    description: 'Ridge and Valley Gauge 28. Glazed, Flat, Trays, and Plain sheets.',
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
    description: 'Standard Hoop Iron Roll.',
    fromPrice: 2100,
    variants: [
      { label: 'Standard Hoop Iron Roll', price: 2100 }
    ]
  },
  {
    id: 30, category: 'Binding Wire', name: 'Binding Wire', badge: 'High Quality',
    image: 'assets/products/binding-wire-1.jpg',
    images: ['assets/products/binding-wire-1.jpg', 'assets/products/binding-wire-2.jpg'],
    description: 'High quality binding wire available in various gauges and sizes.',
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
    description: 'Gabion Boxes (Typical Mesh 80x100mm)',
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
    description: 'High quality razor wire for perimeter security.',
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
    id: 33, category: 'Barbed Wire', name: 'Barbed Wire', badge: 'High Quality',
    image: 'assets/products/barbed-wire-1.png',
    images: ['assets/products/barbed-wire-1.png', 'assets/products/barbed-wire-2.jpg', 'assets/products/barbed-wire-3.jpg'],
    description: 'Durable barbed wire for fencing.',
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
    id: 34, category: 'Wire Rods', name: 'Wire Rods', badge: 'Coils',
    image: 'assets/products/wire-rods-1.jpg',
    images: ['assets/products/wire-rods-1.jpg', 'assets/products/wire-rods-2.jpg'],
    description: 'High quality wire rods.',
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
    description: 'Galvanized Wire.',
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
    description: 'High quality Angle Lines. Factory price per 6m long.',
    fromPrice: 280,
    variants: [
      { label: '20 × 20 mm (3 mm)', price: 280 },
      { label: '25 × 25 mm (3 mm)', price: 375 },
      { label: '30 × 30 mm (3 mm)', price: 495 },
      { label: '40 × 40 mm (4 mm)', price: 740 },
      { label: '50 × 50 mm (5 mm)', price: 965 },
      { label: '65 × 65 mm (6 mm)', price: 1487 },
      { label: '75 × 75 mm (6 mm)', price: 1939 },
      { label: '90 × 90 mm (8 mm)', price: 2680 },
      { label: '100 × 100 mm (10 mm)', price: 3470 }
    ]
  },
  {
    id: 37, category: 'Round Pipes', name: 'Round Pipes', badge: '6m Long',
    image: 'assets/products/round-pipes-1.jpg',
    images: ['assets/products/round-pipes-1.jpg', 'assets/products/round-pipes-2.jpg'],
    description: 'Durable Round pipes. Factory price per 6m long.',
    fromPrice: 250,
    variants: [
      { label: '½" (18G)', price: 250 },
      { label: '¾" (18G)', price: 330 },
      { label: '1" (16G)', price: 480 },
      { label: '1¼" (16G)', price: 640 },
      { label: '1½" (16G)', price: 880 },
      { label: '2" (14G)', price: 1080 },
      { label: '2½" (14G)', price: 1390 },
      { label: '3" (14G)', price: 1840 },
      { label: '4" (12G)', price: 2450 }
    ]
  },
  {
    id: 38, category: 'Stainless Steel Chrome Pipes', name: 'Stainless Steel Chrome Pipes', badge: '6m Long',
    image: 'assets/products/stainless-steel-chrome-pipes-1.jpg',
    images: ['assets/products/stainless-steel-chrome-pipes-1.jpg', 'assets/products/stainless-steel-chrome-pipes-2.jpg', 'assets/products/stainless-steel-chrome-pipes-3.jpg'],
    description: 'Stainless Steel Chrome Pipes. Factory price per 6m long.',
    fromPrice: 580,
    variants: [
      { label: '19 mm / ¾" (0.8 mm)', price: 580 },
      { label: '25 mm / 1" (0.8 mm)', price: 780 },
      { label: '32 mm / 1¼" (1.0 mm)', price: 990 },
      { label: '38 mm / 1½" (1.0 mm)', price: 1340 },
      { label: '50 mm / 2" (1.2 mm)', price: 1870 },
      { label: '63 mm / 2½" (1.2 mm)', price: 2390 },
      { label: '76 mm / 3" (1.5 mm)', price: 2830 }
    ]
  },
  {
    id: 39, category: 'Floor Tile', name: 'Floor Tile', badge: 'Tiles',
    image: 'assets/products/floor-tile-1.jpg',
    images: ['assets/products/floor-tile-1.jpg', 'assets/products/floor-tile-2.jpg', 'assets/products/floor-tile-3.jpg', 'assets/products/floor-tile-4.jpg'],
    description: 'High quality Floor Tiles.',
    fromPrice: 470,
    variants: [
      { label: '30*30 (17Pcs)', price: 470 },
      { label: '40*40 (12Pcs)', price: 640 },
      { label: '50*50 (7Pcs)', price: 830 },
      { label: '60*60 (4Pcs)', price: 1150 }
    ]
  },
  {
    id: 40, category: 'Wall Tile', name: 'Wall Tile', badge: 'Tiles',
    image: 'assets/products/wall-tile-1.jpg',
    images: ['assets/products/wall-tile-1.jpg', 'assets/products/wall-tile-2.jpg'],
    description: 'Beautiful Wall Tiles.',
    fromPrice: 530,
    variants: [
      { label: '25*40 (15Pcs)', price: 530 },
      { label: '30*60 (8Pcs)', price: 790 }
    ]
  },
  {
    id: 41, category: 'Tanks', name: 'Water Tanks', badge: 'Various Brands',
    image: 'assets/products/tank-1.jpg',
    images: ['assets/products/tank-1.jpg', 'assets/products/tank-2.jpg', 'assets/products/tank-3.jpg', 'assets/products/tank-4.jpg', 'assets/products/tank-5.jpg', 'assets/products/tank-6.jpg', 'assets/products/tank-7.jpg', 'assets/products/tank-8.jpg'],
    description: 'High quality water tanks. Available brands: Kentank, Roto, Polytanks, Reliance & Royal Tanks.',
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
    id: 42, category: 'Poultry Mesh', name: 'Plastic Poultry Mesh (HDPE)', badge: 'Durable',
    image: 'assets/products/plastic-poultry-mesh-1.jpeg',
    images: ['assets/products/plastic-poultry-mesh-1.jpeg', 'assets/products/plastic-poultry-mesh-2.jpeg', 'assets/products/plastic-poultry-mesh-3.jpg'],
    description: 'Durable Plastic Poultry Mesh (HDPE). Ideal for poultry farming and general use.',
    fromPrice: 3500,
    variants: [
      { label: '1 m × 25 m', price: 3500 },
      { label: '1 m × 50 m', price: 4800 }
    ]
  },
  {
    id: 43, category: 'Toilets & Urinals', name: 'Toilets & Urinals', badge: 'Premium',
    image: 'assets/products/toilets&urinals/white_tetragon_wall_hung_toilet_pan.jpg',
    images: [
      'assets/products/toilets&urinals/white_tetragon_wall_hung_toilet_pan.jpg',
      'assets/products/toilets&urinals/inca-maya-toilet-suite.webp',
      'assets/products/toilets&urinals/novo-wall-hung-urinal.jpg',
      'assets/products/toilets&urinals/senso-whung-sensor-urinal.jpg',
      'assets/products/toilets&urinals/soul-wall-hung-pan.webp',
      'assets/products/toilets&urinals/white-beta-bidet.jpg',
      'assets/products/toilets&urinals/white-maya-toilet-suite.webp'
    ],
    description: 'A wide range of premium Toilets, Urinals and Bidets for modern bathrooms.',
    fromPrice: 2678,
    variants: [
      { label: 'White Tetragon Rimless Wall-Hung Toilet Pan', price: 12780 },
      { label: 'Boston White Rimless Wall-Hung Pan', price: 10498 },
      { label: 'Soul Compact Wall-Hung Toilet Pan', price: 9970 },
      { label: 'White Maya Dual-Flush Close-Coupled Toilet Suite', price: 9450 },
      { label: 'Inca Maya Premium Close-Coupled Toilet Suite', price: 11390 },
      { label: 'Cotto Simply Modish Dual Top-Flush Toilet Suite', price: 16767 },
      { label: 'Senso Automatic Infrared Sensor Urinal', price: 17599 },
      { label: 'Novo Wall-Hung Ceramic Urinal', price: 5780 },
      { label: 'Cotto Chrome Urinal Flush Valve', price: 3249 },
      { label: 'Unix Push-Button Urinal Flush Valve', price: 2678 },
      { label: 'White Beta Floor-Mounted Ceramic Bidet', price: 8466 }
    ]
  },
  {
    id: 44, category: 'Cabinets', name: 'Bathroom Cabinets', badge: 'Modern',
    image: 'assets/products/cabinets/casa-white-mirror-cabinet.webp',
    images: [
      'assets/products/cabinets/casa-white-mirror-cabinet.webp',
      'assets/products/cabinets/ekos-cabinet-basin.webp',
      'assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg',
      'assets/products/cabinets/spazio-grey-mirror-cabinet.webp',
      'assets/products/cabinets/cabinets.jpg'
    ],
    description: 'Modern, elegant and durable bathroom vanity cabinets with mirrors and basins.',
    fromPrice: 15000,
    variants: [
      { label: 'Casa White Mirror Cabinet', price: 15000 },
      { label: 'Ekos Cabinet Basin', price: 18000 },
      { label: 'Le Luxe White Mirror Cabinet', price: 22000 },
      { label: 'Spazio Grey Mirror Cabinet', price: 19500 }
    ]
  }
];
