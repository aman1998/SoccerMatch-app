import { takeLatest, all, AllEffect, ForkEffect, put } from 'redux-saga/effects';
import { collection, getDocs } from 'firebase/firestore';

import { database } from '../../../firebase-config';

import { getLeaguesData, getLeaguesFetching, getLeaguesError } from './reducers';

function* getLeaguesList() {
  try {
    // @ts-ignore
    const leaguesCol = yield collection(database, 'leagues');
    // @ts-ignore
    const leaguesSnapshot = yield getDocs(leaguesCol);
    // @ts-ignore
    const leagues = leaguesSnapshot.docs.map((doc: any) => doc.data());
    yield put(getLeaguesData(leagues));
  } catch (error) {
    yield put(getLeaguesError('error'));
  }
}

function* Saga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(getLeaguesFetching.type, getLeaguesList)]);
}

export default Saga;
