import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    gap: 10,
    padding: 10,
    width: '100%',
  },
  favoriteIcon: {
    alignSelf: 'flex-end',
  },
  image: {
    width: 94,
    height: 94,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 14,
    flex: 1,
  },
  alternative: {
    fontSize: 14,
    color: colors.textGrey,
  },
  productPrice: {
    fontSize: 14,
    color: colors.buttonRed,
  },
  btnText: {
    fontSize: 12,
  },
  btn: {
    height: 40,
  },
});
