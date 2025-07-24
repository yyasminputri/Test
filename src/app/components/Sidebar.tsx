'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Home, Gamepad2 } from 'lucide-react'

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Floating Pink Circle Button */}
      <button
        onClick={toggleMenu}
        className={`w-16 h-16 rounded-full shadow-xl transition-all duration-500 flex items-center justify-center relative ${
          isOpen 
            ? 'bg-gradient-to-br from-pink-400 to-pink-600 scale-110 rotate-180' 
            : 'bg-gradient-to-br from-pink-300 to-pink-500 hover:scale-110 hover:rotate-12 hover:shadow-2xl'
        }`}
      >
        {/* Cute sparkle effect */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
        
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <Menu className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Playful Bubble Menu */}
      <div 
        className={`absolute top-20 right-0 transition-all duration-700 transform origin-top-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-0 -translate-y-8 pointer-events-none'
        }`}
      >
        {/* Click Here Arrow */}
        <div className="absolute -top-8 right-4 flex items-center space-x-2 animate-bounce">
          <div className="text-gray-600 text-sm font-handwriting transform -rotate-12">click here</div>
          <div className="text-pink-400 text-lg">↗️</div>
        </div>

        <div className="space-y-4">
          {/* Home Bubble */}
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="group block"
          >
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl px-6 py-4 shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 transform hover:scale-105 hover:-rotate-2 min-w-32">
              <div className="flex items-center space-x-3">
                <Home className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-700 font-medium font-handwriting">my app</span>
              </div>
              {/* Cute tail */}
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r-2 border-b-2 border-pink-200 transform rotate-45"></div>
            </div>
          </Link>

          {/* Game Bubble */}
          <Link 
            href="/game" 
            onClick={() => setIsOpen(false)}
            className="group block"
          >
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl px-6 py-4 shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:rotate-2 min-w-32 ml-8">
              <div className="flex items-center space-x-3">
                <Gamepad2 className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-700 font-medium font-handwriting">game</span>
              </div>
              {/* Cute tail */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-2 border-b-2 border-purple-200 transform rotate-45"></div>
            </div>
          </Link>

          {/* About Me Bubble */}
          <div className="group cursor-pointer">
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl px-6 py-4 shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 min-w-32 ml-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">💕</span>
                </div>
                <span className="text-gray-700 font-medium font-handwriting">about me</span>
              </div>
              {/* Cute tail */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r-2 border-b-2 border-blue-200 transform rotate-45"></div>
            </div>
          </div>

          {/* Media Kit Bubble */}
          <div className="group cursor-pointer">
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl px-6 py-4 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all duration-300 transform hover:scale-105 hover:rotate-3 min-w-32 ml-12">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📱</span>
                </div>
                <span className="text-gray-700 font-medium font-handwriting">media kit</span>
              </div>
              {/* Cute tail */}
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-r-2 border-b-2 border-green-200 transform rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Fun tagline */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm font-handwriting transform -rotate-1">
            make websites fun again!!!
          </p>
        </div>
      </div>

      {/* Background Overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-pink-100/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        .font-handwriting {
          font-family: 'Kalam', 'Comic Sans MS', cursive;
          font-weight: 400;
        }
      `}</style>
    </div>
  )
}