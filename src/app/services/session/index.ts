import ApiService from '../config';

export const getSessionService = (payload: { token: string }) => {
  // ?method=auth.getSession&api_key=YOUR_API_KEY&token=TOKEN&api_sig=SIGNATURE&format=json
  // api signature = md5("api_keyxxxxxxxxmethodauth.getSessiontokenxxxxxxxmysecret")
  const md5 = require('md5');
  const sig = md5('api_key9b7c7e671de62adb71500c2ff8147453methodauth.getSessiontoken' + payload.token + 'a9f88b76d43c1a48cc86b7d0c1d51241');
  return ApiService.get('/', {
    method: 'auth.getSession',
    token: payload.token,
    api_key: '9b7c7e671de62adb71500c2ff8147453',
    api_sig: sig,
    format: 'json'
  }).then((data: any) => {
    return data.data;
  });
};
