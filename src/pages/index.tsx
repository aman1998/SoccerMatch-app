import MainPage from '@containers/Main';
import { collection, getDocs, query, limit, where } from 'firebase/firestore';
import { GetStaticProps } from 'next';

import { database } from '../../firebase-config';

export const getStaticProps: GetStaticProps = async () => {
  const limitCount = 12;
  let isFinish = false;

  const highlightsCol = await collection(database, 'highlights');
  const q = query(highlightsCol, limit(12));
  const qBest = query(highlightsCol, limit(3), where('isBest', '==', true));

  const highlightsSnapshot = await getDocs(q);
  const bestHighlightsSnapshot = await getDocs(qBest);
  // @ts-ignore
  const highlights = highlightsSnapshot.docs.map((doc: any) => doc.data());
  const bestHighlights = bestHighlightsSnapshot.docs.map((doc: any) => doc.data());

  if (highlightsSnapshot.docs.length < limitCount) {
    isFinish = true;
  }

  return {
    props: { highlights, isFinish, bestHighlights },
    revalidate: 600,
  };
};

export default MainPage;
