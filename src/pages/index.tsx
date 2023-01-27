import MainPage from '@containers/Main';
import { collection, getDocs } from 'firebase/firestore';
import { IMainPageProps } from '@containers/Main/types';

import { TPageProps } from '@config/types';

import { database } from '../../firebase-config';

export async function getStaticProps(): TPageProps<IMainPageProps> {
  const highlightsCol = await collection(database, 'highlights');
  const highlightsSnapshot = await getDocs(highlightsCol);

  const bestCol = await collection(database, 'bestHighlights');
  const bestSnapshot = await getDocs(bestCol);

  const leaguesCol = await collection(database, 'leagues');
  const leaguesSnapshot = await getDocs(leaguesCol);

  // @ts-ignore
  const highlights = highlightsSnapshot.docs.map((doc: any) => doc.data());
  const best = bestSnapshot.docs.map((doc: any) => doc.data());
  const leagues = leaguesSnapshot.docs.map((doc: any) => doc.data());

  return {
    props: { highlightsListData: highlights, bestHighlightsListData: best, leaguesData: leagues },
  };
}

export default MainPage;
