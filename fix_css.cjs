const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');
css = css.replace(/backdrop-filter:(.*?);/g, '-webkit-backdrop-filter:$1;\n  backdrop-filter:$1;');
fs.writeFileSync('app/globals.css', css);
