import React from 'react';
import { Text } from 'react-native';
import Case from '../../models/Case';
import { TextTitle, Container, TextSubTitle, TextInfo, Separator, Spacer } from './styles';

interface RowCase {
  item: Case;
  index?: number;
}

const RowCases: React.FC<RowCase> = (props) => {
  const { item } = props;
  return (
    <Container padding={0}>
      <Container padding={22}>
        <TextTitle>{item.title}</TextTitle>
        <Spacer value={6} />
        <TextSubTitle>Número</TextSubTitle>
        <Spacer value={4} />
        <TextInfo>{item.number}</TextInfo>
        <Spacer value={20} />
      </Container>
      <Separator />
    </Container>
  );
};

export default RowCases;
