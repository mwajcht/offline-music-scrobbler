import ApiService from '../config';

export const getArtistsService = (payload: { name: string }) => {
  // ?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json
  return ApiService.get('/', {
    method: 'artist.search',
    artist: payload.name,
    api_key: process.env.API_KEY,
    format: 'json'
  }).then((data: any) => {
    return data.data;
  });
};
