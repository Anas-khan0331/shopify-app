const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

function processJSX(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  content = content.replace(/className=/g, 'id=');
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated JSX:', filePath);
  }
}

function processCSS(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  // Replace standard CSS classes with IDs, e.g., " .wishlist" -> " #wishlist", ".wishlist" -> "#wishlist"
  // ^ or whitespace or , or > or + or ~ or { followed by .
  content = content.replace(/(^|[\s,\>+~\{])\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g, '$1#$2');
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated CSS:', filePath);
  }
}

walkDir('.', (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    processJSX(filePath);
  } else if (filePath.endsWith('.css')) {
    processCSS(filePath);
  }
});

console.log('Conversion script finished.');
