"use client";
import { Laptop, HeartPulse, Workflow } from 'lucide-react';

export default function BrandPillars() {
  const pillars = [
    {
      title: "Digital Clarity",
      description: "We utilize focus boundaries to ensure your mental space stays ahead of the noise.",
      // Using Laptop for Digital Clarity
      icon: <Laptop size={88} strokeWidth={1} className="text-[#0e8178]" />
    },
    {
      title: "Emotional Regulation",
      description: "Systems that don't just look good, but feel right for your internal stability.",
      // Using HeartPulse for Internal Stability
      icon: <HeartPulse size={88} strokeWidth={1} className="text-[#0e8178]" />
    },
    {
      title: "Productive Living",
      description: "Habits built to handle your first goal and your millionth without breaking a sweat.",
      // Using Workflow for Habits/Systems
      icon: <Workflow size={88} strokeWidth={1} className="text-[#0e8178]" />
    }
  ];

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Container: 1 col on mobile, 3 cols on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
          
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center group ">
              
              {/* 1. Icon Container (Replaced pillar.image with the icon) */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-100 flex items-center justify-center border border-gray-200 transition-all duration-500 group-hover:bg-[#F5FBE6] cursor-pointer">
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {pillar.icon}
                </div>
              </div>

              {/* 2. Heading */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {pillar.title}
              </h3>

              {/* 3. Text at the bottom */}
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {pillar.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}