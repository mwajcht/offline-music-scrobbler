import {MainComponentState} from '../namespace';

export const initial: MainComponentState = {
  isLoading: false,
  artistsResult: {artistmatches: {artist: []}},
  albumsResult: {album: []},
  albumInfoResult: {tracks: {track: []}},
  artists: [],
  albums: [],
  tracks: [],
  error: false,
};
