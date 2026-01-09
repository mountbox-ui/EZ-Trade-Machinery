# Fix SPA Routing Issue - Account Page 404 Error

## Problem
Homepage works but `/account` and other routes show "Not Found" (404). This is because Render doesn't know to redirect all routes to `index.html` for React Router.

---

## Solution 1: Configure Redirects in Render Dashboard (Recommended)

### STEP 1: Go to Render Dashboard
1. Log in to https://render.com
2. Click on your `ez-trade-machinery` static site

### STEP 2: Open Settings
1. Click **"Settings"** tab
2. Scroll down to **"Redirects/Rewrites"** section

### STEP 3: Add Rewrite Rule
1. Click **"Add Redirect"** or **"Add Rewrite Rule"**
2. Configure:
   - **Source Path:** `/*`
   - **Destination Path:** `/index.html`
   - **Action/Type:** `Rewrite` (not Redirect)
   - **Status Code:** `200` (if asked)

### STEP 4: Save and Redeploy
1. Click **"Save"**
2. Go to **"Events"** tab
3. Click **"Manual Deploy"** to trigger a new deployment

---

## Solution 2: Fix _redirects File (Alternative)

### STEP 1: Verify _redirects File
Check that `public/_redirects` exists with:
```
/*    /index.html   200
```

### STEP 2: Ensure Vite Copies It
The file should automatically be copied to `dist/` during build. Test locally:
```bash
npm run build
```

### STEP 3: Check dist/_redirects Exists
```bash
# After build, verify:
ls dist/_redirects
# or
Test-Path dist/_redirects
```

### STEP 4: Commit and Push
```bash
git add public/_redirects
git commit -m "Fix SPA routing - ensure _redirects file"
git push
```

---

## Solution 3: Update render.yaml (If using Blueprint)

Your `render.yaml` already has routes configured, but verify it looks like this:

```yaml
services:
  - type: static
    name: ez-trade-machinery
    env: node
    buildCommand: npm install && npm run build
    publishPath: dist
    routes:
      - type: rewrite
        source: "/*"
        destination: "/index.html"
```

If it's different, update it and commit:
```bash
git add render.yaml
git commit -m "Fix SPA routing in render.yaml"
git push
```

---

## Quick Fix (Try This First)

**Option A - Render Dashboard (Fastest):**
1. Render Dashboard → Your Site → Settings
2. Find "Redirects/Rewrites"
3. Add: Source `/*` → Destination `/index.html` → Type `Rewrite`
4. Save → Manual Deploy

**Option B - Verify _redirects File:**
1. Check `public/_redirects` exists
2. Run: `npm run build`
3. Verify `dist/_redirects` exists
4. Commit and push if needed

---

## Verify Fix

1. Wait for deployment to complete
2. Visit: `https://your-site.onrender.com/account`
3. Should load correctly (no 404)
4. Test other routes: `/login`, `/signup`, `/chat`

---

## Why This Happens

- React Router handles routing on the client-side
- When you visit `/account` directly, the server looks for that file
- Server doesn't find it → 404 error
- Solution: Tell server to serve `index.html` for all routes
- React Router then handles the routing client-side

---

## Summary

**Fastest Fix:**
1. Render Dashboard → Settings → Redirects/Rewrites
2. Add: `/*` → `/index.html` (Rewrite)
3. Save → Deploy

Done! Your routes will work after deployment.

