import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const validate = {
  name: { required: 'The field is required' },
  description: { required: 'The field is required' },
  price: { required: 'The field is required' },
  stock: { required: 'The field is required' }
};

export default function ProductForm({
  register,
  onSubmit,
  errors,
  loading,
  sending,
  editing
}) {
  return (
    <form
      className={clsx('form', loading && 'form--loading')}
      onSubmit={onSubmit}
    >
      <div className='form__group'>
        <label className='form__label'>Name</label>
        <input
          className='input'
          type='text'
          name='name'
          ref={register(validate.name)}
        />
        {errors.name && (
          <small className='form__error'>{errors.name.message}</small>
        )}
      </div>
      <div className='form__group'>
        <label className='form__label'>Description</label>
        <input
          className='input'
          type='text'
          name='description'
          ref={register(validate.description)}
        />
        {errors.description && (
          <small className='form__error'>{errors.description.message}</small>
        )}
      </div>
      <div className='form__group'>
        <label className='form__label'>Price</label>
        <input
          className='input'
          type='text'
          name='price'
          ref={register(validate.price)}
        />
        {errors.price && (
          <small className='form__error'>{errors.price.message}</small>
        )}
      </div>
      <div className='form__group'>
        <label className='form__label'>Stock</label>
        <input
          className='input'
          type='text'
          name='stock'
          ref={register(validate.stock)}
        />
        {errors.stock && (
          <small className='form__error'>{errors.stock.message}</small>
        )}
      </div>
      <button className={clsx('btn btn--primary', sending && 'btn--loading')}>
        {editing ? 'update product' : 'create product'}
      </button>
    </form>
  );
}

ProductForm.propTypes = {
  register: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  sending: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired
};
