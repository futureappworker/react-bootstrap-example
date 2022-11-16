import React from 'react';
import classNames from 'classnames';

import Button, { ButtonVariant } from '../button';

import styles from './styles.module.css';

type PropsTypes = {
  id: string,
  isTemplate?: boolean,
  name?: string,
  username?: string,
  avater?: string,
  isFollowing?: boolean,
};

export type FollowItemPropsTypes = PropsTypes;

function FollowItemTemplate() {
  return (
    <div className={styles.followItem}>
      <div>
        <div
          className={
            classNames(
              'skeleton',
              styles.img,
            )
          }
        />
      </div>
      <div>
        <div
          className={
            classNames(
              'skeleton',
              styles.fullnameTemplate,
            )
          }
        />
        <div
          className={
            classNames(
              'skeleton',
              styles.usernameTemplate,
            )
          }
        />
      </div>
      <div
        className={
          classNames(
            'skeleton',
            styles.btnTemplate,
          )
        }
      />
    </div>
  );
}

function FollowItem(props: PropsTypes) {
  const {
    id,
    isTemplate = false,
    name = '',
    username = '',
    avater = '',
    isFollowing = false,
  } = props;

  if (isTemplate) {
    return <FollowItemTemplate />;
  }

  return (
    <div className={styles.followItem}>
      <div>
        <img
          className={
            classNames(
              'skeleton',
              styles.img,
            )
          }
          src={avater}
          alt={`${id}-avater`}
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

  // return (
  //   <div>
  //     <FollowItemTemplate />
  //     <div className={styles.followItem}>
  //       <div>
  //         <img
  //           className={styles.img}
  //           src={avater}
  //           alt={`${id}-avater`}
  //           onError={(params: { currentTarget: HTMLImageElement }) => {
  //             const {
  //               currentTarget,
  //             } = params;
  //             currentTarget.onerror = null;
  //             currentTarget.src = 'https://via.placeholder.com/40x40';
  //           }}
  //         />
  //       </div>
  //       <div>
  //         <div className={styles.fullname}>
  //           {name}
  //         </div>
  //         <div className={styles.username}>
  //           {username}
  //         </div>
  //       </div>
  //       <div>
  //         {
  //           isFollowing
  //             ? (
  //               <Button variant={ButtonVariant.Contained}>
  //                 Following
  //               </Button>
  //             )
  //             : (
  //               <Button variant={ButtonVariant.Outlined}>
  //                 Follow
  //               </Button>
  //             )
  //         }
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default FollowItem;
