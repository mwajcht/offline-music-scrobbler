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

export interface TrackList {
  track: Track[];
}

export interface AlbumInfo {
  tracks: TrackList;
}

export interface MainComponentState {
  isLoading: boolean;
  artistsResult: ArtistMatches;
  albumsResult: AlbumList;
  albumInfoResult: AlbumInfo;
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
  error: boolean;
}
