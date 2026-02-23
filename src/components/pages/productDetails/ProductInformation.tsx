"use client";

import { Button } from "@/components/ui/button";
import { IProduct } from "@/interface/products.interface";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/store";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ProductInformation = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState("38");
  const [selectedColor, setSelectedColor] = useState("navy");

  const sizes = ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: String(product.id),
        name: product.title,
        price: product.price,
        image: product.images[0] || "",
        size: selectedSize,
        color: selectedColor,
      }),
    );
    toast.success("Product added to cart!", {
      description: `${product.title} has been added to your bag.`,
    });
  };

  return (
    <div className="flex flex-col gap-6 xl:gap-8">
      {/* Badge & Title */}
      <div className="space-y-4">
        <button className="h-[38px] px-4 bg-primary text-white text-[10px] xl:text-xs font-semibold rounded-[12px] uppercase">
          {product?.category?.name}
        </button>
        <h1 className="text-2xl xl:text-[32px] font-bold text-[#232321] leading-tight uppercase">
          {product?.title}
        </h1>
        <p className="text-xl xl:text-2xl font-bold text-primary">
          ${product?.price?.toFixed(2)}
        </p>
      </div>

      {/* Color Selection (Dummy) */}
      <div className="space-y-4">
        <p className="text-sm xl:text-base font-semibold text-[#232321] uppercase">
          Color
        </p>
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full bg-white border-[3px] border-[#232321] transition-all cursor-pointer flex justify-center items-center">
            <button
              onClick={() => setSelectedColor("navy")}
              className={`size-8 rounded-full ${
                selectedColor === "navy" ? "bg-[#253043] " : "bg-transparent"
              }`}
            />
          </div>
          <button
            onClick={() => setSelectedColor("green")}
            className={`w-8 h-8 rounded-full bg-[#707E6E] transition-all cursor-pointer`}
          />
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm xl:text-base font-semibold text-[#232321] uppercase">
            Size
          </p>
          <button className="text-xs xl:text-sm font-semibold text-[#232321] underline uppercase cursor-pointer">
            Size Chart
          </button>
        </div>
        <div className="flex flex-wrap gap-[4px]">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`size-10 xl:size-12 flex items-center justify-center rounded-lg xl:rounded-[8px] text-sm font-medium transition-all cursor-pointer ${
                selectedSize === size
                  ? "bg-[#232321] text-white"
                  : "bg-white text-[#232321]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-4">
        <div className="flex items-center gap-2">
          <Button
            onClick={handleAddToCart}
            className="flex-1 h-12 bg-[#232321] text-white font-medium text-sm uppercase rounded-[8px] hover:bg-black cursor-pointer"
          >
            Add to Cart
          </Button>
          <button className="w-12 h-12 flex items-center justify-center bg-[#232321] text-white rounded-[8px] hover:bg-black cursor-pointer">
            <Heart size={20} />
          </button>
        </div>
        <Button className="w-full h-12 bg-primary text-white font-medium text-sm uppercase rounded-[8px] hover:bg-primary/90 cursor-pointer">
          Buy It Now
        </Button>
      </div>

      {/* About The Product */}
      <div className="space-y-4 pt-4">
        <p className="text-sm xl:text-base font-semibold text-[#232321] uppercase">
          About the product
        </p>
        <div className="space-y-3 text-sm xl:text-base text-[#232321] leading-relaxed">
          <p> Shadow Navy / Army Green </p>
          <p>
            This product is excluded from all promotional <br /> discounts and
            offers.
          </p>
          <ul className="list-disc pl-8">
            <li>
              Pay over time in interest-free installments with Affirm, Klarna or
              Afterpay.
            </li>
            <li>
              Join adiClub to get unlimited free standard shipping, returns, &
              exchanges.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
