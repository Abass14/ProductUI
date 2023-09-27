import {Appearance} from 'react-native';

// To handle dark and light mode
const getAppModeColor = (color: string) => {
  const mode = Appearance.getColorScheme();
  switch (mode) {
    case 'dark':
      return color;
    default:
      return color;
  }
};

export const colors = {
  background: getAppModeColor('#F9F9F9'),
  buttonRed: getAppModeColor('#DB3C25'),
  white: getAppModeColor('#FFFFFF'),
  textGrey: getAppModeColor('#858585'),
  textDarkGrey: getAppModeColor('#4A4A4A'),
  appBlack: getAppModeColor('#151515'),
  borderGrey: getAppModeColor('#E1E5E9'),
  paginationGrey: getAppModeColor('#D9D9D9'),
};
