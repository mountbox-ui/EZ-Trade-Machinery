# Deploy EZ-Trade-Machinery to Render - Step by Step

## Project Analysis Summary
- **Type:** React + Vite Static Site
- **Build Command:** `npm install && npm run build`
- **Output Directory:** `dist`
- **Routing:** Client-side routing (React Router) - requires SPA redirects
- **Dependencies:** React 18, Vite 5, Tailwind CSS
- **Status:** Ready for deployment (render.yaml configured)

---

## STEP 1: Prepare Your Code Repository

### 1.1 Verify Git Repository
```bash
git status
```
If not initialized:
```bash
git init
git add .
git commit -m "Initial commit"
```

### 1.2 Push to GitHub/GitLab/Bitbucket
```bash
# Create new repository on GitHub, then:
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

---

## STEP 2: Create Render Account

1. Go to https://render.com
2. Click **"Get Started for Free"**
3. Sign up with GitHub (recommended) or email

---

## STEP 3: Create New Static Site

1. In Render dashboard, click **"New +"** (top right)
2. Select **"Static Site"**

---

## STEP 4: Connect Repository

1. **Connect account:** Choose your Git provider (GitHub/GitLab/Bitbucket)
2. **Repository:** Select `EZ-Trade-Machinery` (or your repo name)
3. Click **"Connect"**

---

## STEP 5: Configure Build Settings

Render will auto-detect from `render.yaml`, but verify these settings:

- **Name:** `ez-trade-machinery`
- **Branch:** `main` (or your default branch)
- **Root Directory:** (leave empty)
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

---

## STEP 6: Environment Variables (Optional)

If you need environment variables later:

1. Click **"Advanced"** to expand
2. Click **"Add Environment Variable"**
3. Add variables (must start with `VITE_` for Vite projects):
   - Example: `VITE_API_URL` = `https://api.example.com`
4. Click **"Add"** for each variable

**Note:** Currently your project doesn't use environment variables, so skip this step.

---

## STEP 7: Deploy

1. Click **"Create Static Site"**
2. Wait for build to complete (2-5 minutes)
3. Monitor build progress in the dashboard
4. Build logs will show:
   - Installing dependencies
   - Running build command
   - Deploying to CDN

---

## STEP 8: Verify Deployment

1. Once deployed, you'll see a URL like: `https://ez-trade-machinery.onrender.com`
2. Click the URL to open your site
3. Test these routes:
   - `/` (Home)
   - `/login`
   - `/signup`
   - `/account`
   - `/chat`
4. Verify all routes work (SPA routing should work via `_redirects` file)

---

## STEP 9: Auto-Deploy Setup (Already Enabled)

- Auto-deploy is enabled by default
- Every push to `main` branch will trigger automatic deployment
- Check **"Events"** tab to see deployment history

---

## STEP 10: Custom Domain (Optional)

1. Go to your service dashboard
2. Click **"Settings"** tab
3. Scroll to **"Custom Domains"**
4. Click **"Add Custom Domain"**
5. Enter your domain (e.g., `www.eztrademachinery.com`)
6. Follow DNS configuration instructions from Render

---

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Verify Node.js version (add to package.json if needed):
  ```json
  "engines": {
    "node": ">=18.0.0"
  }
  ```

### Routes Return 404
- Verify `public/_redirects` file exists with: `/*    /index.html   200`
- Rebuild after adding the file

### Assets Not Loading
- Check that all assets are in `public/` or `src/assets/`
- Verify build output in `dist/` folder locally first

---

## Quick Checklist

- [ ] Code pushed to GitHub/GitLab/Bitbucket
- [ ] Render account created
- [ ] Static site created and connected to repository
- [ ] Build settings verified (auto-detected from render.yaml)
- [ ] Deployment successful
- [ ] All routes tested and working
- [ ] Custom domain added (if needed)

---

## Your Current Configuration

✅ `render.yaml` - Already configured  
✅ `public/_redirects` - SPA routing configured  
✅ `package.json` - Build scripts ready  
✅ `vite.config.js` - Vite configured  
✅ All dependencies in package.json  

**Everything is ready! Just follow steps 2-7 above.**

