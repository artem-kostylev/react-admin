import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProductList({ products }) {
  return (
    <div className='row'>
      {products.map(product => (
        <div className='col col__md-4' key={product.id}>
          <div className='card'>
            <div className='card__header'>
              <div className='card__title'>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </div>
            </div>
            <div className='card__body'>{product.description}</div>
            <div className='card__footer'>
              {product.price} x {product.stock}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};
