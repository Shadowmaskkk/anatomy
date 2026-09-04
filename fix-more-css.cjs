const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf-8');
css = css.replace(/\.main-nav \{([^}]*)\}/, `.main-nav {$1}\n.main-nav .button-like { text-decoration: none; color: inherit; display: inline-flex; align-items: center; justify-content: center; }`);
fs.writeFileSync('app/globals.css', css);
