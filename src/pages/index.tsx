import MainPage from '@containers/Main';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { GetStaticProps } from 'next';

import { database } from '../../firebase-config';

export const getStaticProps: GetStaticProps = async () => {
  const limitCount = 12;
  let isFinish = false;

  const highlightsCol = await collection(database, 'highlights');
  const q = query(highlightsCol, limit(12));
  const highlightsSnapshot = await getDocs(q);
  // @ts-ignore
  const highlights = highlightsSnapshot.docs.map((doc: any) => doc.data());

  if (highlightsSnapshot.docs.length < limitCount) {
    isFinish = true;
  }

  return {
    props: { highlightsListData: highlights, isFinish },
    revalidate: 600,
  };
};

export default MainPage;
