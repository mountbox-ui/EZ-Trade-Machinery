# Reusable Components and Variants

## 📁 Component Organization

### **Core Reusable Components** (in `src/components/`)
- `Input.jsx` - Input field with 7 variants (enabled, hover, focus, filled, error, disabled, search)
- `Card.jsx` - Container component with optional padding and full-width option
- `Button.jsx` - Button component with multiple variants (primary, secondary, tertiary, etc.)

### **Account-Specific Components** (in `src/components/account/`)
- `MyAdsCard.jsx` - Ad listing card with 3 variants (default, highlighted, pending)
- `NotificationCard.jsx` - Notification card with 2 variants (read, unread) and responsive layouts
- `MenuItem.jsx` - Navigation menu item with 2 variants (active, inactive)
- `AccountLayout.jsx` - Two-column layout wrapper (sidebar + content)
- `AccountSidebar.jsx` - Sidebar component with user profile and navigation
- `AccountContent.jsx` - Main content area component
- `MyAdsContent.jsx` - My Ads page content with tabs and card grid

### **Page Components** (in `src/pages/`)
- `MyAds.jsx` - My Ads page component
- `Notifications.jsx` - Notifications page component
- `ChangePassword.jsx` - Change password page component

---

## 🎯 Component Hierarchy

```
MyAds (Page)
  └── AccountLayout
       ├── AccountSidebar
       │    ├── UserProfile
       │    └── MenuItem (multiple instances)
       └── MyAdsContent
            ├── Tabs (Segmented Control)
            └── Card (fullWidth)
                 └── MyAdsCard (multiple instances)
                      ├── Seller Info (Avatar + Name)
                      ├── Image with Favorite Icon
                      └── Details (Title, Specs, Price, Negotiable Badge)

Notifications (Page)
  └── AccountLayout
       ├── AccountSidebar
       └── NotificationsContent
            ├── Search Input (variant: search)
            ├── Filter Dropdown
            └── NotificationCard (multiple instances)
                 ├── Icon (circular background)
                 ├── Heading
                 ├── Message
                 └── Timestamp + Indicator
```

---

## 🎨 Component Variants

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

**All variants use semantic tokens with fallbacks:**
- Font: Inter, 16px, Medium (500), 100% line-height
- Border radius: 8px
- Interactive states: Hover and focus transitions

### **MyAdsCard Component Variants**

| Variant | Background | Use Case |
|---------|-----------|----------|
| `default` | White | Standard active ads |
| `highlighted` | White | Featured/promoted ads |
| `pending` | `#F4F6F7` | Ads pending review |

**Additional Features:**
- `isNegotiable` prop: Shows green checkmark badge with "Negotiable" text
- Seller information with avatar (circular, initials)
- Image with favorite icon (33x33px white button)
- Responsive grid layout

### **NotificationCard Component Variants**

| Variant | Container | Indicator | Layout |
|---------|-----------|-----------|--------|
| `unread` | White bg, `#DADDDE` border | Yellow dot | Responsive (horizontal/vertical) |
| `read` | `#F4F6F7` bg, `#F3F4F6` border | None | Responsive (horizontal/vertical) |

**Responsive Behavior:**
- **Desktop/Tablet (md+)**: Horizontal layout (icon left, content middle, timestamp right)
- **Mobile (< md)**: Vertical layout (icon top, heading, message, timestamp bottom)

### **MenuItem Component Variants**

| Variant | Background | Text Color | Use Case |
|---------|-----------|------------|----------|
| `active` | `#FAEFCC/70` | `#6E7375` | Currently active item |
| `inactive` | Transparent | `#6E7375` | Non-active items |

**Features:**
- Auto-detects active state from route
- Arrow icon (hidden on mobile, visible on desktop)
- Supports Link, button, or div rendering

---

## 🔌 Component Props & Usage

### **Input Component**

```jsx
<Input
  type="text"
  variant="enabled"        // enabled | hover | focus | filled | error | disabled | search
  placeholder="Enter text"
  value={value}
  onChange={handleChange}
  disabled={false}
  readOnly={false}
  className=""
/>
```

**Semantic Token Support:**
- Uses CSS custom properties: `var(--semantic-*, #fallback)`
- Maintains design system consistency
- Easy to theme globally

### **MyAdsCard Component**

```jsx
<MyAdsCard
  listing={{
    title: 'Caterpillar 320D Excavator',
    year: '2015',
    condition: 'Excellent condition',
    location: 'California, USA',
    price: '120,000',
    image: imageUrl,
    sellerName: 'Abc seller'
  }}
  variant="default"        // default | highlighted | pending
  isNegotiable={false}     // Shows negotiable badge
  className=""
/>
```

### **NotificationCard Component**

```jsx
<NotificationCard
  icon={<FaComment className="w-5 h-5 text-white" />}
  iconBgColor="bg-blue-500"
  heading="New message from David Chen"
  message="Hi, I'm interested in your equipment..."
  timestamp="5 minutes ago"
  variant="unread"         // read | unread
  isUnread={true}          // Backward compatibility
  className=""
/>
```

### **MenuItem Component**

```jsx
<MenuItem
  icon={notificationIcon}
  label="Notifications"
  to="/account/notifications"
  isActive={false}
  variant="active"         // active | inactive (optional, auto-detected)
  className=""
/>
```

### **Card Component**

```jsx
<Card
  fullWidth={false}        // Full width vs fixed 580px
  padding={true}           // Apply padding or not
  className=""
>
  {children}
</Card>
```

---

## 🎨 Styling Patterns

### **Semantic Tokens**
All components use CSS custom properties with fallbacks:
```css
var(--semantic-fg-base, #131214)
var(--semantic-bg-surface, #FFF)
var(--semantic-border-subtle, #E6E9EB)
```

### **Typography**
- **Font Family**: Inter (`font-inter`)
- **Headings**: Bold, various sizes (text-xl, text-2xl, text-[32px])
- **Body**: Normal weight, text-sm, text-base, text-[18px]
- **Line Heights**: 100%, 150% depending on context

### **Colors**
- **Primary**: `#FFB703` (yellow/gold)
- **Text Primary**: `#131214`, `#1A1C1E`, `#2C2C2C`
- **Text Secondary**: `#4A5565`, `#6A7282`, `#6E7375`, `#898D8F`
- **Borders**: `#DADDDE`, `#E6E9EB`, `#F3F4F6`
- **Backgrounds**: `#F4F6F7`, `#F8F9FA`, White

### **Spacing**
- Cards: `p-4`, `p-6` (padding)
- Sections: `space-y-4`, `space-y-6` (vertical spacing)
- Grid gaps: `gap-4`, `gap-6`

### **Borders & Radius**
- Cards: `rounded-[8px]`, `rounded-[12px]`, `rounded-[14px]`
- Buttons: `rounded-full`, `rounded-[48px]`
- Inputs: `rounded-[8px]`

---

## 📝 Usage Examples

### **My Ads Page**

```jsx
import MyAdsContent from './components/account/MyAdsContent'

<AccountLayout sidebarProps={sidebarProps}>
  <MyAdsContent />
</AccountLayout>
```

### **Notifications Page**

```jsx
import NotificationsContent from './components/account/NotificationsContent'

<AccountLayout sidebarProps={sidebarProps}>
  <NotificationsContent />
</AccountLayout>
```

### **Creating Custom Card Grid**

```jsx
<Card fullWidth padding={false} className="pt-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item) => (
      <MyAdsCard
        key={item.id}
        listing={item}
        variant="default"
        isNegotiable={item.negotiable}
      />
    ))}
  </div>
</Card>
```

---

## ✨ Features

✅ Variant-based styling system
✅ Semantic token support with fallbacks
✅ Responsive design (mobile/desktop)
✅ Consistent typography and spacing
✅ Reusable component architecture
✅ Props-based configuration
✅ Backward compatibility support
✅ Interactive states (hover, focus)
✅ Accessibility considerations
✅ Type-safe prop patterns

---

## 🔄 Variant System Architecture

### **Variant Resolution Priority**

1. **Explicit variant prop** (highest priority)
2. **Derived from state** (e.g., `isUnread` → `unread` variant)
3. **Default variant** (fallback)

### **Example Pattern**

```jsx
const variant = explicitVariant || derivedVariant || 'default'
const styles = variants[variant] || variants.default
```

### **Responsive Variant Behavior**

Some components have different layouts per breakpoint:
- **NotificationCard**: Horizontal (desktop) vs Vertical (mobile)
- **MenuItem**: Arrow visible (desktop) vs Hidden (mobile)
- **Input**: Full width (mobile) vs Auto width (desktop)

---

## 🎯 Best Practices

### **1. Variant Naming**
- Use semantic names: `'default'`, `'active'`, `'error'`
- Avoid state-based names: prefer `'unread'` over `'new'`
- Keep consistent across similar components

### **2. Component Composition**
- Build complex components from simpler ones
- Example: `MyAdsCard` can be extended with additional features
- Keep single responsibility principle

### **3. Props Design**
- Always provide sensible defaults
- Support `className` and `...props` for flexibility
- Document all props in component comments

### **4. Semantic Tokens**
- Always use CSS custom properties with fallbacks
- Format: `var(--token-name, #fallback-color)`
- Maintains design system consistency

### **5. Responsive Design**
- Mobile-first approach
- Use Tailwind responsive prefixes (`md:`, `lg:`)
- Test on multiple screen sizes

---

## 📊 Component Dependencies

```
Input
  └── (standalone, no dependencies)

MyAdsCard
  ├── EllipseIcon (asset)
  └── favoritesIcon (asset)

NotificationCard
  └── (standalone, accepts icon as prop)

MenuItem
  ├── React Router (Link, useLocation)
  └── (standalone)

Card
  └── (standalone wrapper)
```

---

## 🔧 Customization Guide

### **Adding New Variant to Input**

```jsx
// In Input.jsx
const variants = {
  // ... existing variants
  custom: 'bg-custom border-custom text-custom font-inter text-[16px] font-medium leading-[1]'
}

const interactiveStates = {
  // ... existing states
  custom: 'hover:... focus:...'
}
```

### **Adding New Variant to MyAdsCard**

```jsx
// In MyAdsCard.jsx
const variants = {
  // ... existing variants
  featured: 'bg-gradient-to-r from-yellow-100 to-yellow-50'
}
```

### **Creating New Card Component**

```jsx
// Follow MyAdsCard pattern
const NewCard = ({ variant = 'default', ...props }) => {
  const variants = {
    default: '...',
    // add more variants
  }
  
  return (
    <div className={`${variants[variant]} ...`}>
      {/* card content */}
    </div>
  )
}
```

---

## 🚀 Future Enhancements

Consider adding:
- TypeScript definitions for better type safety
- Storybook stories for component documentation
- Unit tests for variant combinations
- Visual regression tests
- Theme switching support using semantic tokens
- Animation variants
- Loading states for cards

---

*Generated: Reusable Components and Variants Documentation*

