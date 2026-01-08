import React, { useState, useEffect, useRef } from 'react'
import QuickActionsBar from './QuickActionsBar'
import chatIcon from '../../assets/account-icons/chat-icon.png'

const MessageInput = ({
  value = '',
  onChange,
  onSend,
  onAction,
  variant = 'default',
  showQuickActions = false,
  quickActions = [],
  placeholder = 'Type a message...',
  className = '',
  ...props
}) => {
  const [message, setMessage] = useState(value)
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      textareaRef.current.style.overflow = 'hidden'
    }
  }, [message])

  const handleChange = (e) => {
    const newValue = e.target.value
    setMessage(newValue)
    onChange && onChange(e)
  }

  const handleSend = () => {
    if (message.trim()) {
      onSend && onSend(message)
      setMessage('')
      onChange && onChange({ target: { value: '' } })
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Determine variant based on state
  const isFilled = message.trim().length > 0
  const inputVariant = isFocused ? 'focus' : isFilled ? 'filled' : 'enabled'

  // Base styles
  const baseStyles = 'px-4 py-2 rounded-lg resize-none focus:outline-none transition-all placeholder:text-gray-400 text-sm font-inter'

  // Variant styles matching Input.jsx - textarea should be transparent to use parent background
  const variants = {
    enabled: 'bg-transparent border-transparent text-[#898D8F] font-medium',
    hover: 'bg-transparent border-transparent text-[#898D8F] font-medium',
    focus: 'bg-transparent border-transparent text-[#131214] font-medium',
    filled: 'bg-transparent border-transparent text-[#131214] font-medium'
  }

  // Interactive states - removed from textarea since parent container handles it
  const interactiveStates = {
    enabled: '',
    hover: '',
    focus: '',
    filled: ''
  }

  const variantClasses = `${variants[inputVariant]} ${interactiveStates[inputVariant] || interactiveStates.enabled}`

  return (
    <div className={`border-t border-[#E5E7EB] bg-white ${className}`} {...props}>
      {variant === 'withQuickActions' && showQuickActions && quickActions.length > 0 && (
        <QuickActionsBar actions={quickActions} onActionClick={onAction} />
      )}
      <div className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4">
        {/* Attachment Button */}
        {variant === 'withAttachments' && (
          <button
            className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Attach file"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
        )}

        {/* Text Input */}
        <div className={`relative flex-shrink-0 rounded-lg transition-all w-auto md:w-[450px] xl:w-[600px] ${
          isFocused 
            ? 'bg-white border-2 border-[#6E7375] shadow-[0_0_0_4px_#E9E9E9]' 
            : isFilled 
            ? 'bg-white border border-[#E6E9EB] hover:border-[#DADDDE]' 
            : 'bg-[#F4F6F7] border border-[#E6E9EB] hover:border-[#DADDDE] hover:bg-white'
        } focus-within:border-2 focus-within:border-[#6E7375] focus-within:shadow-[0_0_0_4px_#E9E9E9] focus-within:bg-white`}>
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows={1}
            className={`${baseStyles} ${variantClasses} pr-12 border-0`}
            style={{ 
              width: '100%',
              maxWidth: '600px',
              overflow: 'hidden',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          />
          <style>{`
            textarea::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {/* Emoji Button - Inside textarea */}
          <button
            className={`absolute right-2 top-1/2 -translate-y-1/2 flex-shrink-0 p-1.5 rounded transition-colors ${
              isFocused 
                ? 'text-[#131214] hover:bg-gray-100' 
                : isFilled 
                ? 'text-[#131214] hover:bg-gray-100' 
                : 'text-[#898D8F] hover:bg-gray-100'
            }`}
            aria-label="Add emoji"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center justify-center"
          aria-label="Send message"
        >
          <img 
            src={chatIcon} 
            alt="Send message" 
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  )
}

export default MessageInput
