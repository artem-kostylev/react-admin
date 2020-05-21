import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, productsSelector } from 'store/products';
import Loading from 'components/Loading';
import ProductList from 'components/ProductList';
import ErrorMessage from 'components/ErrorMessage';

export default function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderProducts = () => {
    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (products.length) return <ProductList products={products} />;
  };

  return (
    <div className='conteiner'>
      <div className='hero'>
        <div className='hero__body'>
          <h1>Products</h1>
          <Link className='btn btn--primary' to='/products/add'>
            +
          </Link>
        </div>
      </div>
      {renderProducts()}
    </div>
  );
}
