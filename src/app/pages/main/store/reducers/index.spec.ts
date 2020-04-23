import { mainPageReducer } from '.';

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
});
