import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../assets/EZ-Trade-logo-full.svg'
import profileIcon from '../assets/Nav-Icons/ProfileS.svg'
import Button from '../components/Button'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
            {/* Header */}
            <header className="bg-[#2C2C2C] h-[64px] flex items-center shadow-md">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="EZ Trade Machinery" className="h-8 w-auto" />
                    </Link>

                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="h-8 w-8 rounded-full bg-[#FFB703] flex items-center justify-center">
                            <img src={profileIcon} alt="Profile" className="h-[14px] w-[14px]" />
                        </div>
                        <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-[540px] bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 sm:p-12">
                    <div className="text-center mb-10">
                        <h1 className="text-[32px] font-bold text-[#1A1C1E] mb-2 font-inter">Welcome back</h1>
                        <p className="text-[#6E7375] text-base">Log in to your account to continue</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1A1C1E] font-inter">Email</label>
                            <input
                                type="email"
                                placeholder="alexpaul@gmail.com"
                                className="w-full h-12 px-4 rounded-[8px] bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#FFB703] transition-all text-[#1A1C1E] placeholder:text-gray-400"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1A1C1E] font-inter">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    defaultValue=""
                                    className="w-full h-12 px-4 pr-12 rounded-[8px] border border-gray-300 focus:ring-2 focus:ring-[#FFB703] focus:border-transparent transition-all text-[#1A1C1E]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-left">
                            <Link to="/forgot-password" title="Forgot password?" className="text-sm text-gray-500 hover:text-[#FFB703] transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <div className="pt-2">
                            <Button
                                variant="secondary"
                                className="w-full h-[48px] rounded-full text-base font-bold"
                                onClick={() => navigate('/')}
                            >
                                <span className='font-bold'>Log In</span>
                            </Button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center pt-4">
                            <p className="text-sm text-gray-500">
                                Don't have an account?{' '}
                                <Link to="/signup" className="text-[#1A1C1E] font-bold underline hover:text-[#FFB703] transition-colors">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login
