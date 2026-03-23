import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Hero from '../components/Hero/Hero';
import LatestProducts from '../components/LatestProducts/LatestProducts';
import ShopexOffer from '../components/ShopexOffer/ShopexOffer';
import UniqueFeatures from '../components/UniqueFeatures/UniqueFeatures';
import TrendingProducts from '../components/TrendingProducts/TrendingProducts';
import DiscountItem from '../components/DiscountItem/DiscountItem';
import TopCategories from '../components/TopCategories/TopCategories';
import Newsletter from '../components/Newsletter/Newsletter';
import LatestBlog from '../components/LatestBlog/LatestBlog';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <UniqueFeatures />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <Newsletter />
      <LatestBlog />
    </>
  );
};

export default HomePage;