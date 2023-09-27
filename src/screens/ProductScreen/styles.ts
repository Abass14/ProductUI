import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 20,
    paddingBottom: 24,
  },
  carouselView: {
    marginTop: 20,
  },
  buttonContainer: {
    gap: 24,
    width: '100%',
  },
  subscribeBtn: {
    backgroundColor: colors.white,
    borderColor: colors.buttonRed,
    borderWidth: 1,
  },
  subscribe: {
    color: colors.buttonRed,
  },
  productDeatils: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  price: {
    color: colors.buttonRed,
    fontSize: 16,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.borderGrey,
  },
  attributesContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderGrey,
    width: '100%',
  },
  row: {
    width: '100%',
  },
});
