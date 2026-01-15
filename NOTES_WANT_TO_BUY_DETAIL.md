# Want to Buy Detail Page - Documentation

## Overview
The Want to Buy Detail page displays a comprehensive view of a specific "Want to Buy" post, including all post details, status information, and responses/offers from potential sellers.

## Page Structure

### Route
- **Path**: `/account/want-to-buy/:id`
- **Component**: `WantToBuyDetail` (page wrapper)
- **Content Component**: `WantToBuyDetailContent` (main content component)
- **Dynamic Parameter**: `id` - The unique identifier of the want-to-buy post

## Components Used

1. **WantToBuyDetail** (`src/pages/WantToBuyDetail.jsx`)
   - Page wrapper with Navbar, Breadcrumbs, and AccountLayout
   - Handles routing with `useParams` to get post ID
   - Manages user state and navigation
   - Currently uses sample data (needs API integration)

2. **WantToBuyDetailContent** (`src/components/account/WantToBuyDetailContent.jsx`)
   - Main content component displaying post details
   - Handles edit navigation and chat functionality
   - Calculates expiration days dynamically

3. **WantToBuyStatusBanner** (`src/components/account/WantToBuyStatusBanner.jsx`)
   - Displays post expiration status and posting date
   - Green banner with clock icon and share button

4. **WantToBuyCard** (`src/components/account/WantToBuyCard.jsx`)
   - Reusable card component displaying post information
   - Used in detail view with `disableClick={true}` to prevent navigation
   - Shows equipment name, tags, category, description, details grid, price, views, and expiration

5. **WantToBuyResponseCard** (`src/components/account/WantToBuyResponseCard.jsx`)
   - Displays individual responses/offers
   - Shows user info, equipment details, price, and chat button

6. **Button** (`src/components/Button.jsx`)
   - Reusable button component for Edit and Chat actions

## Page Sections

### 1. Breadcrumb Navigation
- **Purpose**: Shows navigation path
- **Path**: Home > My Account > Want to Buy > [Equipment Name]
- **Styling**: Gray text with hover effects, active item in dark color
- **Responsive**: Adjusts padding on different screen sizes

### 2. Page Header
- **Title**: Equipment name (e.g., "Caterpillar 320")
- **Edit Button**: Yellow primary button on the right
- **Layout**: Flex layout with space-between
- **Styling**: Large bold text (32px), yellow rounded button

### 3. Status Banner
- **Component**: `WantToBuyStatusBanner`
- **Purpose**: Display post status and dates
- **Content**:
  - Clock icon (left)
  - "Post expires in [X] days" (bold days count)
  - "Posted on [date]"
  - Share icon (right)
- **Styling**: 
  - Green background (#DCFCE7)
  - Green border (#86EFAC)
  - Dark green text for expiration (#0D542B)
  - Gray text for posted date (#2F3133)

### 4. Post Details Card
- **Component**: `WantToBuyCard` (reused from list view)
- **Purpose**: Display all post information in a card format
- **Features**:
  - Equipment name and tags (top row)
  - Price limit (top right)
  - Category heading
  - Description
  - Details grid (Year, Quantity, Planning to Buy, Responses)
  - Footer (Expires date, Views count)
- **Props**: 
  - `disableClick={true}` - Prevents navigation when clicked
  - All post data passed as `request` prop

### 5. Responses Section
- **Component**: `WantToBuyResponseCard` (multiple instances)
- **Purpose**: Display all offers/responses to the post
- **Header**: "Responses (X)" with count
- **Layout**: Vertical stack with spacing
- **Conditional**: Only displays if `responses.length > 0`

## Data Structure

### Post Object
```javascript
{
  id: number,
  equipmentName: string,
  tags: string[], // e.g., ['Equipment', 'Active']
  category: string, // e.g., 'Excavators'
  description: string,
  yearRange: string, // e.g., '2018-2020'
  quantity: string,
  planningToBuy: string, // e.g., 'Immediately'
  offersCount: number,
  priceLimit: string, // e.g., '$150,000 Price Limit'
  views: number,
  expiresDate: string, // e.g., '20/12/2026'
  postedDate: string, // e.g., '20/11/2005'
  responses: Response[]
}
```

### Response Object
```javascript
{
  id: number,
  userName: string,
  userAvatar: string | null,
  timeAgo: string, // e.g., '5 hours ago'
  equipmentName: string,
  description: string,
  price: string // e.g., '$145,000'
}
```

## Key Features

### 1. Dynamic Expiration Calculation
- **Function**: `calculateDaysUntilExpiration(expiresDate)`
- **Purpose**: Calculates days until post expiration
- **Logic**: 
  - Parses date from DD/MM/YYYY format
  - Calculates difference from current date
  - Returns formatted string (e.g., "23 days" or "Expired")
- **Display**: Days count is bold in status banner

### 2. Navigation Handlers

#### Edit Handler
```javascript
handleEdit = () => {
  navigate(`/account/want-to-buy/${id}/edit`)
}
```
- Navigates to edit page for the post
- Uses post ID from route params

#### Chat Handler
```javascript
handleChat = (responseId) => {
  navigate(`/chat?response=${responseId}`)
}
```
- Navigates to chat page with response ID
- Opens chat with the responder

### 3. Component Reusability
- **WantToBuyCard**: Reused from list view with `disableClick` prop
- **WantToBuyResponseCard**: Reusable response card component
- **Button**: Shared button component with variants

## Response Card Layout

### Desktop Layout
- **Top Row**: Avatar + User Info (left) | Price (right)
- **Middle**: Equipment name and description (left-aligned with avatar)
- **Bottom**: Chat button (right-aligned)

### Mobile/Tablet Layout
- **Top Row**: Avatar + User Info (stacked) | Price (below)
- **Middle**: Equipment name and description (full width)
- **Bottom**: Chat button (full width, left-aligned)

## Responsive Design

### Mobile (< 640px)
- Reduced padding on cards
- Stacked layouts
- Full width buttons
- Smaller text sizes
- Vertical spacing adjustments

### Tablet (640px - 1024px)
- Improved spacing
- Better text sizes
- Horizontal layouts where appropriate

### Desktop (≥ 1024px)
- Original design preserved
- Side-by-side layouts
- Fixed spacing and typography
- Right-aligned chat buttons

## Styling Notes

### Colors
- **Primary**: #FFB703 (yellow for buttons)
- **Text Primary**: #131214 (dark)
- **Text Secondary**: #6E7375, #898D8F (gray)
- **Background**: #F8F9FA (page), #FFFFFF (cards)
- **Border**: #E8EBEB, #E6E9EB (light gray)
- **Status Banner**: 
  - Background: #DCFCE7 (light green)
  - Border: #86EFAC (green)
  - Text: #0D542B (dark green)

### Typography
- **Font Family**: Inter
- **Headings**: 
  - Page title: 32px, bold
  - Section headings: 18px, bold
- **Body Text**: 14-16px, normal weight
- **Labels**: 14px, medium weight

### Spacing
- **Card Padding**: px-3 py-4 (mobile), px-4 py-6 (desktop)
- **Section Gaps**: mb-4, mb-6, mb-8
- **Response Cards**: space-y-4 (vertical spacing)

### Border Radius
- **Cards**: 12px
- **Buttons**: 48px (rounded-full)
- **Status Banner**: 8px

## Navigation Flow

1. **From List View**: Click on any `WantToBuyCard` → Navigate to detail page
2. **Edit Post**: Click "Edit" button → Navigate to edit page
3. **Chat with Responder**: Click "Chat" on response card → Navigate to chat page
4. **Breadcrumb Navigation**: Click any breadcrumb link → Navigate to that page

## Current Implementation Status

### ✅ Implemented
- Page structure and layout
- Status banner with expiration calculation
- Post details display using reusable card
- Responses section with cards
- Edit and chat navigation
- Responsive design
- Breadcrumb navigation

### ⚠️ Needs Implementation
- **API Integration**: Currently uses sample data, needs backend connection
- **Data Fetching**: Should fetch post data based on route ID
- **Loading States**: No loading indicators
- **Error Handling**: No error states for failed data fetching
- **Empty States**: No handling for posts with no responses
- **Share Functionality**: Share button doesn't have functionality
- **Edit Page**: Edit route exists but page may not be implemented

## Future Enhancements

1. **API Integration**
   - Fetch post data from backend
   - Fetch responses from backend
   - Real-time response updates

2. **Additional Features**
   - Delete post functionality
   - Mark as sold/fulfilled
   - Filter/sort responses
   - Response pagination
   - Response notifications

3. **User Interactions**
   - Accept/reject responses
   - Rate responders
   - Report inappropriate responses
   - Save favorite responses

4. **Share Functionality**
   - Social media sharing
   - Copy link to clipboard
   - Email sharing
   - Share via messaging apps

5. **Analytics**
   - Track page views
   - Monitor response engagement
   - View statistics dashboard

## Dependencies

- React (useState, useNavigate hooks)
- React Router (useParams, useNavigate, Link)
- Heroicons (not directly used, but available)
- Custom components: Button, WantToBuyCard, WantToBuyStatusBanner, WantToBuyResponseCard

## File Locations

- Page: `src/pages/WantToBuyDetail.jsx`
- Content Component: `src/components/account/WantToBuyDetailContent.jsx`
- Status Banner: `src/components/account/WantToBuyStatusBanner.jsx`
- Response Card: `src/components/account/WantToBuyResponseCard.jsx`
- Post Card: `src/components/account/WantToBuyCard.jsx`
- Button Component: `src/components/Button.jsx`

## Related Pages

- **List View**: `/account/want-to-buy` - Shows all want-to-buy posts
- **Create Post**: `/account/want-to-buy/post` - Create new want-to-buy post
- **Edit Post**: `/account/want-to-buy/:id/edit` - Edit existing post (to be implemented)
- **Chat**: `/chat?response=:id` - Chat with responder

## Component Props

### WantToBuyDetailContent
```typescript
{
  post: {
    id: number,
    equipmentName: string,
    tags: string[],
    category: string,
    description: string,
    yearRange: string,
    quantity: string,
    planningToBuy: string,
    offersCount: number,
    priceLimit: string,
    views: number,
    expiresDate: string,
    postedDate: string,
    responses: Response[]
  },
  className?: string
}
```

### WantToBuyStatusBanner
```typescript
{
  expiresIn: string, // e.g., "23 days"
  postedOn: string, // e.g., "20/11/2005"
  className?: string
}
```

### WantToBuyResponseCard
```typescript
{
  response: {
    id: number,
    userName: string,
    userAvatar: string | null,
    timeAgo: string,
    equipmentName: string,
    description: string,
    price: string,
    onChatClick: () => void
  },
  className?: string
}
```

## Testing Considerations

1. **Route Parameters**: Test with various post IDs
2. **Empty States**: Test with posts that have no responses
3. **Date Calculations**: Test expiration calculation with various dates
4. **Responsive Design**: Test on mobile, tablet, and desktop
5. **Navigation**: Test all navigation links and buttons
6. **Data Loading**: Test with loading and error states
7. **Component Props**: Test with missing or invalid data

