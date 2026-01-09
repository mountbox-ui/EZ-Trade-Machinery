# Environment Variables Guide

This guide explains how to use environment variables in your EZ-Trade-Machinery project.

## Important: Vite Environment Variables

In Vite projects, **environment variables must start with `VITE_`** to be accessible in your frontend code.

---

## Setup

### 1. Create Your Environment File

Copy the example file:
```bash
# For local development
cp .env.example .env.local
```

### 2. Edit `.env.local`

Add your actual values:
```env
VITE_API_URL=https://api.eztrademachinery.com
VITE_CONTACT_EMAIL=support@eztrademachinery.com
# ... etc
```

**Note:** `.env.local` is already in `.gitignore` and won't be committed to Git.

---

## Using Environment Variables in Code

### Basic Usage

```javascript
// Access environment variables
const apiUrl = import.meta.env.VITE_API_URL
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL

// Use in your component
function MyComponent() {
  return (
    <div>
      <p>API: {import.meta.env.VITE_API_URL}</p>
      <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>
        Contact Us
      </a>
    </div>
  )
}
```

### With Default Values

```javascript
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const isProduction = import.meta.env.VITE_APP_ENV === 'production'
```

### Type Checking (Optional)

Vite provides type definitions. You can create a `vite-env.d.ts` file:

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_CONTACT_EMAIL: string
  readonly VITE_CONTACT_PHONE: string
  // ... more variables
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

---

## Example: Using in Footer Component

Here's how you could update `src/components/Footer.jsx`:

```javascript
// At the top of the file
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'support@eztrademachinery.com'
const contactPhone = import.meta.env.VITE_CONTACT_PHONE || '+1 (800) 123-4567'
const contactAddress = import.meta.env.VITE_CONTACT_ADDRESS || '123 Industrial Ave, Houston, TX 77001'

// Then use in JSX:
<a href={`mailto:${contactEmail}`}>
  {contactEmail}
</a>
```

---

## Example: API Calls

```javascript
// Create a config file: src/config/api.js
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  version: import.meta.env.VITE_API_VERSION || 'v1',
}

// Use in API calls
async function fetchEquipment() {
  const response = await fetch(`${API_CONFIG.baseURL}/api/${API_CONFIG.version}/equipment`)
  return response.json()
}
```

---

## Environment Files Priority

Vite loads environment files in this order (higher priority overrides lower):

1. `.env.[mode].local` (e.g., `.env.production.local`)
2. `.env.local` (ignored in test mode)
3. `.env.[mode]` (e.g., `.env.production`)
4. `.env`

**Common setup:**
- `.env` - Default values (committed to Git)
- `.env.local` - Local overrides (not committed)
- `.env.production` - Production defaults (committed)
- `.env.production.local` - Production overrides (not committed)

---

## Deployment on Render

### Step 1: Add Variables in Render Dashboard

1. Go to your Render service dashboard
2. Click **"Environment"** tab
3. Click **"Add Environment Variable"**
4. Add each variable:
   - Key: `VITE_API_URL`
   - Value: `https://api.eztrademachinery.com`
5. Repeat for all variables

### Step 2: Rebuild

After adding variables, Render will automatically rebuild. Or manually trigger:
- Go to **"Events"** tab
- Click **"Manual Deploy"**

---

## Common Use Cases

### 1. API Endpoints
```env
VITE_API_URL=https://api.eztrademachinery.com
VITE_API_VERSION=v1
```

### 2. Contact Information
```env
VITE_CONTACT_EMAIL=support@eztrademachinery.com
VITE_CONTACT_PHONE=+18001234567
```

### 3. Feature Flags
```env
VITE_ENABLE_CHAT=true
VITE_ENABLE_NOTIFICATIONS=true
```

### 4. Analytics
```env
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX
VITE_ENABLE_ANALYTICS=true
```

### 5. Third-Party Services
```env
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_MAPBOX_TOKEN=...
```

---

## Security Notes

⚠️ **Important:** 
- Environment variables in Vite are **exposed to the browser**
- **Never** put sensitive data like API keys, secrets, or passwords
- Use environment variables only for **public configuration**
- For sensitive data, use a backend API

### What's Safe:
✅ Public API URLs
✅ Public configuration
✅ Feature flags
✅ Public keys (like Stripe publishable keys)

### What's NOT Safe:
❌ Secret API keys
❌ Database passwords
❌ Private keys
❌ Authentication tokens

---

## Troubleshooting

### Variable Not Working?

1. **Check the prefix:** Must start with `VITE_`
2. **Restart dev server:** After changing `.env` files
3. **Check spelling:** Variable names are case-sensitive
4. **Verify file location:** `.env` files must be in project root

### In Production (Render)

1. **Check Render dashboard:** Variables must be added there
2. **Rebuild required:** Changes require a new build
3. **Check build logs:** Verify variables are being read

---

## Quick Reference

```javascript
// Access variable
const value = import.meta.env.VITE_MY_VARIABLE

// Check if in development
const isDev = import.meta.env.DEV

// Check if in production
const isProd = import.meta.env.PROD

// Get mode (development/production)
const mode = import.meta.env.MODE
```

---

## Next Steps

1. Copy `.env.example` to `.env.local`
2. Add your actual values
3. Update components to use `import.meta.env.VITE_*`
4. Add variables to Render dashboard before deploying

