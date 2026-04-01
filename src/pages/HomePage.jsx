import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import LatestProducts from '../components/LatestProducts/LatestProducts';
import ShopexOffer from '../components/ShopexOffer/ShopexOffer';
import UniqueFeatures from '../components/UniqueFeatures/UniqueFeatures';
import TrendingProducts from '../components/TrendingProducts/TrendingProducts';
import DiscountItem from '../components/DiscountItem/DiscountItem';
import TopCategories from '../components/TopCategories/TopCategories';
import Newsletter from '../components/Newsletter/Newsletter';
import LatestBlog from '../components/LatestBlog/LatestBlog';
import API from '../api/axiosConfig';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get('/products');
        const data = response.data
        setProducts(data); 
        setLoading(false);
      } catch (error) {
        console.error(" wrong  from get products", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      
       {loading ? (
        <h2 style={{ textAlign: 'center' }}>جاري التحميل...</h2>
      ) : (
        <>
          <FeaturedProducts products={products} title="Featured Products" />
          <LatestProducts products={products} title="Latest Products" />
          <TrendingProducts products={products} title="Trending Products" />
        </>
      )}

      <ShopexOffer />
      <UniqueFeatures />
      <DiscountItem />
      <TopCategories />
      <Newsletter />
      <LatestBlog />
    </>
  );
};

export default HomePage;