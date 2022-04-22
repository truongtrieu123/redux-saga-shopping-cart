import { RECEIVE_PRODUCTS } from 'store/types';

const initialState = {
  productList: [],
  productDetail: null,
  isOpenModal: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        productList: action.payload.slice(),
      };
    default:
      return state;
  }
};
