import React from 'react';
import Case from '../../models/Case';
import {
  TextTitle,
  Container,
  TextSubTitle,
  TextInfo,
  Separator,
  Spacer,
  ViewInfo,
} from './styles';

interface RowCase {
  item: Case;
  index?: number;
  onPress: () => void;
}

const RowCases: React.FC<RowCase> = (props) => {
  const { item, onPress } = props;
  return (
    <Container onPress={onPress}>
      <ViewInfo>
        <TextTitle>{item.title}</TextTitle>
        <Spacer value={6} />
        <TextSubTitle>Número</TextSubTitle>
        <Spacer value={4} />
        <TextInfo>{item.number}</TextInfo>
        <Spacer value={20} />
      </ViewInfo>
      <Separator />
    </Container>
  );
};

export default RowCases;
