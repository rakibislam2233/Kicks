"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HiArrowTrendingUp } from "react-icons/hi2";

const categories = [
  {
    id: 1,
    name: "LIFESTYLE\nSHOES",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "BASKETBALL\nSHOES",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "RUNNING\nSHOES",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "TRAINING\nSHOES",
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "OUTDOOR\nSHOES",
    image:
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2012&auto=format&fit=crop",
  },
];

const VISIBLE_COUNT = 2;

const Categories = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, categories.length - VISIBLE_COUNT),
    );
  };

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + VISIBLE_COUNT,
  );

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex >= categories.length - VISIBLE_COUNT;

  return (
    <section className="w-full bg-[#232321]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between pt-12 md:pt-[90px] pb-12 md:pb-[64px]">
          <h2 className="text-4xl md:text-[74px] font-semibold leading-[0.9] text-white uppercase">
            CATEGORIES
          </h2>
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`w-[40px] h-[40px] rounded-[8px] border flex items-center justify-center transition-colors
                ${
                  isPrevDisabled
                    ? "bg-[#858582] border-[#858582] text-[#232321] cursor-not-allowed"
                    : "border-white  bg-white text-[#232321] cursor-pointer"
                }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`w-[40px] h-[40px] rounded-[8px] border flex items-center justify-center transition-colors
                ${
                  isNextDisabled
                    ? "bg-[#858582] border-[#858582] text-[#232321] cursor-not-allowed"
                    : "border-white bg-white text-[#232321] cursor-pointer"
                }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              className={`w-full relative odd:bg-[#ECEEF0] even:bg-[#F6F6F6] odd:rounded-tl-[64px] p-[64px]  overflow-hidden h-[300px] md:h-[600px] cursor-pointer`}
            >
              {/* Shoe Image */}
              <div className="relative w-full h-full">
                <Image
                  src={category.image}
                  alt={category.name.replace("\n", " ")}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-[64px] right-[64px] flex items-end justify-between py-6">
                <h3 className="text-[#232321] text-xl md:text-2xl lg:text-[36px] font-semibold uppercase leading-tight whitespace-pre-line">
                  {category.name}
                </h3>
                <button className="w-[48px] h-[48px] bg-[#232321] rounded-[8px] flex items-center justify-center shrink-0 transition-colors cursor-pointer">
                  <GoArrowUpRight size={32} className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
