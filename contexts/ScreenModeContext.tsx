import React from 'react';

export const screenModes = {
  mobile: {
    isMobile: true,
    isDesktop: false,
  },
  deskTop: {
    isMobile: false,
    isDesktop: true,
  },
};

const ScreenModeContext = React.createContext(screenModes.mobile);

export default ScreenModeContext;
