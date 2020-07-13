import { loginPageReducer } from '.';
import { obtainSessionKeySuccess } from '../actions';
import { initial } from '../initial';
import { Session } from '../../namespace';

describe('Login page reducers', () => {
  it('should store session key after successful login ', () => {
    const session: Session = { key: 'session_key-1234' };
    const state = loginPageReducer(
      initial,
      obtainSessionKeySuccess({ session }),
    );
    expect(state.sessionKey).toEqual('session_key-1234');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'offline-music-scrobbler-sessionKey',
      'session_key-1234',
    );
  });
});
