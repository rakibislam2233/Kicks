"use client";
import ProductCard from "@/components/common/ProductCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(0);
  const [cardWidth, setCardWidth] = useState(318);
  const [cols, setCols] = useState(4); // desktop: 4 col, mobile: 2 col
  const [rows, setRows] = useState(1); // desktop: 1 row, mobile: 2 row
  const containerRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = cols * rows; // desktop: 4x1=4, mobile: 2x2=4

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

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prevSlide = () =>
    setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  // Current page এর products
  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <section className="w-full pt-12 xl:pt-[128px] pb-12 xl:pb-16">
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
            className={`h-[4px] rounded-full transition-all duration-300 ${
              currentPage === i ? "bg-[#4A69E2] w-8" : "bg-[#232321]/10 w-4"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommandProducts;
