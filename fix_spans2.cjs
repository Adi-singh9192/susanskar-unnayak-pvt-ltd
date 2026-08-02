const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Fix other spans
    content = content.replace(/text-\[\#F0EDE8\] text-\[11px\] font-bold tracking-\[0.2em\] uppercase/g, 'text-[var(--citrus)] text-[11px] font-bold tracking-[0.2em] uppercase');
    content = content.replace(/text-\[\#F0EDE8\]\/50 text-xs font-bold tracking-\[0.2em\] uppercase/g, 'text-[var(--citrus)] text-xs font-bold tracking-[0.2em] uppercase');
    
    // Check if Hero has one
    content = content.replace(/<span className="text-\[10px\] font-bold tracking-\[0.2em\] text-\[\#F0EDE8\] uppercase">/g, '<span className="text-[10px] font-bold tracking-[0.2em] text-[var(--citrus)] uppercase">');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
