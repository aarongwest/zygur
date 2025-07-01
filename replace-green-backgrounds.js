const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Replace bg-dark-green with bg-zinc-900
    if (content.includes('bg-dark-green')) {
      content = content.replace(/bg-dark-green/g, 'bg-zinc-900');
      modified = true;
    }
    
    // Replace hover:bg-dark-green with hover:bg-zinc-800
    if (content.includes('hover:bg-dark-green')) {
      content = content.replace(/hover:bg-dark-green/g, 'hover:bg-zinc-800');
      modified = true;
    }
    
    // Replace from-dark-green with from-zinc-900
    if (content.includes('from-dark-green')) {
      content = content.replace(/from-dark-green/g, 'from-zinc-900');
      modified = true;
    }
    
    // Replace to-dark-green with to-zinc-900
    if (content.includes('to-dark-green')) {
      content = content.replace(/to-dark-green/g, 'to-zinc-900');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      replaceInFile(filePath);
    }
  }
}

// Start from src directory
walkDirectory('./src');
console.log('Replacement complete!');
