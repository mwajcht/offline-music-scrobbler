import { ReturnType } from '@core/namespace';
import { MainComponentState } from '../../namespace';

export enum MainActionTypes {
  LOAD_ARTISTS = 'LOAD_ARTISTS',
  LOAD_ARTISTS_SUCCESS = 'LOAD_ARTISTS_SUCCESS',
  LOAD_ARTISTS_FAILED = 'LOAD_ARTISTS_FAILED',
  LOAD_ALBUMS = 'LOAD_ALBUMS',
  LOAD_ALBUMS_SUCCESS = 'LOAD_ALBUMS_SUCCESS',
  LOAD_ALBUMS_FAILED = 'LOAD_ALBUMS_FAILED',
  LOAD_TRACKS = 'LOAD_TRACKS',
  CLEAR_ARTISTS = 'CLEAR_ARTISTS',
  CLEAR_ALBUMS = 'CLEAR_ALBUMS',
  CLEAR_TRACKS = 'CLEAR_TRACKS',
  LOAD_TRACKS_SUCCESS = 'LOAD_TRACKS_SUCCESS',
  LOAD_TRACKS_FAILED = 'LOAD_TRACKS_FAILED',
}

export const loadArtists = (payload: { name: string }) =>
  ({
    type: MainActionTypes.LOAD_ARTISTS,
    payload,
  } as const);

export const loadAlbums = (payload: { name: string }) =>
  ({
    type: MainActionTypes.LOAD_ALBUMS,
    payload,
  } as const);

export const loadTracks = (payload: { artist: string, album: string }) =>
  ({
    type: MainActionTypes.LOAD_TRACKS,
    payload,
  } as const);

export const clearTracks = () =>
  ({
    type: MainActionTypes.CLEAR_TRACKS
  } as const);

export const clearAlbums = () =>
  ({
    type: MainActionTypes.CLEAR_ALBUMS
  } as const);

export const clearArtists = () =>
  ({
    type: MainActionTypes.CLEAR_ARTISTS
  } as const);

export type LoadArtistsAction = ReturnType<typeof loadArtists>;

export type LoadAlbumsAction = ReturnType<typeof loadAlbums>;

export type LoadTracksAction = ReturnType<typeof loadTracks>;

export type ClearArtistsAction = ReturnType<typeof clearArtists>;

export type ClearAlbumsAction = ReturnType<typeof clearAlbums>;

export type ClearTracksAction = ReturnType<typeof clearTracks>;

export const loadArtistsSuccess = (payload: {
  results: MainComponentState['artistsResult'];
}) =>
  ({
    type: MainActionTypes.LOAD_ARTISTS_SUCCESS,
    payload,
  } as const);

export const loadArtistsFailed = () =>
  ({
    type: MainActionTypes.LOAD_ARTISTS_FAILED,
  } as const);

export const loadAlbumsSuccess = (payload: {
  topalbums: MainComponentState['albumsResult'];
}) =>
  ({
    type: MainActionTypes.LOAD_ALBUMS_SUCCESS,
    payload,
  } as const);

export const loadAlbumsFailed = () =>
  ({
    type: MainActionTypes.LOAD_ALBUMS_FAILED,
  } as const);

export const loadTracksSuccess = (payload: {
  album: MainComponentState['albumInfoResult'];
}) =>
  ({
    type: MainActionTypes.LOAD_TRACKS_SUCCESS,
    payload,
  } as const);

export const loadTracksFailed = () =>
  ({
    type: MainActionTypes.LOAD_TRACKS_FAILED,
  } as const);

export type MainActions =
  | LoadArtistsAction
  | LoadAlbumsAction
  | LoadTracksAction
  | ClearArtistsAction
  | ClearAlbumsAction
  | ClearTracksAction
  | ReturnType<typeof loadArtistsSuccess>
  | ReturnType<typeof loadArtistsFailed>
  | ReturnType<typeof loadAlbumsSuccess>
  | ReturnType<typeof loadAlbumsFailed>
  | ReturnType<typeof loadTracksSuccess>
  | ReturnType<typeof loadTracksFailed>;
