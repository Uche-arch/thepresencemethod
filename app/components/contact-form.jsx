"use client";

export default function ContactSimple() {
  const email = "presencemthd@gmail.com";

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* 1. Paragraph Text - Constrained width for readability */}
        <p className="text-lg md:text-xl text-gray-600 mb-16 text-center max-w-2xl leading-relaxed">
         The Method is for those ready to move from fragmented attention to 
          structured execution. Whether you are entering the Method for 
          the first time or looking for high-level mentorship, 
          connect with us through the channels below.
        </p>

        {/* 2. Contact Info Flex Row */}
        {/* We use md:flex-row to go side-by-side on desktop, flex-col for mobile */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-20 pb-12 border-b border-gray-100">
          
          {/* Phone */}
          <div className="flex-1 text-center">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-3">Contact</span>
            <p className="text-xl lg:text-2xl font-semibold text-gray-900">+234 806 759 8421</p>
          </div>

          {/* Divider Line (Visible only on desktop) */}
          <div className="hidden md:block w-px h-16 bg-gray-200 self-center"></div>

          {/* Location */}
          <div className="flex-1 text-center">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-3">Location</span>
            <p className="text-xl lg:text-2xl font-semibold text-gray-900">123 TPM HQ, NGA</p>
          </div>

          {/* Divider Line (Visible only on desktop) */}
          <div className="hidden md:block w-px h-16 bg-gray-200 self-center"></div>

          {/* Email */}
          <div className="flex-1 text-center">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-3">Email</span>
            <p className="text-xl lg:text-2xl font-semibold text-gray-900 break-all md:break-normal">{email}</p>
          </div>
        </div>

        {/* 3. Send Us a Message Button */}
        <a 
          href={`mailto:${email}`}
          className="group inline-flex items-center gap-3 bg-[#ee7525] text-white px-10 py-5 rounded-lg text-lg font-bold transition-all active:scale-95"
        >
          Send us a message
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>

      </div>
    </section>
  );
}