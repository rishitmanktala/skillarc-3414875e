"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const MotionLink = motion.create(Link);

export default function AboutPreviewSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Column: Stylized Quote & Mission Box */}
        <AnimatedSection
          variant="fade-right"
          className="lg:col-span-5 h-full"
        >
          <div className="relative h-full flex flex-col justify-between p-10 md:p-12 rounded-3xl bg-primary/10 border border-primary/20 overflow-hidden shadow-sm">
            {/* Background Blob */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />

            {/* Stylized Huge Quote Mark */}
            <span className="absolute -top-12 -left-2 font-display text-[160px] md:text-[200px] text-primary/40 leading-none select-none">
              “
            </span>

            {/* Blockquote text */}
            <blockquote className="font-display italic text-2xl md:text-3xl text-charcoal leading-relaxed relative z-10 pt-8 mb-16">
              Empowering the youth today {"isn't"} just about sharing knowledge; {"it's"} about igniting the spark of active community leadership.
            </blockquote>

            {/* Signature */}
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="font-body text-xs font-bold tracking-widest text-charcoal uppercase">
                SkillARC Foundation
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Column: Mission Content */}
        <AnimatedSection
          variant="fade-left"
          className="lg:col-span-7 flex flex-col items-start"
        >
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent bg-accent/10 px-3.5 py-1.5 rounded-full mb-3">
            Who We Are
          </span>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight mb-6">
            More Than a Program — A Movement
          </h2>

          <div className="font-body text-base md:text-lg text-muted-grey space-y-4 md:space-y-6 mb-8 leading-relaxed max-w-2xl">
            <p>
              SkillARC started with a simple belief: that young individuals have the capability to achieve real change if given the right guidance. Our sessions focus on active engagement, personal discovery, and practical tools.
            </p>
            <p>
              By offering immersive curriculum programs, we bridge the gap between traditional schooling and critical life competencies. We empower adolescents to express themselves fully and confidently.
            </p>
          </div>

          {/* Mission highlight box (Pink) */}
          <div className="w-full p-5 bg-accent/10 border-l-4 border-accent rounded-r-2xl flex gap-4 items-start mb-6">
            <Sparkles className="w-5 h-5 text-accent shrink-0 mt-1" />
            <div>
              <h4 className="font-body font-bold text-sm text-charcoal mb-1">Our Mission</h4>
              <p className="font-body text-sm text-charcoal/90 leading-relaxed">
                Empowering young individuals with essential life skills to build confidence, leadership, and personal growth.
              </p>
            </div>
          </div>

          {/* Vision statement */}
          <div className="w-full p-5 bg-primary/10 border-l-4 border-primary rounded-r-2xl flex gap-4 items-start mb-8">
            <Compass className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-body font-bold text-sm text-charcoal mb-1">Our Vision</h4>
              <p className="font-body text-sm text-charcoal/90 leading-relaxed">
                A generation that navigates {"life's"} challenges with courage and purpose.
              </p>
            </div>
          </div>

          {/* CTA Button with micro-interactions */}
          <MotionLink
            href="/about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 font-body font-semibold text-sm bg-primary text-charcoal px-6 py-3 rounded-xl shadow-sm transition-all duration-200 hover:bg-primary/80"
          >
            Learn Our Story
            <ArrowRight className="w-4 h-4" />
          </MotionLink>
        </AnimatedSection>

      </div>
    </section>
  );
}
