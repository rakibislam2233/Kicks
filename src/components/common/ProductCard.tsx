import Image from "next/image";
import { Button } from "../ui/button";
interface IProductCard {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew: boolean;
}

interface IProductCardProps {
  product: IProductCard;
}
const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <div className="w-full max-w-[318px] cursor-pointer space-y-4">
      {/* Image Container */}
      <div className="w-full h-[180px] md:h-[350px] relative mb-4 bg-white rounded-[20px] xl:rounded-[28px] overflow-hidden p-[8px]">
        <div className="relative w-full h-[164px] md:h-[334px] bg-[#ECEEF0] rounded-[16px] xl:rounded-[24px]">
          {product.isNew && (
            <div className="absolute top-0 left-0 bg-primary text-white text-[12px] font-bold w-[58px] h-[38px] rounded-tl-[16px] xl:rounded-tl-[24px] rounded-br-[16px] xl:rounded-br-[24px] z-10 uppercase flex items-center justify-center py-3 px-4">
              New
            </div>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-[16px] xl:rounded-[24px]"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm xl:text-2xl font-semibold text-[#232321] leading-tight">
          {product.name}
        </h3>
      </div>
      <Button className="w-full h-[36px] xl:h-[48px] bg-[#232321] text-white hover:bg-[#232321]/90 rounded-[4px] xl:rounded-[8px] text-[10px] xl:text-sm font-medium uppercase py-2 xl:py-4 flex items-center justify-center gap-1 cursor-pointer">
        VIEW PRODUCT - <span className="text-[#FFA52F]">${product.price}</span>
      </Button>
    </div>
  );
};

export default ProductCard;
