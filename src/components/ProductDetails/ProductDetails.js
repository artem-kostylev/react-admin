import React from 'react';
import PropTypes from 'prop-types';

export default function ProductDetails({ product }) {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__title'>{product.name}</div>
      </div>
      <div className='card__body'>
        <p className='card__text'>{product.description}</p>
        {product.price} x {product.stock}
      </div>
      <div className='card__footer'>
        {product.price} x {product.stock}
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired
};
