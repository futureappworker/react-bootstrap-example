import React from 'react';

import Button, { ButtonVariant } from '../button';

import styles from './styles.module.css';

type PropsTypes = {
  id: string,
  name: string,
  username: string,
  avater: string,
  isFollowing: boolean,
};

export type FollowItemPropsTypes = PropsTypes;

function FollowItem(props: PropsTypes) {
  const {
    id,
    name,
    username,
    avater,
    isFollowing,
  } = props;

  return (
    <div className={styles.followItem}>
      <div>
        <img
          className={styles.img}
          src={avater}
          alt={`${id}-avater`}
          width="40"
          height="40"
          onError={(params: { currentTarget: HTMLImageElement }) => {
            const {
              currentTarget,
            } = params;
            currentTarget.onerror = null;
            currentTarget.src = 'https://via.placeholder.com/40x40';
          }}
        />
      </div>
      <div>
        <div className={styles.fullname}>
          {name}
        </div>
        <div className={styles.username}>
          {username}
        </div>
      </div>
      <div>
        {
          isFollowing
            ? (
              <Button variant={ButtonVariant.Contained}>
                Following
              </Button>
            )
            : (
              <Button variant={ButtonVariant.Outlined}>
                Follow
              </Button>
            )
        }
      </div>
    </div>
  );
}

export default FollowItem;
