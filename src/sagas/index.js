import { fork, all } from 'redux-saga/effects';
import { watchCheckout } from './cart';
import { watchProducts } from './product';

export default function* rootSaga() {
  yield all([fork(watchCheckout), fork(watchProducts)]);
}
