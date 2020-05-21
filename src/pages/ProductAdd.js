import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { productsSelector, addProduct } from 'store/products';
import Alert from 'components/Alert';
import ProductForm from 'components/ProductForm';

export default function ProductAdd() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, setError, errors } = useForm();
  const { sending, error } = useSelector(productsSelector);

  const onSubmit = handleSubmit(data => {
    dispatch(addProduct(data))
      .then(() => history.push(`/products`))
      .catch(errors => setError(errors));
  });

  return (
    <div>
      {error && <Alert variant='danger' message={error.message} />}
      <ProductForm
        register={register}
        onSubmit={onSubmit}
        errors={errors}
        sending={sending}
      />
    </div>
  );
}
