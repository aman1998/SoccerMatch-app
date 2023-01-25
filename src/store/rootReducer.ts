import { combineReducers } from 'redux';

import highlights from './highlights/reducers';
import leagues from './leagues/reducers';

const rootReducer = combineReducers({
  highlights,
  leagues,
});

export default rootReducer;
