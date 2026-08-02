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
    
    // Replace gray backgrounds
    content = content.replace(/bg-gray-50/g, 'bg-[#100720]');
    content = content.replace(/bg-gray-100/g, 'bg-[#100720]');
    content = content.replace(/bg-gray-200/g, 'bg-[#100720]');
    content = content.replace(/bg-gray-900/g, 'bg-[#1A0B2E]');
    
    // Replace gray hover backgrounds
    content = content.replace(/hover:bg-[#100720]/g, 'hover:bg-[#1A0B2E]'); // since they were mapped above
    
    // Replace gray borders
    content = content.replace(/border-gray-300/g, 'border-[#7B2FFF]/30');
    content = content.replace(/border-gray-900/g, 'border-[#7B2FFF]/50');
    
    // Replace placeholder
    content = content.replace(/placeholder-gray-400/g, 'placeholder-[#F0EDE8]/30');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
