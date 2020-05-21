import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector, fetchProduct } from 'store/products';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';
import ProductDetails from 'components/ProductDetails';

export default function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProduct(params.id));
  }, [dispatch, params.id]);

  const renderProduct = () => {
    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (product) return <ProductDetails product={product} />;
  };

  return <div className='conteiner'>{renderProduct()}</div>;
}
