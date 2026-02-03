export default function ContentSection() {
  return (
    <section className="w-full py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* 1. Small Top Paragraph */}
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">
          The Strategy
        </p>

        {/* 2. Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
         We believe in building presence-based systems that enable performance.
        </h2>

        {/* 3. Detailed Bottom Paragraph */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
         At the heart of our work is a commitment to clarity and execution. 
          We do not just teach habits; we build stability. By focusing on the 
          core needs of the mind, we strip away the noise and deliver solutions 
          that are as practical as they are powerful. Our process is intentional, 
          transparent, and always driven by results.
        </p>

      </div>
    </section>
  );
}