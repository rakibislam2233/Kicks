import ProductCard from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
];

const NewDrops = () => {
  return (
    <section className="w-full container mx-auto px-4 pt-12 md:pt-[90px] pb-20 md:pb-[128px]">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <h2 className="text-4xl md:text-[74px] font-semibold leading-[0.9] text-[#232321] uppercase max-w-[600px]">
          DON&apos;T MISS OUT <br /> NEW DROPS
        </h2>
        <Button className="hidden md:flex h-[48px] bg-primary text-white font-medium uppercase rounded-[8px] px-8 text-sm cursor-pointer tracking-wider hover:bg-primary/90 transition-colors">
          SHOP NEW DROPS
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Mobile-only CTA */}
      <div className="mt-8 md:hidden">
        <Button className="w-full h-[48px] bg-primary text-white font-semibold uppercase rounded-[8px] text-sm">
          SHOP NEW DROPS
        </Button>
      </div>
    </section>
  );
};

export default NewDrops;
