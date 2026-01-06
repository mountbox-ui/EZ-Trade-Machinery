import React from 'react'
import AccountSidebar from './AccountSidebar'
import AccountContent from './AccountContent'

const AccountLayout = ({
  sidebarProps = {},
  contentProps = {},
  children,
  className = ''
}) => {
  return (
    <div className={`min-h-screen bg-[#F8F9FA] ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <AccountSidebar {...sidebarProps} />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3 bg-white rounded-md p-6 ">
            {children || <AccountContent {...contentProps} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout

