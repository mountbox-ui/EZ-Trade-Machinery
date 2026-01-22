# Help & Support Page Documentation

## Overview

The Help & Support page provides users with a comprehensive support center where they can search for help articles, contact support through various channels, and browse help topics by category.

**Route:** `/account/help`

---

## File Structure

```
src/
├── pages/
│   └── HelpAndSupport.jsx          # Main page component
└── components/
    └── account/
        └── HelpAndSupportContent.jsx # Content component
```

---

## Components

### 1. HelpAndSupport (Page Component)

**Location:** `src/pages/HelpAndSupport.jsx`

**Purpose:** Main page wrapper that includes navigation, breadcrumbs, and account layout.

**Props:** None

**Features:**
- Navbar integration
- Breadcrumb navigation (Home / My Account / Help and support)
- AccountLayout wrapper with sidebar
- User state management

**Dependencies:**
- `AccountLayout` - Layout wrapper with sidebar
- `HelpAndSupportContent` - Main content component
- `Navbar` - Top navigation bar

---

### 2. HelpAndSupportContent (Content Component)

**Location:** `src/components/account/HelpAndSupportContent.jsx`

**Purpose:** Main content area containing search, contact options, and category browsing.

**Props:**
- `className` (string, optional) - Additional CSS classes

**State:**
- `searchQuery` (string) - Search input value

**Sections:**
1. **Header Section** - Dark gradient container with title, subtitle, and search bar
2. **Contact Options** - Three support channel cards (Live Chat, Email, Phone)
3. **Browse by Category** - Grid of 6 category cards

---

## Components Breakdown

### Header Section

**Container:**
- Background: Gradient from `#2C2C2C` to `#1A1A1A`
- Border radius: `8px`
- Padding: Responsive
  - Mobile: `px-4 py-6`
  - Tablet: `md:px-8 md:py-10`
  - Desktop: `lg:px-[50px] lg:py-12`

**Title:**
- Text: "Help & Support Center"
- Color: `#FFFFFF`
- Font: Inter, Bold
- Size: 
  - Mobile: `text-xl`
  - Desktop: `md:text-2xl`

**Subtitle:**
- Text: "Find answers to your questions or get in touch with our support team"
- Color: `#D1D5DC`
- Font: Inter, Normal
- Size:
  - Mobile: `text-sm`
  - Desktop: `md:text-md`

**Search Bar:**
- Background: White
- Border radius: `12px`
- Width:
  - Mobile/Tablet: Full width (`w-full`)
  - Desktop: Fixed `lg:w-[596px]`
- Height:
  - Mobile: `48px`
  - Tablet/Desktop: `md:h-[56px]`
- Placeholder: "Search for help articles, FAQs, or topics..."
- Icon: `CiSearch` (24px on desktop, 20px on mobile)
- Focus ring: Yellow (`#FFB703`)

---

### Contact Options Section

**Layout:**
- Grid: Responsive
  - Mobile: 1 column (`grid-cols-1`)
  - Tablet: 2 columns (`md:grid-cols-2`)
  - Desktop: 3 columns (`lg:grid-cols-3`)
- Gap: `gap-4` (mobile), `md:gap-6` (tablet/desktop)

#### 1. Live Chat Card

**Icon:**
- Component: `FaRegComment` (react-icons/fa6)
- Background: `#DBEAFE` (light blue)
- Icon color: `#155DFC` (blue)
- Size: 
  - Mobile: `20px × 20px`
  - Desktop: `24px × 24px`
- Container: `rounded-[14px]`

**Content:**
- Title: "Live Chat" (Bold, `#131214`)
- Description: "Chat with our support team in real-time"
- Button: 
  - Variant: `primary`
  - Background: `#FFB703` (yellow)
  - Text: "Start Chat"
  - Border radius: `48px`
  - Full width

**Styling:**
- Card padding: `p-4` (mobile), `md:p-6` (desktop)
- Border: `border-gray-200`
- Shadow: `shadow-sm` with `hover:shadow-md`

#### 2. Email Support Card

**Icon:**
- Component: `FaRegEnvelope` (react-icons/fa6)
- Background: `#DCFCE7` (light green)
- Icon color: `#00A63E` (green)
- Size: Same as Live Chat

**Content:**
- Title: "Email Support" (Bold, `#131214`)
- Description: "Get a response within 24 hours"
- Button:
  - Background: `#E8EBEB` (light grey)
  - Text color: `#53575A`
  - Text: "support@eztrade.com"
  - Border radius: `48px`
  - Font size: `text-sm` (mobile), `md:text-base` (desktop)

#### 3. Phone Support Card

**Icon:**
- Component: `FiPhone` (react-icons/fi)
- Background: `rgba(246,184,0,0.2)` (light yellow with opacity)
- Icon color: `#2C2C2C` (dark grey)
- Size: Same as other cards

**Content:**
- Title: "Phone Support" (Bold, `#131214`)
- Description: "Mon-Fri, 9AM-6PM CST"
- Button:
  - Same styling as Email Support
  - Text: "1-800-555-1234"

---

### Browse by Category Section

**Layout:**
- Grid: Responsive
  - Mobile: 1 column (`grid-cols-1`)
  - Tablet: 2 columns (`md:grid-cols-2`)
  - Desktop: 3 columns (`lg:grid-cols-3`)
- Gap: `gap-3` (mobile), `md:gap-4` (desktop)

**Card Structure:**
- Horizontal layout: Icon (left) → Content (middle) → Chevron (right)
- Padding: `p-4` (mobile), `md:p-6` (desktop)
- Border: `border-gray-200`
- Shadow: `shadow-sm` with `hover:shadow-md`
- Cursor: Pointer

**Icon Container:**
- Size: 
  - Mobile: `40px × 40px` (`w-10 h-10`)
  - Desktop: `48px × 48px` (`md:w-12 md:h-12`)
- Border radius: `14px`
- Icon size:
  - Mobile: `20px × 20px`
  - Desktop: `24px × 24px`

**Content Area:**
- Title: 
  - Size: `text-sm` (mobile), `md:text-md` (desktop)
  - Color: `#2C2C2C`
  - Weight: Normal
- Description:
  - Size: `text-xs` (mobile), `md:text-sm` (desktop)
  - Color: `#4A5565`
- Right padding: `pr-5` (mobile), `md:pr-6` (desktop) - allows text to wrap under chevron

**Chevron:**
- Component: `FaChevronRight` (react-icons/fa)
- Position: Absolute (top-right)
- Color: `#99A1AF` (default), `#FFB703` (hover)
- Size: `16px × 16px` (mobile), `20px × 20px` (desktop)
- Position: `right-4 top-4` (mobile), `md:right-6 md:top-6` (desktop)

---

## Category Variants

### 1. Getting Started
- **Icon:** `PiQuestion` (react-icons/pi)
- **Background:** `#DBEAFE` (light blue)
- **Icon Color:** `#155DFC` (blue)
- **Title:** "Getting Started"
- **Description:** "Learn the basics of buying and selling"

### 2. Pricing & Payments
- **Icon:** `FiDollarSign` (react-icons/fi)
- **Background:** `#DCFCE7` (light green)
- **Icon Color:** `#00A63E` (green)
- **Title:** "Pricing & Payments"
- **Description:** "Payment methods and pricing info"

### 3. Shipping & Delivery
- **Icon:** `LiaTruckSolid` (react-icons/lia)
- **Background:** `#F3E8FF` (light purple)
- **Icon Color:** `#9810FA` (purple)
- **Title:** "Shipping & Delivery"
- **Description:** "Transportation and logistics help"

### 4. Safety & Security
- **Icon:** `MdOutlineShield` (react-icons/md)
- **Background:** `#FFE2E2` (light red)
- **Icon Color:** `#E7000B` (red)
- **Title:** "Safety & Security"
- **Description:** "Protect yourself from scams"

### 5. Account & Settings
- **Icon:** `note.svg` (SVG file from assets)
- **Background:** `#FEF9C2` (light yellow)
- **Icon Color:** `text-yellow-600`
- **Title:** "Account & Settings"
- **Description:** "Manage your account preferences"
- **Note:** Uses SVG image instead of React icon component

### 6. Verification
- **Icon:** `FiCheckCircle` (react-icons/fi)
- **Background:** `rgba(246,184,0,0.2)` (light yellow with opacity)
- **Icon Color:** `#2C2C2C` (dark grey)
- **Title:** "Verification"
- **Description:** "Get verified as a trusted seller"

---

## Color Palette

### Primary Colors
- **Yellow (Primary):** `#FFB703` - Used for buttons and accents
- **Dark Grey:** `#2C2C2C` - Header background start
- **Black:** `#1A1A1A` - Header background end
- **White:** `#FFFFFF` - Card backgrounds, text on dark

### Text Colors
- **Primary Text:** `#131214` / `#2C2C2C` - Headings and titles
- **Secondary Text:** `#4A5565` / `#6E7375` - Descriptions
- **Muted Text:** `#99A1AF` - Icons, placeholders
- **Light Text:** `#D1D5DC` - Subtitle on dark background
- **Button Text:** `#53575A` - Email/Phone button text

### Background Colors
- **Page Background:** `#F8F9FA` - Light grey
- **Card Background:** `#FFFFFF` - White
- **Button Background (Secondary):** `#E8EBEB` - Light grey

### Icon Background Colors
- **Blue:** `#DBEAFE` - Getting Started
- **Green:** `#DCFCE7` - Pricing & Payments, Email Support
- **Purple:** `#F3E8FF` - Shipping & Delivery
- **Red:** `#FFE2E2` - Safety & Security
- **Yellow:** `#FEF9C2` - Account & Settings
- **Yellow (Transparent):** `rgba(246,184,0,0.2)` - Verification, Phone Support

---

## Icons Used

### React Icons Library
- **react-icons/fa:** `FaRegComment`, `FaCheckCircle`, `FaChevronRight`
- **react-icons/fa6:** `FaRegEnvelope`
- **react-icons/fi:** `FiPhone`, `FiDollarSign`, `FiCheckCircle`
- **react-icons/pi:** `PiQuestion`
- **react-icons/lia:** `LiaTruckSolid`
- **react-icons/md:** `MdOutlineShield`
- **react-icons/ci:** `CiSearch`

### SVG Assets
- `note.svg` - Used for Account & Settings category

---

## Responsive Breakpoints

### Mobile (< 768px)
- Single column layouts
- Smaller padding and spacing
- Reduced font sizes
- Full-width search bar
- Smaller icons (20px)

### Tablet (768px - 1024px)
- 2-column grid for contact options
- 2-column grid for categories
- Medium padding and spacing
- Medium font sizes
- Medium icons (24px)

### Desktop (> 1024px)
- 3-column grid for contact options
- 3-column grid for categories
- Larger padding and spacing
- Full font sizes
- Fixed-width search bar (596px)
- Full-size icons (24px)

---

## Functionality

### Search Functionality
- **Handler:** `handleSearch(e)`
- **Current State:** Logs search query to console
- **Future Implementation:** Should integrate with search API/backend

### Live Chat
- **Handler:** `handleStartChat()`
- **Current State:** Logs to console
- **Future Implementation:** Should open chat widget/modal

### Category Navigation
- **Current State:** Cards are clickable but no navigation implemented
- **Future Implementation:** Should navigate to category detail pages

---

## Styling Variants

### Button Variants

#### Primary Button (Live Chat)
```jsx
<Button
  variant="primary"
  className="w-full rounded-[48px] bg-[#FFB703] !font-bold !text-[#131214]"
>
  Start Chat
</Button>
```

#### Secondary Button (Email/Phone)
```jsx
<button className="w-full px-4 py-2 bg-[#E8EBEB] text-[#53575A] rounded-[48px] hover:bg-gray-200 transition-colors font-inter text-sm md:text-base font-bold">
  support@eztrade.com
</button>
```

### Card Variants

#### Contact Option Card
- White background
- Light grey border
- Rounded corners (`rounded-lg`)
- Shadow with hover effect
- Responsive padding

#### Category Card
- White background
- Light grey border
- Rounded corners (`rounded-lg`)
- Shadow with hover effect
- Horizontal flex layout
- Absolute positioned chevron

---

## Dependencies

### External Libraries
- `react` - React framework
- `react-router-dom` - Routing (for navigation)
- `react-icons` - Icon library

### Internal Components
- `Button` - Reusable button component
- `AccountLayout` - Account page layout wrapper
- `AccountSidebar` - Sidebar navigation (via AccountLayout)
- `Navbar` - Top navigation bar

### Assets
- `note.svg` - SVG icon for Account & Settings

---

## Usage Example

```jsx
import HelpAndSupport from './pages/HelpAndSupport'

// In your router
<Route path="/account/help" element={<HelpAndSupport />} />
```

---

## Future Enhancements

1. **Search Integration:** Connect search bar to backend API
2. **Category Pages:** Create detail pages for each category
3. **Live Chat:** Integrate chat widget (e.g., Intercom, Zendesk)
4. **Email Form:** Add email contact form instead of just displaying email
5. **Phone Click-to-Call:** Make phone number clickable on mobile
6. **FAQ Section:** Add expandable FAQ items
7. **Article Listing:** Display help articles in each category
8. **Search Results:** Show search results below search bar
9. **Analytics:** Track which categories are most viewed
10. **Accessibility:** Add ARIA labels and keyboard navigation

---

## Notes

- The page uses the same layout structure as other account pages
- The sidebar automatically highlights "Help and support" when active
- All icons support both React icon components and SVG images
- The design is fully responsive and follows the existing design system
- Color values use hex codes for consistency
- Font family is Inter throughout (via `font-inter` class)

---

## Maintenance

### Adding New Categories
1. Add new category object to `categories` array
2. Include: `id`, `title`, `description`, `icon`, `color`, `iconColor`
3. Icon can be React component or SVG path string

### Modifying Colors
- Update color values in category objects
- Ensure contrast ratios meet accessibility standards
- Test on all screen sizes

### Updating Icons
- Replace icon component/asset in category object
- Ensure icon size matches existing icons (24px on desktop, 20px on mobile)
- Test icon rendering (both React components and SVG images)

---

**Last Updated:** January 2025
**Version:** 1.0.0
