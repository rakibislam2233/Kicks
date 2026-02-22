"use client";

import { IProduct } from "@/interface/products.interface";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  if (!product) return null;

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

  const mainImage = product.images?.[0]
    ? cleanImage(product.images[0])
    : "https://via.placeholder.com/400";

  return (
    <Link
      href={`/product/${product.id}`}
      className="w-full max-w-[318px] cursor-pointer space-y-4 group block"
    >
      {/* Image Container */}
      <div className="w-full h-[180px] md:h-[350px] relative mb-4 bg-white rounded-[20px] xl:rounded-[28px] overflow-hidden p-[8px]">
        <div className="relative w-full h-[164px] md:h-[334px] bg-[#ECEEF0] rounded-[16px] xl:rounded-[24px]">
          <Image
            src={mainImage}
            alt={product.title}
            fill
            className="object-contain rounded-[16px] xl:rounded-[24px] group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm xl:text-xl font-semibold text-[#232321] leading-tight line-clamp-2 min-h-[48px] uppercase">
          {product.title}
        </h3>
      </div>
      <Button className="w-full h-[36px] xl:h-[48px] bg-[#232321] text-white hover:bg-[#232321]/90 rounded-[4px] xl:rounded-[8px] text-[10px] xl:text-sm font-medium uppercase py-2 xl:py-4 flex items-center justify-center gap-1 cursor-pointer">
        VIEW PRODUCT - <span className="text-[#FFA52F]">${product.price}</span>
      </Button>
    </Link>
  );
};

export default ProductCard;
