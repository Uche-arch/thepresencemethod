export default function AboutShowcase() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden">
      {/* Subtle Background Decoration - No Animation Needed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* 1. Small Tag - Quick Fade In */}
        <span 
          data-aos="fade-in"
          data-aos-delay="200"
          className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white border border-gray-200 rounded-full shadow-sm text-[#ee7525]"
        >
          The Evolution
        </span>

        {/* 2. Main Heading - Solid Fade Up */}
        <h1 
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8"
        >
          We’re on a mission to <br className="hidden md:block" />
          <span className="text-[#ee7525]">
            reclaim focused action.
          </span>
        </h1>

        {/* 3. Thoughtful Paragraph - Slow Rise */}
        <p 
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1200"
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-8xl mx-auto"
        >
          Founded in 2024, we started with a simple question: Why is true clarity so hard to find? 
          Today, we are a team of coaches and strategists dedicated to 
          building systems that empower people rather than distract them. We teach presence as a practical productivity skill, so you can focus clearly, follow through consistently, and align your energy with what matters most.
        </p>
      </div>
    </section>
  );
}