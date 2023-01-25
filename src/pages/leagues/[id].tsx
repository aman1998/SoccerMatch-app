import LeaguePage from '@containers/League';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { ILeaguePageProps } from '@containers/League/types';

import { ILeaguesData } from '@store/leagues/types';

import { database } from '../../../firebase-config';

import { TPageProps } from '../../config/types';

export async function getStaticPaths(): Promise<{
  paths: { params: { id: string } }[];
  fallback: boolean;
}> {
  const leaguesCol = await collection(database, 'leagues');
  const leaguesSnapshot = await getDocs(leaguesCol);

  // @ts-ignore
  const leagues = leaguesSnapshot.docs.map((doc: any) => doc.data());

  return {
    paths: leagues.map((item: ILeaguesData) => ({
      params: {
        id: item.link,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { id: string };
}): TPageProps<ILeaguePageProps> {
  const { id } = context.params;

  const leaguesRef = await collection(database, 'highlights');

  const q = query(leaguesRef, where('league', '==', id));
  const leagueSnapshot = await getDocs(q);

  const bestCol = await collection(database, 'bestHighlights');
  const bestSnapshot = await getDocs(bestCol);

  // @ts-ignore
  const highlights = leagueSnapshot.docs.map((doc: any) => doc.data());
  const best = bestSnapshot.docs.map((doc: any) => doc.data());

  return {
    props: { data: highlights, bestHighlightsList: best },
  };
}

export default LeaguePage;
