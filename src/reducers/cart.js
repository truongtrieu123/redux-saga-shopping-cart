import { WindowSharp } from '@mui/icons-material';
import {
  CHECKOUT_FAILED,
  CHECKOUT_SUCCESS,
  REMOVE_FROM_CART,
  DECREMENT_ITEM_IN_CART,
  ADD_TO_CART,
  CLEAR_CART,
} from 'store/types';

const initialState = {
  inCart: [],
  checkoutStatus: { isCheckoutPending: false, error: '' },
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        checkoutStatus: {
          isCheckoutPending: false,
          error: '',
        },
      };
    case CHECKOUT_FAILED:
      console.log(action.payload);
      return {
        ...state,
        checkoutStatus: {
          isCheckoutPending: false,
          error: action.payload,
        },
      };

    case ADD_TO_CART: {
      const product = action.payload;
      const productId = product.id;
      const newArr = state.inCart.slice();
      const foundProduct = newArr.find((item) => item.id === productId);
      if (foundProduct) {
        return {
          ...state,
          inCart: newArr.map((item) => {
            if (item.id === productId)
              return { ...item, amount: item.amount + 1 };
            else return item;
          }),
          total: state.total + product.price,
        };
      } else
        return {
          ...state,
          inCart: [...newArr, { ...product, amount: 1 }],
          total: state.total + product.price,
        };
    }
    case DECREMENT_ITEM_IN_CART: {
      const product = action.payload;
      const productId = product.id;
      const newArr = state.inCart.slice();
      const foundProduct = newArr.find((item) => item.id === productId);
      if (foundProduct) {
        return {
          ...state,
          inCart: newArr.reduce((prev, cur, idx) => {
            if (cur.id === productId)
              if (cur.amount > 1)
                return [...prev, { ...cur, amount: cur.amount - 1 }];
              else return prev;
            else return [...prev, cur];
          }, []),
          total: state.total - product.price,
        };
      } else return state;
    }
    case REMOVE_FROM_CART: {
      const productId = action.payload.id;
      const newArr = state.inCart.filter((item) => item.id !== productId);
      return {
        ...state,
        inCart: newArr,
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        inCart: [],
        total: 0,
      };
    }
    default:
      return state;
  }
};
