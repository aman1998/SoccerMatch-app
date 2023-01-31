import LeaguePage from '@containers/League';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { ILeaguePageProps } from '@containers/League/types';

import { TPageProps } from '@config/types';

import { database } from '../../../firebase-config';

export async function getStaticPaths(): Promise<{
  paths: { params: { id: string } }[];
  fallback: boolean;
}> {
  return {
    paths: ['england', 'spain', 'italy', 'germany', 'france'].map((item: string) => ({
      params: {
        id: item,
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

  // @ts-ignore
  const highlights = leagueSnapshot.docs.map((doc: any) => doc.data());

  return {
    props: { data: highlights },
  };
}

export default LeaguePage;
