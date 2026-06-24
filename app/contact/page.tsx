import ContactHero from "@/components/sections/contact/ContactHero";
import ContactMain from "@/components/sections/contact/ContactMain";
import FAQSection from "@/components/sections/contact/FAQSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SkillARC | Reach Out to Us",
  description: "Get in touch with the SkillARC Foundation. Send us a message for general enquiries, volunteer roles, partnerships, media coverage, or donations.",
  keywords: ["Contact SkillARC", "FAQ", "Youth Foundation Phone", "Youth Foundation Email", "India Youth Foundation Support", "Send Message SkillARC"],
  openGraph: {
    title: "Contact SkillARC | Reach Out to Us",
    description: "Get in touch with the SkillARC Foundation. Send us a message for general enquiries, volunteer roles, partnerships, media coverage, or donations.",
    url: "https://skillarc.org/contact",
    siteName: "SkillARC",
    images: [
      {
        url: "https://skillarc.org/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SkillARC",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Contact Hero */}
      <AnimatedSection direction="none">
        <ContactHero />
      </AnimatedSection>

      {/* 2. Contact Main Info & Form */}
      <AnimatedSection direction="up">
        <ContactMain />
      </AnimatedSection>

      {/* 3. FAQ Section Accordion */}
      <AnimatedSection direction="up">
        <FAQSection />
      </AnimatedSection>
    </>
  );
}
