import { all, takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { getArtistsService } from '@core/services/artists';
import { getAlbumsService } from '@core/services/albums';
import { getTracksService } from '@core/services/tracks';
import { getScrobbleService } from "@core/services/scrobble";
import {
  MainActionTypes,
  loadArtistsSuccess, loadArtistsFailed,
  loadAlbumsSuccess, loadAlbumsFailed,
  loadTracksSuccess, loadTracksFailed,
  scrobbleSuccess, scrobbleFailed
} from '../actions';

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
    yield put(loadTracksSuccess(response));
  } catch (error) {
    yield put(loadTracksFailed());
  }
}

function* executeScrobble(action: any): SagaIterator {
  try {
    const response = yield call(getScrobbleService, action.payload);
    yield put(scrobbleSuccess(response));
  } catch (error) {
    yield put(scrobbleFailed());
  }
}

export default function* mainSaga() {
  yield all([takeLatest(MainActionTypes.LOAD_ARTISTS, executeGetArtists)]);
  yield all([takeLatest(MainActionTypes.LOAD_ALBUMS, executeGetAlbums)]);
  yield all([takeLatest(MainActionTypes.LOAD_TRACKS, executeGetTracks)]);
  yield all([takeLatest(MainActionTypes.SCROBBLE, executeScrobble)]);
}
