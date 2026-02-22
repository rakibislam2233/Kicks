"use client";
import { useAppSelector } from "@/redux/store";
import CartItem from "./CartItem";

const CartBag = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="w-full bg-white rounded-[24px] xl:rounded-[32px] p-6 xl:p-8">
      <div className="mb-6 xl:mb-8">
        <h2 className="text-2xl xl:text-[32px] font-bold text-[#232321] uppercase">
          Your Bag
        </h2>
        <p className="text-sm xl:text-[16px] font-semibold text-[#232321]/60 mt-2">
          Items in your bag not reserved- check out now to make them yours.
        </p>
      </div>

      <div className="flex flex-col">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={`${item.id}-${index}`} item={item} />
          ))
        ) : (
          <div className="py-12 text-center flex flex-col items-center gap-4">
            <p className="text-xl font-bold text-[#232321]">
              Your bag is empty
            </p>
            <p className="text-[#232321]/60">
              When you add items to your bag, they&apos;ll appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartBag;
