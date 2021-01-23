import React from 'react';
import { Background, Label } from './styles';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import colors from '../../styles/colors';

const ButtonSelect = ({ title, selected, onPress }) => {
  return (
    <Background onPress={onPress}>
      {selected && <IconAwesome name={'check'} size={16} color={colors.base} />}
      <Label>{title}</Label>
    </Background>
  );
};

export default ButtonSelect;
