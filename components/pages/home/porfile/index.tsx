import React, { useState } from 'react';
import classNames from 'classnames';

import Followers from '../followers';
import Following from '../following';

import styles from './styles.module.css';

function Porfile() {
  const [tabKey, setTabKey] = useState('followers');

  return (
    <div className={styles.porfile}>
      <h2 className="visually-hidden">Porfile</h2>
      <div
        className={styles.tabs}
      >
        <button
          className={
            classNames(
              styles.tab,
              {
                [styles.tabActive]: tabKey === 'followers',
              },
            )
          }
          type="button"
          onClick={() => setTabKey('followers')}
        >
          Followers
        </button>
        <button
          className={
            classNames(
              styles.tab,
              {
                [styles.tabActive]: tabKey === 'following',
              },
            )
          }
          type="button"
          onClick={() => setTabKey('following')}
        >
          Following
        </button>
      </div>

      <div className={styles.followList}>
        { tabKey === 'followers' && <Followers /> }
        { tabKey === 'following' && <Following /> }
      </div>
    </div>
  );
}

export default Porfile;
