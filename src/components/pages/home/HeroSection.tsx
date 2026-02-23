"use client";

import heroImg from "@/assets/images/hero.jpg";
import subHero1 from "@/assets/images/sub-hero.jpg";
import subHero2 from "@/assets/images/sub-hero2.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full container mx-auto px-4 py-6 md:py-10">
      {/* Title Section */}
      <div className="text-center mb-6 md:mb-12 overflow-hidden">
        <motion.h1
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="text-[60px] sm:text-[80px] md:text-[140px] lg:text-[220px] font-bold leading-none tracking-tight uppercase flex items-center justify-center gap-2 sm:gap-4 md:gap-10"
        >
          <span className="text-[#232321]">DO IT</span>
          <span className="text-primary">RIGHT</span>
        </motion.h1>
      </div>

      {/* Hero Content Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full h-[382px] sm:h-[600px] md:h-[750px] rounded-[32px] md:rounded-[64px] overflow-hidden group"
      >
        {/* Main Background Image */}
        <Image
          src={heroImg}
          alt="Nike Air Max Main"
          fill
          className="object-cover"
          priority
        />

        {/* Vertical Badge Overlay */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="absolute left-0 top-8 md:top-[70px] flex items-center justify-center bg-[#232321] text-white py-4 px-2 md:p-6 rounded-r-xl md:rounded-r-2xl z-10"
        >
          <p className="text-[8px] md:text-base font-semibold [writing-mode:vertical-lr] rotate-180 uppercase tracking-widest">
            Nike product of the year
          </p>
        </motion.div>

        {/* Bottom Content Area */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/80 pointer-events-none"></div>

        <div className="absolute bottom-6 left-4 md:bottom-10 md:left-12 z-10 pr-24 md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-[74px] font-semibold text-white uppercase leading-none mb-2 tracking-tight">
              NIKE AIR MAX
            </h2>
            <p className="text-white text-[10px] sm:text-sm md:text-2xl mb-4 max-w-[200px] md:max-w-[450px] leading-tight md:leading-snug opacity-90">
              Nike introducing the new air max for everyone&apos;s comfort
            </p>
            <Button className="w-[110px] md:w-[138px] h-[36px] md:h-[48px] bg-primary hover:bg-primary/90 text-white font-semibold uppercase rounded-[8px] text-[10px] md:text-sm cursor-pointer tracking-wider transition-colors">
              SHOP NOW
            </Button>
          </motion.div>
        </div>

        {/* Thumbnail Sidebar */}
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col gap-2 md:gap-4 z-10">
          {[subHero1, subHero2].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 md:w-40 md:h-40 rounded-xl md:rounded-[32px] overflow-hidden border-2 md:border-[3px] border-white/80 cursor-pointer transition-transform"
            >
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
