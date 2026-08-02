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
    
    // Emerald to Teal
    content = content.replace(/text-emerald-400/g, 'text-[#00FFD1]');
    // Red to Magenta
    content = content.replace(/text-red-500/g, 'text-[#FF1CF7]');
    // Hover text blue 600
    content = content.replace(/hover:text-blue-600/g, 'hover:text-[#FF1CF7]/80');
    
    // Testimonials
    content = content.replace(/group-hover:text-yellow-600 group-hover:bg-amber-50/g, 'group-hover:text-[#1A0B2E] group-hover:bg-[#E8FF00]');
    content = content.replace(/group-hover:text-blue-600 group-hover:bg-blue-50/g, 'group-hover:text-[#1A0B2E] group-hover:bg-[#FF1CF7]');
    content = content.replace(/group-hover:text-blue-500 group-hover:bg-red-50/g, 'group-hover:text-[#F0EDE8] group-hover:bg-[#7B2FFF]');
    content = content.replace(/group-hover:text-red-500 group-hover:bg-gray-900 group-hover:text-\[\#F0EDE8\]/g, 'group-hover:text-[#00FFD1] group-hover:bg-[#100720]');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
