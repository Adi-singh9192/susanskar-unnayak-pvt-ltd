const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const colorMap = {
  '#0F172A': '#1A0B2E',
  '#2563EB': '#FF1CF7',
  '#F59E0B': '#E8FF00',
  '#F3F4F6': '#100720',
  'bg-white': 'bg-[#100720]',
  'text-gray-900': 'text-[#F0EDE8]',
  'text-gray-800': 'text-[#F0EDE8]',
  'text-gray-700': 'text-[#F0EDE8]/80',
  'text-gray-600': 'text-[#F0EDE8]/50',
  'text-gray-500': 'text-[#F0EDE8]/50',
  'text-gray-400': 'text-[#F0EDE8]/50',
  'text-black': 'text-[#F0EDE8]',
  'border-gray-200': 'border-[#7B2FFF]/20',
  'border-gray-100': 'border-[#7B2FFF]/10',
  'border-gray-800': 'border-[#7B2FFF]/30',
  'text-[#111827]': 'text-[#F0EDE8]',
  'text-white': 'text-[#F0EDE8]'
};

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    for (let [oldColor, newColor] of Object.entries(colorMap)) {
      content = content.split(oldColor).join(newColor);
    }
    
    content = content.replace(/text-\[\#0F172A\]/g, 'text-[#F0EDE8]');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
