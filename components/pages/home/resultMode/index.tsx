import React, { useState, useEffect, useRef } from 'react';
import { useRequest } from 'ahooks';

import getUsers from '../../../../services/getUsers';

import ResultModeUsers from '../resultModeUsers';
import Button from '../../../button';
import BackIcon from '../../../backIcon';

import styles from './styles.module.css';

type PropsTypes = {
  searchKeyword: string,
  resultRerPageNumber: number,
  handleOnResultBack: () => void;
};

function ResultMode(props: PropsTypes) {
  const {
    searchKeyword,
    resultRerPageNumber,
    handleOnResultBack,
  } = props;

  const resultModeUsersRef = useRef<any>(null);

  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const {
    loading,
    runAsync,
  } = useRequest(getUsers, {
    manual: true,
  });

  useEffect(() => {
    if (resultModeUsersRef.current) {
      resultModeUsersRef.current.addTemplates();
    }
    runAsync({
      page: 1,
      keyword: searchKeyword,
      pageSize: resultRerPageNumber,
    })
      .then((data) => {
        setPage(data.page);
        setTotalPages(data.totalPages);
        if (resultModeUsersRef.current) {
          resultModeUsersRef.current.addItems(data.list);
        }
      })
      .catch((err) => setError(err));
  }, []);

  const handleClickMore = () => {
    if (resultModeUsersRef.current) {
      resultModeUsersRef.current.addTemplates();
    }
    runAsync({
      page: page + 1,
      keyword: searchKeyword,
      pageSize: resultRerPageNumber,
    })
      .then((data) => {
        setPage(data.page);
        setTotalPages(data.totalPages);
        if (resultModeUsersRef.current) {
          resultModeUsersRef.current.addItems(data.list);
        }
      })
      .catch((err) => setError(err));
  };

  const hasMoreButton = !error && !loading && totalPages > page;

  return (
    <div>
      <h2 className="h2">
        <button
          className={styles.backButton}
          type="button"
          onClick={handleOnResultBack}
        >
          <BackIcon
            width={26}
            height={26}
          />
          <span className={styles.backButtonText}>Results</span>
        </button>
      </h2>
      <ResultModeUsers
        ref={resultModeUsersRef}
        error={error}
        resultRerPageNumber={resultRerPageNumber}
      />
      {
        hasMoreButton && (
          <div className={styles.moreBox}>
            <div className={styles.moreButtonWrapper}>
              <Button fullWidth onClick={handleClickMore}>
                MORE
              </Button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ResultMode;
