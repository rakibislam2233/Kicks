import heroImg from "@/assets/images/hero.jpg";
import subHero1 from "@/assets/images/sub-hero.jpg";
import subHero2 from "@/assets/images/sub-hero2.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full container mx-auto px-4 pt-10 pb-20">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-[64px] md:text-[140px] lg:text-[210px] font-bold leading-none tracking-normal uppercase flex items-center justify-center gap-4 md:gap-10">
          <span className="text-[#232321]">DO IT</span>
          <span className="text-primary">RIGHT</span>
        </h1>
      </div>

      {/* Hero Content Container */}
      <div className="relative w-full aspect-video max-h-[750px] rounded-[32px] md:rounded-[64px] overflow-hidden group">
        {/* Main Background Image */}
        <Image
          src={heroImg}
          alt="Nike Air Max Main"
          fill
          className="object-cover"
          priority
        />

        {/* Vertical Badge Overlay */}
        <div className="absolute left-0 top-[80px] flex items-center justify-center bg-[#232321] text-white p-6 rounded-r-2xl z-10">
          <p className="text-[10px] md:text-base font-semibold  [writing-mode:vertical-lr] rotate-180">
            Nike product of the year
          </p>
        </div>

        {/* Bottom Content Area */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/60 pointer-events-none"></div>

        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10">
          <h2 className="text-4xl md:text-[74px] font-semibold text-white uppercase leading-none mb-4 tracking-tight">
            NIKE AIR MAX
          </h2>
          <p className="text-white text-sm md:text-2xl mb-8 max-w-[450px] leading-snug">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <Button className="w-[138px] h-[48px] bg-primary text-white font-semibold uppercase rounded-[8px] text-sm cursor-pointer tracking-wider">
            SHOP NOW
          </Button>
        </div>

        {/* Thumbnail Sidebar */}
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col gap-3 md:gap-4 z-10">
          <div className="w-24 h-24 md:w-40 md:h-40 rounded-2xl md:rounded-[32px] overflow-hidden border-[3px] border-[#E7E7E3] cursor-pointer hover:scale-105 transition-transform">
            <div className="relative w-full h-full">
              <Image
                src={subHero1}
                alt="Thumbnail 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-24 h-24 md:w-40 md:h-40 rounded-2xl md:rounded-[32px] overflow-hidden border-[3px] border-[#E7E7E3] cursor-pointer hover:scale-105 transition-transform">
            <div className="relative w-full h-full">
              <Image
                src={subHero2}
                alt="Thumbnail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
