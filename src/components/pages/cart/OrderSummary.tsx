"use client";

import { Button } from "@/components/ui/button";

const OrderSummary = () => {
  return (
    <div className="w-full xl:w-[412px] space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl xl:text-[32px] font-bold text-[#232321] uppercase">
          Order Summary
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm xl:text-[20px] font-semibold text-[#232321]">
            <span className="uppercase">1 ITEM</span>
            <span>$130.00</span>
          </div>
          <div className="flex justify-between items-center text-sm xl:text-[20px] font-semibold text-[#232321]">
            <span className="uppercase">Delivery</span>
            <span>$6.99</span>
          </div>
          <div className="flex justify-between items-center text-sm xl:text-[20px] font-semibold text-[#232321]">
            <span className="uppercase">Sales Tax</span>
            <span className="text-[#232321]/60">-</span>
          </div>
          <div className="flex justify-between items-center text-base xl:text-[24px] font-bold text-[#232321] pt-4">
            <span className="uppercase">Total</span>
            <span>$136.99</span>
          </div>
        </div>

        <Button className="w-full h-12 xl:h-[60px] bg-[#232321] text-white text-sm xl:text-[16px] font-bold uppercase rounded-lg xl:rounded-xl hover:bg-black cursor-pointer">
          Checkout
        </Button>
      </div>

      <div>
        <button className="text-sm xl:text-[20px] font-bold text-[#232321] underline hover:text-primary transition-colors cursor-pointer">
          Use a promo code
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
