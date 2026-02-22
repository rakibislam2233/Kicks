import Categories from "@/components/pages/home/Categories";
import HeroSection from "@/components/pages/home/HeroSection";
import NewDrops from "@/components/pages/home/NewDrops";
import Reviews from "@/components/pages/home/Reviews";
import { getAllCategories } from "@/services/categories.services";
import { getAllProducts } from "@/services/products.services";

const Home = async () => {
  const [categoriesRes, productsRes] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  const categories = categoriesRes.data || [];
  const products = productsRes.data || [];

  console.log("Categories", categories);
  console.log("Products", products);
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NewDrops products={products.slice(0, 4)} />
      <Categories categories={categories} />
      <Reviews />
    </main>
  );
};

export default Home;
