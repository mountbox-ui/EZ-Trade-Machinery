# Post Want to Buy Page - Documentation

## Overview
The Post Want to Buy page allows users to create a new "Want to Buy" listing for equipment, attachments, or parts they are looking to purchase.

## Page Structure

### Route
- **Path**: `/account/want-to-buy/post`
- **Component**: `PostWantToBuy` (page wrapper)
- **Content Component**: `PostWantToBuyContent` (main form component)

## Components Used

1. **PostWantToBuy** (`src/pages/PostWantToBuy.jsx`)
   - Page wrapper with Navbar, Breadcrumbs, and AccountLayout
   - Handles user authentication and navigation

2. **PostWantToBuyContent** (`src/components/account/PostWantToBuyContent.jsx`)
   - Main form component containing all form fields
   - Handles form state and submission

3. **LookingForButton** (`src/components/account/LookingForButton.jsx`)
   - Reusable button component for "Looking for" options (Equipment, Attachments, Parts)

4. **Input** (`src/components/Input.jsx`)
   - Reusable input component for text fields

5. **Button** (`src/components/Button.jsx`)
   - Reusable button component for form submission

## Form Sections

### 1. Looking For Section
- **Purpose**: Select the type of item the user is looking for
- **Options**: Equipment, Attachments, Parts
- **Default**: Equipment
- **Component**: LookingForButton (toggle buttons)

### 2. Category Selection
- **Purpose**: Select the category of the item
- **Type**: Dropdown select
- **Options**: Excavator, Wheel Loader, Bulldozer, Backhoe, Skid Steer
- **Width**: Full width on mobile/tablet, 360px on desktop

### 3. Enter Machine Information Section
- **Purpose**: Enter details about the machine for which attachment or component is needed
- **Fields**:
  - Manufacturer (text input)
  - Model (text input)
  - Category (dropdown select)
  - Year (text input)
  - Serial # (text input, spans full width)
- **Layout**: 2-column grid on desktop, single column on mobile/tablet

### 4. Additional Information Section
- **Purpose**: Additional details about the purchase request
- **Fields**:
  - Price Limit (text input with $ prefix)
  - Currency (dropdown: USD, EUR, GBP, AUD, CAD)
  - Quantity (number input)
  - Planning to Buy (dropdown: Immediately, Within 1 month, Within 3 months, Within 6 months, Just browsing)
  - Short Description (textarea)
  - Other Comments (textarea)
- **Layout**: 2-column grid for first 4 fields, full width for textareas

## Form State Management

### State Variables
```javascript
{
  category: '',
  manufacturer: '',
  model: '',
  machineCategory: '',
  year: '',
  serialNumber: '',
  priceLimit: '',
  currency: 'USD',
  quantity: '1',
  planningToBuy: 'Immediately',
  shortDescription: '',
  otherComments: ''
}
```

### State Updates
- All form fields use `handleInputChange` function
- Updates formData state on input change
- Form submission handled by `handleSubmit` (currently logs to console)

## Responsive Design

### Mobile (< 640px)
- Full width form container
- Single column layout for all fields
- Reduced padding and spacing
- Smaller text sizes
- Full width buttons
- Stacked form elements

### Tablet (640px - 1024px)
- Full width form container
- 2-column grid for appropriate fields
- Medium text sizes
- Improved spacing

### Desktop (≥ 1024px)
- Fixed width form container (764px)
- Fixed width category select (360px)
- Original design preserved
- 2-column grid layouts
- Original spacing and typography

## Information Alert
- **Purpose**: Reminds users to fill in Manufacturer, Model, and Category fields
- **Styling**: Light blue background with border
- **Icon**: Info icon from assets
- **Responsive**: Full width on mobile, 764px on desktop

## Form Submission
- **Button**: "Publish" button
- **Variant**: Primary (yellow background)
- **Styling**: Rounded, bold text
- **Layout**: Full width on mobile, fixed width (240px) on desktop
- **Current Behavior**: Logs form data to console (needs backend integration)

## Key Features

1. **Dynamic Form**: Changes based on "Looking for" selection
2. **Validation**: Client-side validation needed (not currently implemented)
3. **Responsive**: Fully responsive across all device sizes
4. **Accessible**: Proper labels and form structure
5. **Reusable Components**: Uses shared Button, Input, and LookingForButton components

## Future Enhancements

1. **Form Validation**
   - Required field validation
   - Format validation (year, price, etc.)
   - Error messages display

2. **Backend Integration**
   - API endpoint for form submission
   - Success/error handling
   - Redirect after successful submission

3. **Image Upload**
   - Allow users to upload reference images
   - Image preview functionality

4. **Draft Saving**
   - Save form as draft
   - Auto-save functionality

5. **Form Pre-fill**
   - Pre-fill from user profile
   - Save common entries

## Styling Notes

- **Colors**: 
  - Primary: #FFB703 (yellow)
  - Text: #131214 (dark)
  - Secondary text: #6E7375, #898D8F (gray)
  - Background: #F4F6F7 (light gray)
  - Border: #E6E9EB, #E8EBEB

- **Typography**: 
  - Font family: Inter
  - Headings: Bold, various sizes
  - Body: Normal weight, 14-16px

- **Spacing**: 
  - Consistent gap-4, gap-6 for grids
  - mb-3, mb-4, mb-6 for vertical spacing
  - Responsive padding (px-3 py-4 on mobile, px-4 py-6 on desktop)

- **Border Radius**: 
  - 8px for inputs and selects
  - 12px for cards
  - 48px for buttons

## Dependencies

- React (useState hook)
- React Router (useNavigate for navigation)
- Heroicons (ChevronDownIcon)
- Custom components: Button, Input, LookingForButton

## File Locations

- Page: `src/pages/PostWantToBuy.jsx`
- Content Component: `src/components/account/PostWantToBuyContent.jsx`
- Looking For Button: `src/components/account/LookingForButton.jsx`
- Button Component: `src/components/Button.jsx`
- Input Component: `src/components/Input.jsx`

