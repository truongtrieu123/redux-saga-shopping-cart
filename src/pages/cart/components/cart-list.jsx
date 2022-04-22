import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  decrementProductInCart,
  removeFromCart,
} from 'store/actions';
import { CartItem } from './cart-item';

export const CartList = ({ children }) => {
  const cartStore = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const inCart = cartStore.inCart;

  const removeItemFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const incrementItemInCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const decrementItemInCart = (product) => {
    dispatch(decrementProductInCart(product));
  };

  return (
    <div className="container-fluid">
      {inCart.map((item) => {
        return (
          <CartItem
            key={item.id}
            incrementProduct={incrementItemInCart}
            decrementProduct={decrementItemInCart}
            removeProduct={removeItemFromCart}
            product={item}
          ></CartItem>
        );
      })}
    </div>
  );
};
