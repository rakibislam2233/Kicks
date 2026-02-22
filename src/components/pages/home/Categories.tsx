"use client";

import { ICategory } from "@/interface/category.interface";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

interface CategoriesProps {
  categories: ICategory[];
}

const VISIBLE_COUNT = 2;

const Categories = ({ categories }: CategoriesProps) => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, (categories?.length || 0) - VISIBLE_COUNT),
    );
  };

  const visibleCategories = (categories || []).slice(
    startIndex,
    startIndex + VISIBLE_COUNT,
  );

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled =
    startIndex >= (categories?.length || 0) - VISIBLE_COUNT;

  return (
    <section className="w-full bg-[#232321]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between pt-12 xl:pt-[90px] pb-8 xl:pb-[64px]">
          <h2 className="text-2xl sm:text-4xl xl:text-[74px] font-semibold leading-tight xl:leading-[0.9] text-white uppercase">
            CATEGORIES
          </h2>
          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`w-[40px] h-[40px] rounded-[4px] xl:rounded-[8px] border flex items-center justify-center transition-colors
                ${
                  isPrevDisabled
                    ? "bg-[#E7E7E3] border-[#E7E7E3] text-black cursor-not-allowed opacity-50"
                    : "bg-white border-white text-[#232321] cursor-pointer"
                }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`w-[40px] h-[40px] rounded-[4px] xl:rounded-[8px] border flex items-center justify-center transition-colors
                 ${
                   isNextDisabled
                     ? "bg-[#E7E7E3] border-[#E7E7E3] text-black cursor-not-allowed opacity-50"
                     : "bg-white border-white text-[#232321] cursor-pointer"
                 }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              className={`w-full relative odd:bg-[#ECEEF0] even:bg-[#F6F6F6] first:rounded-t-[24px] md:first:rounded-t-none md:odd:rounded-tl-[24px] xl:odd:rounded-tl-[64px] p-6 xl:p-[64px] overflow-hidden h-[280px] md:h-[600px] cursor-pointer`}
            >
              {/* Shoe Image */}
              <div className="relative w-full h-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain scale-[1.1] md:scale-100"
                />
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-6 xl:left-[64px] right-6 xl:right-[64px] flex items-end justify-between py-6">
                <h3 className="text-[#232321] text-lg md:text-2xl xl:text-[36px] font-semibold uppercase leading-tight whitespace-pre-line">
                  {category.name}
                </h3>
                <button className="w-8 h-8 xl:w-[48px] xl:h-[48px] bg-[#232321] rounded-[8px] flex items-center justify-center shrink-0 transition-colors cursor-pointer">
                  <GoArrowUpRight size={20} className="text-white xl:hidden" />
                  <GoArrowUpRight
                    size={32}
                    className="text-white hidden xl:block"
                  />
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
