import ProductCard from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/interface/products.interface";

interface NewDropsProps {
  products: IProduct[];
}

const NewDrops = ({ products }: NewDropsProps) => {
  return (
    <section className="w-full container mx-auto px-4 pt-12 xl:pt-[90px] pb-20 xl:pb-[128px]">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 xl:mb-12">
        <h2 className="text-2xl sm:text-4xl xl:text-[74px] font-semibold leading-tight xl:leading-[0.9] text-[#232321] uppercase max-w-[200px] xl:max-w-[600px]">
          DON&apos;T MISS OUT <br className="hidden xl:block" /> NEW DROPS
        </h2>
        <Button className="h-[36px] xl:h-[48px] bg-primary text-white font-medium uppercase rounded-[8px] px-4 xl:px-8 text-[10px] xl:text-sm cursor-pointer tracking-wider hover:bg-primary/90 transition-colors">
          SHOP NEW DROPS
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewDrops;
