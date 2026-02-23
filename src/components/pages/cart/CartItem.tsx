"use client";

import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/store";
import { ChevronDown, Heart, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    size?: string | number;
    color?: string;
    category?: string;
    description?: string;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(
      removeFromCart({ id: item.id, size: item.size, color: item.color }),
    );
  };

  const handleQuantityIncrease = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
        size: item.size,
        color: item.color,
      }),
    );
  };

  const handleQuantityDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
          size: item.size,
          color: item.color,
        }),
      );
    }
  };

  return (
    <div className="flex gap-3 sm:gap-4 xl:gap-6 py-5 sm:py-6 border-b border-[#ECEEF0] last:border-0">
      {/* Product Image */}
      <div className="relative w-[157px] h-[216px] xl:w-[207px] xl:h-[225px] bg-[#ECEEF0] rounded-[24px] overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-2 sm:p-4"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 min-w-0 justify-between gap-5">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-base xl:text-[24px] font-semibold text-[#232321] uppercase leading-tight truncate-2-lines">
                {item?.name}
              </h3>
              <p className="text-sm xl:text-[16px] font-semibold text-[#232321]/60">
                {item?.category || "Men’s Road Running Shoes"}
              </p>
              <p className="text-sm xl:text-[16px] font-semibold text-[#232321]/60">
                {item?.description || "Men’s Road Running Shoes"}
              </p>
            </div>
            <p className="text-sm sm:text-base xl:text-[20px] font-bold text-primary shrink-0">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row  gap-2 sm:gap-4 mt-5 ">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] sm:text-sm xl:text-[16px] font-semibold text-[#232321]/60">
                Size
              </span>
              <button className="flex items-center gap-1 text-[10px] sm:text-sm xl:text-[16px] font-semibold text-[#232321]/60 cursor-pointer">
                {item.size} <ChevronDown size={16} className="size-4" />
              </button>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-sm xl:text-[16px] font-semibold text-[#232321]/60">
                Quantity
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={handleQuantityDecrease}
                  className="size-5 sm:size-6 flex items-center justify-center border border-[#232321]/20 rounded-md font-bold cursor-pointer text-xs sm:text-sm"
                >
                  -
                </button>
                <span className="text-xs sm:text-sm xl:text-[16px] font-bold text-[#232321]/60">
                  {item.quantity}
                </span>
                <button
                  onClick={handleQuantityIncrease}
                  className="size-5 sm:size-6 flex items-center justify-center border border-[#232321]/20 rounded-md font-bold cursor-pointer text-xs sm:text-sm"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Dropdowns & Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="text-[#232321] hover:text-primary transition-colors cursor-pointer">
            <Heart size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={handleRemove}
            className="text-[#232321] hover:text-destructive transition-colors cursor-pointer"
          >
            <Trash2 size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
