import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'store/auth';

export default function Header() {
  const dispatch = useDispatch();

  const onClick = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to='/'>Home</Link>
      </nav>
      <button className='btn' onClick={onClick}>
        x
      </button>
    </header>
  );
}
