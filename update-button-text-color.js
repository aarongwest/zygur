// This script updates all .tsx files to change text-white to text-black for accent-orange buttons
// Run with: node update-button-text-color.js

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Color replacement patterns
const replacements = [
  // Replace text-white with text-black when used with bg-accent-orange
  { 
    from: /bg-accent-orange([^"]*?)text-white/g, 
    to: 'bg-accent-orange$1text-black' 
  },
  { 
    from: /text-white([^"]*?)bg-accent-orange/g, 
    to: 'text-black$1bg-accent-orange' 
  },
  // Handle cases where they are in separate class attributes but on same element
  {
    from: /className="([^"]*bg-accent-orange[^"]*)"([^>]*?)className="([^"]*text-white[^"]*)"/g,
    to: 'className="$1"$2className="$3".replace("text-white", "text-black")'
  }
];

// Function to walk through directories recursively
async function walkDir(dir) {
  const files = await readdir(dir);
  const allFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);

    if (stats.isDirectory()) {
      const subDirFiles = await walkDir(filePath);
      allFiles.push(...subDirFiles);
    } else if (file.endsWith('.tsx')) {
      allFiles.push(filePath);
    }
  }

  return allFiles;
}

// Function to update a file
async function updateFile(filePath) {
  try {
    let content = await readFile(filePath, 'utf8');
    let hasChanges = false;
    const originalContent = content;

    // Replace patterns where bg-accent-orange and text-white are in the same className
    content = content.replace(/className="([^"]*bg-accent-orange[^"]*text-white[^"]*)"/g, (match, classes) => {
      const updatedClasses = classes.replace(/text-white/g, 'text-black');
      return `className="${updatedClasses}"`;
    });

    content = content.replace(/className="([^"]*text-white[^"]*bg-accent-orange[^"]*)"/g, (match, classes) => {
      const updatedClasses = classes.replace(/text-white/g, 'text-black');
      return `className="${updatedClasses}"`;
    });

    if (originalContent !== content) {
      hasChanges = true;
    }

    if (hasChanges) {
      await writeFile(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// Main function
async function main() {
  const srcDir = 'src';
  let totalFilesProcessed = 0;
  let totalFilesUpdated = 0;

  try {
    const files = await walkDir(srcDir);
    totalFilesProcessed = files.length;
    
    console.log(`Processing ${files.length} files in ${srcDir}...`);
    
    for (const file of files) {
      const updated = await updateFile(file);
      if (updated) {
        totalFilesUpdated++;
      }
    }
    
    console.log('=== Summary ===');
    console.log(`Total files processed: ${totalFilesProcessed}`);
    console.log(`Total files updated: ${totalFilesUpdated}`);
  } catch (error) {
    console.error(`Error processing directory ${srcDir}:`, error);
  }
}

main().catch(console.error);
