import React from 'react'
import notificationIcon from '../../assets/account-icons/Icon-6.svg'
import changePasswordIcon from '../../assets/account-icons/Icon-5.svg'
import myAdsIcon from '../../assets/account-icons/Icon-4.svg'
import wantToBuyIcon from '../../assets/account-icons/Icon-3.svg'
import helpAndSupportIcon from '../../assets/account-icons/Icon-2.svg'
import termsAndConditionsIcon from '../../assets/account-icons/Icon-4.svg'
import privacyPolicyIcon from '../../assets/account-icons/Icon-1.svg'
import logoutIcon from '../../assets/account-icons/Icon.svg'
import UserProfile from './UserProfile'
import MenuItem from './MenuItem'

const AccountSidebar = ({
  user = {
    name: 'Anwar',
    avatar: null,
    joinedDate: 'Jan 2023',
    isVerified: true
  },
  activeItem = '',
  onEditStore,
  onLogout,
  className = ''
}) => {
  const accountMenuItems = [
    {
      id: 'notifications',
      icon: notificationIcon,
      label: 'Notifications',
      to: '/account/notifications'
    },
    {
      id: 'change-password',
      icon: changePasswordIcon,
      label: 'Change password',
      to: '/account/change-password'
    },
    {
      id: 'my-ads',
      icon: myAdsIcon,
      label: 'My Ads',
      to: '/account/my-ads'
    },
    {
      id: 'want-to-buy',
      icon: wantToBuyIcon,
      label: 'Want to Buy',
      to: '/account/want-to-buy'
    }
  ]

  const moreMenuItems = [
    {
      id: 'help',
      icon: helpAndSupportIcon,
      label: 'Help and support',
      to: '/account/help'
    },
    {
      id: 'terms',
      icon: termsAndConditionsIcon,
      label: 'Terms and conditions',
      to: '/account/terms'
    },
    {
      id: 'privacy',
      icon: privacyPolicyIcon,
      label: 'Privacy policy',
      to: '/account/privacy'
    }
  ]

  return (
    <aside className={`bg-white rounded-lg p-6 h-fit ${className}`}>
      <UserProfile
        name={user.name}
        avatar={user.avatar}
        joinedDate={user.joinedDate}
        isVerified={user.isVerified}
        onEditStore={onEditStore}
      />

      <div className="space-y-1 border-t border-[#F4F6F7] py-6">
        <h3 className="text-lg font-bold text-[#131214] font-inter tracking-wider mb-3 px-4">
          Account Settings
        </h3>
        {accountMenuItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isActive={activeItem === item.id}
          />
        ))}
      </div>

      <div className="space-y-1 border-t border-[#F4F6F7] py-6">
        <h3 className="text-lg font-bold text-[#131214] font-inter tracking-wider mb-3 px-4">
          More
        </h3>
        {moreMenuItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isActive={activeItem === item.id}
          />
        ))}
      </div>

      <div className="border-t border-[#F4F6F7] pt-6">
        <MenuItem
          icon={logoutIcon}
          label="Logout"
          onClick={onLogout}
          className="pt-1"
        />
      </div>
    </aside>
  )
}

export default AccountSidebar

