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
    case LoginActionTypes.OBTAIN_SESSION_KEY_SUCCESS:
      return {
        ...state,
        sessionKey: action.payload.session.key,
        isLoading: false,
      };
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
