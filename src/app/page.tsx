import Categories from "@/components/pages/home/Categories";
import HeroSection from "@/components/pages/home/HeroSection";
import NewDrops from "@/components/pages/home/NewDrops";
import { Navbar } from "@/components/shared/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <NewDrops />
      <Categories />
    </main>
  );
};

export default Home;
