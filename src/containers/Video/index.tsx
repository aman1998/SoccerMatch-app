import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Youtube from '@components/Youtube';
import Layout from '@components/Layout';

const Video: NextPage = () => {
  const { query } = useRouter();

  const id = query.id as string;

  return (
    <Layout title="Обзор матча" showInfo={false}>
      <Youtube embedId={id} />
    </Layout>
  );
};

export default Video;
