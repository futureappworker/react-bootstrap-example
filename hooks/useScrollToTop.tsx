import { useEffect } from 'react';

type ConfigTypes = {
  dependencies?: Array<any>,
};

function useScrollToTop(config: ConfigTypes) {
  const {
    dependencies = [],
  } = config;

  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, dependencies);

  return null;
}

export default useScrollToTop;
