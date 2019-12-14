import { MainActions, MainActionTypes } from '../actions/index';
import { initial } from '../initial';
import { MainComponentState } from '../../namespace';

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
    default:
      return state;
  }
};
