"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ArrowLeft, ArrowRight } from "lucide-react";

const TABS = ["Workshops", "Events", "Campaigns", "Volunteers", "Community"];

// Generate 12 placeholder items per tab with nice gradient classes
const getGalleryItems = (tabName: string) => {
  const gradients = [
    "from-primary/20 to-accent/20",
    "from-accent/20 to-highlight/20",
    "from-highlight/20 to-primary/20",
    "from-primary/30 to-background-custom border-primary/20",
    "from-accent/30 to-background-custom border-accent/20",
    "from-highlight/30 to-background-custom border-highlight/20",
  ];

  return Array.from({ length: 12 }).map((_, i) => {
    const gradIndex = (i + tabName.charCodeAt(0)) % gradients.length;
    return {
      id: `${tabName}-${i}`,
      title: `${tabName.slice(0, -1)} Detail ${i + 1}`,
      subtitle: `${tabName.slice(0, -1)} — March 2026`,
      gradient: gradients[gradIndex],
    };
  });
};

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("Workshops");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = getGalleryItems(activeTab);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? items.length - 1 : prev! - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === items.length - 1 ? 0 : prev! + 1));
  };

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Tab Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 select-none">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <motion.button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setLightboxIndex(null);
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`font-body font-semibold text-xs md:text-sm px-6 py-3 rounded-full border transition-all duration-300 relative z-0 cursor-pointer ${
                  isActive
                    ? "text-white border-transparent"
                    : "bg-background-custom text-charcoal border-charcoal/5 hover:border-charcoal/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBgMedia"
                    className="absolute inset-0 bg-charcoal rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Masonry-style Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 select-none"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.03, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ 
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  duration: 0.3 
                }}
                onClick={() => setLightboxIndex(index)}
                className={`cursor-pointer w-full aspect-square rounded-2xl bg-gradient-to-tr ${item.gradient} border border-[#2D2D2D]/5 flex flex-col items-center justify-center p-6 text-center shadow-[0_4px_20px_-4px_rgba(45,45,45,0.03)] hover:shadow-[0_12px_30px_-6px_rgba(45,45,45,0.08)] transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Overlay Blob */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-white/40 blur-xl group-hover:scale-110 transition-transform duration-500" />
                
                <Camera className="w-8 h-8 text-charcoal/30 mb-3 group-hover:scale-110 transition-transform duration-300 shrink-0" />
                <h4 className="font-display font-semibold text-sm text-charcoal mb-1">
                  {item.title}
                </h4>
                <p className="font-body text-[10px] font-bold text-muted-grey uppercase tracking-wider">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Previous Image"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              {/* Content Panel */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className={`max-w-xl w-full aspect-square rounded-[2rem] bg-gradient-to-tr ${items[lightboxIndex].gradient} border border-white/10 flex flex-col items-center justify-center p-12 text-center relative select-none`}
              >
                <Camera className="w-16 h-16 text-charcoal/20 mb-6 shrink-0" />
                <h3 className="font-display font-bold text-2xl text-charcoal mb-2">
                  {items[lightboxIndex].title}
                </h3>
                <p className="font-body text-xs font-bold text-muted-grey uppercase tracking-widest">
                  {items[lightboxIndex].subtitle}
                </p>
                <p className="font-body text-sm text-charcoal/70 mt-6 leading-relaxed max-w-sm">
                  This placeholder represents a high-resolution photograph capturing the active engagement of youth during {activeTab.toLowerCase()} sessions.
                </p>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Next Image"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
