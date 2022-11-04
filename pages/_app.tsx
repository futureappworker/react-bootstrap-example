import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line
  return <Component {...pageProps} />;
}
