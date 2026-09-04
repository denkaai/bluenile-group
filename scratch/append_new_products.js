const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, '../script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

const newProducts = [
  // Cabinets
  {
    category: 'Cabinets', name: 'Premium Bathroom Cabinets', badge: 'New',
    image: 'assets/products/cabinets/cabinets.jpg', price: 15000,
    label: 'Bathroom Cabinet'
  },
  {
    category: 'Cabinets', name: 'Casa White Mirror Cabinet', badge: 'Mirror',
    image: 'assets/products/cabinets/casa-white-mirror-cabinet.webp', price: 18500,
    label: 'White Mirror Cabinet'
  },
  {
    category: 'Cabinets', name: 'Ekos Cabinet Basin', badge: 'Basin',
    image: 'assets/products/cabinets/ekos-cabinet-basin.webp', price: 21000,
    label: 'Cabinet Basin'
  },
  {
    category: 'Cabinets', name: 'Le Luxe White Mirror Cabinet', badge: 'Luxe',
    image: 'assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg', price: 24500,
    label: 'White Mirror Cabinet'
  },
  {
    category: 'Cabinets', name: 'Spazio Grey Mirror Cabinet', badge: 'Grey',
    image: 'assets/products/cabinets/spazio-grey-mirror-cabinet.webp', price: 22000,
    label: 'Grey Mirror Cabinet'
  },
  
  // Taps
  {
    category: 'Taps', name: 'Chrome Bidet Mixer Tap', badge: 'Chrome',
    image: 'assets/products/taps/chrome_bidet_mixer_tap.jpg', price: 4500,
    label: 'Chrome Bidet Mixer'
  },
  {
    category: 'Taps', name: 'Classico Single Lever Sink Mixer Chrome', badge: 'Classico',
    image: 'assets/products/taps/classico-single-lever-sink-mixer-chrome.webp', price: 5800,
    label: 'Classico Sink Mixer'
  },
  {
    category: 'Taps', name: 'Cross Chrome Sink Mixer Pillar Tap', badge: 'Cross Chrome',
    image: 'assets/products/taps/cross-chrome-sink-mixer-pillar-tap.webp', price: 5200,
    label: 'Cross Chrome Mixer'
  },
  {
    category: 'Taps', name: 'Diamond Sink Mixer Pillar', badge: 'Diamond',
    image: 'assets/products/taps/diamond-sink-mixer-pillar.webp', price: 6500,
    label: 'Diamond Sink Mixer'
  },
  {
    category: 'Taps', name: 'Margot Bronze Pre-rinse Bowl Tap', badge: 'Bronze',
    image: 'assets/products/taps/margot-bronze-preb-bowl.jpg', price: 8900,
    label: 'Margot Bronze Tap'
  },
  {
    category: 'Taps', name: 'Marot Sink Mixer Bronze', badge: 'Bronze',
    image: 'assets/products/taps/marot_sink_mixer_bronze.jpg', price: 7800,
    label: 'Marot Bronze Mixer'
  },
  {
    category: 'Taps', name: 'Moderna Lever Sink Mixer Chrome', badge: 'Moderna',
    image: 'assets/products/taps/moderna-lever-sink-mixer-chrome.webp', price: 6200,
    label: 'Moderna Sink Mixer'
  },
  {
    category: 'Taps', name: 'Sink Mixer Spout Tap', badge: 'Spout',
    image: 'assets/products/taps/sink-mixer-spout-tap.webp', price: 4800,
    label: 'Sink Mixer Spout'
  },
  {
    category: 'Taps', name: 'Snello Sink Mixer Dark Mirror', badge: 'Dark Mirror',
    image: 'assets/products/taps/snello-sink-mixer-dark-mirror.webp', price: 7500,
    label: 'Snello Dark Mirror Mixer'
  },

  // Toilets & Urinals
  {
    category: 'Toilets & Urinals', name: 'Inca Maya Toilet Suite', badge: 'Suite',
    image: 'assets/products/toilets&urinals/inca-maya-toilet-suite.webp', price: 18500,
    label: 'Inca Maya Suite'
  },
  {
    category: 'Toilets & Urinals', name: 'Novo Wall Hung Urinal', badge: 'Urinal',
    image: 'assets/products/toilets&urinals/novo-wall-hung-urinal.jpg', price: 12500,
    label: 'Novo Urinal'
  },
  {
    category: 'Toilets & Urinals', name: 'Senso Wall Hung Sensor Urinal', badge: 'Sensor',
    image: 'assets/products/toilets&urinals/senso-whung-sensor-urinal.jpg', price: 28000,
    label: 'Senso Sensor Urinal'
  },
  {
    category: 'Toilets & Urinals', name: 'Soul Wall Hung Pan', badge: 'Wall Hung',
    image: 'assets/products/toilets&urinals/soul-wall-hung-pan.webp', price: 14500,
    label: 'Soul Wall Hung Pan'
  },
  {
    category: 'Toilets & Urinals', name: 'Premium Toilet Suite (2)', badge: 'Premium',
    image: 'assets/products/toilets&urinals/toilet (2).jpg', price: 16500,
    label: 'Premium Toilet Suite'
  },
  {
    category: 'Toilets & Urinals', name: 'Premium Toilet Suite (3)', badge: 'Premium',
    image: 'assets/products/toilets&urinals/toilet (3).jpg', price: 17500,
    label: 'Premium Toilet Suite'
  },
  {
    category: 'Toilets & Urinals', name: 'Standard Toilet Suite', badge: 'Standard',
    image: 'assets/products/toilets&urinals/toilet-1.jpg', price: 12000,
    label: 'Standard Toilet Suite'
  },
  {
    category: 'Toilets & Urinals', name: 'White Beta Bidet', badge: 'Bidet',
    image: 'assets/products/toilets&urinals/white-beta-bidet.jpg', price: 9500,
    label: 'White Beta Bidet'
  },
  {
    category: 'Toilets & Urinals', name: 'White Maya Toilet Suite', badge: 'Suite',
    image: 'assets/products/toilets&urinals/white-maya-toilet-suite.webp', price: 19500,
    label: 'White Maya Suite'
  }
];

let nextId = 76;
let productsStr = '';

for (const p of newProducts) {
  productsStr += `,
  {
    id: ${nextId++}, category: '${p.category}', name: '${p.name}', badge: '${p.badge}',
    image: '${p.image}',
    images: ['${p.image}'],
    description: 'High-quality ${p.name} for your home.',
    fromPrice: ${p.price},
    variants: [{ label: '${p.label}', price: ${p.price} }]
  }`;
}

const lines = scriptContent.split('\n');
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes('];')) {
    // Found the end of PRODUCTS
    lines.splice(i, 0, productsStr);
    break;
  }
}

fs.writeFileSync(scriptPath, lines.join('\n'), 'utf8');
console.log('Appended new products successfully.');
