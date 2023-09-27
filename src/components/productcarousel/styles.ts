import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 204,
    resizeMode: 'contain',
  },
  dots: {
    backgroundColor: colors.paginationGrey,
    height: 8,
    width: 8,
    borderRadius: 4,
  },
  active: {
    backgroundColor: colors.buttonRed,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 5,
    alignItems: 'center',
    width: 'auto',
  },
});
