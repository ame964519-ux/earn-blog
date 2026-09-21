const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(process.cwd(), 'content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

async function checkUrl(file, url) {
  try {
    const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) {
      return { file, url, status: res.status, ok: false };
    }
    return { file, url, status: res.status, ok: true };
  } catch (err) {
    return { file, url, error: err.message, ok: false };
  }
}

async function run() {
  console.log('Testing all', files.length, 'posts concurrently...');
  const promises = files.map(f => {
    const content = fs.readFileSync(path.join(postsDir, f), 'utf8');
    const { data } = matter(content);
    return checkUrl(f, data.coverImage);
  });

  const results = await Promise.all(promises);
  const broken = results.filter(r => !r.ok);

  console.log('\n--- VERIFICATION RESULTS ---');
  console.log('Total checked:', results.length);
  console.log('Broken images count:', broken.length);
  if (broken.length > 0) {
    console.log(JSON.stringify(broken, null, 2));
  }
}

run();
