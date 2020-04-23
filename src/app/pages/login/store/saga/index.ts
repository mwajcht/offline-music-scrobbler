import { all, takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { getSessionService } from '@core/services/session';
import {
  LoginActionTypes,
  obtainSessionKeySuccess,
  obtainSessionKeyFailed,
} from '../actions';

function* executeObtainSessionKey(action: any): SagaIterator {
  try {
    const response = yield call(getSessionService, action.payload);
    yield put(obtainSessionKeySuccess(response));
  } catch (error) {
    yield put(obtainSessionKeyFailed());
  }
}

export default function* loginSaga() {
  yield all([
    takeLatest(LoginActionTypes.OBTAIN_SESSION_KEY, executeObtainSessionKey),
  ]);
}
