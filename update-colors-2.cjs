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
    
    // Fix opacities of the replaced dark bg that was formerly light
    content = content.replace(/bg-\[\#100720\]\/5/g, 'bg-white/5');
    content = content.replace(/bg-\[\#100720\]\/10/g, 'bg-white/10');
    content = content.replace(/bg-\[\#100720\]\/20/g, 'bg-white/20');
    content = content.replace(/bg-\[\#100720\]\/25/g, 'bg-white/25');
    
    // Fix remaining grays
    content = content.replace(/text-gray-300/g, 'text-[#F0EDE8]/70');
    content = content.replace(/text-gray-200/g, 'text-[#F0EDE8]/80');
    content = content.replace(/text-gray-400/g, 'text-[#F0EDE8]/50');
    content = content.replace(/border-gray-500/g, 'border-[#F0EDE8]/20');
    content = content.replace(/border-gray-700/g, 'border-[#F0EDE8]/10');
    
    // Fix remaining standard tailwind colors that didn't get mapped
    content = content.replace(/hover:bg-blue-600/g, 'hover:bg-[#FF1CF7]/80');
    content = content.replace(/bg-blue-600/g, 'bg-[#FF1CF7]/80');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
