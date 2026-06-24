import AboutHero from "@/components/sections/about/AboutHero";
import FounderNote from "@/components/sections/about/FounderNote";
import MilestoneTimeline from "@/components/sections/about/MilestoneTimeline";
import CollaborationsSection from "@/components/sections/about/CollaborationsSection";
import VolunteersSection from "@/components/sections/about/VolunteersSection";
import RecognitionsSection from "@/components/sections/about/RecognitionsSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SkillARC | Our Story, Mission & Vision",
  description: "Learn about the mission, founding story, organizational milestones, and SDG alignments of the SkillARC Youth Foundation.",
  keywords: ["SkillARC History", "Youth Foundation Mission", "Shreya Gupta", "Milestones", "SDG 4", "SDG 10", "SDG 17", "Youth Foundation India"],
  openGraph: {
    title: "About SkillARC | Our Story, Mission & Vision",
    description: "Learn about the mission, founding story, organizational milestones, and SDG alignments of the SkillARC Youth Foundation.",
    url: "https://skillarc.org/about",
    siteName: "SkillARC",
    images: [
      {
        url: "https://skillarc.org/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About SkillARC",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* 1. About Hero Section */}
      <AboutHero />

      {/* 2. Message from the Founder */}
      <FounderNote />

      {/* 4. Milestones Timeline */}
      <MilestoneTimeline />

      {/* 5. Collaborations Section */}
      <CollaborationsSection />

      {/* 6. Guest Volunteers & Experts Section */}
      <VolunteersSection />

      {/* 7. Recognitions Section */}
      <RecognitionsSection />
    </>
  );
}
