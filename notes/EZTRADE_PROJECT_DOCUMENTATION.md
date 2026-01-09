# EZ-Trade Machinery - Complete Project Documentation

## 📁 Project Overview

EZ-Trade Machinery is a comprehensive online marketplace platform for buying and selling heavy machinery and construction equipment. The application features a modern, responsive design with a component-based architecture using React and Tailwind CSS.

---

## 📂 Component Organization

### **Core UI Components** (in `src/components/`)

#### **Form Components**
- `Input.jsx` - Input field with 7 variants (enabled, hover, focus, filled, error, disabled, search)
- `Label.jsx` - Form label with optional required indicator
- `Button.jsx` - Button component with 9 variants and 3 sizes

#### **Display Components**
- `Card.jsx` - Reusable card container with configurable width and padding
- `Avatar.jsx` - Profile picture component with 4 sizes (sm, md, lg, xl)
- `Badge.jsx` - Badge component with 6 variants (default, success, warning, error, info, verified)
- `Divider.jsx` - Horizontal divider with customizable color, spacing, and thickness

#### **Navigation Components**
- `Navbar.jsx` - Main navigation bar with search, country/currency selectors, user actions
- `MobileBottomNav.jsx` - Bottom navigation for mobile devices
- `CategorySidebar.jsx` - Sidebar for category filtering with price range, manufacturer, and year filters

#### **Content Display Components**
- `HeroSlider.jsx` - Image carousel/slider for homepage hero section
- `HeroFilter.jsx` - Search and filter bar for equipment search
- `Footer.jsx` - Site footer with links, newsletter subscription, and social media

#### **Card Components**
- `AuctionCard.jsx` - Card for displaying auction items with countdown timer
- `DealCard.jsx` - Card for displaying deals with discount badges
- `EquipmentCard.jsx` - Card for displaying equipment listings
- `NewListingCard.jsx` - Compact horizontal card for new listings
- `RecommendationCard.jsx` - Card for recommended items
- `SimpleCard.jsx` - Simple card wrapper for promo sections

#### **Section Components**
- `Auction.jsx` - Auction section with horizontal scrolling cards
- `PromoDashboard.jsx` - Main dashboard with promo banners and quick links
- `NewListings.jsx` - Section displaying new equipment listings
- `EquipmentForYou.jsx` - Personalized equipment recommendations section
- `YouMayAlsoLike.jsx` - Recommendation section for similar items
- `FeaturedCompanies.jsx` - Section showcasing featured companies
- `ShortVideos.jsx` - Video content section

### **Account-Specific Components** (in `src/components/account/`)

#### **Layout Components**
- `AccountLayout.jsx` - Two-column layout wrapper (sidebar + content area)
- `AccountSidebar.jsx` - Left sidebar with user profile and navigation menu
- `AccountContent.jsx` - Main content area for account pages

#### **Profile Components**
- `UserProfile.jsx` - User profile display with avatar, name, join date, verified badge, and edit store button
- `PhotoUpload.jsx` - Photo upload component with preview and validation (max 5MB, JPG/PNG)
- `PersonalInfoForm.jsx` - Form for editing first name and last name with validation

#### **Field Components**
- `ReadOnlyField.jsx` - Read-only form field with optional icon
- `EditableField.jsx` - Editable form field with edit/save/cancel functionality
- `ProfileField.jsx` - Flexible wrapper that switches between read-only and editable modes

#### **Navigation Components**
- `MenuItem.jsx` - Navigation menu item with icon, label, active state, and 2 variants

#### **Content Components**
- `MyAdsContent.jsx` - My Ads page content with tabs (Auctions, Listings, Pending) and card grid
- `MyAdsCard.jsx` - Ad listing card with 3 variants (default, highlighted, pending) and negotiable badge
- `NotificationsContent.jsx` - Notifications page with search, filter, and notification list
- `NotificationCard.jsx` - Individual notification card with 2 variants (read, unread) and responsive layouts
- `ChangePassword.jsx` - Change password form with show/hide password toggles
- `VerificationBanner.jsx` - Banner prompting users to verify their account

### **Page Components** (in `src/pages/`)
- `Login.jsx` - User login page
- `SignUp.jsx` - User registration page
- `MyAccount.jsx` - Main account page with profile information
- `MyAds.jsx` - My Ads page with breadcrumb and account layout
- `Notifications.jsx` - Notifications page with breadcrumb and account layout
- `ChangePassword.jsx` - Change password page with breadcrumb and account layout

---

## 🎯 Component Variants

### **Button Component Variants**

| Variant | Description | Use Case |
|---------|-------------|----------|
| `primary` | Yellow background (`#FFB703`), dark text | Primary actions, CTAs |
| `secondary` | Full-width yellow button, rounded-full | Card actions, form submissions |
| `tertiary` | White background, dark text, hover effects | Secondary actions |
| `tertiary2` | Semi-transparent white, white text, border | Overlay buttons |
| `outline` | Yellow border, yellow text, filled on hover | Alternative primary |
| `visit` | Gray background, rounded-full | Visit store links |
| `link` | Text-only link style | Inline links |
| `verification` | Dark background (`#2C2C2C`), white text | Verification actions |
| `edit` | Gray background, rounded-full | Edit actions |

**Sizes**: `sm`, `md` (default), `lg`

### **Input Component Variants**

| Variant | Background | Border | Text Color | Use Case |
|---------|-----------|--------|------------|----------|
| `enabled` | `#F4F6F7` | `1px #E6E9EB` | `#898D8F` | Default input state |
| `hover` | White | `1px #DADDDE` | `#898D8F` | Pre-hovered state |
| `focus` | White | `2px #6E7375` + shadow | `#131214` | Focused state |
| `filled` | Transparent | `1px #E6E9EB` | `#131214` | Pre-filled value |
| `error` | `#FFF3F0` | `2px #FF9175` | `#898D8F` | Validation error |
| `disabled` | `#DADDDE` | `#C1C4C6` | `#898D8F` | Disabled state |
| `search` | `#F4F6F7` | Rounded full | - | Search input |

**Features**: All variants use semantic tokens with fallbacks, Inter font, 16px, medium weight, 100% line-height

### **Badge Component Variants**

| Variant | Background | Text Color | Shape | Use Case |
|---------|-----------|------------|-------|----------|
| `default` | Gray-100 | Gray-800 | Rounded-full | General badges |
| `success` | Green-100 | Green-800 | Rounded-full | Success states |
| `warning` | Yellow-100 | Yellow-800 | Rounded-full | Warnings |
| `error` | Red-100 | Red-800 | Rounded-full | Errors |
| `info` | Blue-100 | Blue-800 | Rounded-full | Information |
| `verified` | Transparent | `#008557` | Rounded rectangle | Verified status |

### **MyAdsCard Component Variants**

| Variant | Background | Use Case |
|---------|-----------|----------|
| `default` | White | Standard active ads |
| `highlighted` | White | Featured/promoted ads |
| `pending` | `#F4F6F7` | Ads pending review |

**Additional Features**: 
- `isNegotiable` prop shows green checkmark badge
- Seller information with avatar (circular, initials)
- Image with favorite icon (33x33px white button)
- Responsive grid layout

### **NotificationCard Component Variants**

| Variant | Container | Indicator | Layout |
|---------|-----------|-----------|--------|
| `unread` | White bg, `#DADDDE` border | Yellow dot (`#FFB703`) | Responsive (horizontal/vertical) |
| `read` | `#F4F6F7` bg, `#F3F4F6` border | None | Responsive (horizontal/vertical) |

**Responsive Behavior**:
- **Desktop/Tablet (md+)**: Horizontal layout (icon left, content middle, timestamp right)
- **Mobile (< md)**: Vertical layout (icon top, heading, message, timestamp bottom)

### **MenuItem Component Variants**

| Variant | Background | Text Color | Use Case |
|---------|-----------|------------|----------|
| `active` | `#FAEFCC/70` | `#6E7375` | Currently active item |
| `inactive` | Transparent | `#6E7375` | Non-active items |

**Features**: Auto-detects active state from route, arrow icon (hidden on mobile), supports Link/button/div rendering

### **Avatar Component Sizes**

| Size | Dimensions | Use Case |
|------|-----------|----------|
| `sm` | 32x32px (w-8 h-8) | Small avatars, lists |
| `md` | 64x64px (w-16 h-16) | Default size |
| `lg` | 64x64px (w-16 h-16) | Large displays |
| `xl` | 64x64px (w-16 h-16) | Profile pages |

**Features**: Circular shape, fallback icon when no image, object-cover for images

---

## 🎨 Design System

### **Color Palette**

#### **Primary Colors**
- **Brand Yellow**: `#FFB703` - Primary actions, CTAs, highlights
- **Dark Gray**: `#2C2C2C`, `#131214`, `#1A1C1E` - Headings, primary text

#### **Text Colors**
- **Primary Text**: `#131214`, `#1A1C1E`, `#2C2C2C`
- **Secondary Text**: `#4A5565`, `#6A7282`, `#6E7375`, `#898D8F`
- **Muted Text**: `#898D8F` (semantic token: `--semantic-fg-subtle`)

#### **Background Colors**
- **White**: `#FFFFFF`, `#FFF`
- **Light Gray**: `#F4F6F7`, `#F8F9FA`
- **Canvas**: `#FFF` (semantic token: `--semantic-bg-canvas`)
- **Subtle**: `#F4F6F7` (semantic token: `--semantic-bg-subtle`)

#### **Border Colors**
- **Subtle**: `#E6E9EB` (semantic token: `--semantic-border-subtle`)
- **Muted**: `#DADDDE` (semantic token: `--semantic-border-muted`)
- **Error**: `#FF9175` (semantic token: `--semantic-border-error`)

#### **Status Colors**
- **Success/Verified**: `#008557`
- **Error**: `#FF9175`, `#FFF3F0` (error background)
- **Warning**: Yellow shades

### **Typography**

#### **Font Family**
- **Primary**: Inter (`font-inter`)
- Applied globally via CSS

#### **Font Sizes**
- **Extra Large**: 32px (`text-[32px]`) - Page titles
- **Large**: 18px (`text-[18px]`) - Section headings, body text
- **Base**: 16px (`text-base`) - Default body text
- **Small**: 14px (`text-sm`) - Secondary text
- **Extra Small**: 12px (`text-xs`), 11px, 10px - Labels, metadata

#### **Font Weights**
- **Bold**: 700 (`font-bold`) - Headings, emphasis
- **Medium**: 500 (`font-medium`) - Labels, buttons
- **Normal**: 400 (`font-normal`) - Body text

#### **Line Heights**
- **100%**: 16px line-height for 16px text
- **150%**: 27px line-height for 18px text
- **Relaxed**: Standard relaxed line-height

### **Spacing System**

#### **Padding**
- **Small**: `p-2`, `p-3`, `p-4` (8px, 12px, 16px)
- **Medium**: `p-6` (24px)
- **Large**: `py-8` (32px vertical)

#### **Margins**
- **Small**: `gap-2`, `gap-4` (8px, 16px)
- **Medium**: `gap-6` (24px)
- **Large**: `space-y-6` (24px vertical spacing)

#### **Gaps**
- Grid gaps: `gap-4`, `gap-6` (16px, 24px)
- Flex gaps: `gap-2`, `gap-3`, `gap-4` (8px, 12px, 16px)

### **Border Radius**

- **Small**: `rounded-[8px]` - Cards, inputs, images
- **Medium**: `rounded-[12px]`, `rounded-[14px]` - Larger cards
- **Full**: `rounded-full`, `rounded-[48px]` - Buttons, pills, avatars

### **Shadows**

- **Low Elevation**: `shadow-sm` - Subtle elevation
- **Medium Elevation**: `shadow-md` - Cards, hover states
- **High Elevation**: `shadow-lg` - Modals, popovers
- **Focus Shadow**: `0 0 0 4px #E9E9E9` - Input focus rings

---

## 🏗️ Page Structure

### **Homepage** (`/`)
- **Navbar** - Top navigation with search, country/currency selectors
- **HeroSlider** - Image carousel with promotional content
- **HeroFilter** - Equipment search and filter bar
- **Auction** - Horizontal scrolling auction cards
- **CategorySidebar** + **PromoDashboard** - Two-column layout
  - Category filters (manufacturer, year, price range)
  - Promo banners and quick links
  - New listings section
  - Equipment for you section
  - Featured companies
  - You may also like section
- **Footer** - Site footer with links and newsletter
- **MobileBottomNav** - Bottom navigation for mobile

### **Account Pages** (`/account/*`)

All account pages follow the same structure:
- **Navbar** - Top navigation
- **Breadcrumb** - Navigation path (Home / My Account / [Page])
- **AccountLayout** - Two-column layout
  - **AccountSidebar** (left) - User profile and navigation
  - **Content Area** (right) - Page-specific content

#### **My Account** (`/account`)
- Profile photo upload
- Personal information (read-only and editable)
- Email (editable)
- Mobile number (editable with country code)
- Verification banner (if not verified)

#### **My Ads** (`/account/my-ads`)
- Page title with divider
- Tabs: Auctions, Listings, Pending (pill-style segmented control)
- Grid of ad cards (3 columns on desktop)

#### **Notifications** (`/account/notifications`)
- Search bar
- Filter dropdown (All, Messages, Offers, etc.)
- List of notification cards

#### **Change Password** (`/account/change-password`)
- Current password field
- New password field
- Confirm new password field
- All with show/hide toggles

### **Authentication Pages**

#### **Login** (`/login`)
- Login form with email/password

#### **Sign Up** (`/signup`)
- Registration form

---

## 🔄 Component Relationships

### **Account Module Hierarchy**

```
AccountLayout
  ├── AccountSidebar
  │    ├── UserProfile
  │    │    ├── Avatar
  │    │    ├── Badge (verified)
  │    │    └── Button (edit store)
  │    └── MenuItem (multiple)
  │         └── Icons
  └── Content Area
       ├── VerificationBanner (conditional)
       ├── Card (multiple)
       │    ├── PhotoUpload
       │    ├── ProfileField
       │    │    ├── ReadOnlyField
       │    │    └── EditableField
       │    └── PersonalInfoForm
       ├── MyAdsContent
       │    ├── Tabs
       │    └── MyAdsCard (grid)
       ├── NotificationsContent
       │    ├── Input (search variant)
       │    └── NotificationCard (list)
       └── ChangePassword
            └── Input (password type)
```

### **Homepage Module Hierarchy**

```
Homepage
  ├── Navbar
  │    ├── Search Bar
  │    ├── Country/Currency Selectors
  │    └── User Actions
  ├── HeroSlider
  ├── HeroFilter
  ├── Auction
  │    └── AuctionCard (horizontal scroll)
  ├── CategorySidebar
  │    ├── Manufacturer Filter
  │    ├── Year Filter
  │    └── Price Range Filter
  ├── PromoDashboard
  │    ├── Promo Banner
  │    ├── Quick Links Grid
  │    ├── NewListings
  │    │    └── NewListingCard
  │    ├── EquipmentForYou
  │    │    └── EquipmentCard
  │    ├── FeaturedCompanies
  │    ├── YouMayAlsoLike
  │    │    └── RecommendationCard
  │    └── ShortVideos
  │         └── VideoCard
  ├── Footer
  └── MobileBottomNav
```

---

## 🎯 Variant System Architecture

### **Variant Resolution Priority**

1. **Explicit variant prop** (highest priority)
2. **Derived from state** (e.g., `isUnread` → `unread` variant)
3. **Default variant** (fallback)

### **Semantic Token System**

All components use CSS custom properties with fallback values:
- Format: `var(--token-name, #fallback-color)`
- Maintains design system consistency
- Enables easy theming and global updates
- Supports design token migration

### **Responsive Variant Behavior**

Some components adapt their layout based on screen size:
- **NotificationCard**: Horizontal (desktop) vs Vertical (mobile)
- **MenuItem**: Arrow visible (desktop) vs Hidden (mobile)
- **Input**: Full width (mobile) vs Auto width (desktop)
- **Card**: Fixed width (desktop) vs Full width (mobile option)

---

## 📱 Responsive Design Patterns

### **Breakpoints**
- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (640px+)
- **Desktop**: `md:` (768px+), `lg:` (1024px+), `xl:` (1280px+)

### **Layout Patterns**
- **Mobile**: Single column, stacked layouts
- **Tablet**: Two columns, side-by-side where appropriate
- **Desktop**: Multi-column grids, sidebars, complex layouts

### **Navigation**
- **Desktop**: Full navbar with all features
- **Mobile**: Bottom navigation bar, hamburger menu

### **Cards**
- **Mobile**: Single column, full width
- **Tablet**: 2 columns
- **Desktop**: 3-4 columns depending on section

---

## ✨ Key Features

### **Component Features**
✅ Variant-based styling system
✅ Semantic token support with fallbacks
✅ Responsive design (mobile/desktop/tablet)
✅ Consistent typography and spacing
✅ Reusable component architecture
✅ Props-based configuration
✅ Backward compatibility support
✅ Interactive states (hover, focus, active)
✅ Accessibility considerations
✅ Form validation support

### **Account Features**
✅ User profile management
✅ Photo upload with validation
✅ Editable form fields
✅ Read-only and editable modes
✅ Active navigation states
✅ Breadcrumb navigation
✅ Verification system
✅ Password change functionality
✅ Ad management (My Ads)
✅ Notification system

### **Homepage Features**
✅ Hero image carousel
✅ Equipment search and filtering
✅ Category-based filtering
✅ Auction listings
✅ New listings showcase
✅ Personalized recommendations
✅ Featured companies
✅ Video content
✅ Newsletter subscription

---

## 🔌 API Integration Points

### **Account Module**
- Photo upload handler (File object, FormData ready)
- Personal info save handler (firstName, lastName object)
- Email update handler
- Mobile number update handler
- Password change handler (currentPassword, newPassword, confirmPassword)
- Verification start handler
- Logout handler

### **My Ads Module**
- Ad listing fetch
- Ad status updates (auctions, listings, pending)
- Ad deletion/editing

### **Notifications Module**
- Notification fetch
- Notification read/unread status
- Notification filtering
- Notification search

---

## 🎨 Styling Patterns

### **Component Styling**
- **Base Styles**: Applied to all variants
- **Variant Styles**: Override base for specific variants
- **Interactive States**: Hover, focus, active states
- **Responsive Classes**: Mobile-first with desktop enhancements

### **State Management**
- React hooks (`useState`) for local component state
- State lifted to page components where needed
- Callback props for parent-child communication
- No global state management (can be added if needed)

### **Form Patterns**
- Controlled components (value + onChange)
- Validation with error states
- Read-only and editable modes
- Save/cancel functionality

---

## 📊 Component Statistics

### **Total Components**
- **Core Components**: 15+
- **Account Components**: 15
- **Card Components**: 7
- **Page Components**: 7
- **Section Components**: 8+

### **Total Variants**
- **Button**: 9 variants, 3 sizes
- **Input**: 7 variants
- **Badge**: 6 variants
- **MyAdsCard**: 3 variants
- **NotificationCard**: 2 variants (with responsive layouts)
- **MenuItem**: 2 variants
- **Avatar**: 4 sizes

---

## 🚀 Best Practices

### **Component Development**
1. Use semantic variant names
2. Provide sensible defaults
3. Support `className` and `...props` for flexibility
4. Document all props in component comments
5. Maintain backward compatibility when possible

### **Styling**
1. Use semantic tokens with fallbacks
2. Follow mobile-first responsive design
3. Maintain consistent spacing and typography
4. Use Tailwind utility classes
5. Keep component styles scoped

### **Accessibility**
1. Include proper ARIA labels
2. Ensure keyboard navigation
3. Maintain color contrast ratios
4. Use semantic HTML elements
5. Test with screen readers

### **Performance**
1. Avoid unnecessary re-renders
2. Optimize image loading
3. Lazy load when appropriate
4. Use React.memo for expensive components if needed

---

## 🔄 State Management

### **Local State**
- Component-level state using `useState`
- Form state management
- UI state (modals, dropdowns, tabs)

### **Route State**
- React Router for navigation
- Active route detection
- Breadcrumb generation

### **Data Flow**
- Props down, events up pattern
- Callback functions for parent communication
- No global state (ready for Redux/Context if needed)

---

## 📝 File Structure

```
src/
  components/
    account/
      ├── AccountLayout.jsx
      ├── AccountSidebar.jsx
      ├── AccountContent.jsx
      ├── UserProfile.jsx
      ├── MenuItem.jsx
      ├── MyAdsContent.jsx
      ├── MyAdsCard.jsx
      ├── NotificationsContent.jsx
      ├── NotificationCard.jsx
      ├── ChangePassword.jsx
      ├── VerificationBanner.jsx
      ├── PhotoUpload.jsx
      ├── PersonalInfoForm.jsx
      ├── ProfileField.jsx
      ├── EditableField.jsx
      └── ReadOnlyField.jsx
    ├── Button.jsx
    ├── Input.jsx
    ├── Card.jsx
    ├── Avatar.jsx
    ├── Badge.jsx
    ├── Label.jsx
    ├── Divider.jsx
    ├── Navbar.jsx
    ├── Footer.jsx
    ├── HeroSlider.jsx
    ├── HeroFilter.jsx
    ├── Auction.jsx
    ├── AuctionCard.jsx
    ├── DealCard.jsx
    ├── EquipmentCard.jsx
    ├── NewListingCard.jsx
    ├── RecommendationCard.jsx
    ├── SimpleCard.jsx
    ├── CategorySidebar.jsx
    ├── PromoDashboard.jsx
    ├── NewListings.jsx
    ├── EquipmentForYou.jsx
    ├── YouMayAlsoLike.jsx
    ├── FeaturedCompanies.jsx
    ├── ShortVideos.jsx
    ├── VideoCard.jsx
    └── MobileBottomNav.jsx
  pages/
    ├── Login.jsx
    ├── SignUp.jsx
    ├── MyAccount.jsx
    ├── MyAds.jsx
    ├── Notifications.jsx
    └── ChangePassword.jsx
  App.jsx
```

---

## 🎯 Routing Structure

### **Public Routes**
- `/` - Homepage
- `/login` - Login page
- `/signup` - Sign up page

### **Account Routes** (Protected)
- `/account` - My Account (profile)
- `/account/my-ads` - My Ads page
- `/account/notifications` - Notifications page
- `/account/change-password` - Change password page

---

## 🔧 Technology Stack

### **Frontend**
- **React** - UI library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Heroicons** - Icon library
- **React Icons** - Additional icons
- **Headless UI** - Accessible UI components

### **Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Custom Properties** - Semantic tokens
- **Responsive Design** - Mobile-first approach

---

## 📈 Future Enhancements

### **Component System**
- TypeScript definitions
- Storybook documentation
- Unit tests for variants
- Visual regression tests
- Animation variants
- Loading states
- Skeleton loaders

### **Features**
- Advanced search and filtering
- Real-time notifications
- Chat/messaging system
- Advanced analytics
- Multi-language support
- Dark mode theme

---

*Generated: EZ-Trade Machinery Complete Project Documentation*

