"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const ProductImages = ({ images = [] }: { images: string[] }) => {
  // Clean up image logic for Platzi API
  const cleanImage = (imageUrl: string) => {
    try {
      if (imageUrl.startsWith("[") && imageUrl.endsWith("]")) {
        const parsed = JSON.parse(imageUrl);
        return Array.isArray(parsed) ? parsed[0] : imageUrl;
      }
      return imageUrl.replace(/[[\]"]/g, "");
    } catch {
      return imageUrl.replace(/[[\]"]/g, "");
    }
  };

  const productImages = images.map((img) => cleanImage(img));

  const [activeImage, setActiveImage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 86 * 2; // Approximate width of 2 thumbnails + gaps
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Mobile Slider View */}
      <div className="xl:hidden flex flex-col gap-4">
        <div className="relative aspect-square bg-[#ECEEF0] rounded-[24px] overflow-hidden">
          {productImages.length > 0 && (
            <Image
              src={productImages[activeImage]}
              alt="Active product image"
              fill
              className="object-contain p-8"
              priority
            />
          )}
          {/* Slider Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {productImages.map((_, i) => (
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

        {/* Thumbnails with Arrows */}
        <div className="relative flex items-center group">
          {productImages.length > 4 && (
            <>
              <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-md text-[#232321] transition-opacity hover:bg-white cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-md text-[#232321] transition-opacity hover:bg-white cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-1"
            style={{ width: "100%" }}
          >
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative shrink-0 w-[calc((100%-24px)/4)] aspect-square bg-[#ECEEF0] rounded-[16px] overflow-hidden border-2 transition-all cursor-pointer snap-start ${
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
      </div>

      {/* Desktop Grid View */}
      <div className="hidden xl:grid grid-cols-2 gap-4">
        {productImages.slice(0, 4).map((img, index) => (
          <div
            key={index}
            className={`relative w-full h-[510px] bg-[#ECEEF0] overflow-hidden ${
              index === 0
                ? "rounded-tl-[48px]"
                : index === 1
                  ? "rounded-tr-[48px]"
                  : index === 2
                    ? "rounded-bl-[48px]"
                    : index === 3
                      ? "rounded-br-[48px]"
                      : ""
            }
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
