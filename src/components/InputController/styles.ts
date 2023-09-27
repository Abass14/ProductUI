import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  containerVertical: {
    width: 32,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconText: {
    fontSize: 20,
  },
  text: {
    fontSize: 14,
  },
  containerHorizontal: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconVertical: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderGrey,
  },
  iconHorizontal: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderGrey,
  },
  disabled: {
    opacity: 0.5,
  },
});
