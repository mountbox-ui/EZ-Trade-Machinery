# My Store Page Documentation

## Overview
The My Store page (`/store`) is a dedicated page for displaying a seller's store with their listings. It features a store profile banner, filter sidebar, listing toolbar, and a grid of store items.

## Route
- **Path**: `/store` (or `#/store` with HashRouter)
- **File Location**: `src/pages/MyStore.jsx`

## Components Created

### 1. StoreProfileBanner
**Location**: `src/components/StoreProfileBanner.jsx`

**Purpose**: Displays the seller/store profile information in a banner at the top of the page.

**Props**:
- `sellerName` (string, default: 'Abc seller') - The name of the seller/store
- `memberSince` (string, default: 'Jan 2023') - When the seller became a member
- `isVerified` (boolean, default: true) - Whether the seller is verified
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Features**:
- Background image using `bg-store.png`
- Fixed height of 186px
- Store logo (130px on desktop, responsive on mobile)
- Seller name, member since date, and verified badge
- Responsive design with desktop-specific positioning

**Responsive Behavior**:
- **Mobile/Tablet**: Normal flex layout, centered content
- **Desktop (lg:)**: Absolute positioning (`top-[48px] left-[60px]`) to match design
- Logo size: 64px (mobile) → 80px (tablet) → 130px (desktop)
- Text sizes scale responsively

**Assets Used**:
- `bg-store.png` - Background image
- `store-logo.png` - Store logo image
- `verify.svg` - Verified badge icon

---

### 2. StoreCard
**Location**: `src/components/store/StoreCard.jsx`

**Purpose**: Displays individual store listing items (without seller header, unlike ListingCard).

**Props**:
- `listing` (object) - The listing data object
  - `id` (number/string) - Unique identifier
  - `title` (string) - Item title
  - `price` (number) - Item price
  - `year` (number) - Year of manufacture
  - `condition` (string) - Condition description
  - `location` (string) - Location
  - `image` (string) - Image URL
  - `isNegotiable` (boolean, default: false) - Whether price is negotiable
- `variant` (string, default: 'default') - Visual variant
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Variants**:
- `default` - Standard store card with light gray background (`bg-[#F9FAFB]`)
- `featured` - Featured card with white background (`bg-white`)
- `sold` - Sold item with reduced opacity (`bg-white opacity-60 relative`)
- `hovered` - Hover state with white background (`bg-white`)

**Features**:
- No seller header (unlike ListingCard)
- Image with hover scale effect (`group-hover:scale-105`)
- SOLD and FEATURED badges (when applicable)
- Title, meta info (year, condition, location), and price
- Negotiable badge (when applicable)
- Hover effects using `md:b-card-hover` class

**Styling**:
- Container: `rounded-[12px] p-4`
- Image: `aspect-[4/3] rounded-[8px]`
- Uses EllipseIcon for meta info separators

---

### 3. StoreGrid
**Location**: `src/components/store/StoreGrid.jsx`

**Purpose**: Displays a responsive grid of StoreCard components.

**Props**:
- `listings` (array, default: []) - Array of listing objects
- `columns` (object, default: { mobile: 1, tablet: 2, desktop: 4 })
  - `mobile` (number) - Number of columns on mobile
  - `tablet` (number) - Number of columns on tablet
  - `desktop` (number) - Number of columns on desktop
- `gapX` (number, default: 2) - Horizontal gap between columns (maps to Tailwind gap-x classes)
  - `2` = `gap-x-2` (8px)
  - `10` = `gap-x-10` (40px)
- `gapY` (number, default: 40) - Vertical gap between rows (maps to Tailwind gap-y classes)
  - `2` = `gap-y-2` (8px)
  - `40` = `gap-y-10` (40px)
- `onCardClick` (function) - Callback when a card is clicked
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Features**:
- Responsive grid layout
- Separate column and row gap controls
- Default gaps: 8px horizontal, 40px vertical

**Gap Mapping**:
- `gapXClasses`: Maps numbers to `gap-x-*` Tailwind classes
- `gapYClasses`: Maps numbers to `gap-y-*` Tailwind classes

---

## Page Structure

### MyStore.jsx
**Location**: `src/pages/MyStore.jsx`

**Layout**:
```
- Navbar
- StoreProfileBanner
- Main Content Area
  - Mobile Filter Toggle (mobile only)
  - Mobile Filter Drawer (mobile only)
  - Desktop Layout
    - FilterSidebar (left, desktop only)
    - Main Content (right)
      - ListingToolbar
      - StoreGrid
      - Pagination
- Footer
- MobileBottomNav
```

**Reused Components**:
- `FilterSidebar` from `src/components/listing/FilterSidebar.jsx`
- `ListingToolbar` from `src/components/listing/ListingToolbar.jsx`
- `Pagination` from `src/components/listing/Pagination.jsx`

**State Management**:
- `filters` - Filter state (category, condition, priceRange, etc.)
- `listings` - List of store listings
- `isMobileFilterOpen` - Mobile filter drawer state
- `searchValue` - Search input value
- `sortValue` - Current sort option
- `viewMode` - Grid or list view
- `currentPage` - Current pagination page

**Pagination**:
- 12 items per page
- Uses `Pagination` component with `numbers` variant

---

## Key Differences from Listing Page

1. **StoreProfileBanner**: Unique banner component for store page
2. **StoreCard vs ListingCard**: 
   - StoreCard has no seller header
   - StoreCard is simpler, focused on item display
3. **StoreGrid vs ListingGrid**:
   - Uses StoreCard instead of ListingCard
   - No `onWishlistToggle` prop (wishlist removed from store cards)
   - Different default gap values

---

## Responsive Breakpoints

- **Mobile**: Default styles (< 640px)
- **Tablet**: `sm:` breakpoint (≥ 640px)
- **Desktop**: `lg:` breakpoint (≥ 1024px)

---

## Usage Example

```jsx
import MyStore from './pages/MyStore'

// In App.jsx routes:
<Route path="/store" element={<MyStore />} />
```

---

## Notes

- The page uses the same filter and toolbar components as the Listing page for consistency
- Store cards are optimized for store-specific display (no seller info needed)
- The banner has a fixed height of 186px with background image
- Desktop design uses absolute positioning for precise layout
- Mobile design uses flexible, centered layouts

