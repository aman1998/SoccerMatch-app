import { useCallback, useEffect, useRef } from 'react';

import { TScrollEventTypes } from './types';

export const useScrollEvent = ({ fetching, finish, fetchList }: TScrollEventTypes): void => {
  const lazyLoadTimeout = useRef<NodeJS.Timeout | undefined>();

  const clearFetchTimeout = () => {
    if (lazyLoadTimeout.current) {
      clearTimeout(lazyLoadTimeout.current);
      lazyLoadTimeout.current = undefined;
    }
  };

  const handleScrollEvent = useCallback(() => {
    const { scrollingElement } = document;
    if (!scrollingElement) return;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !fetching &&
      !finish
    ) {
      clearFetchTimeout();
      lazyLoadTimeout.current = setTimeout(() => {
        fetchList();
        lazyLoadTimeout.current = undefined;
      }, 0);
    }
  }, [fetching, finish]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleScrollEvent]);
};
