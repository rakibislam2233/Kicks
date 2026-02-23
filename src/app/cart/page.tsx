import CartBag from "@/components/pages/cart/CartBag";
import OrderSummary from "@/components/pages/cart/OrderSummary";

const CartPage = () => {
  return (
    <main className="w-full h-full">
      <div className="container mx-auto px-4 md:px-8">
        {/* Announcement Section */}
        <div className="py-6 xl:py-8">
          <h1 className="text-2xl xl:text-[32px] font-semibold text-[#232321]">
            Saving to celebrate
          </h1>
          <p className="text-[12px] md:text-sm font-semibold text-[#232321]/80 mt-2">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.
          </p>
          <div className="flex gap-2 mt-2">
            <button className="text-sm xl:text-base font-bold text-[#232321]/80 underline cursor-pointer">
              Join us
            </button>
            <span className="text-sm xl:text-base font-semibold text-[#232321]/80">
              or
            </span>
            <button className="text-sm xl:text-base font-bold text-[#232321]/80 underline cursor-pointer">
              Sign-in
            </button>
          </div>
        </div>

        {/* Main Cart Content */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
          {/* Left: Your Bag */}
          <div className="flex-1">
            <CartBag />
          </div>

          {/* Right: Order Summary */}
          <div className="shrink-0">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
