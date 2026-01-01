# Deployment Fix for Render

## Problem
When deploying a React SPA with React Router to Render, direct URL access (like `/login`) or page refreshes result in 404 errors.

## Solution
I've created a `public/_redirects` file that tells Render to redirect all requests to `index.html`, allowing React Router to handle the routing.

## Steps to Deploy

### 1. Rebuild Your Project
```bash
npm run build
```

### 2. Push to Git
```bash
git add public/_redirects
git commit -m "Add _redirects for SPA routing on Render"
git push origin main
```

### 3. Render Configuration
In your Render dashboard:
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist` (for Vite projects)
- **Start Command**: Not needed for static sites

### 4. Redeploy
Render should automatically redeploy when you push. If not, manually trigger a redeploy in the Render dashboard.

## How It Works
The `_redirects` file contains:
```
/*    /index.html   200
```

This tells Render:
- For ANY route (`/*`)
- Serve `index.html`
- With a 200 status code (not a redirect)

This allows React Router to take over and handle the routing client-side.

## Testing
After deployment, test these URLs directly:
- `https://your-site.onrender.com/`
- `https://your-site.onrender.com/login`
- `https://your-site.onrender.com/signup`

All should work correctly now!
