import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Small Label - NO ANIMATION */}
        {/* Keeping this static makes the site feel grounded and stable */}
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          About Us
        </p>

        {/* 2. Main Statement - GENTLE FADE UP */}
        <h2 
          data-aos="fade-up" 
          data-aos-duration="1200" // Slower duration for a "calm" feel
          className="text-2xl md:text-5xl font-semibold text-gray-900 leading-snug mb-8"
        >
          We believe that presence should feel practical, sustainable, and move 
          high-performers forward without the noise of traditional productivity systems.
        </h2>

        {/* 3. Discover More Button - FADE IN WITH DELAY */}
        <Link href="/about">
          <button 
            data-aos="fade-in" 
            data-aos-delay="400" // Appears just as the text finish moving
            className="text-[#ee7525] cursor-pointer group relative flex items-center gap-2 font-bold text-lg border-b-2 border-[#ee7525] pb-1 transition-all"
          >
            Discover More
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </Link>

      </div>
    </section>
  );
}