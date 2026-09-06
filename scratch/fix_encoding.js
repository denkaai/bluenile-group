const fs = require('fs');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/â„¢/g, '');
    content = content.replace(/â€”/g, '-');
    content = content.replace(/Ã—/g, 'x');
    content = content.replace(/â€/g, '');
    
    if (filePath.endsWith('script.js')) {
        const sink1 = `  {
    id: 63, category: 'Kitchen Sinks', name: 'Commercial Grade Satin Stainless Steel Double Bowl Sink', badge: 'Commercial',
    image: 'assets/products/kitchen sinks/sinks.jpg',
    images: ['assets/products/kitchen sinks/sinks.jpg'],
    description: 'Heavy-duty Commercial Grade Satin Stainless Steel Double Bowl Sink.',
    fromPrice: 10900,
    variants: [{ label: 'Satin Stainless Steel Double Bowl', price: 10900 }]
  },`;
        
        const sink2 = `  {
    id: 64, category: 'Kitchen Sinks', name: 'Fantasy Composite Granite Kitchen Sink (Grey)', badge: 'Granite',
    image: 'assets/products/kitchen sinks/fantasy-kitchen-sink.jpg',
    images: ['assets/products/kitchen sinks/fantasy-kitchen-sink.jpg'],
    description: 'Elegant Fantasy Composite Granite Kitchen Sink in Grey finish.',
    fromPrice: 16800,
    variants: [{ label: 'Fantasy Composite Granite (Grey)', price: 16800 }]
  },`;

        // We can just use split and join to remove them, being careful about line endings
        content = content.replace(sink1.replace(/\r\n/g, '\n'), '');
        content = content.replace(sink1, '');
        content = content.replace(sink2.replace(/\r\n/g, '\n'), '');
        content = content.replace(sink2, '');
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

fixFile('c:\\Users\\User\\bluenile-group\\script.js');
fixFile('c:\\Users\\User\\bluenile-group\\index.html');
console.log("Done");
