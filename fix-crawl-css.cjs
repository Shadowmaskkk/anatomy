const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf-8');
css = css.replace(/\.main-nav button/g, '.main-nav .button-like');
fs.writeFileSync('app/globals.css', css);
