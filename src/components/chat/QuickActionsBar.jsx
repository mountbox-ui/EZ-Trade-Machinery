import React from 'react'

const QuickActionsBar = ({
  actions = [
    'Is it available?',
    'Negotiable?',
    'More photos',
    'Bookmark'
  ],
  onActionClick,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-wrap gap-2 px-4 pb-2 justify-center ${className}`} {...props}>
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => onActionClick && onActionClick(action)}
          className="px-3 py-1.5 text-xs font-medium bg-[#E8EBEB] hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
        >
          {action}
        </button>
      ))}
    </div>
  )
}

export default QuickActionsBar

