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
    
    // Fix spans to citrus
    content = content.replace(/text-\[\#1A0B2E\] uppercase/g, 'text-[var(--citrus)] uppercase');
    content = content.replace(/text-\[\#1A0B2E\](.*?)uppercase/g, 'text-[var(--citrus)]$1uppercase');
    content = content.replace(/text-\[var\(--smoke\)\](.*?)uppercase/g, 'text-[var(--citrus)]$1uppercase');
    
    // While we're at it, fix the #1A0B2E headings to cream since #1A0B2E is dark purple on a dark purple background
    content = content.replace(/text-\[\#1A0B2E\]/g, 'text-[var(--cream)]');
    
    // Check if there are other spans that the user might have meant, such as spans with text-[#F0EDE8] in Hero.tsx
    content = content.replace(/<span className="text-\[10px\] font-bold tracking-\[0.2em\] text-\[\#F0EDE8\] uppercase/g, '<span className="text-[10px] font-bold tracking-[0.2em] text-[var(--citrus)] uppercase');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
