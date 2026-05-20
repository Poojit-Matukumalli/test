const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Read pages from src directory
const srcDir = path.join(__dirname, 'src');
const pages = fs.readdirSync(srcDir).filter(file => file.endsWith('.js'));

// Generate static pages
pages.forEach(page => {
  const pagePath = path.join(srcDir, page);
  const pageContent = require(pagePath);
  
  const htmlFileName = page.replace('.js', '.html');
  const outputPath = path.join(distDir, htmlFileName);
  
  fs.writeFileSync(outputPath, pageContent);
  console.log(`✓ Generated ${htmlFileName}`);
});

console.log('\n✓ Build complete! Static files generated in ./dist/');
