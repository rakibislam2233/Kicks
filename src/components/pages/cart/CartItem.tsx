"use client";

import { ChevronDown, Heart, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    category: string;
    description: string;
    size: string;
    quantity: number;
    price: number;
    image: string;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="flex gap-4 xl:gap-6 py-6 border-b border-[#ECEEF0] last:border-0">
      {/* Product Image */}
      <div className="relative w-[120px] h-[120px] xl:w-[200px] xl:h-[200px] bg-[#ECEEF0] rounded-[24px] overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex flex-col xl:flex-row justify-between gap-2">
          <div className="space-y-1">
            <h3 className="text-base xl:text-[24px] font-bold text-[#232321] uppercase leading-tight">
              {item.name}
            </h3>
            <p className="text-sm xl:text-[16px] font-semibold text-[#232321]/60">
              {item.category}
            </p>
            <p className="text-sm xl:text-[16px] font-semibold text-[#232321]/60">
              {item.description}
            </p>
          </div>
          <p className="text-base xl:text-[20px] font-bold text-primary">
            ${item.price.toFixed(2)}
          </p>
        </div>

        {/* Dropdowns & Actions */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm xl:text-[16px] font-semibold text-[#232321]/60">
                Size
              </span>
              <button className="flex items-center gap-1 text-sm xl:text-[16px] font-bold text-[#232321] cursor-pointer">
                {item.size} <ChevronDown size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm xl:text-[16px] font-semibold text-[#232321]/60">
                Quantity
              </span>
              <button className="flex items-center gap-1 text-sm xl:text-[16px] font-bold text-[#232321] cursor-pointer">
                {item.quantity} <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-[#232321] hover:text-primary transition-colors cursor-pointer">
              <Heart size={24} />
            </button>
            <button className="text-[#232321] hover:text-destructive transition-colors cursor-pointer">
              <Trash2 size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
