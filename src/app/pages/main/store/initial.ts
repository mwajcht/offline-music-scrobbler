import { MainComponentState } from '../namespace';

export const initial: MainComponentState = {
  isLoading: false,
  artists: [],
  result: { artistmatches: { artist: []}},
  error: false,
};
