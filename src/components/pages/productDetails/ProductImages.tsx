"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = () => {
  const images = [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2074&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2012&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop",
  ];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Mobile Slider View */}
      <div className="xl:hidden flex flex-col gap-4">
        <div className="relative aspect-square bg-[#ECEEF0] rounded-[24px] overflow-hidden">
          <Image
            src={images[activeImage]}
            alt="Active product image"
            fill
            className="object-contain p-8"
            priority
          />
          {/* Slider Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  activeImage === i ? "bg-[#4A69E2] w-4" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`relative shrink-0 w-[78px] h-[78px] bg-[#ECEEF0] rounded-[16px] overflow-hidden border-2 transition-all cursor-pointer ${
                activeImage === index
                  ? "border-[#4A69E2]"
                  : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden xl:grid grid-cols-2 gap-4">
        {images.slice(0, 4).map((img, index) => (
          <div
            key={index}
            className={`relative w-full h-[510px] bg-[#ECEEF0] overflow-hidden ${index === 0 ? "rounded-tl-[48px]" : index === 1 ? "rounded-tr-[48px]" : index === 2 ? "rounded-bl-[48px]" : index === 3 ? "rounded-br-[48px]" : ""}
            `}
          >
            <Image
              src={img}
              alt={`Product image ${index + 1}`}
              fill
              className="object-contain"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
