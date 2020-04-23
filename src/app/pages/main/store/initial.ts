import {
  Album,
  Artist,
  MainComponentState,
  PlayedTrack,
  Scrobble,
  Track,
} from '../namespace';

export const initial: MainComponentState = {
  isLoading: false,
  artistsResult: { artistmatches: { artist: new Array<Artist>() } },
  albumsResult: { album: new Array<Album>() },
  albumInfoResult: { tracks: { track: new Array<Track>() } },
  scrobbleResult: { scrobbles: { scrobble: new Array<Scrobble>() } },
  artists: new Array<Artist>(),
  albums: new Array<Album>(),
  tracks: new Array<Track>(),
  error: false,
  inputText: '',
  selectedArtist: '',
  selectedAlbum: '',
  shouldLogin: false,
  playedTracks: new Array<PlayedTrack>(),
};
