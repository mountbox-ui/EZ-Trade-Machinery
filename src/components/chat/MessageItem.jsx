import React from 'react'
import Avatar from '../Avatar'

const MessageItem = ({
  text,
  sender,
  timestamp,
  status,
  isOwnMessage = false,
  variant = 'default',
  avatar,
  className = '',
  ...props
}) => {
  const variants = {
    incoming: 'bg-[#F2F4F5] border border-gray-200',
    outgoing: 'bg-[#131214] text-[#FFF]',
    reply: 'bg-gray-50 border-l-4 border-[#FFB703]',
    system: 'bg-blue-50 text-blue-800 text-center'
  }

  if (variant === 'system') {
    return (
      <div className={`flex justify-center my-2 ${className}`} {...props}>
        <span className={`px-3 py-1 rounded-lg text-xs ${variants.system}`}>
          {text}
        </span>
      </div>
    )
  }

  return (
    <div
      className={`flex gap-2 mb-4 ${isOwnMessage ? 'flex-row-reverse' : 'flex-row'} ${className}`}
      {...props}
    >
      {!isOwnMessage && (
        <div className="flex-shrink-0">
          <Avatar src={avatar} alt={sender} size="sm" />
        </div>
      )}
      <div className={`flex flex-col ${isOwnMessage ? 'items-end' : 'items-start'} max-w-[70%]`}>
        {!isOwnMessage && (
          <span className="text-sm text-gray-500 mb-1">{sender}</span>
        )}
        <div
          className={`px-4 py-2 rounded-[20px] ${variants[variant] || (isOwnMessage ? variants.outgoing : variants.incoming)}`}
        >
          <p className="text-base font-normal whitespace-pre-wrap break-words">{text}</p>
        </div>
      </div>
      {isOwnMessage && (
        <div className="flex-shrink-0">
          <Avatar src={avatar} alt={sender} size="sm" />
        </div>
      )}
    </div>
  )
}

export default MessageItem

