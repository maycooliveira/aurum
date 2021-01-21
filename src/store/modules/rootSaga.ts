import { all } from 'redux-saga/effects';

import lawsuit from './lawsuit/sagas';

export default function* rootSaga() {
  return yield all([lawsuit]);
}
