import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { zipSync } from 'fflate';

const root = fileURLToPath(new URL('../', import.meta.url));
const excluded = new Set(['node_modules', 'dist', '.astro', '.git', 'exports', '.DS_Store', '.idea', '.vscode', 'coverage']);
const files = Object.create(null);
async function collect(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (excluded.has(entry.name) || (entry.name.startsWith('.env') && entry.name !== '.env.example') || /\.(zip|log|pem|key)$/i.test(entry.name)) continue;
    const name = prefix + entry.name;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(absolute, name + '/');
    else if (entry.isFile()) files[name] = new Uint8Array(await readFile(absolute));
  }
}
await collect(root);
await mkdir(path.join(root, 'exports'), { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const output = path.join(root, 'exports', `jamily-lee-site-${stamp}.zip`);
await writeFile(output, zipSync(files, { level: 6 }));
console.log(`Created ${output} (${Object.keys(files).length} files).`);
console.log('Includes source, public assets, lockfile, and GitHub workflow. Dependencies can be restored with npm ci.');
