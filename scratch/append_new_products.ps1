$scriptPath = "c:\Users\User\bluenile-group\script.js"
$utf8NoBom = New-Object System.Text.UTF8Encoding $False
$scriptContent = [System.IO.File]::ReadAllText($scriptPath, $utf8NoBom)

$newProductsStr = @"
,
  {
    id: 76, category: 'Cabinets', name: 'Premium Bathroom Cabinets', badge: 'New',
    image: 'assets/products/cabinets/cabinets.jpg',
    images: ['assets/products/cabinets/cabinets.jpg'],
    description: 'High-quality Premium Bathroom Cabinets for your home.',
    fromPrice: 15000,
    variants: [{ label: 'Bathroom Cabinet', price: 15000 }]
  },
  {
    id: 77, category: 'Cabinets', name: 'Casa White Mirror Cabinet', badge: 'Mirror',
    image: 'assets/products/cabinets/casa-white-mirror-cabinet.webp',
    images: ['assets/products/cabinets/casa-white-mirror-cabinet.webp'],
    description: 'High-quality Casa White Mirror Cabinet for your home.',
    fromPrice: 18500,
    variants: [{ label: 'White Mirror Cabinet', price: 18500 }]
  },
  {
    id: 78, category: 'Cabinets', name: 'Ekos Cabinet Basin', badge: 'Basin',
    image: 'assets/products/cabinets/ekos-cabinet-basin.webp',
    images: ['assets/products/cabinets/ekos-cabinet-basin.webp'],
    description: 'High-quality Ekos Cabinet Basin for your home.',
    fromPrice: 21000,
    variants: [{ label: 'Cabinet Basin', price: 21000 }]
  },
  {
    id: 79, category: 'Cabinets', name: 'Le Luxe White Mirror Cabinet', badge: 'Luxe',
    image: 'assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg',
    images: ['assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg'],
    description: 'High-quality Le Luxe White Mirror Cabinet for your home.',
    fromPrice: 24500,
    variants: [{ label: 'White Mirror Cabinet', price: 24500 }]
  },
  {
    id: 80, category: 'Cabinets', name: 'Spazio Grey Mirror Cabinet', badge: 'Grey',
    image: 'assets/products/cabinets/spazio-grey-mirror-cabinet.webp',
    images: ['assets/products/cabinets/spazio-grey-mirror-cabinet.webp'],
    description: 'High-quality Spazio Grey Mirror Cabinet for your home.',
    fromPrice: 22000,
    variants: [{ label: 'Grey Mirror Cabinet', price: 22000 }]
  },
  {
    id: 81, category: 'Taps', name: 'Chrome Bidet Mixer Tap', badge: 'Chrome',
    image: 'assets/products/taps/chrome_bidet_mixer_tap.jpg',
    images: ['assets/products/taps/chrome_bidet_mixer_tap.jpg'],
    description: 'High-quality Chrome Bidet Mixer Tap for your home.',
    fromPrice: 4500,
    variants: [{ label: 'Chrome Bidet Mixer', price: 4500 }]
  },
  {
    id: 82, category: 'Taps', name: 'Classico Single Lever Sink Mixer Chrome', badge: 'Classico',
    image: 'assets/products/taps/classico-single-lever-sink-mixer-chrome.webp',
    images: ['assets/products/taps/classico-single-lever-sink-mixer-chrome.webp'],
    description: 'High-quality Classico Single Lever Sink Mixer Chrome for your home.',
    fromPrice: 5800,
    variants: [{ label: 'Classico Sink Mixer', price: 5800 }]
  },
  {
    id: 83, category: 'Taps', name: 'Cross Chrome Sink Mixer Pillar Tap', badge: 'Cross Chrome',
    image: 'assets/products/taps/cross-chrome-sink-mixer-pillar-tap.webp',
    images: ['assets/products/taps/cross-chrome-sink-mixer-pillar-tap.webp'],
    description: 'High-quality Cross Chrome Sink Mixer Pillar Tap for your home.',
    fromPrice: 5200,
    variants: [{ label: 'Cross Chrome Mixer', price: 5200 }]
  },
  {
    id: 84, category: 'Taps', name: 'Diamond Sink Mixer Pillar', badge: 'Diamond',
    image: 'assets/products/taps/diamond-sink-mixer-pillar.webp',
    images: ['assets/products/taps/diamond-sink-mixer-pillar.webp'],
    description: 'High-quality Diamond Sink Mixer Pillar for your home.',
    fromPrice: 6500,
    variants: [{ label: 'Diamond Sink Mixer', price: 6500 }]
  },
  {
    id: 85, category: 'Taps', name: 'Margot Bronze Pre-rinse Bowl Tap', badge: 'Bronze',
    image: 'assets/products/taps/margot-bronze-preb-bowl.jpg',
    images: ['assets/products/taps/margot-bronze-preb-bowl.jpg'],
    description: 'High-quality Margot Bronze Pre-rinse Bowl Tap for your home.',
    fromPrice: 8900,
    variants: [{ label: 'Margot Bronze Tap', price: 8900 }]
  },
  {
    id: 86, category: 'Taps', name: 'Marot Sink Mixer Bronze', badge: 'Bronze',
    image: 'assets/products/taps/marot_sink_mixer_bronze.jpg',
    images: ['assets/products/taps/marot_sink_mixer_bronze.jpg'],
    description: 'High-quality Marot Sink Mixer Bronze for your home.',
    fromPrice: 7800,
    variants: [{ label: 'Marot Bronze Mixer', price: 7800 }]
  },
  {
    id: 87, category: 'Taps', name: 'Moderna Lever Sink Mixer Chrome', badge: 'Moderna',
    image: 'assets/products/taps/moderna-lever-sink-mixer-chrome.webp',
    images: ['assets/products/taps/moderna-lever-sink-mixer-chrome.webp'],
    description: 'High-quality Moderna Lever Sink Mixer Chrome for your home.',
    fromPrice: 6200,
    variants: [{ label: 'Moderna Sink Mixer', price: 6200 }]
  },
  {
    id: 88, category: 'Taps', name: 'Sink Mixer Spout Tap', badge: 'Spout',
    image: 'assets/products/taps/sink-mixer-spout-tap.webp',
    images: ['assets/products/taps/sink-mixer-spout-tap.webp'],
    description: 'High-quality Sink Mixer Spout Tap for your home.',
    fromPrice: 4800,
    variants: [{ label: 'Sink Mixer Spout', price: 4800 }]
  },
  {
    id: 89, category: 'Taps', name: 'Snello Sink Mixer Dark Mirror', badge: 'Dark Mirror',
    image: 'assets/products/taps/snello-sink-mixer-dark-mirror.webp',
    images: ['assets/products/taps/snello-sink-mixer-dark-mirror.webp'],
    description: 'High-quality Snello Sink Mixer Dark Mirror for your home.',
    fromPrice: 7500,
    variants: [{ label: 'Snello Dark Mirror Mixer', price: 7500 }]
  },
  {
    id: 90, category: 'Toilets & Urinals', name: 'Inca Maya Toilet Suite', badge: 'Suite',
    image: 'assets/products/toilets&urinals/inca-maya-toilet-suite.webp',
    images: ['assets/products/toilets&urinals/inca-maya-toilet-suite.webp'],
    description: 'High-quality Inca Maya Toilet Suite for your home.',
    fromPrice: 18500,
    variants: [{ label: 'Inca Maya Suite', price: 18500 }]
  },
  {
    id: 91, category: 'Toilets & Urinals', name: 'Novo Wall Hung Urinal', badge: 'Urinal',
    image: 'assets/products/toilets&urinals/novo-wall-hung-urinal.jpg',
    images: ['assets/products/toilets&urinals/novo-wall-hung-urinal.jpg'],
    description: 'High-quality Novo Wall Hung Urinal for your home.',
    fromPrice: 12500,
    variants: [{ label: 'Novo Urinal', price: 12500 }]
  },
  {
    id: 92, category: 'Toilets & Urinals', name: 'Senso Wall Hung Sensor Urinal', badge: 'Sensor',
    image: 'assets/products/toilets&urinals/senso-whung-sensor-urinal.jpg',
    images: ['assets/products/toilets&urinals/senso-whung-sensor-urinal.jpg'],
    description: 'High-quality Senso Wall Hung Sensor Urinal for your home.',
    fromPrice: 28000,
    variants: [{ label: 'Senso Sensor Urinal', price: 28000 }]
  },
  {
    id: 93, category: 'Toilets & Urinals', name: 'Soul Wall Hung Pan', badge: 'Wall Hung',
    image: 'assets/products/toilets&urinals/soul-wall-hung-pan.webp',
    images: ['assets/products/toilets&urinals/soul-wall-hung-pan.webp'],
    description: 'High-quality Soul Wall Hung Pan for your home.',
    fromPrice: 14500,
    variants: [{ label: 'Soul Wall Hung Pan', price: 14500 }]
  },
  {
    id: 94, category: 'Toilets & Urinals', name: 'Premium Toilet Suite (2)', badge: 'Premium',
    image: 'assets/products/toilets&urinals/toilet (2).jpg',
    images: ['assets/products/toilets&urinals/toilet (2).jpg'],
    description: 'High-quality Premium Toilet Suite (2) for your home.',
    fromPrice: 16500,
    variants: [{ label: 'Premium Toilet Suite', price: 16500 }]
  },
  {
    id: 95, category: 'Toilets & Urinals', name: 'Premium Toilet Suite (3)', badge: 'Premium',
    image: 'assets/products/toilets&urinals/toilet (3).jpg',
    images: ['assets/products/toilets&urinals/toilet (3).jpg'],
    description: 'High-quality Premium Toilet Suite (3) for your home.',
    fromPrice: 17500,
    variants: [{ label: 'Premium Toilet Suite', price: 17500 }]
  },
  {
    id: 96, category: 'Toilets & Urinals', name: 'Standard Toilet Suite', badge: 'Standard',
    image: 'assets/products/toilets&urinals/toilet-1.jpg',
    images: ['assets/products/toilets&urinals/toilet-1.jpg'],
    description: 'High-quality Standard Toilet Suite for your home.',
    fromPrice: 12000,
    variants: [{ label: 'Standard Toilet Suite', price: 12000 }]
  },
  {
    id: 97, category: 'Toilets & Urinals', name: 'White Beta Bidet', badge: 'Bidet',
    image: 'assets/products/toilets&urinals/white-beta-bidet.jpg',
    images: ['assets/products/toilets&urinals/white-beta-bidet.jpg'],
    description: 'High-quality White Beta Bidet for your home.',
    fromPrice: 9500,
    variants: [{ label: 'White Beta Bidet', price: 9500 }]
  },
  {
    id: 98, category: 'Toilets & Urinals', name: 'White Maya Toilet Suite', badge: 'Suite',
    image: 'assets/products/toilets&urinals/white-maya-toilet-suite.webp',
    images: ['assets/products/toilets&urinals/white-maya-toilet-suite.webp'],
    description: 'High-quality White Maya Toilet Suite for your home.',
    fromPrice: 19500,
    variants: [{ label: 'White Maya Suite', price: 19500 }]
  }
"@

$lines = $scriptContent -split "`r`n"
if ($lines.Length -eq 1) {
    $lines = $scriptContent -split "`n"
}

$newLines = @()
foreach ($line in $lines) {
    if ($line -match "^\s*];\s*$") {
        $newLines += $newProductsStr
    }
    $newLines += $line
}

$finalStr = $newLines -join "`r`n"
[System.IO.File]::WriteAllText($scriptPath, $finalStr, $utf8NoBom)
Write-Host "Products appended successfully."
