import { mkdirSync, readdirSync, lstatSync, copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const source = join(process.cwd(), 'images');
const destination = join(process.cwd(), 'public', 'images');

function copyDirectory(src, dest) {
  if (!existsSync(src)) {
    console.warn(`⚠️ Source directory does not exist: ${src}`);
    return;
  }
  
  mkdirSync(dest, { recursive: true });

  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    if (lstatSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
      console.log(`✅ Copied: ${entry}`);
    }
  }
}

console.log('🚀 Copying images from images/ to public/images...');
copyDirectory(source, destination);
console.log('✅ Images copied successfully!');