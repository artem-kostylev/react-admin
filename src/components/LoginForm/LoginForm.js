import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const validate = {
  email: { required: 'The field is required' },
  password: { required: 'The field is required' }
};

export default function LoginForm({ register, onSubmit, errors, sending }) {
  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form__group'>
        <label className='form__label'>Email</label>
        <input
          className='input'
          type='email'
          name='email'
          ref={register(validate.email)}
        />
        {errors.email && (
          <small className='form__error'>{errors.email.message}</small>
        )}
      </div>
      <div className='form__group'>
        <label className='form__label'>Password</label>
        <input
          className='input'
          type='password'
          name='password'
          ref={register(validate.password)}
        />
        {errors.password && (
          <small className='form__error'>{errors.password.message}</small>
        )}
      </div>
      <button className={clsx('btn btn--primary', sending && 'btn--loading')}>
        login
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  register: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  sending: PropTypes.bool.isRequired
};
