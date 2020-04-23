import { LoginComponentState } from '../namespace';

export const initial: LoginComponentState = {
  isLoading: false,
  error: false,
  sessionKey: '',
  sessionResult: { key: '' },
};
