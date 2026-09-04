const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf-8');
// Check font sizes: "Ensure all typography has a minimum base size equivalent to 12pt / 14-16px."
// We will look for font-size: \dpx or font: ... \dpx
css = css.replace(/font-size: (9|10|11|12|13)px/g, 'font-size: 14px');
css = css.replace(/font: (.*?) (9|10|11|12|13)px/g, 'font: $1 14px');

// Check color contrast for var(--muted) and other light colors.
// var(--muted) is often used for small text.
// Let's ensure --muted is dark enough against #f7f0e7 (bg)
css = css.replace(/--muted: #a69b91;/g, '--muted: #766a5f;'); // Darker muted
css = css.replace(/--lavender: #b0a4cc;/g, '--lavender: #826ba8;'); // Darker lavender for contrast
css = css.replace(/color: rgba\((.*?),(.*?),(.*?),([0-9.]+)\)/g, (match, r, g, b, a) => {
    // If it's a very light text color, maybe increase opacity?
    if (parseFloat(a) < 0.6) {
        return `color: rgba(${r},${g},${b},0.8)`;
    }
    return match;
});

// Color Contrast (WCAG 1.4.3 Level AA): Verify text colors against backgrounds.
// Let's do a basic replace of any `#6e655f` with `#5e554f`
css = css.replace(/#6e655f/g, '#524b45');

fs.writeFileSync('app/globals.css', css);
