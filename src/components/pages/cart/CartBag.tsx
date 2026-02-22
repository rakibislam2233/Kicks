"use client";

import CartItem from "./CartItem";

const cartItems = [
  {
    id: 1,
    name: "DROPSET TRAINER SHOES",
    category: "Men's Road Running Shoes",
    description: "Enamel Blue/ University White",
    size: "10",
    quantity: 1,
    price: 130.0,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
  },
];

const CartBag = () => {
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
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartBag;
