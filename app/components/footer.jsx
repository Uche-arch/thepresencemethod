import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-black pt-12 pb-6 px-6 mt-auto bg-[#d4dbc2]">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Logo */}
        <div className="text-2xl font-bold tracking-tight mb-4">
          The Presence Method
        </div>

        {/* 2. Description Paragraph */}
        <p className="max-w-md text-gray-600 mb-8 leading-relaxed">
          Wellness-informed. Productivity-driven. We help high-functioning adults 
          translate calm into focused action through simple, repeatable systems.
        </p>

        {/* 3. Support & Email Section (Flexed) */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 mb-10">
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Direct Support</h4>
            <a 
              href="tel:+2348067598421" 
              className="text-xl font-semibold hover:text-[#0e8178] transition-colors"
            >
              +234 806 759 8421
            </a>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Connect via Email</h4>
            <a 
              href="mailto:presencemthd@gmail.com" 
              className="text-xl font-semibold hover:text-[#0e8178] transition-colors"
            >
              presencemthd@gmail.com
            </a>
          </div>
        </div>

        {/* 4. Social Media Line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <p className="font-medium text-lg">Join the Presence Circle online</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition">𝕏</div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition">f</div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition">in</div>
          </div>
        </div>

        {/* 5. Tiny Border */}
        <div className="border-t border-gray-300 w-full mb-6"></div>

        {/* 6. Bottom Bar (Flexed Links & Copyright) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex gap-6">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <Link href="/about" className="hover:text-black transition">About</Link>
            <Link href="/contact" className="hover:text-black transition">Contact</Link>
          </div>
          <div>
            © {currentYear} The Presence Method. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}