import { takeLatest, all, AllEffect, ForkEffect, put, select } from 'redux-saga/effects';
import { collection, getDocs, query, limit, startAfter, where } from 'firebase/firestore';
import { database } from 'firebase-config';

import { IApplicationState, IPayloadAction } from '@store/types';
import { IHighlightsData } from '@store/highlights/types';

import {
  getHighlightsData,
  getHighlightsError,
  getHighlightsFetching,
  getHighlightsFinish,
  getLeagueHighlightsData,
  getLeagueHighlightsFetching,
  getLeagueHighlightsError,
  getLeagueHighlightsFinish,
} from './reducers';

let latestDoc: unknown = null;
const leagueHighlightsLatestDoc: Record<string, unknown> = {};

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

function* getLeagueHighlights(action: IPayloadAction<string>) {
  try {
    // @ts-ignore
    const leaguesRef = yield collection(database, 'highlights');

    let q = query(leaguesRef, where('name', '==', action.payload), limit(20));
    if (!!leagueHighlightsLatestDoc[action.payload]) {
      q = query(
        leaguesRef,
        where('name', '==', action.payload),
        limit(20),
        startAfter(leagueHighlightsLatestDoc[action.payload])
      );
    }

    // @ts-ignore
    const snapshot = yield getDocs(q);

    // @ts-ignore
    const data = snapshot.docs.map((doc: any) => doc.data());
    yield put(getLeagueHighlightsData({ id: action.payload, data }));
    if (snapshot.docs.length < 20) {
      yield put(getLeagueHighlightsFinish({ id: action.payload, finish: true }));
    }

    leagueHighlightsLatestDoc[action.payload] = snapshot.docs[snapshot.docs.length - 1];
  } catch (error) {
    console.log('error =>', error);
    yield put(getLeagueHighlightsError({ id: action.payload, error: 'error' }));
  }
}

function* Saga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(getHighlightsFetching.type, getHighlightsList)]);
  yield all([takeLatest(getLeagueHighlightsFetching.type, getLeagueHighlights)]);
}

export default Saga;
