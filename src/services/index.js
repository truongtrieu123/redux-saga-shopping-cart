import { sampleData } from './sample-data';

const TIME_OUT = 1000;
const MIN_ITEMS_IN_CART = 1;

function requestProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(sampleData), TIME_OUT);
  });
}

function requestCheckout(inCart) {
  return new Promise((resolve, reject) => {
    const totalItems = inCart.reduce((prev, cur, idx) => {
      return prev + cur.amount;
    });

    if (totalItems > MIN_ITEMS_IN_CART)
      resolve(
        setTimeout(() => 'Order successfully'),
        TIME_OUT
      );
    else
      reject(
        setTimeout(() => 'Failed! Minimum items is above 1'),
        TIME_OUT
      );
  });
}

const api = { requestCheckout, requestProducts };

export default api;
