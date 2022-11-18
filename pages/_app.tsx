import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

import ScreenModeContext, { screenModes } from '../contexts/ScreenModeContext';

import useWindowResize from '../hooks/useWindowResize';

import '../styles/customTheme.scss';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [screenMode, setScreenMode] = useState(screenModes.mobile);
  const { width: windowWidth } = useWindowResize(100);
  useEffect(() => {
    if (windowWidth < 1000) {
      setScreenMode(screenModes.mobile);
      return;
    }
    setScreenMode(screenModes.deskTop);
  }, [windowWidth]);

  return (
    <ScreenModeContext.Provider value={screenMode}>
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </ScreenModeContext.Provider>
  );
}
