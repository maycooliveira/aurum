import { TextTitle, Container } from './styles';
import React from 'react';
import { useSelector } from 'react-redux';

const HomeScreen: React.FC = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Container>
      <TextTitle>{user.login}</TextTitle>
    </Container>
  );
};

export default HomeScreen;
