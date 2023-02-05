import { takeLatest, all, AllEffect, ForkEffect, put, select } from 'redux-saga/effects';
import { collection, getDocs, query, limit, startAfter } from 'firebase/firestore';
import { database } from 'firebase-config';

import { IApplicationState } from '@store/types';
import { IHighlightsData } from '@store/highlights/types';

import {
  getHighlightsData,
  getHighlightsError,
  getHighlightsFetching,
  getHighlightsFinish,
} from './reducers';

let latestDoc: unknown = null;

function* getHighlightsList() {
  try {
    const highlights: IHighlightsData[] = yield select(
      (state: IApplicationState) => state.highlights.highlightsList.data
    );
    const limitData = !highlights.length ? 32 : 20;

    // @ts-ignore
    const col = yield collection(database, 'highlights');
    // @ts-ignore
    let q = query(col, limit(limitData));
    if (!!latestDoc) q = query(col, limit(limitData), startAfter(latestDoc));
    // @ts-ignore
    const snapshot = yield getDocs(q);
    const data = snapshot.docs.map((doc: any) => doc.data());
    yield put(getHighlightsData(data));
    if (snapshot.docs.length < limitData) {
      yield put(getHighlightsFinish(true));
    }

    latestDoc = snapshot.docs[snapshot.docs.length - 1];
  } catch (error) {
    yield put(getHighlightsError('error'));
  }
}

function* Saga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(getHighlightsFetching.type, getHighlightsList)]);
}

export default Saga;
