import { useEffect } from 'react';

export const useTitle = (title: string, suffix: string = 'IT Helpdesk') => {
  useEffect(() => {
    if (!title) {
      document.title = suffix;
      return;
    }
    document.title = `${title} | ${suffix}`;

    return () => {
      document.title = suffix;
    };
  }, [title, suffix]);
};
