import MainPage from '@containers/Main';
import { collection, getDocs } from 'firebase/firestore';
import { DocumentData, QueryDocumentSnapshot } from '@firebase/firestore-types';

import { database } from '../../firebase-config';

// @ts-ignore
MainPage.getInitialProps = async () => {
  const highlightsCol = await collection(database, 'highlights');
  const highlightsSnapshot = await getDocs(highlightsCol);

  // @ts-ignore
  const highlights = highlightsSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) =>
    doc.data()
  );

  return {
    data: highlights,
  };
};

export default MainPage;
