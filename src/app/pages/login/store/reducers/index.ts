import localStorageService from '@core/services/local-storage';
import { LoginActions, LoginActionTypes } from '../actions/index';
import { initial } from '../initial';
import { LoginComponentState } from '../../namespace';

export const loginPageReducer = (
  state = initial,
  action: LoginActions,
): LoginComponentState => {
  switch (action.type) {
    case LoginActionTypes.OBTAIN_SESSION_KEY:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case LoginActionTypes.OBTAIN_SESSION_KEY_SUCCESS: {
      const newSessionKey = action.payload.session.key;
      localStorageService.set('sessionKey', newSessionKey);
      return {
        ...state,
        sessionKey: newSessionKey,
        isLoading: false,
      };
    }
    case LoginActionTypes.OBTAIN_SESSION_KEY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
