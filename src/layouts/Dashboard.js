import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'pages/Home';
import Product from 'pages/Product';
import ProductEdit from 'pages/ProductEdit';
import ProductAdd from 'pages/ProductAdd';
import NoMatch from 'pages/NoMatch';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/products/add' component={ProductAdd} />
        <Route path='/products/:id/edit' component={ProductEdit} />
        <Route path='/products/:id' component={Product} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}
