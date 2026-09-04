const fs = require('fs');

let app = fs.readFileSync('app/components/AnatomyApp.tsx', 'utf-8');
// Convert brand button to a tag for crawlability?
// "Ensure all navigation controls use semantic `<a href="...">` links rather than JavaScript click handlers on non-anchor elements."
// Brand button is a navigation control to go "home"
app = app.replace(/<button className="brand" type="button" onClick=\{\(\) => selectOrgan\("heart"\)\} aria-label=\{`Anatomy Atelier - \$\{t\.brand\.home\}`\}>/g, '<a href="#" className="brand button-like" onClick={(e) => { e.preventDefault(); selectOrgan("heart"); }} aria-label={`Anatomy Atelier - ${t.brand.home}`}>');
app = app.replace(/<button className="brand"/g, '<a href="#" className="brand"');
app = app.replace(/<strong>Anatomy Atelier<sup>✦<\/sup><\/strong>\n          <em>\{t\.brand\.tagline\}<\/em>\n        <\/button>/g, '<strong>Anatomy Atelier<sup>✦</sup></strong>\n          <em>{t.brand.tagline}</em>\n        </a>');

fs.writeFileSync('app/components/AnatomyApp.tsx', app);

let css = fs.readFileSync('app/globals.css', 'utf-8');
css = css.replace(/\.brand \{/g, '.brand {\n  text-decoration: none;\n  color: inherit;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;');
fs.writeFileSync('app/globals.css', css);
