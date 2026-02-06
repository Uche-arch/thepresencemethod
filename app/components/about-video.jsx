"use client";
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-900 group">
          
          {!isPlaying ? (
            <>
              {/* REMOVED "/public" FROM PATH */}
              <img 
              loading='lazy'
                src="/mockup_starter_guide.png" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center mb-6 hover:bg-white hover:scale-110 transition-all duration-300 group/btn"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-8 h-8 md:w-10 md:h-10 text-white group-hover/btn:text-[#0e8178] ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  The Productivity Advantage
                </h3>
                <p className="text-white/80 text-sm md:text-base font-medium tracking-wide">
                  2:02 MINS • FROM NOISE TO EXECUTION
                </p>
              </div>
            </>
          ) : (
            /* CHANGED IFRAME TO VIDEO TAG FOR LOCAL MP4 */
            <video 
              className="w-full h-full"
              controls
              autoPlay
              src="/tpm-video.mp4" // REMOVED "/public" FROM PATH
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </section>
  );
}