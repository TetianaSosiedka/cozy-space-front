export const theme = {
  //fonts
  fonts: {
    body: 'Manrope, sans-serif',
  },
  //           0   1   2   3   4   5   6   7   8   9  10
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64],

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  //colors
  colors: {
    accent: '#bade9c',
    accentActive: '#384e12',
    accentLight: '#f0ebd8',
    accentDark: '#2b2e34',
    accentText: '#384e12',
    activeText: '#2b2e34',
  },

  //
  action: {
    timingFunction: '0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  //media

  screens: {
    mobile: 'screen and (min-width: 480px)',
    tablet: 'screen and (min-width: 768px)',
    desktop: 'screen and (min-width: 1280px)',
  },

  screensWidth: {
    mobileWidth: '480px',
    tabletWidth: '768px',
    desktopWidth: '1280px',
  },
};
