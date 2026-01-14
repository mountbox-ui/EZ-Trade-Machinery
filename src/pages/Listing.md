# Listing Page Documentation

## Overview
The Listing page (`/listings`) is a comprehensive page for browsing and filtering equipment listings. It features a filter sidebar, listing toolbar with search and sort options, a responsive grid of listing cards, and pagination.

## Route
- **Path**: `/listings` (or `#/listings` with HashRouter)
- **File Location**: `src/pages/Listing.jsx`

## Components Created

### 1. ListingLayout
**Location**: `src/components/listing/ListingLayout.jsx`

**Purpose**: Main layout component that orchestrates the filter sidebar, toolbar, grid, and pagination.

**Props**:
- `listings` (array, default: []) - Array of listing objects
- `filters` (object, default: {}) - Filter state object
- `onFilterChange` (function) - Callback when filters change
- `onSearch` (function) - Callback for search actions
- `onCardClick` (function) - Callback when a listing card is clicked
- `onWishlistToggle` (function) - Callback when wishlist is toggled
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Features**:
- Manages internal state (search, sort, view mode, pagination)
- 12 items per page pagination
- Responsive layout (sidebar on desktop, mobile drawer)
- Integrates FilterSidebar, ListingToolbar, ListingGrid, and Pagination

**State Management**:
- `searchValue` - Search input value
- `sortValue` - Current sort option (default: 'Most Relevant')
- `viewMode` - Grid or list view (default: 'grid')
- `currentPage` - Current pagination page (default: 1)

---

### 2. ListingCard
**Location**: `src/components/listing/ListingCard.jsx`

**Purpose**: Displays individual listing items with seller information, image, details, and price.

**Props**:
- `listing` (object) - The listing data object
  - `id` (number/string) - Unique identifier
  - `title` (string) - Item title
  - `price` (number) - Item price
  - `year` (number) - Year of manufacture
  - `condition` (string) - Condition description
  - `location` (string) - Location
  - `image` (string) - Image URL
  - `sellerName` (string, default: 'ABC') - Seller name
  - `isNegotiable` (boolean, default: false) - Whether price is negotiable
- `variant` (string, default: 'default') - Visual variant
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Variants**:
- `default` - Standard listing card with light gray background (`bg-[#F9FAFB]`)
- `featured` - Featured card with white background (`bg-white`)
- `sold` - Sold item with reduced opacity (`bg-white opacity-60 relative`)
- `hovered` - Hover state with white background (`bg-white`)

**Features**:
- Seller header with avatar (initials) and "Visit store" link
- Image with hover scale effect (`group-hover:scale-105`)
- SOLD and FEATURED badges (when applicable)
- Title, meta info (year, condition, location), and price
- Negotiable badge (when applicable)
- Hover effects using `md:b-card-hover` class
- No favorite/wishlist icon on image

**Styling**:
- Container: `rounded-[12px] p-4`
- Image: `aspect-[4/3] rounded-[8px]`
- Uses EllipseIcon for meta info separators
- Seller avatar: 32px circular with initials

---

### 3. ListingGrid
**Location**: `src/components/listing/ListingGrid.jsx`

**Purpose**: Displays a responsive grid of ListingCard components.

**Props**:
- `listings` (array, default: []) - Array of listing objects
- `columns` (object, default: { mobile: 1, tablet: 2, desktop: 4 })
  - `mobile` (number) - Number of columns on mobile
  - `tablet` (number) - Number of columns on tablet
  - `desktop` (number) - Number of columns on desktop
- `gapX` (number, default: 2) - Horizontal gap between columns (maps to Tailwind gap-x classes)
  - `2` = `gap-x-1` (4px)
  - `4` = `gap-x-4` (16px)
  - `10` = `gap-x-10` (40px)
- `gapY` (number, default: 40) - Vertical gap between rows (maps to Tailwind gap-y classes)
  - `2` = `gap-y-2` (8px)
  - `40` = `gap-y-10` (40px)
- `onCardClick` (function) - Callback when a card is clicked
- `onWishlistToggle` (function) - Callback when wishlist is toggled
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Features**:
- Responsive grid layout
- Separate column and row gap controls
- Default gaps: 4px horizontal, 40px vertical

**Gap Mapping**:
- `gapXClasses`: Maps numbers to `gap-x-*` Tailwind classes
- `gapYClasses`: Maps numbers to `gap-y-*` Tailwind classes

---

### 4. ListingToolbar
**Location**: `src/components/listing/ListingToolbar.jsx`

**Purpose**: Displays results count, sort dropdown, and view mode toggle buttons.

**Props**:
- `searchValue` (string, default: '') - Search input value
- `onSearchChange` (function) - Callback when search value changes
- `onSearch` (function) - Callback when search is performed
- `sortValue` (string, default: 'Most Relevant') - Current sort option
- `onSortChange` (function) - Callback when sort option changes
- `viewMode` (string, default: 'grid') - Current view mode ('grid' or 'list')
- `onViewModeChange` (function) - Callback when view mode changes
- `resultCount` (number, default: 0) - Total number of results
- `variant` (string, default: 'full-width') - Layout variant
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Variants**:
- `compact` - Compact vertical layout
- `full-width` - Full-width horizontal layout (default)

**Features**:
- White container with rounded corners and shadow
- Results count display (e.g., "Showing 124 results")
- Sort dropdown with options:
  - Most Relevant
  - Price: Low to High
  - Price: High to Low
  - Newest First
  - Oldest First
  - Most Popular
- View mode toggle buttons:
  - Grid view (layout-column.svg icon)
  - List view (layout-list.svg icon)
- Selected view mode has highlighted background

**Styling**:
- Container: `bg-white rounded-[8px] shadow-sm p-4`
- Result count: Number is bold, text is medium gray
- Sort dropdown: White background with border
- View toggle: Border container with two icon buttons

**Assets Used**:
- `layout-column.svg` - Grid view icon
- `layout-list.svg` - List view icon

---

### 5. FilterSidebar
**Location**: `src/components/listing/FilterSidebar.jsx`

**Purpose**: Sidebar containing various filter sections with accordion functionality.

**Props**:
- `filters` (object, default: {}) - Filter state object
  - `category` (array) - Selected categories
  - `condition` (array) - Selected conditions
  - `priceRange` (array) - Price range [min, max] (default: [0, 500000])
  - `manufacturer` (array) - Selected manufacturers
  - `yearRange` (array) - Year range [min, max] (default: [1990, 2024])
  - `location` (array) - Selected locations
  - `hoursUsed` (array) - Hours used range [min, max] (default: [0, 10000])
- `onFilterChange` (function) - Callback when filters change
- `variant` (string, default: 'desktop') - Display variant
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Variants**:
- `desktop` - Desktop sidebar (default)
- `mobile-drawer` - Mobile drawer variant

**Features**:
- White container with rounded corners and shadow
- Filter icon in heading
- Global search bar under "Filters" heading
- Accordion sections for:
  1. **Category** - CheckboxGroup (default open)
  2. **Condition** - CheckboxGroup
  3. **Price Range** - RangeSlider with input variant (default open)
  4. **Manufacturer** - CheckboxGroup
  5. **Year** - RangeSlider with text variant (default open)
  6. **Location** - CheckboxGroup
  7. **Hours Used** - RangeSlider with input variant
- All accordions have border separators

**Assets Used**:
- `filter.svg` - Filter icon
- `Search_Icon.svg` - Search icon

---

### 6. CheckboxGroup
**Location**: `src/components/listing/CheckboxGroup.jsx`

**Purpose**: Displays a group of checkboxes for filter options.

**Props**:
- `options` (array) - Array of checkbox options (strings or objects)
- `selectedValues` (array, default: []) - Array of selected values
- `onChange` (function) - Callback when selection changes
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Features**:
- Checkboxes positioned on the right side
- Labels on the left side
- Checkbox size: 24px (w-6 h-6)
- Text styling: `text-[#131214] font-inter text-[16px] font-medium`
- Hover effects on labels
- Group hover color transition

**Styling**:
- Layout: `flex items-center justify-between`
- Checkbox: `w-6 h-6 rounded border-[#E6E9EB] text-[#FFB703]`
- Label: Medium weight, hover color change

---

### 7. RangeSlider
**Location**: `src/components/listing/RangeSlider.jsx`

**Purpose**: Dual-handle range slider for numeric ranges (price, year, hours).

**Props**:
- `min` (number) - Minimum value
- `max` (number) - Maximum value
- `value` (array) - Current range [min, max]
- `onChange` (function) - Callback when range changes
- `step` (number, default: 1) - Step increment
- `formatValue` (function, optional) - Format function for display values
- `variant` (string, default: 'input') - Display variant
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Variants**:
- `input` - Shows input fields for min/max values (used for Price Range and Hours Used)
  - Labels: "Min" and "Max" above inputs
  - Input styling: `rounded-[10px] border-[#D1D5DC] p-4`
  - Label styling: `text-[#6A7282] font-inter text-[12px] font-normal leading-[16px]`
  - Hyphen separator between inputs
- `text` - Shows formatted text labels (used for Year)
  - Displays formatted min and max values
  - "to" separator in center (gray color: `text-[#99A1AF]`)
  - Text color: `text-[#364153]`

**Features**:
- Dual-handle slider (min and max)
- Visual track with active range highlight
- Slider thumb: 24px (w-6 h-6), gray background with border
- Active range: darker gray segment
- Input variant includes number inputs with styling
- Text variant displays formatted values

**Usage**:
- Price Range: `variant="input"`, min: 0, max: 500000
- Year: `variant="text"`, min: 1990, max: 2024
- Hours Used: `variant="input"`, min: 0, max: 10000

---

### 8. Accordion
**Location**: `src/components/listing/Accordion.jsx`

**Purpose**: Collapsible accordion section for filter groups.

**Props**:
- `title` (string) - Accordion title
- `defaultOpen` (boolean, default: false) - Whether accordion is open by default
- `children` (ReactNode) - Accordion content
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Features**:
- Toggle open/close functionality
- Chevron icon that rotates
- Border separator between accordions
- Smooth expand/collapse animation

---

### 9. Pagination
**Location**: `src/components/listing/Pagination.jsx`

**Purpose**: Pagination controls for navigating through pages of listings.

**Props**:
- `currentPage` (number, default: 1) - Current active page
- `totalPages` (number, default: 1) - Total number of pages
- `onPageChange` (function) - Callback when page changes
- `variant` (string, default: 'numbers') - Display variant
- `className` (string) - Additional CSS classes
- `...props` - Additional HTML attributes

**Variants**:
- `numbers` - Number-based pagination with page numbers (default)
- `load-more` - Load more button variant

**Features** (numbers variant):
- Previous/Next navigation buttons
- Page number buttons with ellipsis for large page counts
- Shows up to 5 visible page numbers
- Active page highlighting
- Disabled state for first/last page navigation
- Smooth scroll to top on page change

---

## Page Structure

### Listing.jsx
**Location**: `src/pages/Listing.jsx`

**Layout**:
```
- Navbar
- Main Content Area
  - Mobile Filter Toggle (mobile only)
  - Mobile Filter Drawer (mobile only)
  - ListingLayout
    - FilterSidebar (left, desktop only)
    - Main Content (right)
      - ListingToolbar
      - ListingGrid
      - Pagination
- Footer
- MobileBottomNav
```

**State Management**:
- `filters` - Filter state (category, condition, priceRange, manufacturer, yearRange, location, hoursUsed)
- `listings` - List of all listings
- `isMobileFilterOpen` - Mobile filter drawer state

**Handlers**:
- `handleFilterChange` - Updates filter state
- `handleSearch` - Handles search functionality
- `handleCardClick` - Handles card click navigation
- `handleWishlistToggle` - Handles wishlist toggle

**Background**:
- Main container: `bg-[#F9FAFB]` (light gray)

---

## Component Relationships

```
Listing.jsx
  └─ ListingLayout
       ├─ FilterSidebar (desktop) / Mobile Drawer (mobile)
       │    ├─ Accordion
       │    │    ├─ CheckboxGroup (Category, Condition, Manufacturer, Location)
       │    │    └─ RangeSlider (Price Range, Year, Hours Used)
       │    └─ Global Search Input
       └─ Main Content
            ├─ ListingToolbar
            │    ├─ Result Count
            │    ├─ Sort Dropdown
            │    └─ View Mode Toggle
            ├─ ListingGrid
            │    └─ ListingCard (multiple)
            │         ├─ Seller Header
            │         ├─ Image with Badges
            │         └─ Details (Title, Meta, Price)
            └─ Pagination
```

---

## Responsive Behavior

### Desktop (lg: ≥1024px)
- Filter sidebar visible on the left
- Full toolbar with all controls
- 4-column grid layout
- Full pagination controls

### Tablet (md: ≥768px)
- Filter sidebar hidden (use mobile drawer)
- Toolbar adapts layout
- 2-column grid layout

### Mobile (< 768px)
- Filter button triggers drawer
- Single column grid layout
- Stacked toolbar controls
- Mobile filter drawer overlay

---

## Key Features

1. **Filtering System**:
   - Multiple filter types (checkboxes, range sliders)
   - Global search bar
   - Accordion-based organization
   - Mobile drawer for filters

2. **Sorting & View**:
   - Multiple sort options
   - Grid/List view toggle
   - Results count display

3. **Listing Display**:
   - Responsive grid layout
   - Seller information on each card
   - Hover effects and badges
   - Separate column/row gaps

4. **Pagination**:
   - Number-based pagination
   - Smooth scrolling
   - 12 items per page

---

## Usage Example

```jsx
import Listing from './pages/Listing'

// In App.jsx routes:
<Route path="/listings" element={<Listing />} />
```

---

## Notes

- The page uses a component-based architecture with reusable components
- FilterSidebar can be used in desktop and mobile-drawer variants
- ListingCard includes seller header (unlike StoreCard)
- RangeSlider supports both input and text variants for different use cases
- All components follow the design system with consistent styling
- Mobile experience uses drawer pattern for filters
- Default gaps: 4px horizontal, 40px vertical between cards

