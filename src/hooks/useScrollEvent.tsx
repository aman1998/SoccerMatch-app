import { useCallback, useEffect, useRef } from 'react';

import { TScrollEventTypes } from './types';

const FOOTER_HEIGHT = 60;

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
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollValue: number = scrollTop + clientHeight;
    const bottomEdge: number = scrollHeight - FOOTER_HEIGHT;

    if (scrollValue >= bottomEdge && !fetching && !finish) {
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
