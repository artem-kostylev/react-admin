import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { productsSelector, fetchProduct, updateProduct } from 'store/products';
import Alert from 'components/Alert';
import ProductForm from 'components/ProductForm';

export default function ProductEdit() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, reset, handleSubmit, setError, errors } = useForm();
  const { product, loading, sending, error } = useSelector(productsSelector);

  useEffect(() => {
    product ? reset(product) : dispatch(fetchProduct(params.id));
  }, [dispatch, params.id, product, reset]);

  const onSubmit = handleSubmit(data => {
    dispatch(updateProduct(data))
      .then(() => history.push(`/products/${params.id}`))
      .catch(errors => setError(errors));
  });

  return (
    <div>
      {error && <Alert variant='danger' message={error.message} />}
      <ProductForm
        register={register}
        onSubmit={onSubmit}
        errors={errors}
        loading={loading}
        sending={sending}
        editing
      />
    </div>
  );
}
