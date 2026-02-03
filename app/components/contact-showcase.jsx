export default function ContactShowcase() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden">
      {/* Background Blobs - Static for stability */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* 1. Small Tag - Fast Fade In */}
        <span 
          data-aos="fade-in"
          data-aos-delay="200"
          className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white border border-gray-200 rounded-full shadow-sm text-[#ee7525]"
        >
          Direct Access
        </span>

        {/* 2. Main Heading - Bold Fade Up */}
        <h1 
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8"
        >
          Let’s define your <span className="text-[#ee7525]">focus.</span>
        </h1>

        {/* 3. Description - Smooth Slide Up */}
        <p 
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Ready to trade mental noise for consistent execution? 
          Reach out below to discuss how the Method can stabilize 
          your daily output and reclaim your presence.
        </p>
      </div>
    </section>
  );
}