const fs = require('fs');

let app = fs.readFileSync('app/components/AnatomyApp.tsx', 'utf-8');
// For `ul` wait, ul has list role implicitly. So `role="list"` wasn't added by me, I will add it to the other ul just in case? No, wait. I can add it to the other ul in OrganViewer.tsx.
// Or I can change `<aside className="organ-library"` to `<aside className="organ-library" role="complementary" aria-label={...}>` - it doesn't have aria-label.

let viewer = fs.readFileSync('app/components/OrganViewer.tsx', 'utf-8');
viewer = viewer.replace(/<ul className="hotspot-index" aria-label=\{t\.viewer\.structures\}>/g, '<ul className="hotspot-index" role="list" aria-label={t.viewer.structures}>');
fs.writeFileSync('app/components/OrganViewer.tsx', viewer);
