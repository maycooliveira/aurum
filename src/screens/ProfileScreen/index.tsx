import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import BaseButton from '../../components/BaseButton';
import { Container, TextTitle, TextInfo } from './styles';
import colors from '../../styles/colors';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../../components/RowCases/styles';

const { height } = Dimensions.get('screen');

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.user);

  async function doExit() {
    navigation.navigate('loginScreen');
  }

  return (
    <Container>
      <Spacer value={height * 0.2} />
      <TextTitle>Usuário</TextTitle>
      <Spacer value={15} />
      <TextInfo>{user.login}</TextInfo>
      <Spacer value={100} />
      <BaseButton title={'Sair'} color={colors.base} onPress={doExit} loading={false} />
    </Container>
  );
};

export default ProfileScreen;
