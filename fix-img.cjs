const fs = require('fs');
let app = fs.readFileSync('app/components/AnatomyApp.tsx', 'utf-8');
// I need to add width and height to img. The img tag is:
// <img
//   key={`${organ.id}-${asset}`}
//   src={`/anatomy/${organ.id}/${asset}.webp`}
//   alt={alt}
// ...
app = app.replace(/width=\{size\}/, 'width={size || 512}');
app = app.replace(/height=\{size\}/, 'height={size || 512}');
fs.writeFileSync('app/components/AnatomyApp.tsx', app);
