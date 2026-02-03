"use client"; 
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Step 1: Import pathname hook

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Step 2: Initialize the current path

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Step 3: Helper function to apply styles to active links
  const getLinkStyles = (path) => {
    const isActive = pathname === path;
    return `relative transition-colors duration-300 hover:text-[#0e8178] ${
      isActive 
        ? 'text-[#0e8178] font-semibold after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#FE7F2D]' 
        : 'text-gray-600'
    }`;
  };

  return (
    <header className="bg-[#f7fcec] sticky top-0 z-50 mb-[-30px] border-b border-[#0e8178]/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 1. Logo */}
        <div className="text-2xl font-bold tracking-tight text-[#0e8178]">
          <Link href="/">
            <h3>TPM</h3>
          </Link>
        </div>

        {/* 2. Desktop Links */}
        <div className="hidden md:flex items-center gap-8 md:ml-30">
          <Link href="/" className={getLinkStyles('/')}>Home</Link>
          <Link href="/about" className={getLinkStyles('/about')}>About</Link>
          <Link href="/contact" className={getLinkStyles('/contact')}>Contact</Link>
        </div>

        {/* 3. Desktop Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-[#ee7525] text-white px-5 py-2 rounded-lg font-medium cursor-pointer transition-all active:scale-95 shadow-sm"
          >
            Speak with Us
          </button>
        </div>

        {/* 4. Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[#0e8178] transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0e8178] ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0e8178] transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* 5. Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-[#f7fcec] ${isOpen ? 'max-h-96 border-b border-[#0e8178]/10' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4 text-center font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className={pathname === '/' ? 'text-[#FE7F2D]' : 'text-[#0e8178]'}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={pathname === '/about' ? 'text-[#FE7F2D]' : 'text-[#0e8178]'}>About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={pathname === '/contact' ? 'text-[#FE7F2D]' : 'text-[#0e8178]'}>Contact</Link>
          <button 
            onClick={() => { scrollToSection('contact'); setIsOpen(false); }}
            className="bg-[#FE7F2D] text-white px-5 py-3 rounded-md w-full"
          >
            Speak with Us
          </button>
        </div>
      </div>
    </header>
  );
} 