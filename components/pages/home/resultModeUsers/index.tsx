import React, {
  forwardRef, useImperativeHandle, useState, useEffect,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import useWindowResize from '../../../../hooks/useWindowResize';

import ResultModeUserItem, { UserItemTypes } from '../resultModeUserItem';

import styles from './styles.module.css';

type PropsTypes = {
  error: any,
  resultRerPageNumber: number,
};

function ResultModeUsers(props: PropsTypes, ref: any) {
  const {
    error,
    resultRerPageNumber,
  } = props;

  const [hasTemplates, setHasTemplates] = useState(false);

  const [list, setList] = useState(() => {
    const defaultList: UserItemTypes[] = [];
    return defaultList;
  });

  const { width: windowWidth } = useWindowResize(300);
  const [imgHeight, setImgHeight] = useState(0);
  useEffect(() => {
    const templateElement = document.querySelector(`.${styles.list}`);
    if (templateElement && templateElement.firstChild) {
      const node = templateElement.firstChild as HTMLElement;
      const { width } = node.getBoundingClientRect();
      const height = Math.floor((width / 1.5) * 1);
      setImgHeight(height);
    }
  }, [windowWidth]);

  useImperativeHandle(ref, () => ({
    addTemplates: () => {
      const templates: UserItemTypes[] = [];
      for (let i = 0; i < resultRerPageNumber; i += 1) {
        templates.push({
          id: uuidv4(),
          isTemplate: true,
        });
      }
      setList((preList) => [...preList, ...templates]);
      setHasTemplates(true);
    },
    addItems: (items: UserItemTypes[]) => {
      if (hasTemplates) {
        setList((preList) => {
          preList.splice(-resultRerPageNumber, resultRerPageNumber, ...items);
          return preList;
        });
        setHasTemplates(false);
      }
      if (!hasTemplates) {
        setList((preList) => [...preList, ...items]);
      }
    },
  }));

  if (error) {
    return (
      <div>{error.message}</div>
    );
  }

  return (
    <div className={styles.list}>
      {
        list.map((item) => (
          <div
            className={styles.item}
            key={item.id}
          >
            <ResultModeUserItem
              item={item}
              imgHeight={imgHeight}
            />
          </div>
        ))
      }
    </div>
  );
}

export default forwardRef(ResultModeUsers);
