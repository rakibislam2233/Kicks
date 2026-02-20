import heroImg from "@/assets/images/hero.jpg";
import subHero1 from "@/assets/images/sub-hero.jpg";
import subHero2 from "@/assets/images/sub-hero2.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full container mx-auto px-4 py-6 md:py-10">
      {/* Title Section */}
      <div className="text-center mb-6 md:mb-12">
        <h1 className="text-[60px] sm:text-[80px] md:text-[140px] lg:text-[220px] font-bold leading-none tracking-tight uppercase flex items-center justify-center gap-2 sm:gap-4 md:gap-10 overflow-hidden">
          <span className="text-[#232321]">DO IT</span>
          <span className="text-primary">RIGHT</span>
        </h1>
      </div>

      {/* Hero Content Container */}
      <div className="relative w-full aspect-3/4 sm:aspect-video max-h-[600px] md:max-h-[750px] rounded-[32px] md:rounded-[64px] overflow-hidden group">
        {/* Main Background Image */}
        <Image
          src={heroImg}
          alt="Nike Air Max Main"
          fill
          className="object-cover"
          priority
        />

        {/* Vertical Badge Overlay */}
        <div className="absolute left-0 top-10 md:top-[80px] flex items-center justify-center bg-[#232321] text-white py-4 px-2 md:p-6 rounded-r-xl md:rounded-r-2xl z-10">
          <p className="text-[8px] md:text-base font-semibold [writing-mode:vertical-lr] rotate-180 uppercase tracking-widest">
            Nike product of the year
          </p>
        </div>

        {/* Bottom Content Area */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/80 pointer-events-none"></div>

        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10 pr-24 md:pr-12">
          <h2 className="text-2xl sm:text-4xl md:text-[74px] font-semibold text-white uppercase leading-none mb-2 md:mb-4 tracking-tight">
            NIKE AIR MAX
          </h2>
          <p className="text-white text-[10px] sm:text-sm md:text-2xl mb-4 md:mb-8 max-w-[200px] md:max-w-[450px] leading-tight md:leading-snug opacity-90">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>
          <Button className="w-[110px] md:w-[138px] h-[36px] md:h-[48px] bg-[#4a69e2] hover:bg-blue-600 text-white font-semibold uppercase rounded-[8px] text-[10px] md:text-sm cursor-pointer tracking-wider transition-colors">
            SHOP NOW
          </Button>
        </div>

        {/* Thumbnail Sidebar */}
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col gap-2 md:gap-4 z-10">
          <div className="w-16 h-16 md:w-40 md:h-40 rounded-xl md:rounded-[32px] overflow-hidden border-2 md:border-[3px] border-white/80 cursor-pointer hover:scale-105 transition-transform">
            <div className="relative w-full h-full">
              <Image
                src={subHero1}
                alt="Thumbnail 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-16 h-16 md:w-40 md:h-40 rounded-xl md:rounded-[32px] overflow-hidden border-2 md:border-[3px] border-white/80 cursor-pointer hover:scale-105 transition-transform">
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
