import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import MenuIcon from '../assets/Mobile-Nav/Menu.svg'
import MessageIcon from '../assets/Mobile-Nav/Message.svg'
import SellIcon from '../assets/Mobile-Nav/Sell.svg'
import FavoritesIcon from '../assets/Mobile-Nav/Favorities.svg'
import AccountIcon from '../assets/Mobile-Nav/Account.svg'

const MobileBottomNav = ({ navLinks, topLinks }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { label: 'Menu', icon: MenuIcon, action: () => setIsMenuOpen(true) },
        { label: 'Chats', icon: MessageIcon },
        { label: 'Sell', icon: SellIcon, isCenter: true },
        { label: 'Favourites', icon: FavoritesIcon },
        { label: 'Account', icon: AccountIcon },
    ]

    return (
        <>
            {/* Bottom Nav Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 h-[70px] px-2 flex items-center justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={item.action}
                        className={`flex flex-col items-center justify-center gap-1 min-w-[64px] group ${item.isCenter ? 'relative' : ''}`}
                    >
                        <div className={`${item.isCenter ? '' : ''}`}>
                            <img
                                src={item.icon}
                                alt={item.label}
                                className={`${item.isCenter ? 'w-6 h-6' : 'w-5 h-5 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all'}`}
                            />
                        </div>
                        <span className="text-[10px] font-bold text-[#898D8F] uppercase tracking-tighter">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Side Menu Drawer */}
            <div
                className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`absolute inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <span className="text-xl font-bold font-inter text-gray-900">Menu</span>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500 hover:text-gray-900">
                            <IoClose className="text-2xl" />
                        </button>
                    </div>

                    <div className="overflow-y-auto h-full pb-20">
                        {/* Main Navigation */}
                        <div className="p-4 border-b">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Main Navigation</h3>
                            <div className="grid grid-cols-1 gap-1">
                                {navLinks.map((link) => (
                                    <button
                                        key={link}
                                        className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        {link}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="p-4 border-b">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Support & More</h3>
                            <div className="grid grid-cols-1 gap-1">
                                {topLinks.map((link) => (
                                    <button
                                        key={link}
                                        className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        {link}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Location & Currency */}
                        <div className="p-4">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Ship to</label>
                                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none">
                                        <option>United States</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Currency</label>
                                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none">
                                        <option>USD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileBottomNav
