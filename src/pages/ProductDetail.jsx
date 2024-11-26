import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './ProductDetail.css'; 

const ProductDetail = () => {
  const { id } = useParams(); // Extract product ID from URL
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [activeTab, setActiveTab] = useState('details'); // State for active tab
  const [similarProducts, setSimilarProducts] = useState([]);
  const [customerLikes, setCustomerLikes] = useState([]);

  // Fetch product data based on the ID
  useEffect(() => {
    const fetchedProductData = getProductById(id);
    setProductData(fetchedProductData);
    setSimilarProducts(getSimilarProducts(id));
    setCustomerLikes(getCustomerLikes(id));

    if (fetchedProductData) {
      setMainImage(fetchedProductData.images[0]);
    }
  }, [id]);

  if (!productData) {
    return <div className="not-found">Product not found!</div>;
  }

  // Custom arrows for the carousel
  const NextArrow = ({ onClick }) => (
    <button className="carousel-arrow next" onClick={onClick}>
      {'>'}
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="carousel-arrow prev" onClick={onClick}>
      {'<'}
    </button>
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="product-detail container">
      <div className="row align-items-start">
        <div className="col-lg-6">
          <div className="product-images">
            <img src={mainImage} alt={productData.name} className="main-image" />
            <div className="image-swatches">
              {productData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${productData.name} ${index + 1}`}
                  onClick={() => setMainImage(image)}
                  className="swatch"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="product-info-card">
            <h1 className="product-title">{productData.name}</h1>
            <p className="brand">Brand: {productData.brand}</p>
            <p className="seller">Sold by: {productData.seller}</p>
            <div className="rating">Rating: {productData.rating} (Reviews: {productData.reviews})</div>
            <div className="pricing">
              <span className="sale-price">${productData.salePrice.toFixed(2)}</span>
              <span className="original-price">${productData.price.toFixed(2)}</span>
              <span className="discount">30% off</span>
            </div>

            {/* Size Selection */}
            <div className="size-selection">
              <label>Select Size</label>
              <div>
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="/size-chart" className="size-chart-link">Size Chart</a>
            </div>

            {/* Color Selection */}
            <div className="color-selection">
              <label>Select Color</label>
              <div>
                {productData.colors.map((color) => (
                  <button
                    key={color}
                    className={`color-swatch ${selectedColor === color ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Best Offers */}
            <div className="offers">
              <h3>Best Offers</h3>
              <ul>
                <li>Special offer: Get 25% off T&C</li>
                <li>Bank offer: Get 30% off on Axis Bank Credit card T&C</li>
                <li>Wallet offer: Get 40% cashback via Paytm wallet on first transaction T&C</li>
              </ul>
            </div>

            {/* Add to Cart and Wishlist */}
            <div className="actions">
              <button className="add-to-cart">Add to Cart</button>
              <button className="wishlist-icon">♥</button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <div className="tab-headings">
          <button className={`tab ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>Product Details</button>
          <button className={`tab ${activeTab === 'specs' ? 'active' : ''}`} onClick={() => setActiveTab('specs')}>Specs</button>
          <button className={`tab ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Ratings and Reviews</button>
        </div>
        <div className="tab-content">
          {activeTab === 'details' && <p className="tab-description" style={{ width: '70%' }}>{productData.description}</p>}
          {activeTab === 'specs' && <p className="tab-description" style={{ width: '70%' }}>{productData.specs}</p>}
          {activeTab === 'reviews' && <p className="tab-description" style={{ width: '70%' }}>Customer reviews and ratings will appear here.</p>}
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="similar-products">
        <h2>Similar Products</h2>
        <Slider {...carouselSettings}>
    {similarProducts.map((product) => (
        <div key={product.id} className="carousel-item">
            <img src={product.image} alt={product.name} className="carousel-image" />
            <h5>{product.name}</h5>
            <p>{product.brand}</p>
            <div className="pricing">
                <span className="sale-price">${product.salePrice}</span>
                <span className="original-price">${product.price}</span>
                <span className="discount">30% off</span>
            </div>
        </div>
    ))}
</Slider>
      </div>

      {/* Customers Also Like Section */}
      <div className="customers-also-like">
        <h2>Customers Also Like</h2>
        <Slider {...carouselSettings}>
    {similarProducts.map((product) => (
        <div key={product.id} className="carousel-item">
            <img src={product.image} alt={product.name} className="carousel-image" />
            <h5>{product.name}</h5>
            <p>{product.brand}</p>
            <div className="pricing">
                <span className="sale-price">${product.salePrice}</span>
                <span className="original-price">${product.price}</span>
                <span className="discount">30% off</span>
            </div>
        </div>
    ))}
</Slider>
      </div>
    </div>
  );
};

//  function to simulate fetching product by ID
function getProductById(id) {
  return {
    id,
    name: 'Stylish Shirt',
    brand: 'Brand A',
    seller: 'Seller XYZ',
    rating: 4.5,
    reviews: 120,
    price: 99.99,
    salePrice: 69.99,
    description: 'This is a stylish shirt perfect for all seasons.',
    specs: 'Material: Cotton, Available sizes: S, M, L, XL',
    images: [
      '/images/product-1.jpg',
      '/images/product-2.jpg',
      '/images/product-3.jpg',
      '/images/product-4.jpg',
    ],
    colors: ['#ff0000', '#00ff00', '#0000ff'],
  };
}

//  function to simulate fetching similar products
function getSimilarProducts(currentProductId) {
  return [
    { id: '2', name: 'Casual Shirt', brand: 'Brand B', price: 89.99, salePrice: 59.99, image: '/images/product-2.jpg' },
    { id: '3', name: 'Formal Shirt', brand: 'Brand C', price: 109.99, salePrice: 79.99, image: '/images/product-3.jpg' },
    { id: '4', name: 'Sportswear', brand: 'Brand D', price: 129.99, salePrice: 89.99, image: '/images/product-4.jpg' },
  ];
}

// function to simulate fetching customer likes products
function getCustomerLikes(currentProductId) {
  return [
    { id: '5', name: 'Polo Shirt', brand: 'Brand E', price: 59.99, salePrice: 39.99, image: '/images/product-5.jpg' },
    { id: '6', name: 'Hoodie', brand: 'Brand F', price: 69.99, salePrice: 49.99, image: '/images/product-6.jpg' },
    { id: '7', name: 'Joggers', brand: 'Brand G', price: 79.99, salePrice: 59.99, image: '/images/product-7.jpg' },
  ];
}

export default ProductDetail;
