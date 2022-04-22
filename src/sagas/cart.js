import { takeEvery, call, put, select } from 'redux-saga/effects';
import { CHECKOUT_REQUEST } from 'store/types';
import api from 'services';
import { checkoutRequestFailed, checkoutRequestSuccess } from 'actions';

function* checkoutCart() {
  try {
    const inCart = select((state) => state.cart.inCart);
    const res = yield call(api.requestCheckout, inCart);
    yield put(checkoutRequestSuccess(res));
  } catch (ex) {
    yield put(checkoutRequestFailed(ex));
  }
}

export function* watchCheckout() {
  yield takeEvery(CHECKOUT_REQUEST, checkoutCart);
}
