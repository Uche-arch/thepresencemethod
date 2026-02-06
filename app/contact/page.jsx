import ContactShowcase from "../components/contact-showcase";
import ContactForm from "../components/contact-form";

export const metadata = {
  title: "Contact | Start Your Focus Reset",
  description: "Ready to trade mental noise for structured execution? Reach out to The Presence Method for high-level mentorship and focus reset tools.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactShowcase />
      <ContactForm />
    </main>
  );
}