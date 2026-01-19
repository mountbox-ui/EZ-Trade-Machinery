# Equipment Detail Page - Documentation Notes

## Overview
The Equipment Detail page (`src/pages/EquipmentDetail.jsx`) displays comprehensive information about a specific piece of equipment. It provides a detailed view with images, specifications, seller information, and related equipment recommendations.

## Route
- **Path**: `/equipment/:id`
- **Component**: `EquipmentDetail`
- **File Location**: `src/pages/EquipmentDetail.jsx`

## Key Features

### 1. Image Gallery
- **Main Image Display**: Large featured image (600px × 400px on desktop)
- **Thumbnail Gallery**: 4 thumbnail images in a grid
- **Image Selection**: Click thumbnails to change main image
- **Visual Feedback**: 
  - Selected thumbnail: `opacity-100`
  - Unselected thumbnails: `opacity-70`
- **Images Used**: 
  - `Caterpillar_D6N.jpg`
  - `Johan_Deere_650K.jpg`
  - `Komatsu_PC360LC.jpg`
  - `Volvo_EEC380.jpg`

### 2. Seller Information
- **Avatar**: Circular avatar with seller initials (40px × 40px)
- **Seller Name**: Bold text display
- **Visit Store Button**: Link to seller's store page
- **Styling**: Matches the Listing page design

### 3. Product Information
- **Title**: Equipment name/title
- **Basic Info**: Year, condition, location, hours used
- **Price Display**: 
  - Large price with currency symbol
  - Conditional "Negotiable" badge (only shown when `isNegotiable: true`)
  - Badge styling matches ListingCard design

### 4. Equipment Details Table
- **Component**: Uses `DetailRow` component for each row
- **Reusable Component**: `src/components/equipment/DetailRow.jsx`
- **Displays**: Key-value pairs of equipment specifications
- **Styling**: Clean table layout with proper spacing

### 5. Document/Attachment Section
- **Card-Style Buttons**: Full-width buttons with icons on top, text below
- **Icons Used**:
  - `report.svg` for Inspection Report
  - `history.svg` for Repair History
- **Layout**: Flex wrap with minimum width constraints
- **Hover Effects**: Background color change on hover

### 6. Description Section
- **Full Description**: Equipment description text
- **Styling**: Proper text formatting and spacing

### 7. Collapsible Sections
- **Component**: Uses `DetailSection` component
- **Reusable Component**: `src/components/equipment/DetailSection.jsx`
- **Features**:
  - Expandable/collapsible sections
  - Animated chevron icon
  - Smooth transitions
- **Sections Include**:
  - Specifications
  - Features
  - Maintenance History
  - Additional Information

### 8. Action Buttons
- **Contact Seller**: Primary action button
- **Save to Favorites**: Secondary action button
- **Share**: Tertiary action button
- **Width**: Fixed width (500px) on desktop, full width on mobile

### 9. Similar Equipment Section
- **Location**: Right panel of the page
- **Component**: Uses `RecommendationCard` component
- **Layout**: Single column grid
- **Features**:
  - Image display (162px × 217px)
  - Title and price
  - Conditional "Sponsored" label with icon
  - Clickable cards that navigate to detail page
- **Navigation**: Clicking a card navigates to `/equipment/:id`

## Layout Structure

### Desktop Layout
```
┌─────────────────────────────────────────────────────────┐
│                    Breadcrumb                           │
├──────────────────┬──────────────────────────────────────┤
│                  │  Seller Info                         │
│   Left Panel     │  Product Title & Info               │
│   (600px)        │  Price & Negotiable Badge           │
│                  │  Equipment Details Table            │
│   Main Image     │  Documents                           │
│   (600×400)      │  Action Buttons                      │
│                  │  Description                         │
│   Thumbnails     │  Collapsible Sections                │
│   (4 images)     │                                      │
│                  │  Similar Equipment                   │
│                  │  (Right Panel)                       │
└──────────────────┴──────────────────────────────────────┘
```

### Mobile/Tablet Layout
- **Stacked Layout**: Left and right panels stack vertically
- **Full Width**: Both panels take full width on mobile
- **Responsive Images**: Images scale appropriately
- **Touch-Friendly**: Larger touch targets for mobile

## Components Used

### Custom Components
1. **DetailRow** (`src/components/equipment/DetailRow.jsx`)
   - Displays label-value pairs
   - Props: `label`, `value`

2. **DetailSection** (`src/components/equipment/DetailSection.jsx`)
   - Collapsible section wrapper
   - Props: `title`, `isExpanded`, `onToggle`, `children`

3. **RecommendationCard** (`src/components/equipment/RecommendationCard.jsx`)
   - Displays similar equipment cards
   - Props: `item` (equipment object)
   - Features: Navigation, sponsored label, image display

### Shared Components
- `Navbar`: Site navigation
- `Footer`: Site footer
- `MobileBottomNav`: Mobile navigation
- `Button`: Action buttons

## Data Structure

### Equipment Object
```javascript
{
  id: number,
  title: string,
  price: number,
  year: number,
  condition: string,
  location: string,
  image: string (image path),
  images: array (array of image paths),
  seller: {
    name: string,
    avatar: string (optional)
  },
  hoursUsed: number,
  isNegotiable: boolean,
  documents: [
    {
      name: string,
      type: string
    }
  ],
  description: string,
  specifications: object,
  features: array,
  maintenanceHistory: array
}
```

## State Management

### Local State
- `selectedImage`: Index of currently displayed main image
- `expandedSections`: Object tracking which collapsible sections are open

### Data Fetching
- Uses `useParams` to get equipment ID from URL
- Fetches equipment data from `mockListings` array
- Matches equipment by ID

## Styling

### Colors
- **Background**: `#F9FAFB`
- **Text Primary**: `#131214`
- **Text Secondary**: `#6E7375`
- **Borders**: `#E6E9EB`
- **Accent**: `#FFB703` (yellow)
- **Error**: `#FF9175`

### Typography
- **Font Family**: Inter (primary), Plus Jakarta Sans (for sponsored text)
- **Font Sizes**: Responsive (14px-24px)
- **Font Weights**: Medium, Bold

### Spacing
- **Gap Between Panels**: 80px on desktop
- **Section Spacing**: 22px-60px
- **Padding**: Responsive (4px-8px on mobile, 6px-8px on desktop)

## Responsive Design

### Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: ≥ 1024px (lg)

### Responsive Features
- **Layout**: Flex column on mobile, flex row on desktop
- **Image Sizes**: Scale down on mobile/tablet
- **Text Sizes**: Smaller on mobile, larger on desktop
- **Spacing**: Reduced gaps and padding on mobile
- **Buttons**: Full width on mobile, fixed width on desktop

## Navigation

### From Listing Page
- Clicking any equipment card navigates to `/equipment/:id`
- Uses React Router's `useNavigate` hook

### Within Detail Page
- Breadcrumb navigation: Home > All Categories > Equipment Title
- Similar equipment cards navigate to their respective detail pages

## Accessibility

### Features
- Semantic HTML elements
- Proper label associations
- Keyboard navigation support
- Focus states on interactive elements
- Alt text for images

## Future Enhancements

### Potential Improvements
1. **Image Zoom**: Add lightbox/modal for image viewing
2. **Image Carousel**: Swipeable image gallery
3. **Video Support**: Add video player for equipment videos
4. **3D View**: 360-degree view of equipment
5. **Comparison**: Compare multiple equipment side-by-side
6. **Print View**: Printable version of equipment details
7. **Share Functionality**: Social media sharing
8. **PDF Export**: Export equipment details as PDF
9. **Real-time Chat**: Direct messaging with seller
10. **Inquiry Form**: Contact form for equipment inquiry

## Dependencies

### React Hooks
- `useState`: Local state management
- `useParams`: Get route parameters
- `useNavigate`: Programmatic navigation
- `useEffect`: Data fetching and side effects

### External Libraries
- `react-router-dom`: Routing and navigation
- `@headlessui/react`: UI components (if used)

## File Structure
```
src/
├── pages/
│   └── EquipmentDetail.jsx
├── components/
│   └── equipment/
│       ├── DetailRow.jsx
│       ├── DetailSection.jsx
│       ├── EquipmentCard.jsx
│       └── RecommendationCard.jsx
└── assets/
    ├── Auction-Img/
    │   ├── Caterpillar_D6N.jpg
    │   ├── Johan_Deere_650K.jpg
    │   ├── Komatsu_PC360LC.jpg
    │   └── Volvo_EEC380.jpg
    └── listing/
        ├── report.svg
        └── history.svg
```

## Testing Considerations

### Test Cases
1. **Image Selection**: Verify thumbnail clicks change main image
2. **Section Expansion**: Test collapsible sections open/close
3. **Navigation**: Verify breadcrumb and card navigation
4. **Responsive**: Test layout on different screen sizes
5. **Data Display**: Verify all equipment data displays correctly
6. **Negotiable Badge**: Test conditional display
7. **Document Buttons**: Verify document section displays correctly

## Performance Optimizations

### Implemented
- Image lazy loading (if implemented)
- Component memoization (if used)
- Efficient state updates

### Recommendations
- Implement image lazy loading
- Add skeleton loaders for data fetching
- Optimize image sizes
- Implement virtual scrolling for long lists
- Cache equipment data

## Notes
- Currently uses mock data (`mockListings`)
- Should be replaced with API calls in production
- Image paths are relative imports
- All styling uses Tailwind CSS utility classes
- Component structure follows React best practices

