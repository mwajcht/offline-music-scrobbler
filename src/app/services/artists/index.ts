import { ArtistMatches } from '@pages/main/namespace';
import ApiService from '../config';

export const getArtistsService = (payload: { name: string }) => {
  // ?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json
  return ApiService.get<ArtistMatches>('/', {
    method: 'artist.search',
    artist: payload.name,
    api_key: process.env.API_KEY,
    format: 'json',
  }).then(response => {
    return response.data;
  });
};
