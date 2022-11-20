import React, {
  forwardRef, useImperativeHandle, useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import TagItem, { TagItemTypes } from '../tagItem';

import styles from './styles.module.css';

type PropsTypes = {
  error: any,
  loadNumber: number,
};

function TagList(props: PropsTypes, ref: any) {
  const {
    error,
    loadNumber,
  } = props;

  const [hasTemplates, setHasTemplates] = useState(false);

  const [list, setList] = useState(() => {
    const defaultList: TagItemTypes[] = [];
    return defaultList;
  });

  useImperativeHandle(ref, () => ({
    addTemplates: () => {
      const templates: TagItemTypes[] = [];
      for (let i = 0; i < loadNumber; i += 1) {
        templates.push({
          id: uuidv4(),
          isTemplate: true,
        });
      }
      setList((preList) => [...preList, ...templates]);
      setHasTemplates(true);
    },
    addItems: (items: TagItemTypes[]) => {
      const tempItems = [...items].map((item) => {
        const tempItem = { ...item };
        tempItem.id = uuidv4();
        return tempItem;
      });
      if (hasTemplates) {
        setList((preList) => {
          preList.splice(-loadNumber, loadNumber, ...tempItems);
          return preList;
        });
        setHasTemplates(false);
      }
      if (!hasTemplates) {
        setList((preList) => [...preList, ...tempItems]);
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
            <TagItem
              item={item}
            />
          </div>
        ))
      }
    </div>
  );
}

export default forwardRef(TagList);
