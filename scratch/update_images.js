const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, '../script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Find the PRODUCTS array
const productsStart = scriptContent.indexOf('const PRODUCTS = [');
if (productsStart === -1) {
  console.error("Could not find PRODUCTS array");
  process.exit(1);
}

// Extract the PRODUCTS array string
let openBrackets = 0;
let productsEnd = -1;
for (let i = productsStart + 'const PRODUCTS = '.length; i < scriptContent.length; i++) {
  if (scriptContent[i] === '[') openBrackets++;
  if (scriptContent[i] === ']') {
    openBrackets--;
    if (openBrackets === 0) {
      productsEnd = i + 1;
      break;
    }
  }
}

const productsStr = scriptContent.substring(productsStart + 'const PRODUCTS = '.length, productsEnd);
let products;
try {
  products = eval('(' + productsStr + ')');
} catch (e) {
  console.error("Failed to parse PRODUCTS array:", e);
  process.exit(1);
}

// Get all files in assets/products and subdirectories
const productsDir = path.join(__dirname, '../assets/products');
let allImages = [];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else {
      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        // Store relative path like 'assets/products/bamburi-cement-1.jpg'
        allImages.push(fullPath.replace(path.join(__dirname, '../').replace(/\\/g, '/'), '').replace(/\\/g, '/').replace(/^\//, ''));
      }
    }
  }
}

scanDir(productsDir);
// Normalize allImages paths (replace backward slashes with forward slashes)
allImages = allImages.map(p => p.replace(/\\/g, '/'));

console.log(`Found ${allImages.length} images.`);

// Update each product's images array
for (const p of products) {
  if (!p.image) continue;
  
  // Extract base name from main image, e.g. assets/products/bamburi-cement-1.jpg -> bamburi-cement
  const mainImageName = path.basename(p.image);
  let baseName = mainImageName.replace(/-\d+\.[a-z]+$/i, '').replace(/\.[a-z]+$/i, '');
  
  // Special overrides for tricky names
  if (baseName.includes('bamburi')) baseName = 'bamburi-cement';
  if (baseName.includes('chainlink-galvanized')) baseName = 'chainlink-galvanized';
  
  // Find all matching images
  let matchedImages = allImages.filter(img => {
    const imgName = path.basename(img);
    return imgName.startsWith(baseName) || imgName.includes(baseName);
  });
  
  // Also include the original main image and any already defined images just in case
  let finalImages = new Set([p.image, ...(p.images || []), ...matchedImages]);
  
  // Sort them so -1, -2, -3 etc are in order
  p.images = Array.from(finalImages).sort();
}

// We need to write this back to script.js safely.
// Instead of stringifying the whole array which might break formatting, let's just do text replacements for the `images: [...]` lines.
let updatedScriptContent = scriptContent;

for (const p of products) {
  if (!p.images || p.images.length === 0) continue;
  
  // Find the string for this product in the original content using regex or substring
  // This is tricky because formatting. Let's just stringify the array and replace the old block.
}

// Since updating inline is tricky due to formatting, let's regenerate the PRODUCTS string using JSON.stringify but cleaning it up.
const newProductsStr = JSON.stringify(products, null, 2)
  .replace(/"([^"]+)":/g, '$1:') // remove quotes from keys
  .replace(/"/g, "'"); // replace double quotes with single quotes for consistency

const newScriptContent = scriptContent.substring(0, productsStart) + 
                         'const PRODUCTS = ' + newProductsStr + 
                         scriptContent.substring(productsEnd);

fs.writeFileSync(scriptPath, newScriptContent, 'utf8');
console.log("Successfully updated script.js");
