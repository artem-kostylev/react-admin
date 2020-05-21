import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, fetchSession } from 'store/auth';
import Dashboard from 'layouts/Dashboard';
import Auth from 'layouts/Auth';

export default function App() {
  const { authenticated } = useSelector(authSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSession());
  }, [dispatch]);

  return authenticated === true ? (
    <Dashboard />
  ) : (
    authenticated === false && <Auth />
  );
}
