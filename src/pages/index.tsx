import MainPage from '@containers/Main';
import { collection, getDocs } from 'firebase/firestore';
import { IMainPageProps } from '@containers/Main/types';

import { TPageProps } from '@config/types';

import { database } from '../../firebase-config';

export async function getStaticProps(): TPageProps<IMainPageProps> {
  const highlightsCol = await collection(database, 'highlights');
  const highlightsSnapshot = await getDocs(highlightsCol);

  // @ts-ignore
  const highlights = highlightsSnapshot.docs.map((doc: any) => doc.data());

  return {
    props: { highlightsListData: highlights },
  };
}

export default MainPage;
