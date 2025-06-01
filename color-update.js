// This script updates all .tsx files in the src/app directory to use the dark-green theme
// It replaces zinc-800 backgrounds with dark-green backgrounds
// Run with: node color-update.js

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Color replacement patterns
const replacements = [
  // Replace backgrounds
  { 
    from: /bg-zinc-800\/50/g, 
    to: 'bg-dark-green/60' 
  },
  { 
    from: /hover:bg-zinc-800/g, 
    to: 'hover:bg-dark-green/80' 
  },
  { 
    from: /bg-zinc-800/g, 
    to: 'bg-dark-green/70' 
  },
  // Update gradients that use zinc
  {
    from: /from-.*?to-zinc-800\/50/g,
    to: (match) => {
      // Keep the from- part but replace the to- part
      const fromPart = match.split('to-')[0];
      return `${fromPart}to-dark-green/60`;
    }
  }
];

// List of directories to process
const dirsToProcess = [
  'src/app/services',
  'src/app/company',
  'src/app/industries',
  'src/app/resources',
  'src/app/compare',
  'src/app/pricing',
  'src/app/results'
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

    for (const { from, to } of replacements) {
      const originalContent = content;
      if (typeof to === 'function') {
        content = content.replace(from, to);
      } else {
        content = content.replace(from, to);
      }
      if (originalContent !== content) {
        hasChanges = true;
      }
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
  let totalFilesProcessed = 0;
  let totalFilesUpdated = 0;

  for (const dir of dirsToProcess) {
    try {
      const files = await walkDir(dir);
      totalFilesProcessed += files.length;
      
      console.log(`Processing ${files.length} files in ${dir}...`);
      
      let updatedInDir = 0;
      for (const file of files) {
        const updated = await updateFile(file);
        if (updated) {
          updatedInDir++;
          totalFilesUpdated++;
        }
      }
      
      console.log(`Updated ${updatedInDir} files in ${dir}`);
    } catch (error) {
      console.error(`Error processing directory ${dir}:`, error);
    }
  }

  console.log('=== Summary ===');
  console.log(`Total files processed: ${totalFilesProcessed}`);
  console.log(`Total files updated: ${totalFilesUpdated}`);
}

main().catch(console.error);
