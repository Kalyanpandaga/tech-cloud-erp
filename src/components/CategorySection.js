import React from 'react';
import '../styles/CategorySection.css';

const CategorySection = () => {
  const categories = [
      { image: 'https://via.placeholder.com/150x200', title: 'Lipstick' },
      { image: 'https://via.placeholder.com/150x200', title: 'Foundation' },
      { image: 'https://via.placeholder.com/150x200', title: 'Mascara'},
      { image: 'https://via.placeholder.com/150x200', title: 'Skincare'},
    
   ];

  
  return (
    <section className="container mt-5 product-section">
      <h2 className='featured-products-heading'>Most Preferred Categories</h2>
      <h6 className='featured-products-heading'> dummy text it is</h6>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-3 text-center" key={index}>
            <img src={category.image} alt={category.title} className="category-img" />
            <h5>{category.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
