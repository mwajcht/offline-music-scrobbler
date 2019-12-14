import { ReturnType } from '@core/namespace';
import { MainComponentState } from '../../namespace';

export enum MainActionTypes {
  LOAD_ARTISTS = 'LOAD_ARTISTS',
  LOAD_ARTISTS_SUCCESS = 'LOAD_ARTISTS_SUCCESS',
  LOAD_ARTISTS_FAILED = 'LOAD_ARTISTS_FAILED',
}

export const loadArtists = (payload: { name: string }) =>
  ({
    type: MainActionTypes.LOAD_ARTISTS,
    payload,
  } as const);

export type LoadArtistsAction = ReturnType<typeof loadArtists>;

export const loadArtistsSuccess = (payload: {
  results: MainComponentState['result'];
}) =>
  ({
    type: MainActionTypes.LOAD_ARTISTS_SUCCESS,
    payload,
  } as const);

export const loadArtistsFailed = () =>
  ({
    type: MainActionTypes.LOAD_ARTISTS_FAILED,
  } as const);

export type MainActions =
  | LoadArtistsAction
  | ReturnType<typeof loadArtistsSuccess>
  | ReturnType<typeof loadArtistsFailed>;
