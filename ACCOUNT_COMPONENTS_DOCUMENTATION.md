# Account Components Documentation

## Overview
This document provides comprehensive documentation for all account-related components in the EZ-Trade Machinery application, including their structure, variants, props, and usage examples.

---

## Component Structure

### Directory: `src/components/account/`

The account module consists of the following components:

1. **AccountLayout.jsx** - Main layout wrapper
2. **AccountSidebar.jsx** - Sidebar navigation component
3. **AccountContent.jsx** - Main content area component
4. **UserProfile.jsx** - User profile display component
5. **MenuItem.jsx** - Navigation menu item component
6. **NotificationCard.jsx** - Notification card component
7. **EditableField.jsx** - Editable form field component
8. **ReadOnlyField.jsx** - Read-only form field component
9. **ProfileField.jsx** - Flexible profile field wrapper
10. **VerificationBanner.jsx** - Account verification banner
11. **PersonalInfoForm.jsx** - Personal information form
12. **PhotoUpload.jsx** - Photo upload component
13. **ChangePassword.jsx** - Change password form
14. **NotificationsContent.jsx** - Notifications page content

---

## Component Details

### 1. AccountLayout

**Purpose**: Main layout wrapper that provides the account page structure with sidebar and content areas.

**Props**:
- `sidebarProps` (object, optional): Props to pass to AccountSidebar
- `contentProps` (object, optional): Props to pass to AccountContent
- `children` (ReactNode, optional): Custom content to render instead of AccountContent
- `className` (string, optional): Additional CSS classes

**Structure**:
- Responsive grid layout (1 column on mobile, 4 columns on desktop)
- Sidebar takes 1 column, content takes 3 columns on desktop
- Background: `bg-[#F8F9FA]`
- Max width: `1440px` with responsive padding

**Usage Example**:
```jsx
<AccountLayout
  sidebarProps={{
    user: { name: 'John', avatar: null, joinedDate: 'Jan 2023', isVerified: true },
    activeItem: 'notifications',
    onEditStore: handleEditStore,
    onLogout: handleLogout
  }}
  contentProps={{
    user: { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    onPhotoUpload: handlePhotoUpload
  }}
/>
```

---

### 2. AccountSidebar

**Purpose**: Left sidebar navigation with user profile and menu items.

**Props**:
- `user` (object, optional): User object with `name`, `avatar`, `joinedDate`, `isVerified`
- `activeItem` (string, optional): Currently active menu item ID
- `onEditStore` (function, optional): Handler for edit store button
- `onLogout` (function, optional): Handler for logout action
- `className` (string, optional): Additional CSS classes

**Menu Items**:
- **Account Settings Section**:
  - Notifications (`/account/notifications`)
  - Change password (`/account/change-password`)
  - My Ads (`/account/my-ads`)
  - Want to Buy (`/account/want-to-buy`)
- **More Section**:
  - Help and support (`/account/help`)
  - Terms and conditions (`/account/terms`)
  - Privacy policy (`/account/privacy`)
- **Logout** (button, no route)

**Structure**:
- White background card with rounded corners
- UserProfile component at top
- Two menu sections with borders
- Logout button at bottom

---

### 3. UserProfile

**Purpose**: Displays user profile information in the sidebar.

**Props**:
- `name` (string, default: 'Anwar'): User's display name
- `avatar` (string, optional): Avatar image URL
- `joinedDate` (string, default: 'Jan 2023'): Member since date
- `isVerified` (boolean, default: true): Verification status
- `onEditStore` (function, optional): Handler for edit store button
- `className` (string, optional): Additional CSS classes

**Features**:
- Avatar display (uses Avatar component with size "xl")
- Name display (2xl, bold, Inter font)
- Member since date
- Verified badge (conditional, uses Badge component)
- Edit store button (conditional)

**Usage Example**:
```jsx
<UserProfile
  name="John Doe"
  avatar="/path/to/avatar.jpg"
  joinedDate="Jan 2023"
  isVerified={true}
  onEditStore={() => console.log('Edit store')}
/>
```

---

### 4. MenuItem

**Purpose**: Individual navigation menu item with icon, label, and active state.

**Props**:
- `icon` (string/ReactNode, required): Icon (SVG import or React component)
- `label` (string, required): Menu item label
- `to` (string, optional): Route path (uses React Router Link)
- `onClick` (function, optional): Click handler (renders as button)
- `isActive` (boolean, default: false): Active state
- `variant` (string, optional): 'active' or 'inactive' (overrides isActive)
- `className` (string, optional): Additional CSS classes

**Variants**:
- **active**: `bg-[#FAEFCC]/70 text-[#6E7375]` (light yellow background)
- **inactive**: `text-[#6E7375] hover:bg-gray-100` (gray text with hover)

**Behavior**:
- If `onClick` provided → renders as button
- If `to` provided → renders as Link
- Otherwise → renders as div
- Automatically detects active state from `useLocation()` if `to` is provided
- Shows chevron icon on the right

**Usage Example**:
```jsx
<MenuItem
  icon={notificationIcon}
  label="Notifications"
  to="/account/notifications"
  isActive={true}
/>
```

---

### 5. NotificationCard

**Purpose**: Displays individual notification with icon, heading, message, and timestamp.

**Props**:
- `icon` (ReactNode, required): Icon component/element
- `iconBgColor` (string, default: 'bg-blue-500'): Background color for icon circle
- `heading` (string, optional): Notification heading
- `message` (string, required): Notification message
- `timestamp` (string, required): Time display (e.g., "5 minutes ago")
- `isUnread` (boolean, default: false): Unread status (backward compatibility)
- `variant` (string, optional): 'read' or 'unread' (takes precedence over isUnread)
- `className` (string, optional): Additional CSS classes

**Variants**:

1. **unread**:
   - Container: `bg-[#FFFFFF] rounded-[14px] border border-[#DADDDE]`
   - Heading: `text-[#2C2C2C] font-inter text-base font-bold`
   - Message: `text-[#4A5565] font-inter text-sm font-normal`
   - Timestamp: `text-[#6A7282] font-inter text-sm font-normal`
   - Shows yellow dot indicator (`bg-[#FFB703]`)

2. **read**:
   - Container: `rounded-[14px] border border-[#F3F4F6] bg-[#F4F6F7]`
   - Same text styles as unread
   - No indicator dot

**Structure**:
- Flex layout with icon on left, content in middle, timestamp/indicator on right
- Icon in circular background (40x40px)
- Hover effect: `hover:shadow-md transition-shadow`
- Cursor pointer

**Usage Example**:
```jsx
<NotificationCard
  icon={<FaComment className="w-5 h-5 text-white" />}
  iconBgColor="bg-blue-500"
  heading="New message from David Chen"
  message="Hi, I'm interested in your equipment..."
  timestamp="5 minutes ago"
  variant="unread"
/>
```

---

### 6. EditableField

**Purpose**: Form field that can toggle between read-only and edit modes.

**Props**:
- `label` (string, optional): Field label
- `value` (string, required): Current field value
- `onSave` (function, optional): Handler called when saving (receives new value)
- `onCancel` (function, optional): Handler called when canceling
- `type` (string, default: 'text'): Input type
- `placeholder` (string, optional): Input placeholder
- `required` (boolean, default: false): Whether field is required
- `validation` (function, optional): Validation function (returns error string or null)
- `className` (string, optional): Additional CSS classes

**States**:
- **Read-only mode**: Shows Input with readOnly, Edit button
- **Edit mode**: Shows Input with edit controls, Save/Cancel buttons

**Features**:
- Internal state management for edit mode
- Validation support
- Error display
- Required field validation

**Usage Example**:
```jsx
<EditableField
  label="Email"
  value="user@example.com"
  type="email"
  onSave={(newValue) => console.log('Save:', newValue)}
  onCancel={() => console.log('Canceled')}
  validation={(value) => {
    if (!value.includes('@')) return 'Invalid email'
    return null
  }}
/>
```

---

### 7. ReadOnlyField

**Purpose**: Read-only form field with optional icon.

**Props**:
- `label` (string, optional): Field label
- `value` (string, required): Field value
- `icon` (ReactNode, optional): Icon to display on the left
- `className` (string, optional): Additional CSS classes

**Structure**:
- Label (if provided)
- Input with readOnly prop
- Optional icon positioned absolutely on the left
- Icon adds left padding (`pl-12`) to input

**Usage Example**:
```jsx
<ReadOnlyField
  label="Email"
  value="user@example.com"
  icon={<FaEnvelope className="w-4 h-4 text-gray-400" />}
/>
```

---

### 8. ProfileField

**Purpose**: Flexible wrapper that renders either EditableField or ReadOnlyField based on props.

**Props**:
- `label` (string, optional): Field label
- `value` (string, required): Field value
- `editable` (boolean, default: false): Whether field is editable
- `readOnly` (boolean, default: false): Whether field is read-only
- `onSave` (function, optional): Save handler (for editable)
- `onCancel` (function, optional): Cancel handler (for editable)
- `type` (string, default: 'text'): Input type
- `placeholder` (string, optional): Input placeholder
- `icon` (ReactNode, optional): Icon (for read-only)
- `className` (string, optional): Additional CSS classes
- `...props` (object): Additional props passed to EditableField

**Behavior**:
- If `readOnly` is true → renders ReadOnlyField
- If `editable` is true → renders EditableField
- Otherwise → renders ReadOnlyField (default)

**Usage Example**:
```jsx
<ProfileField
  label="First Name"
  value="John"
  editable={true}
  onSave={(value) => updateUser(value)}
  onCancel={() => console.log('Canceled')}
/>
```

---

### 9. VerificationBanner

**Purpose**: Banner prompting users to verify their account.

**Props**:
- `status` (string, default: 'incomplete'): 'complete' or 'incomplete'
- `message` (string, default: 'Verify your account...'): Banner message
- `buttonText` (string, default: 'Start Now'): Button text
- `onClick` (function, optional): Button click handler
- `className` (string, optional): Additional CSS classes

**Behavior**:
- If `status === 'complete'` → returns null (doesn't render)
- Otherwise → renders banner with gradient background

**Styling**:
- Gradient background: `from-[rgba(246,184,0,0.2)] to-[rgba(217,165,0,0.2)]`
- Yellow/amber theme
- Responsive layout (flex column on mobile, row on desktop)
- Button uses `variant="verification"` (dark background)

**Usage Example**:
```jsx
<VerificationBanner
  status="incomplete"
  message="Verify your account to publish listings and access all features."
  buttonText="Start Now"
  onClick={() => navigate('/verify')}
/>
```

---

### 10. PersonalInfoForm

**Purpose**: Form for editing first name and last name.

**Props**:
- `initialData` (object, default: { firstName: 'Alex', lastName: 'Paul' }): Initial form values
- `onSave` (function, optional): Save handler (receives form data object)
- `onCancel` (function, optional): Cancel handler
- `className` (string, optional): Additional CSS classes

**Features**:
- Two-column grid layout (responsive)
- Form validation (required fields)
- Error display
- Save button aligned to bottom
- Cancel button in header

**Form Fields**:
- First Name (required)
- Last Name (required)

**Usage Example**:
```jsx
<PersonalInfoForm
  initialData={{ firstName: 'John', lastName: 'Doe' }}
  onSave={(data) => {
    console.log('Save:', data.firstName, data.lastName)
  }}
  onCancel={() => console.log('Canceled')}
/>
```

---

### 11. PhotoUpload

**Purpose**: Component for uploading and displaying user profile photo.

**Props**:
- `currentPhoto` (string, optional): Current photo URL
- `onPhotoUpload` (function, optional): Handler called with File object when photo is selected
- `className` (string, optional): Additional CSS classes

**Features**:
- File validation (max 5MB, JPG/PNG only)
- Image preview
- Circular display (96x96px)
- Upload icon when no photo
- File input hidden, triggered by label click

**Validation**:
- Max file size: 5MB
- Allowed types: `image/jpeg`, `image/jpg`, `image/png`

**Usage Example**:
```jsx
<PhotoUpload
  currentPhoto={user.avatar}
  onPhotoUpload={(file) => {
    // Upload to server
    uploadToServer(file)
  }}
/>
```

---

### 12. ChangePassword

**Purpose**: Form for changing user password.

**Props**:
- `onSubmit` (function, optional): Submit handler (receives form data object)
- `className` (string, optional): Additional CSS classes

**Form Fields**:
- Current Password (with show/hide toggle)
- New Password (with show/hide toggle)
- Confirm New Password (with show/hide toggle)

**Features**:
- Password visibility toggles (eye icons)
- All fields use `variant="enabled"` Input
- Form width: `w-auto lg:w-[365px]` (centered)
- Submit button with `variant="primary"`

**Form Data Structure**:
```javascript
{
  currentPassword: string,
  newPassword: string,
  confirmPassword: string
}
```

**Usage Example**:
```jsx
<ChangePassword
  onSubmit={(data) => {
    // data.currentPassword, data.newPassword, data.confirmPassword
    changePassword(data)
  }}
/>
```

---

### 13. AccountContent

**Purpose**: Main content area for account page with profile information and forms.

**Props**:
- `user` (object, optional): User object with `firstName`, `lastName`, `email`, `phone`, `avatar`, `isVerified`
- `onPhotoUpload` (function, optional): Photo upload handler
- `onPersonalInfoSave` (function, optional): Personal info save handler
- `onVerificationStart` (function, optional): Verification start handler
- `className` (string, optional): Additional CSS classes

**Sections**:
1. **Verification Banner** (hidden on mobile, shown on desktop)
2. **Photo Upload Card**
3. **Personal Information Card** (read-only view with Edit button)
4. **Email Card** (editable with Edit button)
5. **Mobile Number Card** (editable with country code selector)
6. **Personal Information Form Card** (always visible, editable form)

**Features**:
- Multiple Card components for section separation
- Edit mode toggles for different sections
- Country code selector for phone (Australia +61, with flag)
- Responsive grid layouts

**Usage Example**:
```jsx
<AccountContent
  user={{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+61 93847299898',
    avatar: '/path/to/avatar.jpg',
    isVerified: false
  }}
  onPhotoUpload={handlePhotoUpload}
  onPersonalInfoSave={handlePersonalInfoSave}
  onVerificationStart={handleVerificationStart}
/>
```

---

### 14. NotificationsContent

**Purpose**: Content component for the notifications page with search and filter.

**Props**:
- `className` (string, optional): Additional CSS classes

**Features**:
- Search bar with search icon
- Filter dropdown (All, Messages, Offers, Price Alerts, etc.)
- List of NotificationCard components
- Sample notifications data included

**Filter Options**:
- All
- Messages
- Offers
- Price Alerts
- Approvals
- Favorites
- Verification

**Usage Example**:
```jsx
<NotificationsContent />
```

---

## Component Relationships

### Hierarchy

```
MyAccount (Page)
  └── AccountLayout
       ├── AccountSidebar
       │    ├── UserProfile
       │    │    ├── Avatar
       │    │    └── Badge (verified)
       │    └── MenuItem (multiple)
       └── AccountContent
            ├── VerificationBanner
            ├── PhotoUpload
            ├── ProfileField (multiple)
            │    ├── EditableField
            │    └── ReadOnlyField
            └── PersonalInfoForm
```

### Data Flow

1. **MyAccount** page manages user state
2. Passes user data and handlers to **AccountLayout**
3. **AccountLayout** distributes props to **AccountSidebar** and **AccountContent**
4. Components use callbacks to update parent state
5. Form components handle their own internal state and call parent handlers on submit

---

## Styling Conventions

### Colors
- Background: `#F8F9FA` (light gray)
- Primary: `#FFB703` (yellow/gold)
- Text Primary: `#131214`, `#1A1C1E`, `#2C2C2C`
- Text Secondary: `#4A5565`, `#6A7282`, `#6E7375`
- Borders: `#DADDDE`, `#F3F4F6`, `#F4F6F7`

### Typography
- Font Family: Inter (`font-inter`)
- Headings: Bold, various sizes (text-lg, text-2xl)
- Body: Normal weight, text-sm, text-base

### Spacing
- Cards: `p-6` (padding)
- Sections: `space-y-4`, `space-y-6` (vertical spacing)
- Grid gaps: `gap-4`, `gap-6`

### Borders & Radius
- Cards: `rounded-lg`, `rounded-md`
- Buttons: `rounded-full`, `rounded-[48px]`
- Inputs: `rounded-[8px]`, `rounded-[14px]`

---

## Usage Patterns

### Creating a New Account Page

1. Create page component in `src/pages/`
2. Use `AccountLayout` as wrapper
3. Pass user data and handlers
4. Optionally provide custom content as children

```jsx
import AccountLayout from '../components/account/AccountLayout'

const MyNewAccountPage = () => {
  const [user, setUser] = useState({...})
  
  return (
    <AccountLayout
      sidebarProps={{ user, activeItem: 'my-new-page' }}
    >
      <CustomContent />
    </AccountLayout>
  )
}
```

### Adding a New Menu Item

Edit `AccountSidebar.jsx` and add to `accountMenuItems` or `moreMenuItems`:

```jsx
{
  id: 'my-new-item',
  icon: myNewIcon,
  label: 'My New Item',
  to: '/account/my-new-item'
}
```

### Creating a Custom Field

Use `ProfileField` for flexibility:

```jsx
<ProfileField
  label="Custom Field"
  value={value}
  editable={isEditing}
  onSave={handleSave}
  type="text"
/>
```

---

## Best Practices

1. **State Management**: Keep user data in parent component (MyAccount)
2. **Props Drilling**: Use AccountLayout to distribute props
3. **Variants**: Use variant props for styling (e.g., NotificationCard, MenuItem)
4. **Validation**: Implement validation in EditableField or form components
5. **Responsive Design**: Use Tailwind responsive classes (sm:, lg:)
6. **Accessibility**: Include proper labels, ARIA attributes where needed
7. **Error Handling**: Display errors inline with form fields

---

## Dependencies

### External Libraries
- React Router (`react-router-dom`) - for navigation
- React Icons (`react-icons/fa`) - for icons
- Heroicons (`@heroicons/react`) - for additional icons

### Internal Components
- Button
- Input
- Label
- Card
- Avatar
- Badge

---

## File Structure

```
src/
  components/
    account/
      ├── AccountLayout.jsx
      ├── AccountSidebar.jsx
      ├── AccountContent.jsx
      ├── UserProfile.jsx
      ├── MenuItem.jsx
      ├── NotificationCard.jsx
      ├── EditableField.jsx
      ├── ReadOnlyField.jsx
      ├── ProfileField.jsx
      ├── VerificationBanner.jsx
      ├── PersonalInfoForm.jsx
      ├── PhotoUpload.jsx
      ├── ChangePassword.jsx
      └── NotificationsContent.jsx
  pages/
    ├── MyAccount.jsx
    ├── Notifications.jsx
    └── ChangePassword.jsx
```

---

## Notes

- All components use functional components with hooks
- Styling uses Tailwind CSS utility classes
- Components are designed to be reusable and composable
- Variant system allows for flexible styling without prop explosion
- Backward compatibility maintained (e.g., NotificationCard supports both `isUnread` and `variant`)

