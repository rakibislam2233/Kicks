"use client";
import ProductCard from "@/components/common/ProductCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const products = [
  {
    id: 1,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2012&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 2,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 3,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2074&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 4,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 5,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 6,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1512374382149-4332c6c02151?q=80&w=1935&auto=format&fit=crop",
    isNew: true,
  },
];

const RecommandProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(4);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const totalSlides = products.length - itemsToShow + 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="w-full pt-12 xl:pt-[128px] pb-12 xl:pb-16 overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-4xl xl:text-[48px] font-semibold leading-tight text-[#232321]">
          You may also like
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-[8px] bg-[#E7E7E3] text-[#232321] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-[8px] bg-[#232321] text-white flex items-center justify-center cursor-pointer hover:bg-black transition-colors"
          >
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0"
              style={{
                width: `calc((100% - ${(itemsToShow - 1) * 16}px) / ${itemsToShow})`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Progress indicators (optional, as seen in your image) */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-[4px] rounded-full transition-all ${
              currentIndex === i ? "bg-[#4A69E2] w-8" : "bg-[#232321]/10 w-4"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommandProducts;
