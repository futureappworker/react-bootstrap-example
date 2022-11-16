import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export type UserItemTypes = {
  isTemplate?: boolean,
  id: string,
  name?: string,
  username?: string,
  avater?: string,
  isFollowing?: string,
};

type PropsTypes = {
  item: UserItemTypes,
  imgHeight?: number,
};

function ResultModeUserItem(props: PropsTypes) {
  const {
    item,
    imgHeight = 0,
  } = props;

  if (item.isTemplate) {
    return (
      <div>
        <div
          style={{ height: imgHeight }}
          className={
            classNames(
              'skeleton',
              styles.img,
            )
          }
        />
        <div
          className={
            classNames(
              'skeleton',
              styles.title,
              styles.titleTemplate,
            )
          }
        />
        <div
          className={
            classNames(
              'skeleton',
              styles.username,
              styles.usernameTemplate,
            )
          }
        />
      </div>
    );
  }

  return (
    <div>
      <img
        style={{ height: imgHeight }}
        className={
          classNames(
            'skeleton',
            styles.img,
          )
        }
        src={item.avater}
        alt="avater"
        onError={(params: { currentTarget: HTMLImageElement }) => {
          const {
            currentTarget,
          } = params;
          currentTarget.onerror = null;
          currentTarget.src = 'https://via.placeholder.com/750x500';
        }}
      />
      <h3 className={styles.title}>
        {item.name}
      </h3>
      <div className={styles.username}>
        {item.username}
      </div>
    </div>
  );
}

export default ResultModeUserItem;
