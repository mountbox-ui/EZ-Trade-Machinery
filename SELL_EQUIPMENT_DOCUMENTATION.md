# Sell Equipment Page Documentation

## Overview
The Sell Equipment page (`src/pages/SellEquipment.jsx`) is a comprehensive form page that allows users to list equipment for sale on the platform. The page includes multiple form sections for equipment details, pricing, documents, and additional information.

---

## Page Structure

### Layout Components
1. **Navbar** - Top navigation bar
2. **Footer** - Page footer
3. **MobileBottomNav** - Mobile navigation bar with links: Home, Auctions, Categories, Deals, Want to Buy, Financing, Shipping

### Main Sections
1. **Breadcrumb Navigation** - Shows Home / Sell Equipment path
2. **Page Title** - "Sell Equipment" heading
3. **Form Card** - Main container for the form
4. **Additional Details Modal** - Slide-in modal for additional equipment details

---

## Form Sections

### 1. Photos Section
**Component Used:** `ImageUpload`
- **Variant:** `drag-drop`
- **Props:**
  - `maxImages`: 10
  - `onImagesChange`: Handler function to update form state
- **Features:**
  - Drag and drop functionality
  - Multiple image upload (up to 10 images)
  - Image preview with remove functionality
  - Upload states: empty, uploading, uploaded, error

### 2. Equipment Details Section
Contains the following fields in a responsive grid layout:

#### Serial Number
- **Component:** `Input`
- **Variant:** `enabled`
- **Type:** text
- **Required:** No

#### Category
- **Component:** `Select`
- **Variant:** `default` or `error` (when validation fails)
- **Options:** 
  - Excavators
  - Bulldozers
  - Loaders
  - Cranes
  - Compactors
- **Required:** Yes
- **Validation:** Shows error message if empty

#### Manufacturer
- **Component:** `Input`
- **Variant:** `enabled` or `error` (when validation fails)
- **Type:** text
- **Placeholder:** "e.g., Caterpillar"
- **Required:** Yes
- **Validation:** Shows error message if empty

#### Model
- **Component:** `Input`
- **Variant:** `enabled` or `error` (when validation fails)
- **Type:** text
- **Placeholder:** "e.g., 320D"
- **Required:** Yes
- **Validation:** Shows error message if empty

#### Year
- **Component:** `Input`
- **Variant:** `enabled`
- **Type:** text
- **Placeholder:** "2020"
- **Required:** No

#### Hours
- **Component:** `Input`
- **Variant:** `enabled`
- **Type:** text
- **Placeholder:** "5000"
- **Required:** No

#### Condition
- **Component:** `Select`
- **Variant:** `default`
- **Options:**
  - Excellent
  - Good
  - Fair
  - Poor
- **Required:** No

#### Location
- **Component:** `Input`
- **Variant:** `enabled`
- **Type:** text
- **Placeholder:** "City, State, Country"
- **Required:** No

#### Description
- **Component:** `Textarea`
- **Variant:** `default`
- **Props:**
  - `autoGrow`: true
  - `rows`: 4
- **Placeholder:** "Describe the equipment, its condition, any recent maintenance, etc."
- **Required:** No

### 3. Listing Type Section
- **Component:** `Select`
- **Variant:** `default`
- **Options:**
  - Direct Sale (default: id: 1)
  - Auction (id: 2)
  - Rent (id: 3)
- **Required:** No
- **Default Value:** 1 (Direct Sale)

### 4. Upload Documents Section
Two upload buttons in a responsive grid:

#### Inspection Report
- **Component:** `UploadButton`
- **Variant:** `secondary`
- **Label:** "Upload Inspection Report"
- **Subtext:** "Max 5MB, (PDF or PNG)"
- **Icon:** ReportIcon (SVG)
- **Accept:** `.pdf,.png`
- **Handler:** `handleFileSelect('inspectionReport', file)`

#### Repair History
- **Component:** `UploadButton`
- **Variant:** `secondary`
- **Label:** "Upload Repair History"
- **Subtext:** "Max 5MB, (PDF or PNG)"
- **Icon:** HistoryIcon (SVG)
- **Accept:** `.pdf,.png`
- **Handler:** `handleFileSelect('repairHistory', file)`

### 5. Additional Details Section
- **Component:** `Button`
- **Variant:** `tertiary`
- **Custom Styling:** 
  - Rounded full (`rounded-[48px]`)
  - Border with custom colors
  - Includes Plus icon
- **Action:** Opens Additional Details Modal
- **Info Text:** Explains benefits of adding more details

### 6. Price Section
#### Price Input
- **Component:** `Input`
- **Variant:** `enabled` or `error` (when validation fails)
- **Type:** text
- **Placeholder:** "Enter price"
- **Prefix:** $ (USD symbol)
- **Required:** Yes
- **Validation:** Shows error message if empty

#### Negotiable Checkbox
- **Component:** `Checkbox`
- **Variant:** `toggle`
- **Label:** "Price is negotiable"
- **Type:** Toggle switch style checkbox

### 7. Submit Button
- **Component:** `Button`
- **Variant:** `primary`
- **Custom Styling:**
  - Yellow background (`#FFC733`)
  - Full width on mobile, auto width on desktop
  - Rounded full
  - Text: "Publish Listing"

---

## Additional Details Modal

### Modal Structure
- **Position:** Fixed overlay, slides in from the right
- **Width:** 
  - Full width on mobile
  - 600px on tablet (`sm:w-[600px]`)
  - 638px on desktop (`lg:w-[638px]`)
- **Background:** White with shadow

### Modal Header
- **Title:** "Add Additional Details"
- **Close Button:** X icon with hover effects

### Tabs
Four tabs available (currently only "General" is implemented):
1. **General** (implemented)
2. **Attachments** (placeholder)
3. **Capacities** (placeholder)
4. **Category Specific** (placeholder)

### General Tab Fields

#### Idle Hours
- **Component:** `Input`
- **Variant:** `enabled`
- **Type:** text

#### Hours Meter
- **Component:** `Select`
- **Variant:** `default`
- **Options:**
  - Operating Hours
  - Engine Hours
  - Total Hours

#### Generation / Build Number
- **Component:** `Input`
- **Variant:** `enabled`
- **Type:** text
- **Placeholder:** "e.g., Caterpillar"

#### Product Configuration
- **Component:** `Input`
- **Variant:** `enabled`
- **Type:** text
- **Placeholder:** "e.g., 3200"

### Modal Footer
- **Cancel Button:**
  - **Component:** `Button`
  - **Variant:** `tertiary`
  - **Custom Styling:** Gray background (`#F4F6F7`)
  
- **Continue Button:**
  - **Component:** `Button`
  - **Variant:** `primary`
  - **Custom Styling:** Yellow background (`#FFC733`)
  - **Action:** Saves additional details to form data and closes modal

---

## Component Variants Used

### Card Component
- **Variant:** `default`
  - White background
  - Shadow effect
  - Rounded corners (16px)
  - Padding included

### Input Component
Available variants used:
- **`enabled`** - Default enabled state
  - Background: `#F4F6F7`
  - Border: `#E6E9EB`
  - Text: `#898D8F`
  - Hover: White background, darker border
  - Focus: White background, accent border with shadow

- **`error`** - Error state
  - Border: 2px solid `#FF9175`
  - Background: `#FFF3F0`
  - Text: `#898D8F`
  - Focus: Ring with error color

### Select Component
Available variants used:
- **`default`** - Default state
  - Background: `#F4F6F7`
  - Border: `#E6E9EB`
  - Hover: White background
  - Focus: Accent border with shadow

- **`error`** - Error state
  - Border: 2px solid `#FF9175`
  - Background: `#FFF3F0`
  - Focus: Ring with error color

### Textarea Component
Available variants used:
- **`default`** - Default state
  - Background: White
  - Border: `#E6E9EB`
  - Hover: Darker border
  - Focus: Accent border with shadow
  - Auto-grow functionality available

### Button Component
Available variants used:
- **`primary`** - Primary action button
  - Background: `#FFB703` (yellow)
  - Text: `#2C2C2C` (dark gray)
  - Hover: Slightly darker yellow

- **`tertiary`** - Tertiary action button
  - Background: White
  - Text: `#3B3D5E`
  - Hover: Gray background with shadow

### Checkbox Component
Available variants used:
- **`toggle`** - Toggle switch style
  - Background: `#E6E9EB` (unchecked) / `#FFB703` (checked)
  - Thumb: `#C1C4C6` (unchecked) / White (checked)
  - Smooth transition animation

### ImageUpload Component
Available variants used:
- **`drag-drop`** - Drag and drop functionality
  - Upload box with dashed border
  - Drag over states
  - Image preview grid
  - Remove functionality on hover

### UploadButton Component
Available variants used:
- **`secondary`** - Secondary upload button
  - Background: `#F4F6F7`
  - Hover: `#E8EBEB`
  - Icon support
  - Label and subtext support

### FormSection Component
- **Purpose:** Wraps form fields with optional title and description
- **Styling:** Consistent spacing and typography

### Label Component
- **Features:**
  - Required indicator support (`required` prop)
  - Consistent typography
  - Accessible HTML for attribute linking

---

## State Management

### Form Data State
```javascript
{
  serialNumber: string,
  category: string,
  manufacturer: string,
  model: string,
  year: string,
  hours: string,
  condition: string,
  location: string,
  description: string,
  listingType: number (default: 1),
  price: string,
  isNegotiable: boolean,
  inspectionReport: File | null,
  repairHistory: File | null,
  additionalDetails: object | null,
  images: array
}
```

### Additional Details State
```javascript
{
  idleHours: string,
  hoursMeter: string,
  generationBuildNumber: string,
  productConfiguration: string
}
```

### Other State
- **errors:** Object containing validation error messages
- **showAdditionalDetailsModal:** Boolean for modal visibility
- **activeTab:** String for modal tab selection ('general', 'attachments', 'capacities', 'categorySpecific')

---

## Validation

### Required Fields
1. Category
2. Manufacturer
3. Model
4. Price

### Error Handling
- Errors are displayed below each field
- Error styling applied to input/select components
- Errors clear when user starts typing

---

## Form Submission

### Submit Handler
- **Function:** `handleSubmit(e)`
- **Actions:**
  1. Prevents default form submission
  2. Validates required fields
  3. Sets error state if validation fails
  4. Logs form data to console (to be replaced with actual API call)
  5. Should navigate or show success message (currently commented)

---

## Styling Notes

### Design System
- **Colors:**
  - Primary Yellow: `#FFB703`, `#FFC733`
  - Text Primary: `#131214`
  - Text Secondary: `#6E7375`, `#898D8F`
  - Background: `#F9FAFB`
  - Border: `#E6E9EB`, `#DADDDE`
  - Error: `#FF9175`

- **Typography:**
  - Font Family: Inter
  - Font Sizes: 12px, 14px, 16px, 20px, 32px
  - Font Weights: normal, medium, bold

- **Spacing:**
  - Consistent use of Tailwind spacing scale
  - Responsive padding and margins

- **Border Radius:**
  - Inputs/Selects: 8px
  - Cards: 16px
  - Buttons: Full rounded (48px) or standard rounded

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - `sm:` 640px and up
  - `lg:` 1024px and up
- Grid layouts adjust from 1 column (mobile) to 2 columns (desktop)
- Modal width adjusts for different screen sizes

---

## Future Enhancements (Placeholders)

### Additional Details Modal Tabs
1. **Attachments** - Currently shows "Attachments content coming soon"
2. **Capacities** - Currently shows "Capacities content coming soon"
3. **Category Specific** - Currently shows "Category Specific content coming soon"

---

## File Locations

### Main Page
- `src/pages/SellEquipment.jsx`

### Components Used
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/components/MobileBottomNav.jsx`
- `src/components/Button.jsx`
- `src/components/Input.jsx`
- `src/components/Label.jsx`
- `src/components/form/Card.jsx`
- `src/components/form/FormSection.jsx`
- `src/components/form/Select.jsx`
- `src/components/form/Textarea.jsx`
- `src/components/form/Checkbox.jsx`
- `src/components/form/UploadButton.jsx`
- `src/components/form/ImageUpload.jsx`
- `src/components/form/InfoAlert.jsx` (imported but not used)

### Assets
- `src/assets/listing/report.svg` (ReportIcon)
- `src/assets/listing/history.svg` (HistoryIcon)
- `src/assets/listing/plus.svg` (PlusIcon)

---

## Dependencies

### React Hooks Used
- `useState` - For all state management
- React Router `Link` - For navigation

### External Libraries
- `@headlessui/react` - Used by Select component for dropdown functionality
- `@heroicons/react` - Used by Select component for icons

---

## Notes
- Form submission currently only logs to console - API integration pending
- Additional Details Modal tabs for Attachments, Capacities, and Category Specific are placeholders
- Image upload includes simulated upload delay (500ms) - should be replaced with actual upload logic
- File size limits for document uploads are mentioned in UI but not enforced in code (Max 5MB)
- All validation is client-side only

