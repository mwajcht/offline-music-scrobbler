import { all, takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { getArtistsService } from '@core/services/artists';
import { MainActionTypes, loadArtistsSuccess, loadArtistsFailed } from '../actions';

function* executeGetArtists(action: any): SagaIterator {
  try {
    const response = yield call(getArtistsService, action.payload);
    console.log('Response: ' + response);
    yield put(loadArtistsSuccess(response));
  } catch (error) {
    yield put(loadArtistsFailed());
  }
}

export default function* mainSaga() {
  yield all([takeLatest(MainActionTypes.LOAD_ARTISTS, executeGetArtists)]);
}
