import React, { useContext } from 'react';
import classNames from 'classnames';

import ScreenModeContext from '../../../../contexts/ScreenModeContext';

import Search from '../search';
import ResultsPerPage from '../resultsPerPage';
import Button from '../../../button';

import styles from './styles.module.css';

type PropsTypes = {
  searchKeyword: string,
  setSearchKeyword: (value: string) => void,
  resultRerPageNumber: number,
  setResultRerPageNumber: (value: number) => void,
  handleOnSearch: () => void,
};

function SearchMode(props: PropsTypes) {
  const {
    searchKeyword,
    setSearchKeyword,
    resultRerPageNumber,
    setResultRerPageNumber,
    handleOnSearch,
  } = props;

  const screenMode = useContext(ScreenModeContext);

  return (
    <div
      className="app-container"
    >
      <div>
        <h2 className="visually-hidden">
          Home
        </h2>
        <div className={styles.searchInputWrapper}>
          <Search onChange={(value) => setSearchKeyword(value)} value={searchKeyword} />
        </div>
        <hr
          className={
            classNames({
              'd-none': screenMode.isMobile,
            })
          }
        />
        <ResultsPerPage
          defaultValue={resultRerPageNumber}
          onChange={(value) => setResultRerPageNumber(value)}
        />
        <hr
          className={
            classNames({
              'd-none': screenMode.isMobile,
            })
          }
        />
      </div>
      <div className={styles.searchBoxWrapper}>
        <hr
          className={
            classNames({
              'd-none': screenMode.isDesktop,
            })
          }
        />
        <div className={styles.searchBox}>
          <Button fullWidth onClick={handleOnSearch}>
            SEARCH
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchMode;
