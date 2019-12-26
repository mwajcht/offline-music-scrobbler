import {MainComponentState} from '../namespace';

export const initial: MainComponentState = {
  isLoading: false,
  artistsResult: {artistmatches: {artist: []}},
  albumsResult: {album: []},
  artists: [],
  albums: [],
  error: false,
};
