import WorkHero from "@/components/sections/work/WorkHero";
import ProgramsGrid from "@/components/sections/work/ProgramsGrid";
import SDGSection from "@/components/sections/work/SDGSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Programs & Impact | SkillARC",
  description: "Explore the core workshops, school initiatives, youth leadership fellowships, and actual transformation stories of SkillARC.",
  keywords: ["Life Skills Workshops", "Leadership Fellowships", "Youth Training Grid", "Youth Foundation impact India", "Aanya Story", "SkillARC Programs"],
  openGraph: {
    title: "Our Work | Programs & Impact | SkillARC",
    description: "Explore the core workshops, school initiatives, youth leadership fellowships, and actual transformation stories of SkillARC.",
    url: "https://skillarc.org/our-work",
    siteName: "SkillARC",
    images: [
      {
        url: "https://skillarc.org/our-work-og.jpg",
        width: 1200,
        height: 630,
        alt: "Our Work at SkillARC",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function OurWorkPage() {
  return (
    <>
      {/* 1. Our Work Hero Section */}
      <WorkHero />

      {/* 2. Detailed Programs Layout (Alternating full width) */}
      <ProgramsGrid />

      {/* 3. SDG Alignment Commitments */}
      <SDGSection />
    </>
  );
}
