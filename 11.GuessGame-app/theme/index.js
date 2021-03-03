const FONT_REGULAR = 'open-sans-regular';
const FONT_BOLD = 'open-sans-bold';

export default {
  palette: {
    primary: '#f7287b',
    secondary: '#c717fc',
    black: '#000',
    white: '#fff',
    grey: '#bbb',
  },
  typography: {
    fontRegular: 'open-sans-regular',
    fontBold: 'open-sans-bold', // bold is achieved by bold font, not fontWeight property as in normal css
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
      fontSize: 18,
    },
    h5: {
      fontFamily: FONT_REGULAR,
      fontSize: 16,
    },
    h6: {
      fontFamily: FONT_REGULAR,
      fontSize: 14,
    },
  },
  // margin, padding, width, height
  spacing: (value) => Math.round(value * 8),
};
