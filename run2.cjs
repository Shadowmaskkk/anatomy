const fs = require('fs');
let viewer = fs.readFileSync('app/components/OrganViewer.tsx', 'utf-8');
viewer = viewer.replace(/<div className="viewer-tools" aria-label=\{t\.tools\.label\}>/g, '<div className="viewer-tools" role="toolbar" aria-label={t.tools.label}>');
fs.writeFileSync('app/components/OrganViewer.tsx', viewer);

let css = fs.readFileSync('app/globals.css', 'utf-8');
css = css.replace(/backdrop-filter:/g, '-webkit-backdrop-filter: blur(var(--blur-amount, 10px)); /* FALLBACK */\nbackdrop-filter:');
fs.writeFileSync('app/globals.css', css);
