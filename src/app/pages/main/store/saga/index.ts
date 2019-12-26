import { all, takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { getArtistsService } from '@core/services/artists';
import { getAlbumsService } from '@core/services/albums';
import { MainActionTypes, loadArtistsSuccess, loadArtistsFailed, loadAlbumsSuccess, loadAlbumsFailed } from '../actions';

function* executeGetArtists(action: any): SagaIterator {
  try {
    const response = yield call(getArtistsService, action.payload);
    yield put(loadArtistsSuccess(response));
  } catch (error) {
    yield put(loadArtistsFailed());
  }
}

function* executeGetAlbums(action: any): SagaIterator {
  try {
    const response = yield call(getAlbumsService, action.payload);
    console.log('Response: ' + response);
    yield put(loadAlbumsSuccess(response));
  } catch (error) {
    yield put(loadAlbumsFailed());
  }
}

export default function* mainSaga() {
  yield all([takeLatest(MainActionTypes.LOAD_ARTISTS, executeGetArtists)]);
  yield all([takeLatest(MainActionTypes.LOAD_ALBUMS, executeGetAlbums)]);
}
