"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/store";

const OrderSummary = () => {
  const { totalQuantity, totalAmount } = useAppSelector((state) => state.cart);
  const deliveryFee = totalAmount > 0 ? 6.99 : 0;
  const total = totalAmount + deliveryFee;

  return (
    <div className="w-full xl:w-[412px] bg-white rounded-[24px] xl:rounded-[32px] p-6 xl:p-8">
      <div className="space-y-6 xl:space-y-8">
        <h2 className="text-xl sm:text-2xl xl:text-[32px] font-bold text-[#232321] uppercase">
          Order Summary
        </h2>

        <div className="space-y-4 xl:space-y-6">
          <div className="flex justify-between items-center text-sm sm:text-base xl:text-[20px] font-semibold text-[#232321]">
            <span className="uppercase">
              {totalQuantity} ITEM{totalQuantity !== 1 ? "S" : ""}
            </span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm sm:text-base xl:text-[20px] font-semibold text-[#232321]">
            <span className="uppercase">Delivery</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm sm:text-base xl:text-[20px] font-semibold text-[#232321]">
            <span className="uppercase">Sales Tax</span>
            <span className="text-[#232321]/60">-</span>
          </div>
          <div className="flex justify-between items-center text-base sm:text-lg xl:text-[24px] font-bold text-[#232321] pt-4 border-t border-[#ECEEF0]">
            <span className="uppercase">Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <Button
          disabled={totalQuantity === 0}
          className="w-full h-12 sm:h-14 xl:h-[60px] bg-[#232321] text-white text-sm sm:text-base xl:text-[16px] font-bold uppercase rounded-lg xl:rounded-xl hover:bg-black cursor-pointer disabled:bg-[#232321]/50 disabled:cursor-not-allowed transition-all"
        >
          Checkout
        </Button>
      </div>

      <div className="mt-6 xl:mt-8">
        <button className="text-sm sm:text-base xl:text-[20px] font-bold text-[#232321] underline hover:text-primary transition-colors cursor-pointer">
          Use a promo code
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
