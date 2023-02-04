import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Youtube from '@components/Youtube';
import Layout from '@components/Layout';

const Video: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
    }
  }, [router]);

  const id = router.query.id as string;

  return (
    <Layout title="Обзор матча">
      <Youtube embedId={id} />
    </Layout>
  );
};

export default Video;
