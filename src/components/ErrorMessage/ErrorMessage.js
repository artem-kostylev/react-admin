import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage({ error }) {
  return (
    <div className='error'>
      <div className='error__status'>{error.status}</div>
      <div className='error__message'>{error.message}</div>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number,
    message: PropTypes.string
  }).isRequired
};
