"use client";

import ProductCard from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/interface/products.interface";
import { motion } from "framer-motion";

interface NewDropsProps {
  products: IProduct[];
}

const NewDrops = ({ products }: NewDropsProps) => {
  return (
    <section className="w-full container mx-auto px-4 pt-12 xl:pt-[90px] pb-20 xl:pb-[128px]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between mb-8 xl:mb-12"
      >
        <h2 className="text-2xl sm:text-4xl xl:text-[74px] font-semibold leading-tight xl:leading-[0.9] text-[#232321] uppercase max-w-[200px] xl:max-w-[600px]">
          DON&apos;T MISS OUT <br className="hidden xl:block" /> NEW DROPS
        </h2>
        <Button className="w-[157px] md:w-[189px] h-[40px] md:h-[48px] bg-primary text-white font-medium uppercase rounded-[8px] px-4 xl:px-8 text-[10px] xl:text-sm cursor-pointer tracking-wider hover:bg-primary/90 transition-colors">
          SHOP NEW DROPS
        </Button>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewDrops;
