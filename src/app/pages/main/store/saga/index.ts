import { all, takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { getArtistsService } from '@core/services/artists';
import { getAlbumsService } from '@core/services/albums';
import { getTracksService } from '@core/services/tracks';
import { MainActionTypes,
  loadArtistsSuccess, loadArtistsFailed,
  loadAlbumsSuccess, loadAlbumsFailed,
  loadTracksSuccess, loadTracksFailed } from '../actions';

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
    yield put(loadAlbumsSuccess(response));
  } catch (error) {
    yield put(loadAlbumsFailed());
  }
}

function* executeGetTracks(action: any): SagaIterator {
  try {
    const response = yield call(getTracksService, action.payload);
    console.log('Response: ' + response);
    yield put(loadTracksSuccess(response));
  } catch (error) {
    yield put(loadTracksFailed());
  }
}

export default function* mainSaga() {
  yield all([takeLatest(MainActionTypes.LOAD_ARTISTS, executeGetArtists)]);
  yield all([takeLatest(MainActionTypes.LOAD_ALBUMS, executeGetAlbums)]);
  yield all([takeLatest(MainActionTypes.LOAD_TRACKS, executeGetTracks)]);
}
