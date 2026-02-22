import CartBag from "@/components/pages/cart/CartBag";
import OrderSummary from "@/components/pages/cart/OrderSummary";

const CartPage = () => {
  return (
    <main className="min-h-screen pb-20 pt-8 xl:pt-16">
      <div className="container mx-auto px-4">
        {/* Announcement Section */}
        <div className="mb-8 xl:mb-12">
          <h1 className="text-2xl xl:text-[48px] font-bold text-[#232321] uppercase leading-tight">
            Saving to celebrate
          </h1>
          <p className="text-sm xl:text-[20px] font-semibold text-[#232321]/80 mt-2">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.
          </p>
          <div className="flex gap-2 mt-2">
            <button className="text-sm xl:text-[20px] font-bold text-[#232321] underline cursor-pointer">
              Join us
            </button>
            <span className="text-sm xl:text-[20px] font-semibold text-[#232321]">
              or
            </span>
            <button className="text-sm xl:text-[20px] font-bold text-[#232321] underline cursor-pointer">
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
