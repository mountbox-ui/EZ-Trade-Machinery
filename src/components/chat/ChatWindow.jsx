import React from 'react'
import HeaderBar from './HeaderBar'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const ChatWindow = ({
  messages = [],
  currentUserId,
  onSend,
  onAction,
  variant = 'active',
  chatInfo,
  showQuickActions = true,
  quickActions = [
    'Is it available?',
    'Negotiable?',
    'More photos',
    'Bookmark'
  ],
  onBack,
  className = '',
  ...props
}) => {
  if (variant === 'empty') {
    return (
      <div
        className={`flex items-center justify-center h-full bg-gray-50 ${className}`}
        {...props}
      >
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p className="text-lg font-medium text-gray-900 mb-2">
            Select a conversation
          </p>
          <p className="text-sm text-gray-500">
            Choose a conversation from the sidebar to start messaging
          </p>
        </div>
      </div>
    )
  }

  const handleSend = (messageText) => {
    if (onSend) {
      onSend(messageText)
    }
  }

  const handleQuickAction = (action) => {
    if (onAction) {
      onAction(action)
    }
  }

  return (
    <div
      className={`flex flex-col h-full bg-white ${className} h-[100vh]`}
      {...props}
    >
      {/* Header */}
      {chatInfo && (
        <HeaderBar
          title={chatInfo.title}
          price={chatInfo.price}
          image={chatInfo.image}
          icons={chatInfo.icons || []}
          onBack={onBack}
        />
      )}

      {/* Messages */}
      <MessageList
        messages={messages}
        currentUserId={currentUserId}
      />

      {/* Quick Actions */}
      {showQuickActions && quickActions.length > 0 && (
        <div className="px-4 py-2 bg-[#F4F6F7]">
          <div className="flex flex-wrap gap-2 justify-center">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action)}
                className="px-3 py-1.5 text-xs font-medium bg-[#E8EBEB] hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Message Input */}
      <MessageInput
        onSend={handleSend}
        variant="withAttachments"
        showQuickActions={false}
        placeholder="Type a message..."
      />
    </div>
  )
}

export default ChatWindow

