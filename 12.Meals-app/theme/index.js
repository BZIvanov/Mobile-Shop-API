const FONT_REGULAR = 'open-sans-regular';
const FONT_BOLD = 'open-sans-bold';

export default {
  palette: {
    primary: '#4a148c',
    secondary: '#ff6f00',
    black: '#000',
    white: '#fff',
    grey: '#bbb',
  },
  typography: {
    fontRegular: 'open-sans-regular',
    fontBold: 'open-sans-bold',
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
  },
  // margin, padding, width, height
  spacing: (value) => Math.round(value * 8),
};
