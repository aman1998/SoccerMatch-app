import { takeLatest, all, AllEffect, ForkEffect, put, select } from 'redux-saga/effects';
import { collection, getDocs, query, limit, startAfter } from 'firebase/firestore';

import { highlightsListLatestDocSelector } from '@store/highlights/selectors';

import { database } from '../../../firebase-config';

import {
  getBestHighlightsFetching,
  getBestHighlightsData,
  getBestHighlightsError,
  getHighlightsData,
  getHighlightsError,
  getHighlightsFetching,
  getHighlightsFinish,
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

function* getHighlightsList() {
  try {
    const limitData = 32;
    const latestDoc = select(highlightsListLatestDocSelector);

    // @ts-ignore
    const col = yield collection(database, 'highlights');
    // @ts-ignore
    const q = query(col, limit(limitData), startAfter(latestDoc));
    // @ts-ignore
    const snapshot = yield getDocs(q);
    const data = snapshot.docs.map((doc: any) => doc.data());
    yield put(getHighlightsData(data));
    if (snapshot.docs.length < limitData) {
      yield put(getHighlightsFinish(true));
    }

    // yield put(getHighlightsLatestDoc(snapshot.docs[snapshot.docs.length - 1]));
  } catch (error) {
    yield put(getHighlightsError('error'));
  }
}

function* Saga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(getBestHighlightsFetching.type, getBestHighlightsList)]);
  yield all([takeLatest(getHighlightsFetching.type, getHighlightsList)]);
}

export default Saga;
