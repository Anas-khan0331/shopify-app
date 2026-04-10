const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (dirPath.includes('node_modules') || dirPath.includes('.git')) return;
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function processJSX(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Revert: id="A" className="B" -> className="A B"
  content = content.replace(/id=(['"])(.*?)\1\s+className=(['"])(.*?)\3/g, 'className="$2 $4"');
  
  // Revert: id="A" className={`B`} -> className={`A B`}
  content = content.replace(/id=(['"])(.*?)\1\s+className=\{`(.*?)`\}/g, 'className={`$2 $3`}');
  
  // Revert: id="A" -> className="A"
  // Exception: ck-content was original
  content = content.replace(/id=(['"])(.*?)\1/g, (match, quote, val) => {
    // Check if originally it was an id
    if (val === 'ck-content' || val.startsWith('productdetails-') || val.startsWith('productheader-') || val.startsWith('attributeswatch-') || val === 'confirmation-root' || val === 'confirmation-tradeHeading' || val === 'confirmation-tradeHeading2') {
      return match; // keep as id
    }
    return `className="${val}"`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Reverted JSX:', filePath);
  }
}

function processCSS(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  // Revert roughly: #class -> .class
  // We apply only to elements that don't match our appended strings
  const avoid = ['confirmation-', 'productdetails-', 'productheader-', 'attributeswatch-'];
  content = content.replace(/(^|[\s,\>+~\{])#([a-zA-Z_-][a-zA-Z0-9_-]*)/g, (match, p1, p2) => {
    if (avoid.some(a => p2.startsWith(a))) return match;
    return `${p1}.${p2}`;
  });
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Reverted CSS:', filePath);
  }
}

walkDir('.', (filePath) => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    if(filePath !== 'undo.cjs' && filePath !== 'convert.cjs' && filePath !== 'append_styles.cjs') processJSX(filePath);
  } else if (filePath.endsWith('.css')) {
    processCSS(filePath);
  }
});
