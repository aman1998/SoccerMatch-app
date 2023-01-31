import { takeLatest, all, AllEffect, ForkEffect, put } from 'redux-saga/effects';
import { collection, getDocs } from 'firebase/firestore';

import { database } from '../../../firebase-config';

import {
  getBestHighlightsFetching,
  getBestHighlightsData,
  getBestHighlightsError,
} from './reducers';

function* getBestHighlightsList() {
  try {
    // @ts-ignore
    const bestCol = yield collection(database, 'bestHighlights');
    // @ts-ignore
    const bestSnapshot = yield getDocs(bestCol);
    const data = bestSnapshot.docs.map((doc: any) => doc.data());

    yield put(getBestHighlightsData(data));
  } catch (error) {
    yield put(getBestHighlightsError('error'));
  }
}

function* Saga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(getBestHighlightsFetching.type, getBestHighlightsList)]);
}

export default Saga;
