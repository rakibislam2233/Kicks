import Categories from "@/components/pages/home/Categories";
import HeroSection from "@/components/pages/home/HeroSection";
import NewDrops from "@/components/pages/home/NewDrops";
import Newsletter from "@/components/pages/home/Newsletter";
import Reviews from "@/components/pages/home/Reviews";
import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <NewDrops />
      <Categories />
      <Reviews />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
