"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/store";

const OrderSummary = () => {
  const { totalQuantity, totalAmount } = useAppSelector((state) => state.cart);
  const deliveryFee = totalAmount > 0 ? 6.99 : 0;
  const total = totalAmount + deliveryFee;

  return (
    <div className="w-full xl:w-[418px] h-[342px] bg-white md:bg-transparent rounded-[24px] xl:rounded-[32px] p-6 xl:p-8">
      <div className="space-y-6">
        <h2 className="text-[20px] xl:text-[32px] font-bold text-[#232321] uppercase">
          Order Summary
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-base xl:text-[20px] font-medium text-[#232321]">
            <span>
              {totalQuantity} ITEM{totalQuantity !== 1 ? "S" : ""}
            </span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-base xl:text-[20px] font-medium text-[#232321]">
            <span>Delivery</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm sm:text-base xl:text-[20px] font-medium text-[#232321]">
            <span>Sales Tax</span>
            <span className="text-[#232321]/60">-</span>
          </div>
          <div className="flex justify-between items-center text-base sm:text-lg xl:text-[24px] font-bold text-[#232321]">
            <span>Total</span>
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

      <div className="mt-4">
        <button className="text-sm sm:text-base xl:text-[20px] text-[#232321] underline hover:text-primary transition-colors cursor-pointer">
          Use a promo code
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
