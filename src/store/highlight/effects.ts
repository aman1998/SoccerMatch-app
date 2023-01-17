import { takeLatest, all, AllEffect, ForkEffect } from 'redux-saga/effects';

import { getHighlightListFetching } from './reducers';

function* getHighlightList() {
  console.log('hello');
}

function* Saga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(getHighlightListFetching.type, getHighlightList)]);
}

export default Saga;
