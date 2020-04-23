import { ReturnType } from '@core/namespace';
import { LoginComponentState } from '../../namespace';

export enum LoginActionTypes {
  OBTAIN_SESSION_KEY = 'OBTAIN_SESSION_KEY',
  OBTAIN_SESSION_KEY_SUCCESS = 'OBTAIN_SESSION_KEY_SUCCESS',
  OBTAIN_SESSION_KEY_FAILED = 'OBTAIN_SESSION_KEY_FAILED',
}

export const obtainSessionKey = (payload: { token: string }) =>
  ({
    type: LoginActionTypes.OBTAIN_SESSION_KEY,
    payload,
  } as const);

export type ObtainSessionKeyAction = ReturnType<typeof obtainSessionKey>;

export const obtainSessionKeySuccess = (payload: {
  session: LoginComponentState['sessionResult'];
}) =>
  ({
    type: LoginActionTypes.OBTAIN_SESSION_KEY_SUCCESS,
    payload,
  } as const);

export const obtainSessionKeyFailed = () =>
  ({
    type: LoginActionTypes.OBTAIN_SESSION_KEY_FAILED,
  } as const);

export type LoginActions =
  | ObtainSessionKeyAction
  | ReturnType<typeof obtainSessionKeySuccess>
  | ReturnType<typeof obtainSessionKeyFailed>;
