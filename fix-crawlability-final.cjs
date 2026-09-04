const fs = require('fs');

let app = fs.readFileSync('app/components/AnatomyApp.tsx', 'utf-8');

app = app.replace(/<a href="#" className="active" onClick=\{\(e\) => e\.preventDefault\(\)\}><Compass size=\{17\} \/> \{t\.nav\.explore\}<\/button>/g, '<a href="#" className="active" onClick={(e) => e.preventDefault()}><Compass size={17} /> {t.nav.explore}</a>');
app = app.replace(/<a href="#" onClick=\{\(e\) => e\.preventDefault\(\)\}><BrainCircuit size=\{17\} \/> \{t\.nav\.systems\}<\/button>/g, '<a href="#" onClick={(e) => e.preventDefault()}><BrainCircuit size={17} /> {t.nav.systems}</a>');
app = app.replace(/<a href="#" onClick=\{\(e\) => \{ e\.preventDefault\(\); setModal\("lesson"\); \}\}><BookOpen size=\{17\} \/> \{t\.nav\.lessons\}<\/button>/g, '<a href="#" onClick={(e) => { e.preventDefault(); setModal("lesson"); }}><BookOpen size={17} /> {t.nav.lessons}</a>');
app = app.replace(/<a href="#" onClick=\{\(e\) => e\.preventDefault\(\)\}><LibraryBig size=\{17\} \/> \{t\.nav\.library\}<\/button>/g, '<a href="#" onClick={(e) => e.preventDefault()}><LibraryBig size={17} /> {t.nav.library}</a>');
app = app.replace(/<a href="#" onClick=\{\(e\) => e\.preventDefault\(\)\}><NotebookPen size=\{17\} \/> \{t\.nav\.notes\}<\/button>/g, '<a href="#" onClick={(e) => e.preventDefault()}><NotebookPen size={17} /> {t.nav.notes}</a>');


// Also in globals.css, the button-like isn't applied if I replace them here with button. Let me check what was exactly replaced:
// The first script did:
// app = app.replace(/<button className="active"><Compass size=\{17\} \/> \{t\.nav\.explore\}<\/button>/g, '<a href="#" className="active" onClick={(e) => e.preventDefault()}><Compass size={17} /> {t.nav.explore}</a>');
// BUT it also replaced:
// app = app.replace(/<button><BrainCircuit size=\{17\} \/> \{t\.nav\.systems\}<\/button>/g, '<a href="#" onClick={(e) => e.preventDefault()}><BrainCircuit size={17} /> {t.nav.systems}</a>');
// Ah. Wait, the first script matched `<button>` and left `</button>` in place initially, then the `fix-crawlability-final.cjs` replaced `</button>` with `</a>`. So now it should be correct.

fs.writeFileSync('app/components/AnatomyApp.tsx', app);
