# Input Component - Variants Guide

The Input component now supports 6 variants for different states and use cases.

## 📋 Available Variants

### 1. **enabled** (default)
Normal input state with hover and focus effects.

```jsx
<Input variant="enabled" placeholder="Enter text" />
// or simply
<Input placeholder="Enter text" />
```

**Styles:**
- White background
- Gray border
- Hover: Darker border
- Focus: Yellow ring and border (#FFB703)

---

### 2. **hover**
Input variant with enhanced hover styles (use when you want to emphasize hover state).

```jsx
<Input variant="hover" placeholder="Hover me" />
```

**Styles:**
- White background
- Gray border (slightly darker)
- Enhanced hover effects

---

### 3. **focus**
Input variant that appears focused (useful for controlled focus states).

```jsx
<Input variant="focus" placeholder="Focused input" />
```

**Styles:**
- White background
- Yellow border and ring (#FFB703)
- Appears focused

---

### 4. **filled**
Input variant for when the field has a value (can be auto-detected).

```jsx
<Input variant="filled" value="Some value" placeholder="Has value" />
```

**Styles:**
- White background
- Gray border
- Normal hover/focus states

---

### 5. **error**
Input variant for error/validation states.

```jsx
<Input variant="error" placeholder="Error state" />
```

**Styles:**
- White background
- Red border
- Focus: Red ring and border

---

### 6. **disabled**
Input variant for disabled state (also uses `disabled` prop).

```jsx
<Input variant="disabled" placeholder="Disabled" />
// or
<Input disabled placeholder="Disabled" />
```

**Styles:**
- Gray background
- Gray border
- Reduced opacity (60%)
- Cursor: not-allowed
- No interactive states

---

## 🔄 Automatic States

The component automatically handles:
- **Hover**: Applied via CSS when mouse hovers (for enabled, filled variants)
- **Focus**: Applied via CSS when input is focused (ring and border changes)

## 📝 Usage Examples

### Basic Usage
```jsx
import Input from './components/Input'

// Enabled (default)
<Input placeholder="Enter your name" />

// Error state
<Input variant="error" placeholder="This field has an error" />

// Disabled
<Input variant="disabled" placeholder="Cannot edit" />
// or
<Input disabled placeholder="Cannot edit" />

// Read-only (overrides variant)
<Input readOnly value="Read only value" />
```

### With Form Validation
```jsx
const [email, setEmail] = useState('')
const [error, setError] = useState(false)

<Input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  variant={error ? 'error' : 'enabled'}
  placeholder="Enter email"
/>
```

### Filled State
```jsx
<Input
  variant="filled"
  value={user.firstName}
  placeholder="First Name"
/>
```

---

## ⚠️ Important Notes

1. **readOnly** prop overrides variant - when `readOnly={true}`, input shows read-only styles regardless of variant
2. **disabled** prop overrides variant - when `disabled={true}`, input shows disabled styles
3. **Variant priority**: `disabled` > `readOnly` > `variant` prop
4. Hover and Focus are automatic CSS states (except when using `variant="focus"` for explicit focus styling)

---

*Generated: Input Component Variants Documentation*

