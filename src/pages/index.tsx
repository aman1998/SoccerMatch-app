import MainPage from '@containers/Main';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { GetStaticProps } from 'next';

import { database } from '../../firebase-config';

export const getStaticProps: GetStaticProps = async () => {
  const highlightsCol = await collection(database, 'highlights');
  const q = query(highlightsCol, limit(12));
  const highlightsSnapshot = await getDocs(q);

  // @ts-ignore
  const highlights = highlightsSnapshot.docs.map((doc: any) => doc.data());

  return {
    props: { highlightsListData: highlights },
    revalidate: 600,
  };
};

export default MainPage;
