import ApiService from '../config';

export const getTracksService = (payload: {
  artist: string;
  album: string;
}) => {
  // ?method=album.getinfo&api_key=YOUR_API_KEY&artist=Cher&album=Believe&format=json
  return ApiService.get('/', {
    method: 'album.getinfo',
    artist: payload.artist,
    album: payload.album,
    api_key: process.env.API_KEY,
    format: 'json',
  }).then((data: any) => {
    return data.data;
  });
};
