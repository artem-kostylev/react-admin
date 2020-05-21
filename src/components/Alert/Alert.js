import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ variant, message }) {
  return <div className={`alert alert--${variant}`}>{message}</div>;
}

Alert.propTypes = {
  variant: PropTypes.oneOf(['success', 'danger']).isRequired,
  message: PropTypes.string.isRequired
};
