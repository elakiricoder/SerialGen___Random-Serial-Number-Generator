# SerialGen — Secure Random Serial Number Generator for Web

[![Releases](https://img.shields.io/badge/Releases-Download-blue?logo=github)](https://github.com/elakiricoder/SerialGen___Random-Serial-Number-Generator/releases)

![SerialGen hero](https://images.unsplash.com/photo-1526378721636-0d5f8a3dbf6f?auto=format&fit=crop&w=1400&q=80)

A compact, accessible, object-oriented serial number generator for the web. It focuses on secure randomness, clipboard integration, UI customization, and responsive layout. The project follows OOP principles in plain JavaScript and accessible HTML.

Badges
- [![Accessibility](https://img.shields.io/badge/Accessibility-AA-green)]()
- [![JS OOP](https://img.shields.io/badge/Pattern-OOP-orange)]()
- [![Responsive](https://img.shields.io/badge/Responsive-Design-blue)]()
- Topics: accessibility, clipboard-manager, frontend-web-development, html-css-javascript, js-oop, modern-ui, oop-principles, password-generator, responsive-design, secure-password-generator, serial-number-generator, web-design, web-development

Features
- Secure random serials using Web Crypto API where available.
- Multiple formats: alphanumeric, hex, grouped, custom mask.
- Clipboard copy with status feedback and accessible labels.
- Full keyboard support and screen-reader friendly markup.
- OOP architecture: clear classes for generator, UI, clipboard, and storage.
- Customization: length, groups, separators, allowed characters.
- Export and import presets for repeated workflows.
- Minimal, responsive UI that adapts to mobile and desktop.
- Small footprint: pure HTML, CSS, and JS. No frameworks required.

Why choose SerialGen
- You control the format and entropy.
- The code uses classes and small single-responsibility modules.
- The UI meets common accessibility rules.
- Clipboard actions use the modern Clipboard API with fallbacks.
- You can run it locally or host it as a static page.

Quick links
- Releases: https://github.com/elakiricoder/SerialGen___Random-Serial-Number-Generator/releases
  - Download the release asset from the link above and execute the file provided in the Releases page. The release contains a packaged build and a standalone HTML file you can open in a browser.

Screenshots

![Generator UI](https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80)
![Clipboard action](https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80)

Getting started

Requirements
- A modern browser (Chrome, Edge, Firefox, Safari).
- Optional: a static server for advanced testing (http-server, serve).

Install from Releases
- Visit the Releases page: https://github.com/elakiricoder/SerialGen___Random-Serial-Number-Generator/releases
- Download the build asset (zip or tar) or the standalone HTML.
- Extract the archive if needed.
- Execute the file provided in the Releases assets. The main file is index.html in the release package. Open index.html in your browser or serve it from a static host.

Run locally from source
1. Clone the repo.
   - git clone https://github.com/elakiricoder/SerialGen___Random-Serial-Number-Generator.git
2. Open index.html in a browser.
3. Or run a static server:
   - npx http-server .
   - open the URL printed by the server.

Usage guide

Generate a serial
1. Choose format: Alphanumeric, Hex, or Custom Mask.
2. Set length and grouping options.
3. Click Generate.
4. The serial appears in the read-only output field.
5. Click the copy icon or press Ctrl+C (Cmd+C) when the output has focus.

Custom masks
- Use X for an alphanumeric placeholder.
- Use 9 for digits only.
- Use A for uppercase letters.
- Use a custom set wrapped in [] to pick from a set. Example: [ABC123]X9-XX
- Example mask: AAX-9999 will produce ABC-1234 style serials.

Presets
- Save current settings as a preset.
- Load saved presets from the settings panel.
- Export presets as JSON for backup or sharing.
- Import JSON file to restore presets.

Accessibility
- All controls use semantic HTML elements.
- Labels tie to form fields with for and id.
- The generator exposes ARIA live regions for status messages.
- Keyboard users can tab through fields and use Enter to trigger generate or copy.
- Contrast meets WCAG AA ratios for primary UI elements.
- The code separates behavior from presentation to support assistive tech.

Architecture overview

Core classes
- SerialGenerator
  - Responsibility: produce random values based on pattern, charset, and length.
  - Uses Web Crypto API when available.
  - Falls back to a secure pseudo-random generator if needed.
- MaskParser
  - Responsibility: parse custom mask strings into generation rules.
  - Validates tokens and produces a template for SerialGenerator.
- ClipboardManager
  - Responsibility: handle copy, fallback for execCommand, permissions.
  - Emits events for UI feedback.
- UIController
  - Responsibility: wire DOM to model classes.
  - Manage presets, settings, and accessibility hooks.
- StorageAdapter
  - Responsibility: store presets using localStorage with a versioning header.

Design principles
- Single Responsibility: each class owns one area of logic.
- Encapsulation: internal methods remain private via closures or symbol keys.
- Testable units: functions return predictable outputs for given inputs.
- Event-driven UI: the UI listens to events rather than polling states.

Code examples

Generate a serial from a mask (example)
```js
const gen = new SerialGenerator();
const mask = "AA-9999-XX";
const serial = gen.generateFromMask(mask);
console.log(serial); // e.g. "QZ-4827-7G"
```

Copying with ClipboardManager
```js
const clipboard = new ClipboardManager();
clipboard.copy(serial).then(() => {
  // success UI update
}).catch(err => {
  // fallback UI update
});
```

Testing
- Unit tests cover MaskParser and SerialGenerator logic.
- Test scripts run with a headless runner.
- To run tests:
  - npm install
  - npm test

Customization and theming

CSS variables
- The UI uses CSS variables for colors, spacing, and type scale.
- Override variables in a theme file or root :root rule.
Example variables
- --sg-primary
- --sg-bg
- --sg-accent
- --sg-radius

Themes
- Light and dark themes ship with the project.
- Toggle theme from the UI or via the theme setting.
- Preserve theme in presets.

Security

Randomness
- The generator uses window.crypto.getRandomValues where available.
- The mask parser prevents injection by escaping literal characters.
- Serial output does not store sensitive data unless a preset explicitly requests storage.

Clipboard
- Clipboard writes require user gesture in most browsers. The UI binds copy actions to button clicks.
- The app handles permission rejections gracefully by showing a status message in the ARIA live region.

Integration

Embedding
- Use the packaged script as a module or an inline script.
- The UI exposes a small API for integration with other pages.
Example embed
```html
<div id="serialgen-root"></div>
<script type="module">
import { mountSerialGen } from './dist/serialgen.min.js';
mountSerialGen(document.getElementById('serialgen-root'), { theme: 'dark' });
</script>
```

API
- mountSerialGen(rootElement, options)
- generate(options) -> string
- on(event, callback) // events: generated, copied, error

Packaging and build

Build stack
- Plain ES modules.
- PostCSS for minimal CSS processing.
- Rollup for bundling.
- Optional minifier for release builds.

Build commands
- npm install
- npm run build
- The build outputs a dist folder with serialgen.min.js and index.html

Releases and download

Visit Releases
- The latest release lives on the Releases page. Download the asset and run the file inside the package.
- Link again: https://github.com/elakiricoder/SerialGen___Random-Serial-Number-Generator/releases

Assets include
- serialgen-vX.Y.Z.zip — full source and packaged build.
- serialgen-vX.Y.Z.html — standalone single-file app to open in a browser.
- CHANGELOG.md

Contributing

How to contribute
- Fork the repo.
- Create a feature branch.
- Run tests and linting locally.
- Open a pull request with a clear description and tests if applicable.

Coding standards
- Use ES6 modules.
- Prefer small functions and single-purpose classes.
- Document public methods with JSDoc.
- Keep UI logic in UIController only.

Issues
- Open an issue if you find a bug or want a feature.
- Provide steps to reproduce and expected behavior.
- Tag issues with labels for area and priority.

License

This project uses the MIT License. Check the LICENSE file in the repository for full terms.

Credits and resources

- Built with the Web Crypto API for randomness.
- Accessibility patterns inspired by WAI-ARIA Authoring Practices.
- Icons from public icon sets.
- Images from Unsplash.

Contact
- Repository: https://github.com/elakiricoder/SerialGen___Random-Serial-Number-Generator
- Releases: https://github.com/elakiricoder/SerialGen___Random-Serial-Number-Generator/releases