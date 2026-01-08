import React, { useEffect, useRef } from 'react'
import MessageItem from './MessageItem'

const MessageList = ({
  messages = [],
  currentUserId,
  className = '',
  ...props
}) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  if (messages.length === 0) {
    return (
      <div
        className={`flex items-center justify-center h-full text-gray-500 bg-[#F4F6F7] ${className}`}
        {...props}
      >
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-4"
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
          <p className="text-sm">No messages yet</p>
        </div>
      </div>
    )
  }

  // Get the first message timestamp to display at the top
  const firstMessageTime = messages.length > 0 ? messages[0].timestamp : null

  return (
    <div className={`flex-1 overflow-y-auto bg-[#F4F6F7] ${className}`} {...props}>
      {/* Top timestamp */}
      {firstMessageTime && (
        <div className="flex justify-center pt-4 pb-2">
          <span className="text-xs text-gray-500">{firstMessageTime}</span>
        </div>
      )}
      {/* Messages */}
      <div className="px-4 space-y-2 w-auto xl:w-[780px] mx-auto">
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            {...message}
            isOwnMessage={message.senderId === currentUserId}
          />
        ))}
      </div>
      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessageList

