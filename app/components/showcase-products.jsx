import Image from 'next/image';

export default function FeaturedProducts() {
  return (
    <section className="w-full py-24 px-6 bg-white overflow-hidden" id='products'>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* 1. Header Section */}
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
          The Product Suite
        </p>
        <h2 
          data-aos="fade-up" 
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Systems built for focused action.
        </h2>

        {/* 2. The Two Flexed Items */}
        <div className="flex flex-col md:flex-row gap-12 w-full justify-center mb-16">
          
          {/* Item 1: Active Product - SLIDE FROM LEFT */}
          <div 
            data-aos="fade-right" 
            data-aos-duration="1000"
            className="flex-1 flex flex-col items-center text-center max-w-md"
          >
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-6 bg-gray-100 border border-gray-100 shadow-sm">
              <a 
                href="https://selar.com/a0bj610m22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img 
                  loading='lazy'
                  src="/mockup_starter_guide.png" 
                  alt="The Presence Method 2026 Starter Guide - Focus and Execution Reset" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </a>
            </div>
            <h3 className="text-2xl font-bold mb-3">The Presence Method 2026 Starter Guide</h3>
            <p className="text-gray-600 leading-relaxed">
              A comprehensive focus reset tool that helps you track every habit in real-time with presence-driven insights.
            </p>
          </div>

          {/* Item 2: Coming Soon Product - SLIDE FROM RIGHT */}
          <div 
            data-aos="fade-left" 
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex-1 flex flex-col items-center text-center max-w-md"
          >
            <div className="w-full aspect-video rounded-3xl mb-6 bg-gray-900 flex flex-col items-center justify-center border border-gray-800 shadow-inner relative group overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl animate-pulse"></div>
              <span className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] mb-2">Status: In Progress</span>
              <h4 className="text-white text-xl font-medium">Coming Soon</h4>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-400">Clarity in Chaos</h3>
            <p className="text-gray-500 leading-relaxed">
              We are currently engineering a revolutionary way to handle daily execution. Stay tuned for our Spring 2026 launch.
            </p>
          </div>

        </div>

        {/* 3. Bottom Paragraph Text - SIMPLE FADE IN */}
        <p 
          data-aos="fade-in" 
          data-aos-delay="800"
          className="max-w-2xl text-center text-gray-500 italic border-t pt-8"
        >
          All our tools are built with clarity and consistency at the core. 
          Interested in early access? Join the Presence Circle or contact our support team.
        </p>

      </div>
    </section>
  );
}