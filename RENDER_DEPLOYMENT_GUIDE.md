# Step-by-Step Guide: Deploying EZ-Trade-Machinery to Render

This guide will walk you through deploying your React + Vite application to Render.

## Prerequisites

- A GitHub account (or GitLab/Bitbucket)
- Your project pushed to a Git repository
- A Render account (free tier available)

---

## Step 1: Prepare Your Repository

### 1.1 Ensure your project is in a Git repository
```bash
# If not already initialized, run:
git init
git add .
git commit -m "Initial commit"
```

### 1.2 Push to GitHub/GitLab/Bitbucket
```bash
# Create a new repository on GitHub, then:
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

**Note:** Your `render.yaml` file is already configured correctly for a static site deployment.

---

## Step 2: Create a Render Account

1. Go to [https://render.com](https://render.com)
2. Click **"Get Started for Free"** or **"Sign Up"**
3. Sign up using:
   - GitHub (recommended - easiest integration)
   - GitLab
   - Bitbucket
   - Email

---

## Step 3: Connect Your Repository

1. After logging in, you'll see the Render dashboard
2. Click **"New +"** button (top right)
3. Select **"Static Site"** from the dropdown menu

---

## Step 4: Configure Your Static Site

### 4.1 Connect Repository
- **Connect account:** Select your Git provider (GitHub/GitLab/Bitbucket)
- **Repository:** Select your `EZ-Trade-Machinery` repository
- Click **"Connect"**

### 4.2 Configure Build Settings

Render should auto-detect your settings, but verify:

- **Name:** `ez-trade-machinery` (or your preferred name)
- **Branch:** `main` (or your default branch)
- **Root Directory:** Leave empty (or `.` if needed)
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

### 4.3 Environment Variables (if needed)

If your app uses environment variables:
1. Click **"Advanced"** to expand options
2. Add your environment variables:
   - Click **"Add Environment Variable"**
   - Enter key-value pairs (e.g., `VITE_API_URL=https://api.example.com`)

**Note:** For Vite apps, environment variables must start with `VITE_` to be accessible in the frontend.

### 4.4 Auto-Deploy Settings

- **Auto-Deploy:** `Yes` (deploys automatically on every push to main branch)
- Or set to `No` if you want manual deployments

---

## Step 5: Deploy

1. Click **"Create Static Site"**
2. Render will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy the `dist` folder

3. Wait for the build to complete (usually 2-5 minutes)
4. You'll see a live URL once deployment is successful (e.g., `https://ez-trade-machinery.onrender.com`)

---

## Step 6: Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your service dashboard on Render
2. Click **"Settings"** tab
3. Scroll to **"Custom Domains"**
4. Click **"Add Custom Domain"**
5. Enter your domain name
6. Follow Render's DNS configuration instructions

---

## Step 7: Verify Deployment

1. Visit your Render URL
2. Test your application:
   - Navigation works correctly
   - Routes load properly (thanks to your `_redirects` file)
   - All assets load correctly
   - API calls work (if applicable)

---

## Troubleshooting

### Build Fails

**Check:**
- Build logs in Render dashboard for specific errors
- Ensure `package.json` has correct build script
- Verify Node.js version compatibility

**Common fixes:**
- Add `engines` to `package.json`:
  ```json
  "engines": {
    "node": ">=18.0.0"
  }
  ```

### Routes Not Working (404 errors)

Your `public/_redirects` file should handle this, but if issues persist:
- Verify the file exists at `public/_redirects`
- Ensure it contains: `/*    /index.html   200`

### Environment Variables Not Working

- Ensure variables start with `VITE_` prefix
- Rebuild after adding new variables
- Check that variables are set in Render dashboard

### Slow First Load

- Render free tier may have cold starts
- Consider upgrading to paid tier for better performance
- Optimize your bundle size

---

## Updating Your Deployment

### Automatic Updates (if Auto-Deploy is enabled)
- Simply push to your main branch
- Render will automatically rebuild and redeploy

### Manual Updates
1. Go to your service dashboard
2. Click **"Manual Deploy"**
3. Select the branch/commit to deploy

---

## Your Current Configuration

Your project already has:
- ✅ `render.yaml` configured for static site
- ✅ `_redirects` file for SPA routing
- ✅ Correct build command in `package.json`
- ✅ Vite build output to `dist` folder

Everything is ready! Just follow steps 2-5 above.

---

## Additional Tips

1. **Monitor Builds:** Check the "Events" tab in Render dashboard for build history
2. **Build Logs:** Always check logs if deployment fails
3. **Free Tier Limits:** 
   - Free static sites may spin down after inactivity
   - First request after inactivity may be slow (cold start)
4. **Performance:** Consider adding a CDN or upgrading for production use

---

## Quick Reference Commands

```bash
# Local build test (verify before deploying)
npm run build
npm run preview

# Check build output
ls dist/

# Git workflow
git add .
git commit -m "Your commit message"
git push origin main
```

---

## Support

- Render Documentation: [https://render.com/docs](https://render.com/docs)
- Render Community: [https://community.render.com](https://community.render.com)
- Static Site Guide: [https://render.com/docs/static-sites](https://render.com/docs/static-sites)

---

**Good luck with your deployment! 🚀**

