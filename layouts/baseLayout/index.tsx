import React from 'react';

import Header from './header';

import styles from './styles.module.css';

type PropsTypes = {
  children?: React.ReactNode,
};

function BaseLayout(props: PropsTypes) {
  const {
    children,
  } = props;

  return (
    <div className={styles.baseLayout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default BaseLayout;
