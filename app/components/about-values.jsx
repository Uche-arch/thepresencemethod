export default function CompanyValues() {
  const items = [
    {
      title: "Our Mission",
      description: "Helping high-functioning adults reduce mental noise, regain focus and execute consistently by building presence as a practical productivity skill."
    },
    {
      title: "Our Vision",
      description: "To help people reclaim clarity in a distracted world and translate calm into focused action through simple, repeatable systems that support productivity, emotional regulation, and sustainable habits."
    },
    {
      title: "Our Goals",
      description: "Through simple systems, intentional planning, and grounded habits, our goal is to help you quiet the noise, direct your energy, and execute what actually matters."
    }
  ];

  return (
    <section className="w-full py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16">
          
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex-1 flex flex-col items-start"
              /* THE BEST: Staggered reveal for the three pillars of the company */ 
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="1000"
            >
              {/* 1. Header with an accent line */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-blue-600"></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* 2. Description Text */}
              <p className="text-lg text-gray-600 leading-relaxed italic">
                "{item.description}"
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}