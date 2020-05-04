import { mainPageReducer } from '.';
import { clearAlbums, clearArtists, clearTracks } from '../actions';
import { initial } from '../initial';

describe('First Reducers', () => {
  it('should return default state ', () => {
    const state = mainPageReducer(undefined as any, {} as any);
    expect(state).toEqual({
      albumInfoResult: {
        tracks: {
          track: [],
        },
      },
      albums: [],
      albumsResult: {
        album: [],
      },
      artists: [],
      artistsResult: {
        artistmatches: {
          artist: [],
        },
      },
      error: false,
      inputText: '',
      isLoading: false,
      playedTracks: [],
      scrobbleResult: {
        scrobbles: {
          scrobble: [],
        },
      },
      selectedAlbum: '',
      selectedArtist: '',
      shouldLogin: false,
      tracks: [],
    });
  });

  it('should clear artists, albums and tracks ', () => {
    const initialState = initial;
    initialState.artists = [{ name: 'artist 1' }];
    initialState.albums = [{ name: 'album 1' }, { name: 'album 2' }];
    initialState.tracks = [{ name: 'track 1', duration: 100 }];
    const state = mainPageReducer(initialState, clearArtists());
    expect(state.artists).toHaveLength(0);
    expect(state.albums).toHaveLength(0);
    expect(state.tracks).toHaveLength(0);
  });

  it('should clear albums and tracks ', () => {
    const initialState = initial;
    initialState.artists = [{ name: 'artist 1' }];
    initialState.albums = [{ name: 'album 1' }, { name: 'album 2' }];
    initialState.tracks = [{ name: 'track 1', duration: 100 }];
    const state = mainPageReducer(initialState, clearAlbums());
    expect(state.artists).toHaveLength(1);
    expect(state.albums).toHaveLength(0);
    expect(state.tracks).toHaveLength(0);
  });

  it('should clear tracks ', () => {
    const initialState = initial;
    initialState.artists = [{ name: 'artist 1' }];
    initialState.albums = [{ name: 'album 1' }, { name: 'album 2' }];
    initialState.tracks = [{ name: 'track 1', duration: 100 }];
    const state = mainPageReducer(initialState, clearTracks());
    expect(state.artists).toHaveLength(1);
    expect(state.albums).toHaveLength(2);
    expect(state.tracks).toHaveLength(0);
  });
});
