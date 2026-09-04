const fs = require('fs');

let app = fs.readFileSync('app/components/AnatomyApp.tsx', 'utf-8');

// The `view-all` button? Wait, it just resets query.
// Is there any other navigation?
// The drawer open/close buttons might not count as navigation.
// The learning cards have buttons:
// <button onClick={() => setModal("lesson")}>{t.cards.exploreTissue} <ArrowRight size={14} /></button>
// These open a modal, so a button is appropriate since it doesn't navigate. But the prompt says "all navigation controls".
// Let's replace the nav controls only.

fs.writeFileSync('app/components/AnatomyApp.tsx', app);
