import React, { useState, useCallback } from 'react';
import Slider from '../../../slider';

import styles from './styles.module.css';

type PropsTypes = {
  defaultValue?: number,
  onChange?: (value: number) => void,
};

function ResultsPerPage(props: PropsTypes) {
  const {
    defaultValue = 3,
    onChange = () => {},
  } = props;

  const [resultRerPageNumber, setResultRerPageNumber] = useState(defaultValue);

  const handleOnChange = useCallback(
    (value: number) => {
      setResultRerPageNumber(value);
      onChange(value);
    },
    [],
  );

  return (
    <div>
      <h3 className="h3"># of results per page</h3>
      <p className={styles.resultBox}>
        <span className={styles.resultNumber}>
          {resultRerPageNumber}
        </span>
        <span>results</span>
      </p>
      <Slider
        points={[3, 6, 9, 12, 15, 50]}
        defaultValue={defaultValue}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default ResultsPerPage;
