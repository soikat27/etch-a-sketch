# Etch-A-Sketch

A small browser-based sketchpad inspired by the classic Etch-A-Sketch toy. Move your mouse across the grid to draw colorful pixel trails, resize the canvas, clear your work, and experiment with a simple interactive drawing board built entirely with vanilla web technologies.

This project was built as part of The Odin Project Foundations curriculum. The main goal was to practice DOM manipulation by creating grid elements with JavaScript, attaching event listeners, updating styles dynamically, and keeping the browser UI responsive to user input.

There is no backend, no build step, and no framework here - just plain HTML, CSS, and JavaScript.

The focus of this project is dynamic DOM creation: generating a square grid, changing cell styles on hover, resizing the grid from user input, and preserving the same total canvas size across different grid dimensions.

#### Key engineering concepts used in this project

- DOM element creation with `document.createElement()`
- Flexbox layout for building a square drawing grid
- Mouse event handling with `mouseenter`
- Dynamic inline style updates for square sizing and coloring
- Random RGB color generation with `Math.random()`
- Progressive darkening using the CSS `opacity` property
- User input handling with `prompt()` and validation
- State reset logic for clearing or rebuilding the sketchpad

## Getting Started

### **Try it online**

**Live app:** [https://soikat27.github.io/etch-a-sketch](https://soikat27.github.io/etch-a-sketch) - opens in the browser, nothing to install.

### **Run it locally** (if you're cloning or tweaking the code)

You do not need Node, npm, a bundler, or a local server. This project is static HTML, CSS, and JavaScript.

#### **Prerequisites**

- A **modern browser** such as Chrome, Firefox, Safari, or Edge
- **Git** if you want to clone the repository

#### Check that Git is installed

```bash
git --version
```

#### **Installing**

##### 1. Clone this repository

```bash
git clone https://github.com/soikat27/etch-a-sketch.git
```

##### 2. Open the project directory

```bash
cd etch-a-sketch
```

There is no `npm install` or compile step.

#### **Running locally**

Open `index.html` in your browser by double-clicking it or dragging it into a browser window.

## Using the app

The same behavior applies on the [live demo](https://soikat27.github.io/etch-a-sketch/) and when you run the files locally.

### Features

- **Default sketchpad** - starts with a 16x16 grid
- **Draw on hover** - move your mouse over the cells to color them
- **Random colors** - each new square gets a randomized RGB color
- **Progressive darkening** - repeated passes over the same square increase its opacity
- **Resizable grid** - create a new grid from 1x1 up to 100x100
- **Fixed canvas size** - the sketchpad keeps the same overall dimensions when resized
- **Clear button** - reset the current grid without changing its size

### Usage

Move your mouse across the sketchpad to draw. Click **New Grid** to enter a new number of squares per side, from **1** to **100**. The app will rebuild the sketchpad using that size while keeping the same total canvas area. Click **Clear** to remove all colors from the current grid.

## Deployment

It is static files only, so it can be hosted with **GitHub Pages** from the repo root. The same files can also be deployed to Netlify, Cloudflare Pages, Vercel, or any static host.

## Built with

- Plain **HTML**
- Plain **CSS**
- Plain **JavaScript**
- Browser DOM APIs
- Flexbox for grid layout
- `Math.random()` for random colors

## Contributing

Contributions are welcome and appreciated. Open an issue or send a PR if you want to improve the UI, clean up the JavaScript, add accessibility improvements, or expand the project while keeping it beginner-friendly.

## Author

- **Soikat Saha** - design and implementation

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Shoutout to **The Odin Project** curriculum and community for the project guidance.
- Thanks to **MDN Web Docs** for clear references on JavaScript, DOM methods, events, and browser APIs.
- The plain HTML, CSS, and JavaScript approach is intentional: it keeps the project easy to read and focused on core fundamentals.