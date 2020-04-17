import { combineReducers, Reducer } from 'redux';

import { mainPageReducer } from '@core/pages/main/store/reducers';
import { loginPageReducer } from '@core/pages/login/store/reducers';

const rootReducer: Reducer = combineReducers({
  main: mainPageReducer,
  login: loginPageReducer,
});

export default rootReducer;
