import { mainPageReducer } from '.';
import {
  clearAlbums,
  clearArtists,
  clearTracks,
  loadAlbumsSuccess,
  loadArtistsSuccess,
  loadTracksSuccess,
  scrobbleFailed,
  scrobbleSuccess,
} from '../actions';
import { initial } from '../initial';
import {
  Album,
  AlbumInfo,
  AlbumList,
  Artist,
  ArtistMatches,
  Scrobble,
  Scrobbles,
  Track,
} from '../../namespace';

describe('Main page reducers', () => {
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

  it('should store loaded artists into state ', () => {
    const initialState = initial;
    const artist1: Artist = { name: 'Darkthrone' };
    const artist2: Artist = { name: 'Mayhem' };
    const loadArtistResult: ArtistMatches = {
      artistmatches: { artist: new Array<Artist>(artist1, artist2) },
    };
    const state = mainPageReducer(
      initialState,
      loadArtistsSuccess({ results: loadArtistResult }),
    );
    expect(state.artists).toHaveLength(2);
    expect(state.artists[0].name).toEqual('Darkthrone');
    expect(state.artists[1].name).toEqual('Mayhem');
  });

  it('should store loaded albums into state  ', () => {
    const initialState = initial;
    const album1: Album = { name: 'Transilvanian hunger' };
    const album2: Album = { name: 'Total Death' };
    const loadAlbumsResult: AlbumList = {
      album: new Array<Album>(album1, album2),
    };
    const state = mainPageReducer(
      initialState,
      loadAlbumsSuccess({ topalbums: loadAlbumsResult }),
    );
    expect(state.albums).toHaveLength(2);
    expect(state.albums[0].name).toEqual('Transilvanian hunger');
    expect(state.albums[1].name).toEqual('Total Death');
  });

  it('should store loaded tracks into state  ', () => {
    const initialState = initial;
    const track1: Track = { duration: 370, name: 'Transilvanian Hunger' };
    const track2: Track = {
      duration: 149,
      name: 'Over fjell og gjennom torner',
    };
    const loadTracksResult: AlbumInfo = {
      tracks: { track: new Array<Track>(track1, track2) },
    };
    const state = mainPageReducer(
      initialState,
      loadTracksSuccess({ album: loadTracksResult }),
    );
    expect(state.tracks).toHaveLength(2);
    expect(state.tracks[0].name).toEqual('Transilvanian Hunger');
    expect(state.tracks[0].duration).toEqual(370);
    expect(state.tracks[1].name).toEqual('Over fjell og gjennom torner');
    expect(state.tracks[1].duration).toEqual(149);
  });

  it('should clear played tracks after scrobbling', () => {
    const initialState = initial;
    initialState.playedTracks = [
      {
        artist: 'Darkthrone',
        album: 'Transilvanian Hunger',
        track: 'Over fjell og gjennom torner',
        duration: 149,
      },
    ];
    const scrobble: Scrobble = {
      artist: 'Darkthrone',
      album: 'Transilvanian Hunger',
      track: 'Over fjell og gjennom torner',
      ignoredMessage: 0,
    };
    const scrobbleResult: Scrobbles = {
      scrobbles: { scrobble: new Array<Scrobble>(scrobble) },
    };
    const state = mainPageReducer(
      initialState,
      scrobbleSuccess({ scrobbles: scrobbleResult }),
    );
    expect(state.playedTracks).toHaveLength(0);
    expect(localStorage.removeItem).toHaveBeenCalledWith(
      'offline-music-scrobbler-playedTracks',
    );
  });

  it('should terminate session with last.fm after failed scrobble', () => {
    mainPageReducer(initial, scrobbleFailed());
    expect(localStorage.removeItem).toHaveBeenCalledWith(
      'offline-music-scrobbler-sessionKey',
    );
  });
});
