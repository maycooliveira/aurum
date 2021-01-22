import React, { useState } from 'react';
import BaseButton from '../../components/BaseButton';
import { Container, Input, TextTitle } from './styles';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { flashError } from '../../utils';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/modules/user/actions';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  async function doLogin() {
    if (formValues.email.trim() === '') {
      flashError('Usuário obrigatório');
      return;
    }
    if (formValues.password.trim() === '') {
      flashError('Senha obrigatória');
      return;
    }
    await dispatch(updateUser({ login: formValues.email }));
    navigation.navigate('coreScreen');
  }

  function change(type: string, text: string) {
    setFormValues({ ...formValues, [type]: text });
  }

  return (
    <Container>
      <TextTitle>Login</TextTitle>
      <Input
        placeholder="Usuário"
        value={formValues.email}
        onChangeText={(text) => change('email', text)}
      />
      <Input
        placeholder="Senha"
        value={formValues.password}
        secureTextEntry={true}
        onChangeText={(text) => change('password', text)}
      />
      <BaseButton title={'Entrar'} color={colors.base} onPress={doLogin} loading={isLoading} />
    </Container>
  );
};

export default LoginScreen;
