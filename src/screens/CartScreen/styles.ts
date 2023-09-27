import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  list: {
    flex: 1,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
  },
  grey: {
    color: colors.textGrey,
  },
});
