"use client";

import { TEAM_MEMBERS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

export default function TeamGrid() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-primary/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Our Team
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Meet the Minds Behind SkillARC
          </h2>
          <p className="font-body text-sm text-muted-grey mt-4">
            A youth-led collective committed to nurturing agency, resilience, and leadership across underserved student communities in India.
          </p>
        </div>

        {/* Team Grid */}
        <AnimatedSection
          variant="stagger-container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {TEAM_MEMBERS.map((member, idx) => {
            // Generate initials for placeholder
            const initials = member.name
              .split(" ")
              .map((n) => n[0])
              .join("");

            // Assign unique placeholder gradients to each member for a vibrant look
            const gradients = [
              "from-primary via-[#8dc6d8] to-accent",
              "from-accent via-[#e1a5be] to-highlight",
              "from-highlight via-[#ecc863] to-primary",
            ];
            const gradientClass = gradients[idx % gradients.length];

            return (
              <AnimatedSection
                key={member.name}
                variant="stagger-item"
                className="w-full"
              >
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="card-surface flex flex-col items-center text-center h-full group cursor-pointer"
                >
                  {/* Avatar Circle Placeholder */}
                  <div className={`relative w-32 h-32 rounded-full p-1.5 bg-gradient-to-tr ${gradientClass} shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 mb-6 flex items-center justify-center`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-charcoal font-display text-2xl font-bold select-none">
                      {initials}
                    </div>
                  </div>

                  {/* Member Name */}
                  <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Member Role */}
                  <p className="font-body text-xs font-bold text-accent uppercase tracking-widest mt-1.5 mb-4">
                    {member.role}
                  </p>

                  {/* Member Bio */}
                  <p className="font-body text-sm text-muted-grey leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
