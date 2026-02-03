"use client";
import Typewriter from 'typewriter-effect';

export default function Showcase() {
  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-start md:items-center md:text-center">
        
        {/* 1. Top Small Paragraph - Fast Fade In */}
        <p 
          data-aos="fade-in" 
          data-aos-delay="200"
          className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-4"
        >
          Wellness-informed. Productivity-driven.
        </p>

        {/* 2. Big Hero Text - Solid Fade Up */}
        <h1 
          data-aos="fade-up" 
          data-aos-delay="400"
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6"
        >
          The system to <br className="hidden md:block" />
          <span className="text-gray-500">
            <Typewriter
              options={{
                strings: ['execute consistently.', 'reclaim your focus.', 'build stability.'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 70,
                wrapperClassName: "typewriter-wrapper",
                cursorClassName: "typewriter-cursor"
              }}
            />
          </span>
        </h1>

        {/* 3. Long Description Paragraph - Smooth Slide Up */}
        <p 
          data-aos="fade-up" 
          data-aos-delay="600"
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
        >
          Helping high-functioning adults reduce mental noise, regain focus, 
          and execute consistently by building presence as a practical 
          productivity skill.
        </p>

        {/* 4. Action Buttons - Grouped Pop In */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="800"
          data-aos-offset="0" 
          className="flex flex-wrap gap-4"
        >
          <button onClick={() => scrollToSection('contact')} className="bg-[#ee7525] text-white px-8 py-4 rounded-lg font-semibold cursor-pointer transition-all shadow-lg hover:shadow-xl active:scale-95">
            Speak with us
          </button>
          
          <button onClick={() => scrollToSection('products')} className="bg-white text-black border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold cursor-pointer transition-all active:scale-95">
            Reclaim Your Focus
          </button>
        </div>

      </div>
    </section>
  );
}