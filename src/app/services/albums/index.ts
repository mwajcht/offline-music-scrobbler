import { AlbumList } from '@pages/main/namespace';
import ApiService from '../config';

export const getAlbumsService = (payload: { name: string }) => {
  // ?method=artist.gettopalbums&artist=cher&api_key=YOUR_API_KEY&format=json
  return ApiService.get<AlbumList>('/', {
    method: 'artist.gettopalbums',
    artist: payload.name,
    api_key: process.env.API_KEY,
    format: 'json',
  }).then(response => {
    return response.data;
  });
};
