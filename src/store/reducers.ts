import { combineReducers } from 'redux';

import appReducer from './app/reducers';
import usersReducers from './user/reducers';

const reducer = combineReducers({
  app: appReducer,
  user: usersReducers,
});

export default reducer;
