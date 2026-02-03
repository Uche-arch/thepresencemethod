"use client";
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I begin the Method?",
      answer: "We recommend starting with the Presence Method 2026 Starter Guide to reset your focus boundaries. From there, you can reach out to us for high-level mentorship and advanced systems."
    },
    {
      question: "Is this a productivity tool or coaching?",
      answer: "It is both. We provide the 'Life OS' frameworks (the tools) and the 'Calm Authority' mentorship (the coaching) to ensure you translate stability into consistent daily output."
    },
    {
      question: "How soon will I see an increase in focus?",
      answer: "Our systems are built for immediate implementation. Most members report a significant reduction in 'mental noise' and improved execution within the first 14 days of following the protocol."
    },
    {
      question: "Is this for teams or individuals?",
      answer: "The Presence Method is designed for high-functioning individuals, but we frequently implement these focus systems within leadership teams to improve collective clarity and reduce burnout."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Helpful answers for first-time & returning guests
          </h2>
        </div>

        {/* 2. Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {/* Plus/Minus Icon */}
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className={`absolute w-5 h-0.5 bg-gray-900 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></div>
                  <div className={`absolute w-0.5 h-5 bg-gray-900 transition-transform duration-300 ${openIndex === index ? 'rotate-90 opacity-0' : ''}`}></div>
                </div>
              </button>

              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-4 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}