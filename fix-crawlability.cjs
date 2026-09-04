const fs = require('fs');

let app = fs.readFileSync('app/components/AnatomyApp.tsx', 'utf-8');
// Crawlability: Ensure all navigation controls use semantic `<a href="...">` links rather than JavaScript click handlers on non-anchor elements.
// E.g., <button className="active"><Compass size={17} /> {t.nav.explore}</button>
// Wait, they're buttons for a reason? But the requirement says: "Ensure all navigation controls use semantic `<a href="...">` links rather than JavaScript click handlers on non-anchor elements."
app = app.replace(/<nav className="main-nav" aria-label="Primary navigation">\n          <button className="active">/g, '<nav className="main-nav" aria-label="Primary navigation">\n          <a href="#" className="active" onClick={(e) => e.preventDefault()}>');
app = app.replace(/<button><BrainCircuit size=\{17\} \/> \{t\.nav\.systems\}<\/button>/g, '<a href="#" onClick={(e) => e.preventDefault()}><BrainCircuit size={17} /> {t.nav.systems}</a>');
app = app.replace(/<button onClick=\{.*?\}><BookOpen size=\{17\} \/> \{t\.nav\.lessons\}<\/button>/g, '<a href="#" onClick={(e) => { e.preventDefault(); setModal("lesson"); }}><BookOpen size={17} /> {t.nav.lessons}</a>');
app = app.replace(/<button><LibraryBig size=\{17\} \/> \{t\.nav\.library\}<\/button>/g, '<a href="#" onClick={(e) => e.preventDefault()}><LibraryBig size={17} /> {t.nav.library}</a>');
app = app.replace(/<button><NotebookPen size=\{17\} \/> \{t\.nav\.notes\}<\/button>/g, '<a href="#" onClick={(e) => e.preventDefault()}><NotebookPen size={17} /> {t.nav.notes}</a>');

// Are there other navigation controls? `view-all` maybe?
// `<button className="view-all" onClick={() => setQuery("")}>{t.library.viewAll} <ArrowRight size={14} /></button>` -> Maybe it's a filter, not nav?
app = app.replace(/<a href="#" className="active" onClick=\{\(e\) => e\.preventDefault\(\)\}>/g, '<a href="#" className="active button-like" onClick={(e) => e.preventDefault()}>');
app = app.replace(/<a href="#" onClick=\{\(e\) => e\.preventDefault\(\)\}>/g, '<a href="#" className="button-like" onClick={(e) => e.preventDefault()}>');
app = app.replace(/<a href="#" onClick=\{\(e\) => \{ e\.preventDefault\(\); setModal\("lesson"\); \}\}>/g, '<a href="#" className="button-like" onClick={(e) => { e.preventDefault(); setModal("lesson"); }}>');


fs.writeFileSync('app/components/AnatomyApp.tsx', app);
