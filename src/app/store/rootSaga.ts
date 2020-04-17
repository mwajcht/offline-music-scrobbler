import { all, fork } from 'redux-saga/effects';

import mainSaga from '@core/pages/main/store/saga';
import loginSaga from '@core/pages/login/store/saga';

export default function* rootSaga() {
  yield all([fork(mainSaga), fork(loginSaga)]);
  //yield all([fork(loginSaga)]);
}
