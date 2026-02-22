import ProductImages from "@/components/pages/productDetails/ProductImages";
import ProductInformation from "@/components/pages/productDetails/ProductInformation";
import RecommandProducts from "@/components/pages/productDetails/RecommandProducts";

const ProductDetailsPage = () => {
  return (
    <main className="w-full min-h-screen py-5 xl:py-8">
      <div className="container mx-auto px-4 ">
        {/* Top Section: Images and Info */}
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Left: Images */}
          <div className="w-full xl:w-[63%]">
            <ProductImages />
          </div>

          {/* Right: Info */}
          <div className="w-full xl:w-[37%]">
            <ProductInformation />
          </div>
        </div>

        {/* Bottom Section: Recommendations */}
        <RecommandProducts />
      </div>
    </main>
  );
};

export default ProductDetailsPage;
