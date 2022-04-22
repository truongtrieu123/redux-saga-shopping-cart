import { FILTER_BY_TERM, GET_PRODUCTS, RECEIVE_PRODUCTS } from 'store/types';

export const receiveProducts = (initialData) => {
  return { type: RECEIVE_PRODUCTS, payload: initialData };
};

export const filterByTerm = (filterTerm) => {
  return { type: FILTER_BY_TERM, payload: filterByTerm };
};

export const getAllProducts = () => {
  return { type: GET_PRODUCTS };
};
