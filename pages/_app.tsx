import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/customTheme.scss';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line
  return <Component {...pageProps} />;
}
