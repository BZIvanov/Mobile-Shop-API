const FONT_REGULAR = 'open-sans-regular';
const FONT_BOLD = 'open-sans-bold';

export default {
  palette: {
    primary: '#af1b3f',
    secondary: '#5eb1bf',
    tertiary: '#fce4d8',
    white: '#fff',
    black: '#000',
  },
  typography: {
    appFontSize: 18,
    fontRegular: FONT_REGULAR,
    fontBold: FONT_BOLD,
    h1: {
      fontFamily: FONT_BOLD,
      fontSize: 22,
    },
    h2: {
      fontFamily: FONT_BOLD,
      fontSize: 20,
    },
    h3: {
      fontFamily: FONT_BOLD,
      fontSize: 18,
    },
    h4: {
      fontFamily: FONT_REGULAR,
      fontSize: 16,
    },
    h5: {
      fontFamily: FONT_REGULAR,
      fontSize: 14,
    },
  },
};
