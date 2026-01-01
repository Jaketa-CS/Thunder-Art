<div align="center">
  <img src="public/site-images/image02.png" alt="ThunderFennec Logo" width="100" />
  <h1>ThunderFennec</h1>
  
  [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=Cloudflare&logoColor=white)](https://pages.cloudflare.com/)
</div>

<br />

Source code for the ThunderFennec portfolio website.

This project uses React and TypeScript to create a custom gallery experience, avoiding the limitations of standard portfolio templates. It focuses on performance, custom animations, and a responsive layout for displaying digital art.

## Features

- **Gallery**: Masonry grid layout handling mixed aspect ratios for illustrations and animations.
- **Audio**: Persistent background audio player utilizing the HTML5 Audio API.
- **Commissions**: Form-based flow for client inquiries with availability checks.
- **Schedule**: Component for tracking convention appearances.

## Development

The project is built with Vite.

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/thunder-web.git
   cd thunder-web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local server:
   ```bash
   npm run dev
   ```

## Deployment

The site is hosted on Cloudflare Pages.

To build for production locally:

```bash
npm run build
```

This generates static assets in the `dist/` directory, which Cloudflare detects and serves.

## Structure

- `src/components`: Reusable UI elements (Navbar, Buttons, ArtCards).
- `src/data`: Static data configurations.
- `src/pages`: Main application views.
- `src/styles`: CSS modules and global variables.

---

_Created by Jake Teeter._
