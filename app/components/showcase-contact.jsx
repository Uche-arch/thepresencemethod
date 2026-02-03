import Link from 'next/link';

export default function SpeakWithUs() {
  return (
    <section className="w-full py-20 md:py-32 px-6" id='contact'>
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Top Paragraph */}
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-4">
          Get in Touch
        </p>

        {/* 2. Main Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-12 max-w-4xl">
          Ready to translate your calm into better results?
        </h2>

        {/* 3. Image and Button Flex Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          
          {/* Circular Image / Avatar Group */}
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <img 
              src="/banner_pic.jpeg" 
              alt="Consultant" 
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
            {/* Online Indicator */}
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></span>
          </div>

          {/* Action Button */}
          <Link href="/contact">
            <button className="bg-[#ee7525] cursor-pointer text-white px-8 py-4 md:py-5 md:px-10 rounded-full text-lg font-bold hover:shadow-1xl hover:-translate-y-1 transition-all active:scale-95">
              Reclaim Focus
            </button>
          </Link>
        </div>

        {/* Optional: Subtext under the action */}
        <p className="mt-8 text-gray-500 text-sm">
          Average response time: &lt; 2 hours
        </p>

      </div>
    </section>
  );
}