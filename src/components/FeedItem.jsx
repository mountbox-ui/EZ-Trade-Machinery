import React, { useState } from 'react'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import ThumbDownIcon from '../assets/thumb-down.svg'
import MessageCircleIcon from '../assets/message-circle.svg'
import Share02Icon from '../assets/share-02.svg'
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

const FeedItem = ({ item, isActive, onNavigate }) => {
  const [isLiked, setIsLiked] = useState(item.isLiked || false)
  const [likes, setLikes] = useState(item.likes || 0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const displayImage = item.image || Caterpillar

  const handlePlayPause = (e) => {
    e.stopPropagation()
    setIsPlaying((v) => !v)
  }

  const handleMuteToggle = (e) => {
    e.stopPropagation()
    setIsMuted((v) => !v)
  }

  const handleLike = (e) => {
    e.stopPropagation()
    setIsLiked((v) => !v)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleDislike = (e) => {
    e.stopPropagation()
    // optional: implement dislike logic
  }

  const handleShare = (e) => {
    e.stopPropagation()
    if (navigator.share) {
      navigator
        .share({
          title: item.title,
          text: `Check out this ${item.title} for $${item.price}`,
          url: window.location.href
        })
        .catch(() => { })
    }
  }

  return (
    <div className="flex items-end gap-6 w-full h-full lg:w-auto lg:h-auto lg:bg-white lg:p-4 lg:rounded-lg bg-black p-0 rounded-none">
      {/* Product Details Container - Left Side (Outside Video, desktop only) */}
      <div className="hidden lg:flex flex-shrink-0 pb-6 w-[300px] justify-end" onClick={onNavigate}>
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-[#131214] line-clamp-2 font-inter leading-tight">
            {item.title}
          </h2>

          <div className="flex flex-wrap items-center gap-1 text-sm text-[#6E7375] font-inter font-normal">
            <span>{item.year}</span>
            <span>•</span>
            <span>{item.condition}</span>
            <span>•</span>
            <span>{item.location}</span>
          </div>

          <div className="flex items-center">
            <span className="text-md font-bold text-[#131214] font-inter">${item.price}</span>
          </div>
        </div>
      </div>

      {/* Video Container - Center */}
      <div className="relative overflow-hidden w-full h-full lg:w-[462px] lg:h-[60vh] xl:h-[80vh]">
        <div className="absolute inset-0 w-full h-full lg:rounded-[18px]">
          <img src={displayImage} alt={item.title} className="w-full h-full object-cover lg:rounded-[18px]" />
          {/* gradient for better mobile readability */}
          <div className="absolute inset-0 lg:rounded-[18px] bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Mobile / tablet overlay: product details + playback + actions inside video */}
        <div className="absolute inset-0 lg:hidden z-20 pointer-events-none">
          {/* Top-right: mute */}
          <div className="absolute top-20 right-4 pointer-events-auto">
            <button
              className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center border border-white/30"
              onClick={handleMuteToggle}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <FaVolumeMute className="w-4 h-4 text-white" />
              ) : (
                <FaVolumeUp className="w-4 h-4 text-white" />
              )}
            </button>
          </div>

          {/* Right: vertical actions */}
          <div className="absolute bottom-24 right-2 flex flex-col items-center gap-6 pointer-events-auto pb-4">
            <button onClick={handleLike} className="flex flex-col items-center gap-1 active:scale-95">
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <svg
                  className={`w-6 h-6 transition-all ${isLiked ? 'text-red-500 fill-red-500' : 'text-[#FFFFFF] opacity-70'}`}
                  fill={isLiked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-white font-inter drop-shadow-md">{likes}</span>
            </button>

            <button onClick={handleDislike} className="flex flex-col items-center gap-1 active:scale-95">
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <img src={ThumbDownIcon} alt="Dislike" className="w-7 h-7 invert drop-shadow-md" />
              </div>
              <span className="text-xs font-medium text-white font-inter drop-shadow-md">Dislike</span>
            </button>

            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src={MessageCircleIcon} alt="Comments" className="w-7 h-7 invert drop-shadow-md" />
              </div>
              <span className="text-xs font-medium text-white font-inter drop-shadow-md">{item.views}</span>
            </div>

            <button onClick={handleShare} className="flex flex-col items-center gap-1 active:scale-95">
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <img src={Share02Icon} alt="Share" className="w-7 h-7 invert drop-shadow-md" />
              </div>
              <span className="text-xs font-medium text-white font-inter drop-shadow-md">Share</span>
            </button>
          </div>

          {/* Bottom: details + playback */}
          <div className="absolute bottom-[90px] left-4 right-16 pointer-events-auto">
            <h2 className="text-lg font-bold text-white mb-1 line-clamp-2 font-inter drop-shadow-md">
              {item.title}
            </h2>
            <div className="flex flex-wrap items-center gap-1 text-sm text-white/90 font-inter mb-1.5 drop-shadow-md">
              <span>{item.year}</span>
              <span>•</span>
              <span>{item.condition}</span>
              <span>•</span>
              <span>{item.location}</span>
            </div>
            <div className="text-xl font-bold text-[#FFB703] font-inter mb-2 drop-shadow-md">${item.price}</div>

            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all border border-white/50"
                onClick={handlePlayPause}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <FaPause className="w-3 h-3 text-white" />
                ) : (
                  <FaPlay className="w-3 h-3 text-white ml-0.5" />
                )}
              </button>
              {/* Seek bar */}
              <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-[#FFC733] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop playback controls – bottom center (unchanged) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
          <div className="flex flex-col items-left pl-6 gap-2">
            <div className="flex items-center gap-3">
              <button
                className="w-10 h-10 rounded-full bg-[rgba(230,233,235,0.3)] hover:bg-white flex items-center justify-center transition-all shadow-md"
                onClick={handlePlayPause}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <FaPause className="w-5 h-5 text-[#FFFFFF]" /> : <FaPlay className="w-5 h-5 text-[#FFFFFF]" />}
              </button>

              <button
                className="w-10 h-10 rounded-full bg-[rgba(230,233,235,0.3)] hover:bg-white flex items-center justify-center transition-all shadow-md"
                onClick={handleMuteToggle}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <FaVolumeMute className="w-5 h-5 text-[#FFFFFF]" /> : <FaVolumeUp className="w-5 h-5 text-[#FFFFFF]" />}
              </button>
            </div>

            <div className="w-[462px] h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-[#FFB703] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Container - Right Side (Outside Video, desktop only) */}
      <div className="hidden lg:flex flex-col items-center gap-4 flex-shrink-0">
        <button onClick={handleLike} className="flex flex-col items-center gap-1.5 transition-transform active:scale-95">
          <div className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center border border-gray-300 transition-all shadow-sm">
            <svg
              className={`w-6 h-6 transition-all ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-700'}`}
              fill={isLiked ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#FFFFFF] font-inter">{likes}</span>
        </button>

        <button onClick={handleDislike} className="flex flex-col items-center gap-1.5 transition-transform active:scale-95">
          <div className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center border border-gray-300 transition-all shadow-sm">
            <img src={ThumbDownIcon} alt="Dislike" className="w-6 h-6" />
          </div>
        </button>

        <div className="flex flex-col items-center gap-1.5">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 shadow-sm">
            <img src={MessageCircleIcon} alt="Comments" className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold text-gray-700 font-inter">{item.views}</span>
        </div>

        <button onClick={handleShare} className="flex flex-col items-center gap-1.5 transition-transform active:scale-95">
          <div className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all shadow-sm border border-gray-300">
            <img src={Share02Icon} alt="Share" className="w-6 h-6" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default FeedItem


