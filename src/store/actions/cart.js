import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILED,
  DECREMENT_ITEM_IN_CART,
  CLEAR_CART,
} from 'store/types';

export const addProductToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};

export const removeFromCart = (product) => {
  return { type: REMOVE_FROM_CART, payload: product };
};

export const decrementProductInCart = (product) => {
  return { type: DECREMENT_ITEM_IN_CART, payload: product };
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};

export const checkoutRequestSuccess = () => {
  return { type: CHECKOUT_SUCCESS };
};

export const checkoutRequestFailed = () => {
  return { type: CHECKOUT_FAILED };
};
