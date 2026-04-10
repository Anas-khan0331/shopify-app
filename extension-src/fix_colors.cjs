const fs = require('fs');
const path = require('path');

function fixCSSColors(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  // Revert hex colors that were changed from #a1b2c3 to .a1b2c3
  // e.g. .dcdcdc, .ffffff, .f4f4f4, .e5e5e5, .fff, .f1ffe9
  content = content.replace(/(\s|\:|,) \.([a-fA-F0-9]{3,8})(\s|;|!|,|\b)/g, '$1#$2$3');
  // Some without space, like border-bottom: 1px solid .f4f4f4; -> border-bottom: 1px solid #f4f4f4;
  content = content.replace(/(\s|\:|,) \.([a-fA-F0-9]{3,8})(\s|;|!|,|\n|$)/g, '$1#$2$3');
  
  // also fix background: .f1ffe9;
  content = content.replace(/ \.([a-fA-F0-9]{3,6})/g, (match, hex) => {
     if(/^[a-fA-F0-9]{3,6}$/.test(hex)) {
        return ` #${hex}`;
     }
     return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed colors in', filePath);
}

fixCSSColors('components/styles/App.css');
fixCSSColors('components/styles/Swatch.css');
