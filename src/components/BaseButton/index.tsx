import React from 'react';
import { ButtonTitle, Container, LoadingAction } from './styles';

interface Props {
  title: string;
  color: string;
  loading: boolean;
  onPress: () => void;
}

const BaseButton: React.FC<Props> = (props) => {
  const { title, onPress, color, loading } = props;
  return (
    <Container onPress={onPress} backgroundColor={color}>
      {loading && <LoadingAction />}
      {!loading && <ButtonTitle>{title.toUpperCase()}</ButtonTitle>}
    </Container>
  );
};

export default BaseButton;
