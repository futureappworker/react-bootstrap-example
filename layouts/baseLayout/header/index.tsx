import React from 'react';
import classNames from 'classnames';

import ActiveLink from '../../../components/activeLink';

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <ActiveLink activeClassName="active-link" href="/">
          <a className={styles.logoLink} href="/">
            <h1 className={styles.logoText}>LOGO</h1>
          </a>
        </ActiveLink>
      </div>
      <nav>
        <ul className={styles.list}>
          <li>
            <ActiveLink activeClassName="active-link" href="/">
              <a className={styles.listItemLink} href="/">
                <svg
                  className={
                    classNames(
                      'bi bi-house-door-fill',
                      styles.listItemLinkIcon,
                    )
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                </svg>
                <span className={styles.listItemLinkText}>
                  HOME
                </span>
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active-link" href="/tags">
              <a className={styles.listItemLink} href="/tags">
                <svg
                  className={
                    classNames(
                      'bi bi-house-door-fill',
                      styles.listItemLinkIcon,
                    )
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                  <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                </svg>
                <span className={styles.listItemLinkText}>
                  TAGS
                </span>
              </a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
