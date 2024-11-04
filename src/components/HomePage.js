import React from 'react';
import Header from './Header';
import ProductGrid from './ProductGrid';
import '../styles/ProductCard.css';
import CategorySection from './CategorySection';
import HeroSection from './HeroSection';
import Footer from './Footer';


function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className='main-body'>
        <div className='container m-4 product-section'>
            <h2 className='featured-products-heading'>Weekly Featured Products</h2>
            <h6 className='featured-products-heading'>The worlds premium brand is One Destiny</h6>
        </div>
        
        <ProductGrid />
        <CategorySection />
        <div className='container m-4 product-section'>
            <h2 className='featured-products-heading'>Most Popular Products</h2>
            <h6 className='featured-products-heading'>The worlds premium brand is One Destiny</h6>
        </div>
        <ProductGrid />
      </div>
      <Footer />

    </div>
  );
}

export default HomePage;
