import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import logo from '../assets/EZ-Trade-Logo.svg'
import fbIcon from '../assets/social_media_icons/fbicon.svg'
import instagramIcon from '../assets/social_media_icons/Icon1.svg'
import linkedinIcon from '../assets/social_media_icons/Icon2.svg'
import youtubeIcon from '../assets/social_media_icons/Icon3.svg'
import twitterIcon from '../assets/social_media_icons/Icon4.svg'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribed:', email)
    setEmail('')
  }

  const quickLinks = [
    'About Us',
    'How It Works',
    'Success Stories',
    'Press & Media',
    'Careers'
  ]

  const services = [
    'Buy Equipment',
    'Sell Equipment',
    'Auctions',
    'Financing',
    'Shipping',
    'Inspection'
  ]

  const support = [
    'Help Center',
    'Safety Tips',
    'Buyer Protection',
    'Seller Guide',
    'Contact Us'
  ]

  const socialLinks = [
    { icon: fbIcon, name: 'Facebook', href: '#' },
    { icon: twitterIcon, name: 'Twitter', href: '#' },
    { icon: instagramIcon, name: 'Instagram', href: '#' },
    { icon: linkedinIcon, name: 'LinkedIn', href: '#' },
    { icon: youtubeIcon, name: 'YouTube', href: '#' }
  ]

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Sitemap'
  ]

  return (
    <footer className="bg-[#2C2C2C] text-white mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Left Section - Company Info & Contact */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 p-0 md:p-3">
                <img src={logo} alt="EZ Trade Machinery" className="h-[104px] w-[118px]" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-[#FFB703] mt-1 flex-shrink-0" />
                <a href="mailto:support@eztrademachinery.com" className="font-inter text-base font-medium text-[#898D8F] hover:text-[#FFB703] transition-colors">
                  support@eztrademachinery.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="text-[#FFB703] mt-1 flex-shrink-0" />
                <a href="tel:+18001234567" className="font-inter text-base font-medium text-[#898D8F] hover:text-[#FFB703] transition-colors">
                  +1 (800) 123-4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FFB703] mt-1 flex-shrink-0" />
                <span className="font-inter text-base font-medium text-[#898D8F]">
                  123 Industrial Ave, Houston, TX 77001
                </span>
              </div>
            </div>
          </div>

          {/* Middle Sections - Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-4 gap-8 ml-0 md:ml-12 lg:ml-12">
            {/* Quick Links */}
            <div>
              <h3 className="font-inter text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-inter text-base font-medium text-[#898D8F] hover:text-[#FFB703] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-inter text-white font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a href="#" className="font-inter text-base font-medium text-[#898D8F] hover:text-[#FFB703] transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-inter text-white font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                {support.map((item) => (
                  <li key={item}>
                    <a href="#" className="font-inter text-base font-medium text-[#898D8F] hover:text-[#FFB703] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Media, Newsletter, Copyright & Legal */}
        <div className="border-t border-[#FFFFFF1A] pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Follow Us */}
            <div>
              <h3 className="font-inter text-white font-medium text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-[#FFFFFF1A] flex items-center justify-center text-white hover:bg-[#FFB703] hover:text-gray-900 transition-colors"
                    aria-label={social.name}
                  >
                    <img src={social.icon} alt={social.name} className="w-5 h-5 color-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Subscribe to Newsletter */}
            <div className="w-full lg:flex-1 lg:max-w-md">
              <h3 className="font-inter text-white font-normal text-lg mb-4">Subscribe to Newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-[#FFFFFF1A] text-white placeholder-gray-400 border border-[#FFFFFF33] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 bg-[#FFB703] text-gray-900 font-bold text-sm sm:text-base rounded-lg hover:bg-[#FFB703]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:ring-offset-2 focus:ring-offset-[#2C2C2C] whitespace-nowrap flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright & Legal Links */}
          <div className="mt-8 pt-6 border-t border-[#FFFFFF1A] flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#99A1AF] text-sm font-inter font-medium">
              © 2024 EzTradeMachinery. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-[#99A1AF] text-sm font-inter font-medium">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <a href="#" className="text-[#99A1AF] text-sm font-inter font-mediumhover:text-[#FFB703] transition-colors">
                    {link}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600"></span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

