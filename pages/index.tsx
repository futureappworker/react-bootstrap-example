import React, { useState, useCallback, useEffect } from 'react';

import SearchMode from '../components/pages/home/searchMode';
import ResultMode from '../components/pages/home/resultMode';

import BaseLayout from '../layouts/baseLayout';
import Porfile from '../components/pages/home/porfile';

import useWindowResize from '../hooks/useWindowResize';
import useScrollToTop from '../hooks/useScrollToTop';

import styles from '../styles/home.module.css';

export enum HomeMode {
  Search = 'search',
  Result = 'result',
}

export default function Home() {
  const [mode, setMode] = useState(HomeMode.Search);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [resultRerPageNumber, setResultRerPageNumber] = useState(3);

  const handleOnSearch = useCallback(
    () => {
      setMode(HomeMode.Result);
    },
    [searchKeyword, resultRerPageNumber],
  );

  const searchMode = (
    <SearchMode
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      resultRerPageNumber={resultRerPageNumber}
      setResultRerPageNumber={setResultRerPageNumber}
      handleOnSearch={handleOnSearch}
    />
  );

  const handleOnResultBack = useCallback(
    () => {
      setMode(HomeMode.Search);
    },
    [],
  );

  const resultMode = (
    <ResultMode
      searchKeyword={searchKeyword}
      resultRerPageNumber={resultRerPageNumber}
      handleOnResultBack={handleOnResultBack}
    />
  );

  const { width: windowWidth } = useWindowResize(300);
  const [hasPorfile, setHasPorfile] = useState(() => windowWidth > 1440);
  useEffect(() => {
    if (windowWidth > 1440) {
      setHasPorfile(true);
      return;
    }
    setHasPorfile(false);
  }, [windowWidth]);

  useScrollToTop({
    dependencies: [mode],
  });

  return (
    <BaseLayout>
      <div className={styles.home}>
        <div
          className="app-container"
        >
          {mode === HomeMode.Search && searchMode}
          {mode === HomeMode.Result && resultMode}
        </div>
        {
          hasPorfile && (
            <div className={styles.porfile}>
              <Porfile />
            </div>
          )
        }
      </div>
    </BaseLayout>
  );
}
