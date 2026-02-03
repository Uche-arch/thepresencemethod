import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Small Label */}
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
          About Us
        </p>

        {/* 2. Quite Long Big Text */}
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 leading-snug mb-8">
        We believe that presence should feel practical, sustainable, and move 
          high-performers forward without the noise of traditional productivity systems.
        </h2>

        {/* 3. Discover More Button */}
        <Link href="/about">
          <button className="text-[#ee7525] cursor-pointer group relative flex items-center gap-2 font-bold text-lg border-b-2 border-[#ee7525] pb-1 transition-all">
            Discover More
            {/* Simple Arrow Icon */}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </Link>

      </div>
    </section>
  );
}