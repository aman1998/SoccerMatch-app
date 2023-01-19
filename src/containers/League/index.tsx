import { useRouter } from 'next/router';
import { NextPage } from 'next';

import Layout from '@components/Layout';

const League: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout title="hello">
      <p>At ID number: {id}</p>
    </Layout>
  );
};

export default League;
