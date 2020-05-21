import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login, authSelector } from 'store/auth';
import Alert from 'components/Alert';
import LoginForm from 'components/LoginForm';

export default function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit, setError, errors } = useForm();
  const { error, sending } = useSelector(authSelector);

  const onSubmit = handleSubmit(credentials => {
    dispatch(login(credentials)).catch(errors => setError(errors));
  });

  return (
    <div>
      {error && <Alert variant='danger' message={error.message} />}
      <LoginForm
        register={register}
        onSubmit={onSubmit}
        errors={errors}
        sending={sending}
      />
    </div>
  );
}
