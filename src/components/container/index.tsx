import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {IContainer} from './Container.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';
import {colors} from '../../assets/colors';
import Header from '../header';

const Container = ({
  isScrollable = false,
  style,
  children,
  headerProps,
  ...rest
}: IContainer) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      style={[
        styles.main,
        {
          backgroundColor: colors.background,
        },
        {paddingTop: top, paddingBottom: bottom},
        style,
      ]}
      behavior={Platform.select({ios: 'padding', android: 'height'})}
      {...rest}>
      <Header {...headerProps} />
      {isScrollable ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.container]}
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={styles.innerContainer}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.container]}>{children}</View>
      )}
    </KeyboardAvoidingView>
  );
};

export default Container;
