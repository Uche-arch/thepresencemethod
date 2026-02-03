export default function SectionHeading() {
  return (
    <section className="w-full py-12 md:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* The Heading - Not too big, but clean and weighted */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-l-4 border-[#ee7525] pl-6 leading-snug">
          We believe that the best work comes from <br className="hidden md:block" />
          internal stability and a shared commitment to execution.
        </h2>
      </div>
    </section>
  );
}