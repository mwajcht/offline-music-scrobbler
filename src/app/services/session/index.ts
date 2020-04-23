import ApiService from '../config';

export const getSessionService = (payload: { token: string }) => {
  // ?method=auth.getSession&api_key=YOUR_API_KEY&token=TOKEN&api_sig=SIGNATURE&format=json
  // api signature = md5("api_keyxxxxxxxxmethodauth.getSessiontokenxxxxxxxmysecret")
  const md5 = require('md5');
  const sig = md5('api_key' + process.env.API_KEY + 'methodauth.getSessiontoken' + payload.token + process.env.API_SECRET);
  return ApiService.get('/', {
    method: 'auth.getSession',
    token: payload.token,
    api_key: process.env.API_KEY,
    api_sig: sig,
    format: 'json'
  }).then((data: any) => {
    return data.data;
  });
};
