import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';

import leaguesSaga from './leagues/effects';
import highlightsSaga from './highlights/effects';

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([fork(leaguesSaga)]);
  yield all([fork(highlightsSaga)]);
}

export default rootSaga;
