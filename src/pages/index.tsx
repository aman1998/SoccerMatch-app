import MainPage from '@containers/Main';
import { collection, getDocs } from 'firebase/firestore';

import { database } from '../../firebase-config';

MainPage.getInitialProps = async () => {
  const highlightsCol = await collection(database, 'highlights');
  const highlightsSnapshot = await getDocs(highlightsCol);

  const highlights = highlightsSnapshot.docs.map((doc) => doc.data());

  return {
    data: highlights,
  };
};

export default MainPage;
