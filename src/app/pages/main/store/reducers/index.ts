import { MainActions, MainActionTypes } from '../actions/index';
import { initial } from '../initial';
import {MainComponentState, PlayedTrack} from '../../namespace';
import {default as localStorageService} from '@core/services/local-storage';

export const mainPageReducer = (
  state = initial,
  action: MainActions,
): MainComponentState => {
  switch (action.type) {
    case MainActionTypes.LOAD_ARTISTS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case MainActionTypes.LOAD_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.payload.results.artistmatches.artist,
        isLoading: false,
      };
    case MainActionTypes.LOAD_ARTISTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case MainActionTypes.LOAD_ALBUMS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case MainActionTypes.LOAD_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload.topalbums.album,
        isLoading: false,
      };
    case MainActionTypes.LOAD_ALBUMS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case MainActionTypes.LOAD_TRACKS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case MainActionTypes.LOAD_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: action.payload.album.tracks.track,
        isLoading: false,
      };
    case MainActionTypes.LOAD_TRACKS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case MainActionTypes.CLEAR_ARTISTS:
      return {
        ...state,
        isLoading: false,
        error: false,
        artists: [],
        albums: [],
        tracks: [],
      };
    case MainActionTypes.CLEAR_ALBUMS:
      return {
        ...state,
        isLoading: false,
        error: false,
        albums: [],
        tracks: [],
      };
    case MainActionTypes.CLEAR_TRACKS:
      return {
        ...state,
        isLoading: false,
        error: false,
        tracks: [],
      };
    case MainActionTypes.SCROBBLE:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case MainActionTypes.SCROBBLE_SUCCESS:
      localStorageService.remove('playedTracks');
      return {
        ...state,
        playedTracks: new Array<PlayedTrack>(),
        isLoading: false,
      };
    case MainActionTypes.SCROBBLE_FAILED:
      localStorageService.remove('sessionKey');
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
