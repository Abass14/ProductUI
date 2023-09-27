import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
  },
  text: {
    flexWrap: 'wrap',
    flexShrink: 1,
    maxWidth: '100%',
    fontSize: 12,
    color: colors.textGrey,
  },
  readmore: {
    color: colors.buttonRed,
    fontSize: 12,
  },
});
