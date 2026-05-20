# Test Static Site Generator

A simple Node.js-based static site generator that converts source files into static HTML.
This is for testing

## Project Structure

```
/test/
├── package.json      # NPM configuration with build script
├── build.js          # Build script that generates static HTML
├── src/              # Source page files (JavaScript modules)
│   ├── index.js
│   ├── about.js
│   └── contact.js
└── dist/             # Output folder with generated static HTML (created by build)
    ├── index.html
    ├── about.html
    └── contact.html
```

## How to Use

1. **Build the site:**
   ```bash
   npm build
   ```

2. **View the results:**
   The static HTML files are generated in the `dist/` folder. Open any `.html` file in a browser.

## How It Works

- Each file in `src/` is a JavaScript module that exports an HTML string
- The `build.js` script reads these modules, executes them, and outputs the generated HTML to `dist/`
- You can add logic, templates, or data processing in the source files before building

## Adding New Pages

1. Create a new JavaScript file in `src/` (e.g., `src/blog.js`)
2. Export an HTML string from that file
3. Run `npm build` to generate the corresponding `.html` file in `dist/`

## Why This Approach?

- Pure Node.js (no external dependencies)
- Simple and easy to understand
- Flexible - you can add any JavaScript logic to generate your content
- Produces static HTML files with no server required
