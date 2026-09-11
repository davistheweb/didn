import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Direct Impact Development Network",
  description:
    "Reach out to Direct Impact Development Network (DIDN) — partner, volunteer, or learn more about our work. Contact us by phone, email, or in person.",
};

export default function ContactPage() {
  return (
    <main className="scroll-smooth overflow-x-hidden">
      <ContactHero />
      <ContactSection />
      <ContactMap />
    </main>
  );
}
