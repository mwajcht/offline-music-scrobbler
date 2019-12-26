import { ReturnType } from '@core/namespace';
import { MainComponentState } from '../../namespace';

export enum MainActionTypes {
  LOAD_ARTISTS = 'LOAD_ARTISTS',
  LOAD_ARTISTS_SUCCESS = 'LOAD_ARTISTS_SUCCESS',
  LOAD_ARTISTS_FAILED = 'LOAD_ARTISTS_FAILED',
  LOAD_ALBUMS = 'LOAD_ALBUMS',
  LOAD_ALBUMS_SUCCESS = 'LOAD_ALBUMS_SUCCESS',
  LOAD_ALBUMS_FAILED = 'LOAD_ALBUMS_FAILED',
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

export type LoadArtistsAction = ReturnType<typeof loadArtists>;

export type LoadAlbumsAction = ReturnType<typeof loadAlbums>;

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

export type MainActions =
  | LoadArtistsAction
  | LoadAlbumsAction
  | ReturnType<typeof loadArtistsSuccess>
  | ReturnType<typeof loadArtistsFailed>
  | ReturnType<typeof loadAlbumsSuccess>
  | ReturnType<typeof loadAlbumsFailed>;
