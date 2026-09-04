const fs = require('fs');

let app = fs.readFileSync('app/components/AnatomyApp.tsx', 'utf-8');
// Label in Name says: "Ensure every button, input, and link has an accessible name that contains the visible visual label."
// 1. brand button: `aria-label={t.brand.home}` but its visible text is "Anatomy Atelier". Let's change aria-label to something that contains the text, or just rely on the text? Or `aria-label={\`Anatomy Atelier - ${t.brand.home}\`}`?
// 2. profile button: `aria-label={t.profile.open}` but visible text is "MA". Wait, if `aria-label` doesn't contain "MA", it fails.
// Let's replace profile aria-label with `aria-label={\`MA - ${t.profile.open}\`}`.
app = app.replace(/<button className="profile" aria-label=\{t\.profile\.open\}><span>MA<\/span>/g, '<button className="profile" aria-label={`MA ${t.profile.open}`}><span>MA</span>');
app = app.replace(/<button className="brand" type="button" onClick=\{.*?\} aria-label=\{t\.brand\.home\}>/g, '<button className="brand" type="button" onClick={() => selectOrgan("heart")} aria-label={`Anatomy Atelier - ${t.brand.home}`}>');

// Let's check other buttons.
fs.writeFileSync('app/components/AnatomyApp.tsx', app);
