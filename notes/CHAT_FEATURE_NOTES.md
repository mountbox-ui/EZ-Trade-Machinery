# Chat Feature Documentation

## Overview
Complete chat interface implementation with component-based architecture, following design system patterns and semantic tokens.

## File Structure

```
src/
├── pages/
│   └── Chat.jsx                    # Main chat page with demo data
├── components/
│   ├── chat/
│   │   ├── ChatLayout.jsx          # Main layout (Sidebar + ChatWindow)
│   │   ├── Sidebar.jsx             # Left sidebar with search, filters, and contacts
│   │   ├── ChatWindow.jsx          # Right chat window with messages and input
│   │   ├── MessageList.jsx         # Container for messages
│   │   ├── MessageItem.jsx         # Individual message bubble
│   │   ├── MessageInput.jsx        # Message input with emoji and send button
│   │   ├── HeaderBar.jsx           # Chat header with equipment info
│   │   ├── ContactItem.jsx         # Individual contact in sidebar
│   │   ├── ContactList.jsx         # List of contacts
│   │   ├── SearchInput.jsx         # Search input component
│   │   ├── FilterButtons.jsx       # Filter buttons (All, VIP, Tags, Buying, Selling)
│   │   └── QuickActionsBar.jsx     # Quick action buttons (Is it available?, etc.)
│   └── Avatar.jsx                  # Avatar component with chat variant
└── assets/
    └── account-icons/
        ├── Avatar_1.png
        ├── Avatar_2.png
        ├── Avatar_3.png
        ├── chat-icon.png
        ├── Search_Icon.svg
        └── star.png
```

## Components

### Chat.jsx (Main Page)
- **Location**: `src/pages/Chat.jsx`
- **Purpose**: Main chat page component
- **Features**:
  - Manages demo data (currentUser, contacts, messages)
  - Handles message sending
  - Updates contact previews
  - Manages active contact selection
- **Props**: None (uses internal state)
- **Route**: `/chat`

### ChatLayout.jsx
- **Purpose**: Main layout combining Sidebar and ChatWindow
- **Props**:
  - `user`: Current user object
  - `contacts`: Array of contact objects
  - `messages`: Array of message objects
  - `onSendMessage`: Function to handle sending messages
  - `variant`: Layout variant (default: 'expanded')

### Sidebar.jsx
- **Purpose**: Left sidebar with search, filters, and contact list
- **Variants**:
  - `expanded`: Full width (436px) with text
  - `compact`: Small width with icons only
- **Features**:
  - Search functionality
  - Filter buttons (All, VIP List, Tags, Buying, Selling)
  - Tags filter has dropdown menu
  - Contact list with scroll
- **Width**: 436px (expanded variant)

### ChatWindow.jsx
- **Purpose**: Main chat window displaying messages and input
- **Variants**:
  - `active`: Shows messages and input
  - `empty`: Shows empty state message
- **Props**:
  - `messages`: Array of message objects
  - `currentUserId`: ID of current user
  - `onSend`: Function to handle sending messages
  - `onAction`: Function to handle quick actions
  - `chatInfo`: Object with title, price, image, icons
  - `showQuickActions`: Boolean to show/hide quick actions bar
  - `quickActions`: Array of quick action strings

### MessageList.jsx
- **Purpose**: Container for displaying messages
- **Features**:
  - Auto-scroll to bottom
  - Timestamp at top of list
  - Background color: `#F4F6F7`
- **Props**:
  - `messages`: Array of message objects
  - `currentUserId`: ID of current user

### MessageItem.jsx
- **Purpose**: Individual message bubble component
- **Variants**:
  - `incoming`: Received messages - `bg-[#F2F4F5]`
  - `outgoing`: Sent messages - `bg-[#131214]` with white text
  - `reply`: Reply messages - `bg-[#F2F4F5]`
- **Features**:
  - Avatar display
  - Message text (16px, normal font)
  - Border radius: 20px
  - Different images for incoming/outgoing messages
- **Props**:
  - `message`: Message object
  - `isOwnMessage`: Boolean indicating if message is from current user
  - `currentUserId`: ID of current user

### MessageInput.jsx
- **Purpose**: Message input field with emoji and send button
- **Features**:
  - Textarea with auto-height (min 48px)
  - Emoji button inside textarea (right side)
  - Send button with chat-icon.png
  - Attachment button (optional)
  - Variant system matching Input.jsx styles
- **Variants** (based on state):
  - `enabled`: Empty state - `bg-[#F4F6F7]`, border `#E6E9EB`, text `#898D8F`
  - `filled`: Has content - white background, border `#E6E9EB`, text `#131214`
  - `focus`: Focused state - white background, border-2 `#6E7375`, shadow, text `#131214`
- **Props**:
  - `value`: Input value
  - `onChange`: Change handler
  - `onSend`: Send handler
  - `variant`: Input variant (default, withAttachments, withQuickActions)
  - `placeholder`: Placeholder text
- **Dimensions**: 600px width, 48px min height
- **Border**: Top border color `#E5E7EB`

### HeaderBar.jsx
- **Purpose**: Chat window header with equipment info
- **Features**:
  - Equipment name (14px)
  - Equipment image (70px × 50px)
  - Price display
  - Action icons (call, info)
- **Props**:
  - `title`: Equipment name
  - `price`: Equipment price
  - `image`: Equipment image URL
  - `icons`: Array of icon objects

### ContactItem.jsx
- **Purpose**: Individual contact item in sidebar
- **Variants**:
  - `default`: Standard contact
  - `vip`: VIP contact with star badge
  - `buying`: Buying variant
  - `selling`: Selling variant
- **Features**:
  - Avatar (64px × 64px, 4px border-radius)
  - Equipment name (16px, shown above name)
  - Contact name
  - Message preview
  - Timestamp
  - Active state styling
  - Star badge for VIP variant
- **Props**:
  - `name`: Contact name
  - `equipmentName`: Equipment name (16px in sidebar)
  - `messagePreview`: Last message preview
  - `time`: Timestamp
  - `avatar`: Avatar image URL
  - `isActive`: Boolean for active state
  - `variant`: Contact variant (default, vip, buying, selling)
  - `onClick`: Click handler

### SearchInput.jsx
- **Purpose**: Search input component
- **Features**:
  - Reuses Input component with variant="search"
  - Custom Search_Icon.svg icon
  - Placeholder text
- **Props**:
  - `placeholder`: Placeholder text
  - `value`: Search value
  - `onChange`: Change handler

### FilterButtons.jsx
- **Purpose**: Filter buttons for contact list
- **Features**:
  - Active filter styling: `bg-[#1F2224]`, text white, 4px border-radius
  - Non-active filters: text `#53575A`
  - Tags filter has dropdown menu (Headless UI)
  - Padding: px-4 py-2
- **Filters**:
  - All
  - VIP List
  - Tags (with dropdown)
  - Buying
  - Selling

### QuickActionsBar.jsx
- **Purpose**: Quick action buttons above message input
- **Features**:
  - Centered horizontal layout
  - Light gray background `#E8EBEB`
  - Background container: `#F4F6F7`
- **Default Actions**:
  - "Is it available?"
  - "Negotiable?"
  - "More photos"
  - "Bookmark"
- **Props**:
  - `actions`: Array of action strings
  - `onActionClick`: Click handler

## Styling Guidelines

### Colors
- **Background**: 
  - Message List: `#F4F6F7`
  - Quick Actions Container: `#F4F6F7`
  - Quick Actions Buttons: `#E8EBEB`
- **Message Bubbles**:
  - Incoming/Reply: `#F2F4F5`
  - Outgoing: `#131214`
- **Text Colors**:
  - Outgoing messages: White
  - Incoming/Reply: Gray-900
  - Placeholder: Gray-400/500
- **Border Colors**:
  - Input border top: `#E5E7EB`
  - Input enabled: `#E6E9EB`
  - Input hover: `#DADDDE`
  - Input focus: `#6E7375`

### Typography
- **Equipment Name** (Sidebar): 16px
- **Equipment Name** (Chat Window Header): 14px
- **Message Text**: 16px, normal font weight
- **Sender Name**: 14px

### Spacing & Layout
- **Sidebar Width**: 436px
- **Message Input Width**: 600px
- **Message Input Height**: 48px (min)
- **Avatar Size** (Chat): 64px × 64px
- **Border Radius**: 
  - Message bubbles: 20px
  - Input fields: 8px (rounded-lg)
  - Avatars: 4px (chat variant)

## State Management

### MessageInput States
1. **Enabled** (empty): Light gray background
2. **Filled** (has content): White background, dark text
3. **Focus**: White background, border-2, shadow, dark text

### Emoji Button States
- Changes color based on textarea state:
  - Enabled: `#898D8F` (gray)
  - Filled/Focus: `#131214` (dark)

## Usage Example

```jsx
import Chat from './pages/Chat'

// In App.jsx
<Route path="/chat" element={<Chat />} />
```

## Demo Data Structure

### Contact Object
```javascript
{
  id: 1,
  name: "John Doe",
  equipmentName: "John Deere 650K",
  messagePreview: "Hello, is this still available?",
  time: "2:30 PM",
  avatar: avatar1,
  equipmentImage: equipmentImage,
  variant: "vip" // or "default", "buying", "selling"
}
```

### Message Object
```javascript
{
  id: 1,
  text: "Hello!",
  senderId: 1,
  senderName: "John Doe",
  timestamp: "2024-01-15T14:30:00",
  type: "outgoing", // or "incoming", "reply"
  avatar: avatar1
}
```

## Dependencies
- React 18
- React Router DOM
- Tailwind CSS
- Headless UI (for dropdowns)
- React Icons (optional, mostly using custom SVGs)

## Notes
- All components are responsive
- Variant system follows Input.jsx pattern
- Uses semantic design tokens
- Scrollbar hidden in textarea
- Auto-scroll to bottom in message list
- Timestamp shown at top of message list (not per message)
