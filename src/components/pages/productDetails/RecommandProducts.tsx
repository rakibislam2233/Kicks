import ProductCard from "@/components/common/ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
];

const RecommandProducts = () => {
  return (
    <section className="w-full pt-12 xl:pt-[128px] pb-12 xl:pb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-4xl xl:text-[48px] font-semibold leading-tight text-[#232321]">
          You may also like
        </h2>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-[8px] bg-[#232321]/50 text-white flex items-center justify-center cursor-pointer">
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button className="w-10 h-10 rounded-[8px] bg-[#232321] text-white flex items-center justify-center cursor-pointer">
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RecommandProducts;
