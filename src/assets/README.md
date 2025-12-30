# Assets Folder

This folder is for storing static assets like images, logos, icons, etc.

## Logo Placement

Place your logo file in this folder with one of these names:
- `logo.png`
- `logo.svg` (recommended for scalability)
- `logo.jpg`
- `logo.webp`

## Usage in Components

After placing your logo file, update `src/components/Navbar.jsx`:

1. Uncomment the import statement at the top:
```jsx
import logo from '../assets/logo.png' // or your logo filename
```

2. Uncomment the image logo section and comment out the text-based logo:
```jsx
<a href="/" className="flex items-center">
  <img src={logo} alt="EZ Trade Machinery" className="h-12 w-auto" />
</a>
```

## Supported Formats

- **SVG** - Best for logos (scalable, small file size)
- **PNG** - Good for logos with transparency
- **JPG/JPEG** - For photos, larger file size
- **WebP** - Modern format, good compression

