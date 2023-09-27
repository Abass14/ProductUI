import React, {useState} from 'react';
import {IInputController} from './InputController.types';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import CustomText from '../customtext';

const InputController = ({orientation = 'horizontal'}: IInputController) => {
  const [count, setCount] = useState(1);
  const handleRemove = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const disableRemove = () => count <= 1;

  const handleAdd = () => {
    setCount(prev => prev + 1);
  };
  const isHorizontal = () => orientation === 'horizontal';
  const orientationContainerStyle = isHorizontal()
    ? styles.containerHorizontal
    : styles.containerVertical;
  const iconOrientationStyle = isHorizontal()
    ? styles.iconHorizontal
    : styles.iconVertical;
  return (
    <View style={orientationContainerStyle}>
      <Pressable
        disabled={disableRemove()}
        onPress={handleRemove}
        style={[iconOrientationStyle, disableRemove() && styles.disabled]}>
        <CustomText style={styles.iconText}>-</CustomText>
      </Pressable>
      <CustomText style={styles.text}>{count}</CustomText>
      <Pressable onPress={handleAdd} style={iconOrientationStyle}>
        <CustomText style={styles.iconText}>+</CustomText>
      </Pressable>
    </View>
  );
};

export default InputController;
