# Account Page - Component Structure

## 📁 Component Organization

### **Reusable UI Components** (in `src/components/`)
- `Input.jsx` - Reusable input field with read-only/editable variants
- `Label.jsx` - Form label component with optional required indicator
- `Card.jsx` - Container component with optional padding
- `Avatar.jsx` - Profile picture component with multiple sizes
- `Badge.jsx` - Badge component with multiple variants (verified, success, etc.)
- `Button.jsx` - Already exists (6 variants: primary, secondary, tertiary, outline, link, visit)

### **Account-Specific Components** (in `src/components/account/`)
- `UserProfile.jsx` - User profile section (avatar, name, joined date, verified badge)
- `MenuItem.jsx` - Reusable menu item component with icon and active state
- `AccountSidebar.jsx` - Sidebar component with user profile and navigation menu
- `VerificationBanner.jsx` - Alert-style verification banner
- `ReadOnlyField.jsx` - Read-only form field component
- `EditableField.jsx` - Editable form field with edit/save/cancel flow
- `ProfileField.jsx` - Wrapper component that switches between read-only/editable
- `PersonalInfoForm.jsx` - Form component for editing personal information
- `AccountContent.jsx` - Main content area with profile sections
- `AccountLayout.jsx` - Two-column layout wrapper (sidebar + content)

### **Page Component** (in `src/pages/`)
- `MyAccount.jsx` - Main account page component

---

## 🎯 Component Hierarchy

```
MyAccount (Page)
  └── AccountLayout
       ├── AccountSidebar
       │    ├── UserProfile
       │    │    ├── Avatar
       │    │    ├── Badge (verified)
       │    │    └── Button (edit store)
       │    └── MenuItem (multiple instances)
       │         └── React Icons
       └── AccountContent
            ├── VerificationBanner
            │    └── Button (start now)
            ├── Card (Photo Upload)
            │    └── Avatar
            ├── Card (Personal Information)
            │    ├── PersonalInfoForm (when editing)
            │    │    ├── Label
            │    │    ├── Input
            │    │    └── Button
            │    └── ProfileField (when viewing)
            │         └── ReadOnlyField
            │              ├── Label
            │              └── Input
            ├── Card (Email)
            │    └── ProfileField
            │         └── ReadOnlyField
            └── Card (Mobile Number)
                 └── ProfileField
                      └── ReadOnlyField
```

---

## 🔌 API Integration Points

All handlers in `MyAccount.jsx` are ready for API integration:

1. **Photo Upload** (`handlePhotoUpload`)
   - Receives File object
   - Validates file size (max 5MB) and type (JPG/PNG)
   - Ready for FormData upload

2. **Personal Info Save** (`handlePersonalInfoSave`)
   - Receives `{ firstName, lastName }` object
   - Ready for PUT/PATCH request

3. **Verification Start** (`handleVerificationStart`)
   - Ready for navigation or modal trigger

4. **Edit Store** (`handleEditStore`)
   - Ready for navigation or modal trigger

5. **Logout** (`handleLogout`)
   - Ready for authentication cleanup and redirect

---

## 🎨 Styling Patterns

- **Colors**: Uses brand color `#FFB703` for primary actions
- **Spacing**: Consistent spacing using Tailwind utilities
- **Responsive**: Mobile-first approach, stacked on mobile, side-by-side on desktop
- **Typography**: Inter font family, consistent font weights and sizes

---

## 📝 Usage Example

```jsx
// Navigate to /account
<Link to="/account">My Account</Link>

// Or programmatically
navigate('/account')
```

---

## ✨ Features

✅ Component-based architecture
✅ Reusable components
✅ Props-based configuration
✅ Responsive design (mobile/desktop)
✅ Form validation
✅ Edit/view mode toggle
✅ Active state styling
✅ Ready for API integration
✅ Consistent styling with existing codebase

---

## 🔄 State Management

- Uses React hooks (`useState`) for local component state
- State is lifted to `MyAccount` page component
- All handlers accept callback props for API integration
- No global state management required (can be added later if needed)

---

*Generated: Account Page Component Structure Documentation*

