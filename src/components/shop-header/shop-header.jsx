import React from 'react';
import {Link} from 'react-router-dom';
import './shop-header.css';
import {useSelector} from "react-redux";

const ShopHeader = () => {
    const state = useSelector(({order}) => ({
        total: order.total,
        totalCount: order.totalCount
    }))
  return (
    <header className="shop-header row">
      <Link className="logo text-dark" to="/">ReStore</Link>
      <Link className="shopping-cart" to="/cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {state.totalCount} items {!!state.total && `($${state.total})`}
      </Link>
    </header>
  );
};

export default ShopHeader;
