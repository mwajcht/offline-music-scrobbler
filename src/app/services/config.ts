import axios, { AxiosInstance, AxiosResponse } from 'axios';
import localStorageService from '@core/services/local-storage';
import { ErrorCodes } from '../constants/constants';

const baseURL = 'http://ws.audioscrobbler.com/2.0/';

class ApiService {
  public request: AxiosInstance;

  constructor() {
    const config = {
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...this.getHeaders(),
      },
    };

    this.request = axios.create(config);

    this.request.interceptors.response.use(
      (response: any) => response,
      (error: any) => {
        if (error && error.response) {
          const { status } = error.response;
          if (
            status === ErrorCodes.UNAUTHORIZED ||
            status === ErrorCodes.ACCESS_DENIED ||
            status === ErrorCodes.NOT_FOUND
          ) {
            // for example logout action here
          }
        }
        return Promise.reject(error);
      },
    );
  }

  public get<T>(
    url: string,
    params?: any,
    options?: {},
  ): Promise<AxiosResponse<T>> {
    const config = { params, ...options };

    return this.request.get(url, config);
  }

  public post<T>(
    url: string,
    data?: {},
    options?: {},
  ): Promise<AxiosResponse<T>> {
    return this.request.post(url, data, options);
  }

  public postFormData<T>(
    url: string,
    data?: {},
    options?: {},
  ): Promise<AxiosResponse<T>> {
    return this.request.post(url, data, options);
  }

  private getHeaders() {
    const token = localStorageService.get('token');

    let headers = {};

    if (token) {
      headers = {
        'x-auth-token': token,
      };
    }

    return {
      headers,
    };
  }
}

export default new ApiService();
