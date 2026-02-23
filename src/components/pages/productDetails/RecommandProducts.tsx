"use client";

import ProductCard from "@/components/common/ProductCard";
import { IProduct } from "@/interface/products.interface";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface RecommandProductsProps {
  products: IProduct[];
}

const RecommandProducts = ({ products }: RecommandProductsProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardWidth, setCardWidth] = useState(318);
  const [cols, setCols] = useState(4);
  const [rows, setRows] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = cols * rows;

  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;

      if (window.innerWidth < 640) {
        setCols(2);
        setRows(2);
        setCardWidth((w - 16) / 2);
      } else {
        setCols(4);
        setRows(1);
        setCardWidth((w - 16 * 3) / 4);
      }
      setCurrentPage(0);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalPages = Math.ceil((products?.length || 0) / itemsPerPage);

  const nextSlide = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1);
    }
  };
  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
    }
  };

  const currentProducts = (products || []).slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  if (!products || products.length === 0) return null;

  console.log("products", products);
  return (
    <section className="w-full pt-12 xl:pt-[128px] pb-12 xl:pb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-4xl xl:text-[48px] font-semibold leading-tight text-[#232321]">
          You may also like
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentPage === 0}
            className={`w-10 h-10 rounded-[8px] flex items-center justify-center transition-colors ${
              currentPage === 0
                ? "bg-[#232321]/50 text-white cursor-not-allowed"
                : "bg-[#232321] text-white cursor-pointer hover:bg-black"
            }`}
          >
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentPage === totalPages - 1}
            className={`w-10 h-10 rounded-[8px] flex items-center justify-center transition-colors ${
              currentPage === totalPages - 1
                ? "bg-[#232321]/50 text-white cursor-not-allowed"
                : "bg-[#232321] text-white cursor-pointer hover:bg-black"
            }`}
          >
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>

      <div ref={containerRef}>
        <motion.div
          key={currentPage} // page change এ re-render
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        >
          {currentProducts.map((product) => (
            <div key={product.id} style={{ width: `${cardWidth}px` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`h-[6px] rounded-[8px] transition-all duration-300 ${
              currentPage === i ? "bg-[#4A69E2] w-10" : "bg-[#B6B6B2] w-10"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommandProducts;
