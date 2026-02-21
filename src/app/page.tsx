import Categories from "@/components/pages/home/Categories";
import HeroSection from "@/components/pages/home/HeroSection";
import NewDrops from "@/components/pages/home/NewDrops";
import Reviews from "@/components/pages/home/Reviews";
import { Navbar } from "@/components/shared/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <NewDrops />
      <Categories />
      <Reviews />
    </main>
  );
};

export default Home;
