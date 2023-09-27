import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    gap: 8,
    // alignItems: 'center',
  },
  image: {
    width: 92,
    height: 92,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    gap: 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
  grey: {
    color: colors.textGrey,
    fontSize: 14,
  },
  red: {
    color: colors.buttonRed,
    fontSize: 14,
  },
});
