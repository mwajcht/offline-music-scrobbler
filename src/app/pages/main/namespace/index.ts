export interface Artist {
  name: string;
}

export interface ArtistList {
  artist: Artist[];
}

export interface ArtistMatches {
  artistmatches: ArtistList
}

export interface Album {
  name: string;
}

export interface AlbumList {
  album: Album[];
}

export interface Track {
  //rank: number;
  name: string;
  duration: number;
}

export class PlayedTrack {
  constructor(artist: string, album: string, track: string, duration: number) {
    this.artist = artist;
    this.album = album;
    this.track = track;
    this.duration = duration;
  }
  artist: string;
  album: string;
  track: string;
  duration: number;
}

export interface TrackList {
  track: Track[];
}

export interface AlbumInfo {
  tracks: TrackList;
}

export interface Scrobble {
  track: string;
  album: string;
  artist: string;
  ignoredMessage: number;
}

export interface ScrobbleList {
  scrobble: Scrobble[];
}

export interface Scrobbles {
  scrobbles: ScrobbleList;
}

export interface MainComponentState {
  isLoading: boolean;
  artistsResult: ArtistMatches;
  albumsResult: AlbumList;
  albumInfoResult: AlbumInfo;
  scrobbleResult: Scrobbles;
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
  error: boolean;
  inputText: string,
  selectedArtist: string,
  selectedAlbum: string,
  shouldLogin: boolean,
  playedTracks: PlayedTrack[],
}
