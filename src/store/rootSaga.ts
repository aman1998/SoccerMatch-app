import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';

import highlightSaga from './highlight/effects';

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([fork(highlightSaga)]);
}

export default rootSaga;
