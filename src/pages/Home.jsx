import HeroCarousel from "../components/Home/Casousel/HeroCarousel";
import ProductSection from "../components/Home/Singleproduct/ProductSection";
import DiscountSection from "../components/Home/Discount/DiscountSection";
import Category from "../components/Home/Categories/Category";
import Features from "../components/Home/Features";
import Product from "../components/Products/Product";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <ProductSection/>
      <Features />
      <Category />
      <DiscountSection />
      <Product />
    </div>
  );
};

export default Home;
