import { useState, useEffect } from 'react';
import _ from 'lodash';

const { debounce } = _;

function useWindowResize(delay = 700) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [delay]);

  return {
    width,
    height,
  };
}

export default useWindowResize;
