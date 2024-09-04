import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <li>
      <img src={product.image} alt={product.name} width={100} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </li>
  );
};

export default ProductItem;