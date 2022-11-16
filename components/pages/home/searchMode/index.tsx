import React from 'react';

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

  return (
    <div>
      <div>
        <h2 className="visually-hidden">
          Home
        </h2>
        <Search onChange={(value) => setSearchKeyword(value)} value={searchKeyword} />
        <hr />
        <ResultsPerPage
          defaultValue={resultRerPageNumber}
          onChange={(value) => setResultRerPageNumber(value)}
        />
        <hr />
      </div>
      <div className={styles.searchBoxWrapper}>
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
