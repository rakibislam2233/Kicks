"use client";
import { useAppSelector } from "@/redux/store";
import { Search, User } from "lucide-react";
import { HiUser } from "react-icons/hi";

// NavActions component
const NavActions = () => {
  // Get total quantity of items in the cart from Redux store
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div className="flex items-center gap-[42.5px]">
      {/* Search Icon */}
      <button className="cursor-pointer text-[#232321] transition-transform">
        <Search size={28} />
      </button>

      {/* User Profile Icon */}
      <button className="cursor-pointer text-[#232321] transition-transform">
        <HiUser size={30}  />
      </button>

      {/* Cart Icon with Item Count Badge */}
      <button className="relative flex size-10 items-center justify-center rounded-full bg-[#FFA52F] text-[14px] font-bold text-[#232321] transition-transform p-3">
        {totalQuantity}
      </button>
    </div>
  );
};

export default NavActions;
