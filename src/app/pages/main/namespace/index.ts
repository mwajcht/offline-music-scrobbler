export interface Artist {
  name: string;
}

export interface ArtistList {
  artist: Artist[];
}

export interface ArtistMatches {
  artistmatches: ArtistList
}

export interface MainComponentState {
  isLoading: boolean;
  result: ArtistMatches;
  artists: Artist[];
  error: boolean;
}
