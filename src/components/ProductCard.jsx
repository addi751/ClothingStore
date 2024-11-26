import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="product-card"
      style={{
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s',
      }}
      onClick={onClick} //  the onClick prop
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
      <h4 style={{ padding: '10px', fontWeight: 'bold' }}>{product.name}</h4>
      <p style={{ padding: '0 10px' }}>${product.salePrice} <span style={{ textDecoration: 'line-through' }}>${product.price}</span></p>
    </div>
  );
};

export default ProductCard;
