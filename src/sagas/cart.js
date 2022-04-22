import { takeEvery, call, put } from 'redux-saga/effects';
import { CHECKOUT_REQUEST } from 'store/types';
import api from 'services';
import { checkoutRequestFailed, checkoutRequestSuccess } from 'store/actions';

function* checkoutCart() {
  try {
    const res = yield call(api.requestCheckout);
    yield put(checkoutRequestSuccess());
  } catch (ex) {
    yield put(checkoutRequestFailed());
  }
}

export function* watchCheckout() {
  yield takeEvery(CHECKOUT_REQUEST, checkoutCart);
}
