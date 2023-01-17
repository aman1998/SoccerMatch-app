import { combineReducers } from 'redux';

import highlight from './highlight/reducers';

const rootReducer = combineReducers({
  highlight,
});

export default rootReducer;
