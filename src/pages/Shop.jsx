import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import './Shop.css'; 

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('Men');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const navigate = useNavigate();

  const products = {
    Men: [
      { id: 1, name: 'Stylish T-Shirt', price: 29.99, salePrice: 19.99, image: '/images/front-view-smiley-man-holding-lifesaving-buoy.jpg' },
      { id: 2, name: 'Casual Shirt', price: 39.99, salePrice: 29.99, image: '/images/hipster-vacation-lake.jpg' },
      { id: 3, name: 'Formal Pants', price: 49.99, salePrice: 39.99, image: '/images/young-athletic-male-with-black-shirt-holding-skateboard-looking-aside.jpg' },
    ],
    Women: [
      { id: 4, name: 'Summer Dress', price: 49.99, salePrice: 39.99, image: '/images/beautiful-woman-street.jpg' },
      { id: 5, name: 'Blouse', price: 29.99, salePrice: 24.99, image: '/images/fashion-portrait-glamor-stylish-beautiful-funny-crazy-young-woman-model-with-red-lips-summer-bright-colorful-hipster-jeans-clothes-sunglasses.jpg' },
      { id: 6, name: 'Skirt', price: 34.99, salePrice: 29.99, image: '/images/young-stylish-hipster-woman-black-t-shirt-jeans-listening-music-headphones-having-fun-walking-street-summer-vacation-enjoying.jpg' },
    ],
    Kids: [
      { id: 7, name: 'Kid\'s T-Shirt', price: 19.99, salePrice: 14.99, image: '/images/asian-girl-posing.jpg' },
      { id: 8, name: 'Kid\'s Jeans', price: 29.99, salePrice: 24.99, image: '/images/cute-asian-girl-posing.jpg' },
      { id: 9, name: 'Kid\'s Jacket', price: 39.99, salePrice: 34.99, image: '/images/full-length-portrait-cute-little-kid-boy-stylish-jeans-clothes-smiling-standing-white-kids-fashion-concept.jpg' },
    ],
  };

  const currentProducts = products[activeCategory].slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(products[activeCategory].length / productsPerPage);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigates to the product detail page
  };

  return (
    <div className="shop-container">
      <h2 className="shop-heading">Shop Our Collection</h2>

      <div className="category-filter">
        {['Men', 'Women', 'Kids'].map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? 'active-category' : ''}`}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1); // Reset to first page when changing categories
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {currentProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}  
            onClick={() => handleProductClick(product.id)} // Ensure onClick is passed correctly
          />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Shop;
