import MainPage from '@containers/Main';
import { collection, getDocs } from 'firebase/firestore';
import { GetStaticProps } from 'next';

import { database } from '../../firebase-config';

export const getStaticProps: GetStaticProps = async () => {
  const highlightsCol = await collection(database, 'highlights');
  const highlightsSnapshot = await getDocs(highlightsCol);

  // @ts-ignore
  const highlights = highlightsSnapshot.docs.map((doc: any) => doc.data());

  return {
    props: { highlightsListData: highlights },
    revalidate: 5,
  };
};

export default MainPage;
