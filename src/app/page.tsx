'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Star, Sparkles, Gift, Cake, Zap } from 'lucide-react';

// Type definitions
interface CheckedItems {
  [key: number]: boolean;
}

interface ChecklistItem {
  id: number;
  text: string;
  emoji: string;
}

interface MediaItem {
  type: 'video' | 'image';
  src: string;
  title: string;
}

interface DecorativeElement {
  icon: React.ComponentType;
  color: string;
  size: string;
  id: string;
}

// Letter Section Component - Simple Elegant Version
const LetterSection = () => {
  const [letterState, setLetterState] = useState<'closed' | 'peek' | 'open'>('closed');
  
  const handleEnvelopeClick = () => {
    if (letterState === 'closed') {
      setLetterState('peek');
    } else if (letterState === 'peek') {
      setLetterState('open');
    } else {
      setLetterState('closed');
    }
  };

  return (
    <section className="relative z-30 py-24 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black mb-4 font-montserrat">
            My Favorite of You ❤️
          </h2>
          <p className="text-gray-800 text-lg font-montserrat">The silly things that make me love you more</p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-20 items-center">
          
          {/* Left Side - Enhanced Photo Gallery */}
          <div className="relative">
            <div className="flex justify-center items-center space-x-6">
              {/* 3 Enhanced Photos with Vintage Frame */}
              {[
                { rotation: '-rotate-6', title: 'Sweet Memory', zIndex: 'z-10', video: '12.mp4' },
                { rotation: 'rotate-3', title: 'Together', zIndex: 'z-20', video: '11.mp4' },
                { rotation: '-rotate-2', title: 'Forever', zIndex: 'z-10', video: '132.mp4' }
              ].map((photo, index) => (
                <div key={index} className={`relative transform ${photo.rotation} hover:rotate-0 hover:scale-110 transition-all duration-500 ${photo.zIndex}`}>
                  {/* Simple Video Frame */}
                  <div className="relative bg-black rounded-lg shadow-2xl p-4">
                    {/* Video Content */}
                    <div className="w-60 h-72 rounded overflow-hidden">
                      <video 
                        className="w-full h-full object-cover rounded"
                        autoPlay 
                        loop 
                        muted
                        playsInline
                      >
                        <source src={photo.video} type="video/mp4" />
                        <div className="text-gray-400 text-center">
                          <Heart className="w-6 h-6 mx-auto mb-2" />
                          <span className="text-xs font-montserrat font-medium">{photo.title}</span>
                        </div>
                      </video>
                    </div>
                    
                    {/* Tape Effect */}
                    <div 
                      className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-8 border border-gray-200 opacity-70 rotate-12"
                      style={{ backgroundColor: '#f7554a' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative Scattered Elements */}
            <div className="absolute -top-6 -right-6 text-pink-300 text-3xl animate-pulse">✨</div>
            <div className="absolute -bottom-6 -left-6 text-amber-300 text-2xl animate-bounce">💕</div>
            <div className="absolute top-1/3 -left-8 text-purple-300 text-xl animate-pulse">🌟</div>
          </div>

            
          {/* Right Side - Enhanced Envelope */}
          <div className="relative flex justify-center items-center min-h-[150px]">

             <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black mb-4 font-montserrat">
            💌 Love Letter
          </h2>
          <p className="text-gray-800 text-lg font-montserrat">Click the envelope to reveal a special message</p>
        </div>
            
            {/* Enhanced Envelope với gambar 1.png dan 2.png */}
            <div 
              className={`relative cursor-pointer transition-all duration-700 transform hover:scale-110 ${
                letterState === 'open' ? 'scale-95 opacity-30' : ''
              }`}
              onClick={handleEnvelopeClick}
            >
              
              {/* Closed Envelope State - 1.png */}
              <div className={`transition-all duration-700 ${letterState === 'closed' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex justify-center items-center">
                  <Image 
                    src="/1.png" 
                    alt="Closed Envelope"
                    width={800}
                    height={940}
                    className="object-contain rounded-lg"
                    style={{ aspectRatio: '4/5.2' }}
                  />
                </div>
              </div>

              {/* Opening/Opened Envelope State - 2.png */}
              <div className={`absolute inset-0 transition-all duration-700 ${letterState !== 'closed' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex justify-center items-center">
                  <Image 
                    src="/2.png" 
                    alt="Opened Envelope"
                    width={800}
                    height={940}
                    className="object-contain rounded-lg"
                    style={{ aspectRatio: '4/5.2' }}
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Full Letter Modal */}
            <div 
              className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ${
                letterState === 'open' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            >
              <div 
                className={`bg-white w-[550px] h-[600px] rounded-xl shadow-2xl p-12 transform transition-all duration-500 relative ${
                  letterState === 'open' ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                }`}
                onClick={(e) => e.stopPropagation()}
                style={{ 
                  backgroundColor: '#fefdf7',
                  backgroundImage: `
                    linear-gradient(rgba(198,157,103,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(198,157,103,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px'
                }}
              >
                
                {/* Paper Corner Curls */}
                <div className="absolute top-2 right-2 w-4 h-4 bg-gray-200 transform rotate-45 rounded-tl-lg shadow-md"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-gray-200 transform rotate-45 rounded-br-lg shadow-md"></div>
                
                {/* Letter Content */}
                <div className="space-y-6 text-black leading-relaxed">
                  <p className="text-5xl font-semibold text-center text-black font-montserrat">
                    Happy Birthday 🎂
                  </p>

                  <p className="text-sm font-montserrat leading-7">
                    Tepat beberapa hari yang lalu, adalah hari spesialmu. Selamat berulang tahun sayang dengan bertambah usia ke yang 21 tahun. Aku selalu berharap hal baik menyertaimu. Semoga panjang umur, sehat selalu, dilimpahkan banyak rezeki, semakin sayang sama mama dan papa, semakin sayang aku, semakin **dewasa** yang terpenting!  
                    May this year bring you endless opportunities and adventures. I&apos;m hoping your day will be much much better each day and I hope you chase your dreams with passion and determination. Remember, you are capable of achieving anything you set your mind to!
                    Wishing you a year filled with love, laughter, and unforgettable memories. May you always find joy in the little things and strength in the challenges you face.
                    You deserve all the happiness in the world, and I will always be here to support you. Keep shining bright and never forget how special you are!
                  </p>

                  <p className="text-sm font-montserrat leading-7">
                  </p>
                  
                  <div className="text-center mt-3 pt-6 border-t border-gray-200">
                    <p className="text-lg font-medium text-black font-montserrat">
                      With all of my heart ❤️
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 text-pink-400 text-3xl animate-pulse">💕</div>
                <div className="absolute bottom-8 left-8 text-yellow-400 text-2xl animate-bounce">⭐</div>

                {/* Close button */}
                <button 
                  onClick={() => setLetterState('closed')}
                  className="absolute top-4 right-4 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black hover:bg-gray-200 hover:text-gray-800 transition-colors text-2xl font-bold shadow-lg"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BirthdayBookWebsite = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleChecklistItem = (itemId: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const decorativeElements: DecorativeElement[] = [
    { icon: Star, color: 'text-yellow-400', size: 'text-2xl', id: 'star1' },
    { icon: Heart, color: 'text-pink-500', size: 'text-xl', id: 'heart1' },
    { icon: Sparkles, color: 'text-purple-400', size: 'text-lg', id: 'sparkle1' },
    { icon: Gift, color: 'text-blue-400', size: 'text-2xl', id: 'gift1' },
    { icon: Cake, color: 'text-orange-400', size: 'text-xl', id: 'cake1' },
    { icon: Zap, color: 'text-green-400', size: 'text-lg', id: 'zap1' },
  ];

  const checklistItems: ChecklistItem[] = [
    { id: 1, text: 'Blow the candle with a sweet cake', emoji: '🎂' },
    { id: 2, text: 'Make 10 birthday wishes', emoji: '⭐' },
    { id: 3, text: 'A warm birthday kiss', emoji: '💋' },
    { id: 4, text: 'Get a free birthday hug', emoji: '🤗' },
    { id: 5, text: 'Unwrap the surprise gift', emoji: '🎁' }
  ];

  const mediaItems: MediaItem[] = [
    { type: 'video', src: '1.mp4', title: 'Sweet Memory 1' },
    { type: 'video', src: '4.mp4', title: 'Beautiful Moment 1' },
    { type: 'video', src: '2.mp4', title: 'Sweet Memory 2' },
    { type: 'video', src: '5.mp4', title: 'Beautiful Moment 2' },
    { type: 'video', src: '3.mp4', title: 'Sweet Memory 3' },
    { type: 'video', src: '6.mp4', title: 'Beautiful Moment 3' },
  ];

  return (
    <div className="min-h-[300vh] bg-transparent relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Balloons */}
        <div className="absolute inset-0">
          {/* Balloon 1 */}
          <div 
            className="absolute text-6xl"
            style={{
              animation: 'floatBalloon1 8s ease-in-out infinite',
              left: '10%',
              bottom: '-100px',
              color: '#f7554a'
            }}
          >
            🎈
          </div>
          
          {/* Balloon 2 */}
          <div 
            className="absolute text-5xl"
            style={{
              animation: 'floatBalloon2 10s ease-in-out infinite 2s',
              left: '25%',
              bottom: '-100px',
              color: '#f7554a'
            }}
          >
            🎈
          </div>
          
          {/* Balloon 3 */}
          <div 
            className="absolute text-6xl"
            style={{
              animation: 'floatBalloon3 12s ease-in-out infinite 4s',
              right: '20%',
              bottom: '-100px',
              color: '#f7554a'
            }}
          >
            🎈
          </div>
          
          {/* Balloon 4 */}
          <div 
            className="absolute text-5xl"
            style={{
              animation: 'floatBalloon4 9s ease-in-out infinite 6s',
              right: '10%',
              bottom: '-100px',
              color: '#f7554a'
            }}
          >
            🎈
          </div>
          
          {/* Balloon 5 */}
          <div 
            className="absolute text-4xl"
            style={{
              animation: 'floatBalloon5 11s ease-in-out infinite 1s',
              left: '5%',
              bottom: '-100px',
              color: '#f7554a'
            }}
          >
            🎈
          </div>
          
          {/* Balloon 6 */}
          <div 
            className="absolute text-5xl"
            style={{
              animation: 'floatBalloon6 13s ease-in-out infinite 3s',
              right: '5%',
              bottom: '-100px',
              color: '#f7554a'
            }}
          >
            🎈
          </div>
        </div>
        
        {decorativeElements.map((element, index) => (
          <div key={element.id}>
            {/* Left side floating elements */}
            <div
              className={`absolute ${element.color} ${element.size} opacity-60`}
              style={{
                top: `${10 + index * 12}%`,
                left: `${2 + Math.sin(scrollY * 0.002 + index) * 3}%`,
                transform: `rotate(${scrollY * 0.1 + index * 20}deg) translateY(${Math.sin(scrollY * 0.005 + index) * 10}px)`,
                animation: isLoaded ? `float${index} 4s ease-in-out infinite` : 'none',
                zIndex: 10,
              }}
            >
              <element.icon />
            </div>
            
            {/* Right side floating elements */}
            <div
              className={`absolute ${element.color} ${element.size} opacity-60`}
              style={{
                top: `${20 + index * 10}%`,
                right: `${2 + Math.cos(scrollY * 0.003 + index) * 3}%`,
                transform: `rotate(${-scrollY * 0.08 - index * 15}deg) translateY(${Math.cos(scrollY * 0.004 + index) * 8}px)`,
                animation: isLoaded ? `float${index} 5s ease-in-out infinite reverse` : 'none',
                zIndex: 10,
              }}
            >
              <element.icon />
            </div>

            {/* Background scattered elements */}
            <div
              className={`absolute ${element.color} ${element.size} opacity-30`}
              style={{
                top: `${50 + index * 8}%`,
                left: `${10 + index * 15}%`,
                transform: `rotate(${scrollY * 0.05 + index * 30}deg) scale(${0.7 + Math.sin(scrollY * 0.01 + index) * 0.3})`,
                animation: isLoaded ? `pulse 3s ease-in-out infinite` : 'none',
                zIndex: 5,
              }}
            >
              <element.icon />
            </div>
          </div>
        ))}
      </div>

      {/* Main Book Container */}
      <main className="relative z-30 flex justify-center items-center min-h-screen px-4 py-20">
        <div 
          className="relative max-w-6xl mx-auto perspective-1000"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        >
          {/* Multiple Shadow Layers for Realism */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[95%] h-12 bg-black/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-6 bg-black/10 rounded-full blur-lg"></div>
          
          {/* Notebook Container with HBD.png Background */}
          <div className="relative transform hover:scale-105 hover:rotate-1 hover:shadow-3xl transition-all duration-500 group">
            
            {/* Enhanced Notebook with HBD.png Background */}
            <div className="relative group-hover:shadow-3xl transition-shadow duration-500">
              <Image 
                src="/hbd.png" 
                alt="Birthday Notebook"
                width={800}
                height={600}
                className="w-3/4 h-auto shadow-2xl rounded-xl mx-auto"
              />
              <div className="absolute inset-0 p-8 md:p-12">
                
                {/* Content overlay removed - clean notebook display */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Birthday Checklist Section */}
        <section className="relative z-30 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Simple Beautiful Box */}
            <div className="relative rounded-2xl shadow-xl p-10 transform hover:scale-105 hover:shadow-2xl transition-all duration-500 border"
                style={{
                  background: 'linear-gradient(135deg, #fef7f0 0%, #fdf2f8 50%, #f1f5f9 100%)',
                  borderColor: '#f8d7da'
                }}>
              
              {/* Header */}
              <div className="mb-10">
                <div className="inline-block px-6 py-3 rounded-xl mb-6 shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #e63935, #f78ca0)' }}>
                  <h2 className="text-3xl font-bold text-white font-montserrat">🎂 Birthday Checklist 🎂</h2>
                </div>
                <div className="w-40 h-1.5 rounded-full shadow-sm"
                    style={{ background: 'linear-gradient(to right, #f78ca0, #e63935)' }}></div>
              </div>

              {/* Checklist Items */}
              <div className="space-y-4">
                {checklistItems.map((item, index) => (
                  <div key={item.id} 
                      className="flex items-center space-x-5 py-4 px-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer"
                      style={{
                        animation: isLoaded ? `slideUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                      }}
                      onClick={() => toggleChecklistItem(item.id)}>
                    
                    {/* Dot - Always red but clickable */}
                    <div
                      className="relative w-4 h-4 rounded-full transition-all duration-300 group-hover:scale-110 shadow-sm"
                      style={{ backgroundColor: '#e63935' }}
                    ></div>
                    
                    {/* Text with conditional strikethrough */}
                    <div className="flex-1">
                      <span className={`text-xl font-medium font-montserrat transition-all duration-300 ${
                        checkedItems[item.id]
                          ? 'text-gray-400 line-through' 
                          : 'text-gray-700 group-hover:text-red-600'
                      }`}>
                        {item.text}
                      </span>
                    </div>
                    
                    {/* Emoji Animation */}
                    <div className={`text-3xl group-hover:animate-bounce transition-all duration-300 ${
                      checkedItems[item.id] ? 'opacity-40' : ''
                    }`}>
                      {item.emoji}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Note */}
              <div className="mt-10 pt-6 border-t border-pink-200">
                <p className="text-base italic text-gray-600 font-montserrat text-center">
                  &ldquo;Make every moment count on your special day! 💕&rdquo;
                </p>
              </div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full shadow-md"
                  style={{ background: 'linear-gradient(135deg, #f78ca0, #e63935)' }}></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full shadow-md"
                  style={{ background: 'linear-gradient(135deg, #e63935, #f78ca0)' }}></div>
            </div>
          </div>
        </section>

      {/* Interactive Letter Section */}
      <LetterSection />

      {/* Large Text Section */}
      <section className="relative z-30 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-red-600 leading-tight mb-6 font-montserrat tracking-wide">
            HAVING YOU IS ONE OF THE BEST THING I'VE EVER HAD
          </h1>
          <p className="text-3xl md:text-4xl font-medium text-black italic font-montserrat">
            love you, xoxo
          </p>
        </div>
      </section>

      {/* Running Photo Carousel */}
      <section className="relative z-30 py-48 px-4 bg-transparent overflow-hidden mt-48">
        <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-black mb-12 font-montserrat">
          Core Memories
        </h1>
          
          {/* Infinite Scrolling Carousel */}
          <div className="relative">
            <div className="flex animate-scroll space-x-6">
              {/* First set of items */}
              {mediaItems.map((item, index) => (
                <div key={`first-${index}`} className="flex-none">
                  <div className="relative w-64 h-80 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-all duration-300">
                    <div className="w-full h-64 rounded-xl overflow-hidden">
                      {item.type === 'video' ? (
                        <video 
                          className="w-full h-full object-cover rounded-xl"
                          autoPlay 
                          loop 
                          muted
                          playsInline
                        >
                          <source src={item.src} type="video/mp4" />
                          <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                            <Heart className="w-8 h-8" />
                          </div>
                        </video>
                      ) : (
                        <img 
                          src={item.src} 
                          alt={item.title}
                          className="w-full h-full object-cover rounded-xl"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const nextSibling = target.nextSibling as HTMLElement;
                            if (nextSibling) {
                              nextSibling.style.display = 'flex';
                            }
                          }}
                        />
                      )}
                      {item.type === 'image' && (
                        <div className="hidden w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl items-center justify-center">
                          <div className="text-center text-gray-600">
                            <Heart className="w-12 h-12 mx-auto mb-2 text-pink-400" />
                            <p className="text-sm font-montserrat">{item.title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Photo title */}
                    <div className="mt-3 text-center">
                      <p className="text-sm font-medium text-gray-700 font-montserrat">{item.title}</p>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {mediaItems.map((item, index) => (
                <div key={`second-${index}`} className="flex-none">
                  <div className="relative w-64 h-80 bg-white rounded-2xl shadow-xl p-4 transform hover:scale-105 transition-all duration-300">
                    <div className="w-full h-64 rounded-xl overflow-hidden">
                      {item.type === 'video' ? (
                        <video 
                          className="w-full h-full object-cover rounded-xl"
                          autoPlay 
                          loop 
                          muted
                          playsInline
                        >
                          <source src={item.src} type="video/mp4" />
                          <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                            <Heart className="w-8 h-8" />
                          </div>
                        </video>
                      ) : (
                        <img 
                          src={item.src} 
                          alt={item.title}
                          className="w-full h-full object-cover rounded-xl"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const nextSibling = target.nextSibling as HTMLElement;
                            if (nextSibling) {
                              nextSibling.style.display = 'flex';
                            }
                          }}
                        />
                      )}
                      {item.type === 'image' && (
                        <div className="hidden w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl items-center justify-center">
                          <div className="text-center text-gray-600">
                            <Heart className="w-12 h-12 mx-auto mb-2 text-pink-400" />
                            <p className="text-sm font-montserrat">{item.title}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Photo title */}
                    <div className="mt-3 text-center">
                      <p className="text-sm font-medium text-gray-700 font-montserrat">{item.title}</p>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        
        .perspective-1000 {
          perspective: 1000px;
          perspective-origin: center center;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotateY-2:hover {
          transform: rotateY(2deg);
        }
        
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-8deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(12deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-15deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(8deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(-10deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Balloon Animations */
        @keyframes floatBalloon1 {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) translateX(20px) rotate(5deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
        }
        
        @keyframes floatBalloon2 {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-60vh) translateX(-30px) rotate(-8deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) translateX(10px) rotate(3deg);
            opacity: 0;
          }
        }
        
        @keyframes floatBalloon3 {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-55vh) translateX(-15px) rotate(10deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-105vh) translateX(-25px) rotate(-5deg);
            opacity: 0;
          }
        }
        
        @keyframes floatBalloon4 {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-65vh) translateX(25px) rotate(-12deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-115vh) translateX(5px) rotate(7deg);
            opacity: 0;
          }
        }
        
        @keyframes floatBalloon5 {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-70vh) translateX(35px) rotate(15deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) translateX(-10px) rotate(-8deg);
            opacity: 0;
          }
        }
        
        @keyframes floatBalloon6 {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-45vh) translateX(-20px) rotate(-6deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-95vh) translateX(15px) rotate(12deg);
            opacity: 0;
          }
        }
        
        /* Enhanced Book and Letter specific styles */
        .book-shadow {
          filter: drop-shadow(0 20px 25px rgba(0,0,0,0.15)) drop-shadow(0 8px 10px rgba(0,0,0,0.1));
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Enhanced animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        /* Group hover states for smoother transitions */
        .group:hover .group-hover\\:shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Paper texture and vintage effects */
        .paper-texture {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 199, 198, 0.3) 0%, transparent 50%);
        }
        
        /* Enhanced hover effects */
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Infinite Carousel Animation */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BirthdayBookWebsite;