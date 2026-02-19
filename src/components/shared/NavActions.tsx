"use client";

import { useAppSelector } from "@/redux/store";
import { Search, User } from "lucide-react";

/**
 * NavActions Component
 * Handles the right-side actions of the navbar including Search, User Profile, and Cart.
 * Integrates with Redux to display the live cart item count.
 */
const NavActions = () => {
  // Get total quantity of items in the cart from Redux store
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className="flex items-center gap-6">
      {/* Search Icon */}
      <button className="cursor-pointer text-[#232321] transition-transform hover:scale-110">
        <Search size={24} strokeWidth={2.5} />
      </button>

      {/* User Profile Icon */}
      <button className="cursor-pointer text-[#232321] transition-transform hover:scale-110">
        <User size={24} strokeWidth={2.5} />
      </button>

      {/* Cart Icon with Item Count Badge */}
      <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#FFA52F] text-[14px] font-bold text-[#232321] transition-transform hover:scale-105 active:scale-95">
        {totalQuantity}
      </button>
    </div>
  );
};

export default NavActions;
