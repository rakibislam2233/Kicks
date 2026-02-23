"use client";
import { useAppSelector } from "@/redux/store";
import { Search } from "lucide-react";
import Link from "next/link";
import { HiUser } from "react-icons/hi";

interface NavActionsProps {
  isMobile?: boolean;
}

// NavActions component
const NavActions = ({ isMobile }: NavActionsProps) => {
  // Get total quantity of items in the cart from Redux store
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <div
      className={`flex items-center ${isMobile ? "gap-4 md:gap-8 xl:gap-[42.5px]" : "gap-[42.5px]"}`}
    >
      {/* Search Icon - Hidden on mobile, visible on sm+ */}
      <button className="hidden sm:flex cursor-pointer text-[#232321] transition-transform">
        <Search className="size-6 md:size-7" />
      </button>

      {/* User Profile Icon - Visible on all devices now */}
      <button className="flex cursor-pointer text-[#232321] transition-transform">
        <HiUser className="size-6 md:size-7" />
      </button>

      {/* Cart Icon - Visible on all devices */}
      <Link href="/cart">
        <button className="relative flex size-8 items-center justify-center rounded-full bg-[#FFA52F] text-[12px] md:text-[16px] font-semibold text-[#232321] transition-transform p-2 md:p-[10px] cursor-pointer">
          {totalQuantity}
        </button>
      </Link>
    </div>
  );
};

export default NavActions;
