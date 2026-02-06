export default function OurApproach() {
  return (
    <section className="w-full py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          {/* 1. Small Paragraph Label */}
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
            The Methodology
          </p>

          {/* 2. Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Designed for clarity, <br /> built for execution.
          </h2>

          {/* 3. Detailed Paragraph */}
          <p className="text-lg text-gray-600 leading-relaxed">
           We don't believe in "hustle culture." Our approach begins with 
            regulating the nervous system to support high-level focus. We combine 
            presence-based systems with simple, repeatable habits to ensure that 
            every hour worked and every goal set adds direct value to your 
            long-term stability. From mental clarity to daily output, we are 
            your partners in sustainable productivity.
          </p>
        </div>

        {/* Right Side: Picture */}
        <div className="w-full md:w-1/2">
          <div className="relative group">
            {/* Decorative background element */}
            <div className="absolute -inset-4 rounded-3xl -z-10 transition-colors duration-500"></div>
            
            <img 
              loading="lazy"
              
              src="/about-presence.jpg" 
              alt="Nervous system regulation for high-level focus - The Presence Method" 
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}