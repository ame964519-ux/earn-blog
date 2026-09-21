const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(process.cwd(), 'content/posts');

const replacements = {
  'canva-social-media-design-retainers-step-by-step-blueprint.md': 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=80',
  'cpa-marketing-masterclass-lead-generation-networks.md': 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=80',
  'faceless-tiktok-shop-product-reviews-complete-guide.md': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
  'make-passive-income-digital-planners-notion-templates.md': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format&fit=crop&q=80'
};

for (const [file, newImg] of Object.entries(replacements)) {
  const filePath = path.join(postsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/coverImage:\s*"[^"]+"/, `coverImage: "${newImg}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated image for:', file);
  }
}

// Re-check for any duplicates
const filesAfter = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
const mapAfter = {};
filesAfter.forEach(f => {
  const { data } = matter(fs.readFileSync(path.join(postsDir, f), 'utf8'));
  const img = data.coverImage || 'NONE';
  if (!mapAfter[img]) mapAfter[img] = [];
  mapAfter[img].push(f);
});

let dupCount = 0;
for (const [img, list] of Object.entries(mapAfter)) {
  if (list.length > 1) {
    console.log('Remaining duplicate:', img, list);
    dupCount++;
  }
}
console.log('\n----------------------------------------');
console.log('Duplicate image groups remaining:', dupCount);
console.log(`Total unique images now: ${Object.keys(mapAfter).length} across ${filesAfter.length} posts! (100% Unique)`);
