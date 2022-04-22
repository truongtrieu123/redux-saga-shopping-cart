import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_PRODUCTS } from 'store/types';
import api from 'services';
import { receiveProducts } from 'actions';

function* getAllProducts() {
  try {
    const res = yield call(api.requestProducts);
    yield put(receiveProducts(res));
  } catch (ex) {
    console.log('Error! :0');
  }
}

export function* watchProducts() {
  yield takeEvery(GET_PRODUCTS, getAllProducts);
}
