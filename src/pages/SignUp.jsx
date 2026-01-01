import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../assets/EZ-Trade-logo-full.svg'
import profileIcon from '../assets/Nav-Icons/ProfileS.svg'
import Button from '../components/Button'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showOtpModal, setShowOtpModal] = useState(false)
    const [otp, setOtp] = useState(['', '', '', ''])
    const navigate = useNavigate()

    const handleOtpChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)

            // Auto-focus next input
            if (value && index < 3) {
                document.getElementById(`otp-${index + 1}`)?.focus()
            }
        }
    }

    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`)?.focus()
        }
    }

    const handleSendOtp = (e) => {
        e.preventDefault()
        setShowOtpModal(true)
    }

    const handleVerifyOtp = () => {
        // Handle OTP verification logic here
        console.log('OTP:', otp.join(''))
        setShowOtpModal(false)
        navigate('/login')
    }

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
                    <div className="text-center mb-8">
                        <h1 className="text-[32px] font-bold text-[#1A1C1E] mb-2 font-inter">Create account</h1>
                        <p className="text-[#6E7375] text-base">Sign up to start buying and selling machinery</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSendOtp}>
                        {/* First Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1A1C1E] font-inter">First Name</label>
                            <input
                                type="text"
                                placeholder="Alex"
                                className="w-full h-12 px-4 rounded-[8px] bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#FFB703] transition-all text-[#1A1C1E] placeholder:text-gray-400"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1A1C1E] font-inter">Last Name</label>
                            <input
                                type="text"
                                placeholder="Paul"
                                className="w-full h-12 px-4 rounded-[8px] bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#FFB703] transition-all text-[#1A1C1E] placeholder:text-gray-400"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1A1C1E] font-inter">Email</label>
                            <input
                                type="email"
                                placeholder="alexpaul@gmail.com"
                                className="w-full h-12 px-4 rounded-[8px] border border-gray-300 focus:ring-2 focus:ring-[#FFB703] focus:border-transparent transition-all text-[#1A1C1E] placeholder:text-gray-400"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1A1C1E] font-inter">Phone Number</label>
                            <div className="flex gap-2">
                                <div className="relative w-[100px]">
                                    <button
                                        type="button"
                                        className="w-full h-12 px-3 rounded-[8px] bg-[#F3F4F6] border-none flex items-center justify-between text-[#1A1C1E] text-sm font-medium"
                                    >
                                        <span className="flex items-center gap-1">
                                            <span className="text-lg">🇺🇸</span>
                                            <span>+61</span>
                                        </span>
                                        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                                    </button>
                                </div>
                                <input
                                    type="tel"
                                    placeholder="Your mobile number"
                                    className="flex-1 h-12 px-4 rounded-[8px] bg-[#F3F4F6] border-none focus:ring-2 focus:ring-[#FFB703] transition-all text-[#1A1C1E] placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1A1C1E] font-inter">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
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

                        {/* Confirm Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#1A1C1E] font-inter">Confirm password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="w-full h-12 px-4 pr-12 rounded-[8px] border border-gray-300 focus:ring-2 focus:ring-[#FFB703] focus:border-transparent transition-all text-[#1A1C1E]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Terms and Privacy */}
                        <div className="text-center text-sm text-[#6E7375] pt-2">
                            By signing up, you agree to our{' '}
                            <Link to="/terms" className="text-[#1A1C1E] underline hover:text-[#FFB703] transition-colors">
                                Terms of Use
                            </Link>{' '}
                            and{' '}
                            <Link to="/privacy" className="text-[#1A1C1E] underline hover:text-[#FFB703] transition-colors">
                                Privacy Policy
                            </Link>
                        </div>

                        {/* Send OTP Button */}
                        <div className="pt-2">
                            <Button
                                type="submit"
                                variant="secondary"
                                className="w-full h-[48px] rounded-full text-base font-bold"
                            >
                                <span className="font-bold">Send OTP</span>
                            </Button>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center pt-4">
                            <p className="text-sm text-gray-500">
                                Already have an account?{' '}
                                <Link to="/login" className="text-[#1A1C1E] font-bold underline hover:text-[#FFB703] transition-colors">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>

            {/* OTP Verification Modal */}
            {showOtpModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-[24px] p-8 sm:p-10 w-full max-w-[440px] relative">
                        <div className="text-center mb-8">
                            <h2 className="text-[28px] font-bold text-[#1A1C1E] mb-2 font-inter">Verify your email</h2>
                            <p className="text-[#6E7375] text-sm">
                                We've sent a 4-digit code to<br />
                                <span className="font-medium text-[#1A1C1E]">alexpaul@gmail.com</span>
                            </p>
                        </div>

                        {/* OTP Input Boxes */}
                        <div className="flex justify-center gap-3 mb-6">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                    className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-[8px] focus:border-[#FFB703] focus:ring-2 focus:ring-[#FFB703] transition-all"
                                />
                            ))}
                        </div>

                        {/* Resend Link */}
                        <div className="text-center mb-8">
                            <p className="text-sm text-[#6E7375]">
                                Didn't receive the code?{' '}
                                <button className="text-[#1A1C1E] font-bold underline hover:text-[#FFB703] transition-colors">
                                    Resend
                                </button>
                            </p>
                        </div>

                        {/* Verify Button */}
                        <Button
                            variant="secondary"
                            className="w-full h-[48px] rounded-full text-base font-bold"
                            onClick={handleVerifyOtp}
                        >
                            <span className="font-bold">Verify</span>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SignUp
