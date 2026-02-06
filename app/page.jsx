// app/page.js
import Showcase from "./components/showcase";
import AboutSection from "./components/showcase-about";
import BrandPillars from "./components/showcase-pillars";
import FeaturedProducts from "./components/showcase-products";
import ContentSection from "./components/showcase-heart";
import SpeakWithUs from "./components/showcase-contact";

export const metadata = {
  title: "The Presence Method | Presence-Based Productivity",
  description: "Reduce mental noise and execute consistently. The Presence Method helps high-functioning adults build focus as a practical productivity skill.",
  keywords: ["Presence Method", "Productivity for high-performers", "Mental noise reduction", "Focus boundaries", "Sustainable productivity"],
};

export default function Home() {
  return (
    <>
      <Showcase />
      <AboutSection />
      <BrandPillars />
      <FeaturedProducts />
      <ContentSection />
      <SpeakWithUs />
      
      {/* Future components like Features, About, or Pricing 
          will go right here under the Showcase 
      */}
      {/* <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold">More Content Coming Soon...</h2>
      </section> */}
    </>
  );
}