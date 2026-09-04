const fs = require('fs');

let content = fs.readFileSync('app/components/AnatomyApp.tsx', 'utf-8');
content = content.replace(/<section className="compare-strip" aria-label=\{t\.compare\.title\}>/g, '<section className="compare-strip" role="region" aria-label={t.compare.title}>');
content = content.replace(/<section className="learning-cards" aria-label=\{format\(t\.cards\.resources, \{ organ: organ\.name \}\)\}>/g, '<section className="learning-cards" role="region" aria-label={format(t.cards.resources, { organ: organ.name })}>');
content = content.replace(/<ul className="hotspot-index" aria-label=\{t\.viewer\.structures\}>/g, '<ul className="hotspot-index" aria-label={t.viewer.structures}>');

fs.writeFileSync('app/components/AnatomyApp.tsx', content);

let viewer = fs.readFileSync('app/components/OrganViewer.tsx', 'utf-8');
viewer = viewer.replace(/<section className="viewer-shell" aria-label=\{format\(t\.viewer\.title, \{ organ: organ\.name \}\)\}>/g, '<section className="viewer-shell" role="region" aria-label={format(t.viewer.title, { organ: organ.name })}>');
viewer = viewer.replace(/<aside className="tip-note" aria-label=\{t\.viewer\.tip\}>/g, '<aside className="tip-note" role="complementary" aria-label={t.viewer.tip}>');
fs.writeFileSync('app/components/OrganViewer.tsx', viewer);
