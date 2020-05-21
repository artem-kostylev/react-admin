import React from 'react';
import ErrorMessage from 'components/ErrorMessage';

export default function NoMatch() {
  const error = { status: 404, message: 'Not found' };
  return <ErrorMessage error={error} />;
}
