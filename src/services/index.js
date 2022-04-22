import { sampleData } from './sample-data';

const TIME_OUT = 1000;
const MAX_ITEMS_IN_CART = 5;

function requestProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(sampleData), TIME_OUT);
  });
}

function requestCheckout() {
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => true),
      TIME_OUT
    );
  });
}

const api = { requestCheckout, requestProducts };

export default api;
