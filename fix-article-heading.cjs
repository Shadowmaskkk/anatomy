const fs = require('fs');

let app = fs.readFileSync('app/components/AnatomyApp.tsx', 'utf-8');
// Fix missing heading in <article className="curiosity-card">
app = app.replace(/<article className="curiosity-card">/g, '<article className="curiosity-card">\n          <h2 className="sr-only">{t.library.quoteSign}</h2>');
fs.writeFileSync('app/components/AnatomyApp.tsx', app);
