import LeaguePage from '@containers/League';
import { collection, getDocs, where, query, limit } from 'firebase/firestore';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';

import { database } from '../../../firebase-config';

interface IParams extends NextParsedUrlQuery {
  leagueID: string;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  // paths: ['england', 'spain', 'italy', 'germany', 'france'].map((item: string) => ({
  //   params: {
  //     leagueID: item,
  //   },
  // })),
  paths: [
    { params: { leagueID: 'england' } },
    { params: { leagueID: 'spain' } },
    { params: { leagueID: 'italy' } },
    { params: { leagueID: 'germany' } },
    { params: { leagueID: 'france' } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<NextParsedUrlQuery>
) => {
  const { leagueID } = context.params as IParams;

  const leaguesRef = await collection(database, 'highlights');

  const q = query(leaguesRef, where('name', '==', leagueID), limit(20));
  const leagueSnapshot = await getDocs(q);

  // @ts-ignore
  const highlights = leagueSnapshot.docs.map((doc: any) => doc.data());

  if (!['england', 'spain', 'italy', 'germany', 'france'].includes(leagueID)) {
    return {
      notFound: true,
    };
  }

  return {
    props: { highlights, leagueID },
    revalidate: 600,
  };
};

export default LeaguePage;
