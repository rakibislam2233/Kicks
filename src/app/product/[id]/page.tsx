import ProductImages from "@/components/pages/productDetails/ProductImages";
import ProductInformation from "@/components/pages/productDetails/ProductInformation";
import RecommandProducts from "@/components/pages/productDetails/RecommandProducts";
import { getAllProducts, getSingleProduct } from "@/services/products.services";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { id } = await params;
  const [productRes, allProductsRes] = await Promise.all([
    getSingleProduct(Number(id)),
    getAllProducts(),
  ]);

  const product = productRes.data;
  const allProducts = allProductsRes.data || [];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-[#232321]">Product not found</h1>
      </div>
    );
  }

  // Recommendations: same category, excluding current product
  const recommendations = allProducts
    .filter((p) => p.category.id === product.category.id && p.id !== product.id)
    .slice(0, 8);

  return (
    <main className="w-full min-h-screen py-5 xl:py-8">
      <div className="container mx-auto px-4 ">
        {/* Top Section: Images and Info */}
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left: Images */}
          <div className="w-full xl:w-[63%]">
            <ProductImages images={product.images} />
          </div>

          {/* Right: Info */}
          <div className="w-full xl:w-[37%]">
            <ProductInformation product={product} />
          </div>
        </div>

        {/* Bottom Section: Recommendations */}
        <RecommandProducts products={recommendations} />
      </div>
    </main>
  );
};

export default ProductDetailsPage;
