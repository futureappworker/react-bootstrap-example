import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export type TagItemTypes = {
  isTemplate?: boolean,
  id: string,
  name?: string,
  count?: number,
};

type PropsTypes = {
  item: TagItemTypes,
};

function TagItem(props: PropsTypes) {
  const {
    item,
  } = props;

  if (item.isTemplate) {
    return (
      <div className={styles.tagItem}>
        <div
          className={
            classNames(
              'skeleton',
              styles.bg,
              styles.bgTemplate,
            )
          }
        >
          <div
            className={styles.bgInner}
          >
            <div
              className={
                classNames(
                  'skeleton',
                  styles.tag,
                  styles.tagTemplate,
                )
              }
            >
              {item.name}
            </div>
          </div>
        </div>
        <div
          className={
            classNames(
              'skeleton',
              styles.name,
              styles.nameTemplate,
            )
          }
        />
        <div
          className={
            classNames(
              'skeleton',
              styles.count,
              styles.countTemplate,
            )
          }
        />
      </div>
    );
  }

  return (
    <div className={styles.tagItem}>
      <div className={styles.bg}>
        <div className={styles.bgInner}>
          <div className={styles.tag}>
            {item.name}
          </div>
        </div>
      </div>
      <h3 className={styles.name}>
        {item.name}
      </h3>
      <div className={styles.count}>
        {item.count}
      </div>
    </div>
  );
}

export default TagItem;
