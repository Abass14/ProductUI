import {View} from 'react-native';
import {ICollapsableText} from './CollapsableText.types';
import React, {useState} from 'react';
import {styles} from './styles';
import CustomText from '../customtext';

const CollapsableText = ({onReadMore, children, ...rest}: ICollapsableText) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <View style={styles.container}>
      <CustomText
        numberOfLines={!isCollapsed ? 5 : undefined}
        style={styles.text}
        {...rest}>
        {children}
      </CustomText>
      <CustomText
        style={styles.readmore}
        onPress={() => {
          setIsCollapsed(prev => !prev);
          if (typeof onReadMore === 'function') {
            onReadMore();
          }
        }}>
        Read more
      </CustomText>
    </View>
  );
};

export default CollapsableText;
