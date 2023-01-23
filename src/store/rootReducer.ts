import { combineReducers } from 'redux';

import highlight from './highlight/reducers';
import leagues from './leagues/reducers';

const rootReducer = combineReducers({
  highlight,
  leagues,
});

export default rootReducer;
