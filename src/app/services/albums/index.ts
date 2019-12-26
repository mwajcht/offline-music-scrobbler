import ApiService from '../config';

export const getAlbumsService = (payload: { name: string }) => {
  // ?method=artist.gettopalbums&artist=cher&api_key=YOUR_API_KEY&format=json
  return ApiService.get('/', {
    method: 'artist.gettopalbums',
    artist: payload.name,
    api_key: '9b7c7e671de62adb71500c2ff8147453',
    format: 'json'
  }).then((data: any) => {
    return data.data;
  });
};
