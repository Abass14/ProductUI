import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingLeft: 60,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 8,
    width: '100%',
    gap: 12,
  },
  input: {
    flex: 1,
    color: colors.appBlack,
  },
});
