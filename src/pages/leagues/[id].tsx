/* eslint-disable */
import LeaguePage from '@containers/League';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { GetStaticProps, GetStaticPaths } from 'next';

import { database } from '../../../firebase-config';

interface IParams {
  id?: string;
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: ['england', 'spain', 'italy', 'germany', 'france'].map((item: string) => ({
    params: {
      id: item,
    },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params as IParams;

  const leaguesRef = await collection(database, 'highlights');

  const q = query(leaguesRef, where('name', '==', id));
  const leagueSnapshot = await getDocs(q);

  // @ts-ignore
  const highlights = leagueSnapshot.docs.map((doc: any) => doc.data());

  return {
    props: { data: highlights },
    revalidate: 5
  };
};

export default LeaguePage;
