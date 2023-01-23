import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';

import highlightSaga from './highlight/effects';
import leaguesSaga from './leagues/effects';

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([fork(highlightSaga)]);
  yield all([fork(leaguesSaga)]);
}

export default rootSaga;
