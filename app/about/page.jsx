import AboutShowcase from "../components/about-showcase";
import SectionHeading from "../components/second-about";
import OurApproach from "../components/about-approach";
import CompanyValues from "../components/about-values";
import VideoSection from "../components/about-video";
import FAQSection from "../components/about-accordion"; 
import SpeakWithUs from "../components/showcase-contact";
// Import other components as we build them...

export const metadata = {
  title: "About Us | The Presence Method Story",
  description: "We are on a mission to reclaim focused action. Founded in 2024, TPM builds systems that empower people through internal stability and sustainable habits.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutShowcase />
      <SectionHeading />
      <OurApproach />
      <CompanyValues />
      <VideoSection />
      <FAQSection />
      <SpeakWithUs />
      {/* We can add a Team Grid or a Timeline next */}
    </main>
  );
}