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

export interface MainComponentState {
  isLoading: boolean;
  artistsResult: ArtistMatches;
  albumsResult: AlbumList;
  artists: Artist[];
  albums: Album[];
  error: boolean;
}
