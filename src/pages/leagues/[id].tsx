import LeaguePage from '@containers/League';
import { collection, getDocs, where, query } from 'firebase/firestore';

import { ILeaguesData } from '@store/leagues/types';

import { database } from '../../../firebase-config';

import { TCardStaticProps } from '../../config/types';

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

export async function getStaticProps(context: { params: { id: string } }): TCardStaticProps {
  const { id } = context.params;
  const leaguesRef = collection(database, 'highlights');

  const q = query(leaguesRef, where('league', '==', id));
  const leagueSnapshot = await getDocs(q);

  // @ts-ignore
  const highlights = leagueSnapshot.docs.map((doc: any) => doc.data());

  return {
    props: { data: highlights },
  };
}

export default LeaguePage;
