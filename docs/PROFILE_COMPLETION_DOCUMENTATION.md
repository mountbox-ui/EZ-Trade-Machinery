# Profile Completion Page Documentation

## Overview

The Profile Completion page allows users to complete their business profile by providing company information, contact details, and uploading required documents for verification. The page features a clean, centered layout without a sidebar, making it focused and user-friendly.

**Route:** `/account/profile-completion`

---

## File Structure

```
src/profile-completion/
├── ProfileCompletion.jsx          # Main page component
├── ProfileCompletionContent.jsx   # Form content component
└── FileUpload.jsx                 # File upload component
```

---

## Components

### 1. ProfileCompletion

The main page component that wraps the entire profile completion experience.

**Location:** `src/profile-completion/ProfileCompletion.jsx`

**Features:**
- Navbar integration
- Breadcrumb navigation
- Centered content layout (max-width: 790px)
- Footer and mobile bottom navigation
- Responsive design

**Structure:**
```jsx
<ProfileCompletion>
  <Navbar />
  <Breadcrumb />
  <Title />
  <ContentCard>
    <ProfileCompletionContent />
  </ContentCard>
  <Footer />
  <MobileBottomNav />
</ProfileCompletion>
```

**Styling:**
- Background: `#F8F9FA`
- Content card: White with rounded corners (`rounded-[16px]`)
- Shadow: `0_0_1px_rgba(20,20,20,0.12),_0_8px_16px_8px_rgba(20,20,20,0.04)`
- Max width: `790px` (centered)
- Padding: `p-4 sm:p-6` (responsive)

---

### 2. ProfileCompletionContent

The form component containing all input fields and validation logic.

**Location:** `src/profile-completion/ProfileCompletionContent.jsx`

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | `''` | Additional CSS classes |

**State Management:**
```javascript
const [formData, setFormData] = useState({
  companyName: '',
  websiteUrl: '',
  email: '',
  businessRegistrationNumber: '',
  phone: '',
  businessAddress: '',
  idProof: null,
  businessDocument: null
})

const [errors, setErrors] = useState({})
```

**Form Fields:**

#### Left Column:
1. **Company / Business Name** (Optional)
   - Type: Text input
   - Placeholder: "Optional for individual sellers"
   - Variant: `enabled`

2. **Website URL** (Optional)
   - Type: URL input
   - Placeholder: "http://www.example.com"
   - Variant: `enabled`

3. **Email Address** (Required)
   - Type: Email input
   - Placeholder: "john@example.com"
   - Variant: `enabled` or `error`
   - Validation: Email format validation

4. **Upload ID Proof** (Required)
   - Component: `FileUpload`
   - Description: "Driver's license, passport, or government ID"
   - Accept: `image/jpeg,image/jpg,image/png`
   - Max size: 5MB

5. **Upload Business Document** (Optional)
   - Component: `FileUpload`
   - Description: "Business license, tax certificate, or registration (if applicable)"
   - Accept: `image/jpeg,image/jpg,image/png`
   - Max size: 5MB

6. **Tip Box**
   - Background: `#EFF6FF`
   - Border: `#BEDBFF`
   - Icon: Lightbulb (`#f1d17a`)
   - Text color: `#1C398E`

#### Right Column:
1. **Business Registration Number** (Optional)
   - Type: Text input
   - Placeholder: "If applicable"
   - Variant: `enabled`

2. **Phone Number** (Required)
   - Type: Tel input
   - Placeholder: "+1 (555) 123-4567"
   - Variant: `enabled` or `error`
   - Validation: Required field

3. **Business Address** (Required)
   - Type: Text input
   - Placeholder: "123 Main Street, City, State, ZIP"
   - Variant: `enabled` or `error`
   - Icon: Map pin (`LuMapPin`)
   - Validation: Required field

**Validation Rules:**
- **Phone Number:** Required (cannot be empty)
- **Business Address:** Required (cannot be empty)
- **ID Proof:** Required (file must be uploaded)
- **Email:** If provided, must be valid email format

**Form Submission:**
- Validates all required fields
- Logs form data to console (TODO: API integration)
- Prevents submission if validation fails

**Layout:**
- Grid: `grid-cols-1 lg:grid-cols-2`
- Gap: `gap-4 sm:gap-6`
- Spacing: `space-y-4 sm:space-y-6`
- First fields padding: `pt-0 lg:pt-9` (desktop only)

---

### 3. FileUpload

A reusable file upload component with validation and visual feedback.

**Location:** `src/profile-completion/FileUpload.jsx`

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | - | Label text for the upload field |
| `description` | string | - | Helper text below the label |
| `accept` | string | `'image/jpeg,image/jpg,image/png'` | Accepted file types (MIME types) |
| `maxSize` | number | `5` | Maximum file size in MB |
| `onFileUpload` | function | - | Callback function when file is selected |
| `className` | string | `''` | Additional CSS classes |
| `required` | boolean | `false` | Whether the field is required |

**Features:**
- File type validation
- File size validation
- Visual feedback (selected file name, error messages)
- Responsive design
- Camera icon with circular background

**Validation:**
- **File Size:** Must be less than `maxSize` MB
- **File Type:** Must match one of the accepted MIME types

**Visual States:**
- **Default:** Gray background (`#F4F6F7`) with camera icon
- **Hover:** Light gray background (`hover:bg-gray-50`)
- **Selected:** Green text showing file name
- **Error:** Red text with error message

**Styling:**
- Container: `bg-[#F4F6F7]`, `rounded-[8px]`
- Icon container: `bg-[#E8EBEB]`, `rounded-full`
- Icon: `IoCameraOutline`, color `#99A1AF`
- Padding: `p-3 sm:p-4` (responsive)
- Icon size: `w-6 h-6 sm:w-8 sm:h-8` (responsive)

**Usage Example:**
```jsx
<FileUpload
  label="Upload ID Proof"
  description="Driver's license, passport, or government ID"
  accept="image/jpeg,image/jpg,image/png"
  maxSize={5}
  onFileUpload={handleFileUpload('idProof')}
  required
/>
```

---

## Input Variants

The form uses the shared `Input` component with the following variants:

### Variant: `enabled`
- Default state for all input fields
- Standard styling with enabled state

### Variant: `error`
- Applied when validation fails
- Shows error styling (typically red border)
- Used for: Email, Phone, Business Address

**Example:**
```jsx
<Input
  variant={errors.email ? 'error' : 'enabled'}
  // ... other props
/>
```

---

## Label Component

Uses the shared `Label` component with optional `required` prop.

**Props:**
- `htmlFor`: Input field ID
- `required`: Boolean to show asterisk (*)

**Example:**
```jsx
<Label htmlFor="email" required>
  Email Address
</Label>
```

---

## Button Component

Uses the shared `Button` component with `primary` variant.

**Props:**
- `type`: `"submit"`
- `variant`: `"primary"`
- `className`: Custom classes for styling

**Styling:**
- Padding: `px-6 sm:px-8 py-3`
- Border radius: `rounded-[48px]`
- Width: `w-full sm:w-[190px]` (responsive)
- Font weight: `!font-bold`

---

## Responsive Design

### Mobile (< 640px)
- Single column layout
- Full-width elements
- Reduced padding and spacing
- Full-width submit button
- Smaller icons and text

### Tablet (640px - 1024px)
- Single column layout
- Medium padding and spacing
- Fixed-width submit button (190px)
- Medium-sized icons

### Desktop (≥ 1024px)
- Two-column grid layout
- Maximum content width: 790px
- Fixed widths for file uploads (350px)
- Top padding on first fields (pt-9)
- Standard spacing and padding

**Breakpoints:**
- `sm:` 640px
- `lg:` 1024px

---

## Form Validation

### Client-Side Validation

**Required Fields:**
- Phone Number
- Business Address
- ID Proof (file upload)

**Format Validation:**
- Email: Must match email regex pattern if provided

**File Validation:**
- File size: Maximum 5MB
- File type: JPG, JPEG, or PNG only

**Error Display:**
- Errors appear below the input field
- Red text color (`text-red-500`)
- Small font size (`text-sm`)

### Validation Flow

1. User interacts with form fields
2. Errors clear when user starts typing/uploading
3. On submit, all fields are validated
4. If validation fails, errors are displayed
5. If validation passes, form data is logged (TODO: API call)

---

## Styling Details

### Colors

**Background:**
- Page: `#F8F9FA`
- Card: `#FFFFFF`
- File upload: `#F4F6F7`
- Icon background: `#E8EBEB`
- Tip box: `#EFF6FF`

**Text:**
- Primary: `#131214`
- Secondary: `#6E7375`
- Error: `#EF4444` (red-500)
- Success: `#16A34A` (green-600)
- Tip box: `#1C398E`

**Borders:**
- Tip box: `#BEDBFF`
- File upload hover: `gray-50`

**Icons:**
- Camera: `#99A1AF`
- Lightbulb: `#f1d17a`
- Map pin: `gray-400`

### Typography

**Font Family:** Inter (`font-inter`)

**Sizes:**
- Title: `text-2xl sm:text-3xl lg:text-[32px]`
- Labels: Default (from Label component)
- Descriptions: `text-sm`
- Error messages: `text-sm`
- File upload text: `text-xs sm:text-sm`

**Weights:**
- Title: `font-bold`
- Submit button: `!font-bold`
- File upload label: `font-semibold`

### Spacing

**Gaps:**
- Grid gap: `gap-4 sm:gap-6`
- Field spacing: `space-y-4 sm:space-y-6`
- Form sections: `mt-6 sm:mt-8`

**Padding:**
- Card: `p-4 sm:p-6`
- File upload: `p-3 sm:p-4`
- Tip box: `p-4`

**Margins:**
- Title: `mb-4 sm:mb-6 lg:mb-8`
- Submit button: `mt-6 sm:mt-8 mb-4`

---

## Usage Example

```jsx
import ProfileCompletion from './profile-completion/ProfileCompletion'

// In App.jsx or router
<Route path="/account/profile-completion" element={<ProfileCompletion />} />
```

---

## Integration Points

### Dependencies

**External Components:**
- `Navbar` from `../components/Navbar`
- `Footer` from `../components/Footer`
- `MobileBottomNav` from `../components/MobileBottomNav`
- `Input` from `../components/Input`
- `Label` from `../components/Label`
- `Button` from `../components/Button`

**Icons:**
- `LuMapPin` from `react-icons/lu`
- `FaLightbulb` from `react-icons/fa`
- `IoCameraOutline` from `react-icons/io5`

**Routing:**
- `Link` from `react-router-dom`

### API Integration (TODO)

The form submission currently logs to console. To integrate with API:

1. Replace `console.log('Form submitted:', formData)` in `handleSubmit`
2. Add API endpoint call
3. Handle loading states
4. Handle success/error responses
5. Add user feedback (toast notifications, etc.)

**Example API Integration:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  if (validate()) {
    try {
      const response = await fetch('/api/profile-completion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        // Handle success
        navigate('/account')
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle network error
    }
  }
}
```

---

## Accessibility

- All form fields have associated labels
- Required fields are marked with asterisks
- Error messages are displayed clearly
- File inputs are accessible via keyboard
- Submit button is properly labeled

---

## Future Enhancements

1. **API Integration:** Connect form submission to backend
2. **File Preview:** Show preview of uploaded images
3. **Progress Indicator:** Show upload progress for files
4. **Auto-save:** Save form data as user types
5. **Address Autocomplete:** Integrate address autocomplete API
6. **Multi-language Support:** Add i18n support
7. **Form Persistence:** Save draft to localStorage

---

## Notes

- The page does not include a sidebar (unlike other account pages)
- Content is centered with a maximum width of 790px
- All file uploads are limited to images (JPG/PNG)
- Form validation is client-side only
- The tip box is positioned in the left column on desktop

---

## Version History

- **v1.0.0** - Initial implementation
  - Created profile-completion folder structure
  - Implemented ProfileCompletion, ProfileCompletionContent, and FileUpload components
  - Added responsive design for mobile, tablet, and desktop
  - Integrated form validation
