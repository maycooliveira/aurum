import React, { useState, useEffect } from 'react';
import {
  Container,
  AttachButton,
  CaseTitle,
  ViewAttachment,
  TextAttachment,
  ContainerAttachment,
  DeleteButton,
  ContainerCase,
  ContainerHistoricalFilter,
  LabelInfo,
  OrderByButton,
  AscDescButton,
  ViewRow,
  FlatListHistorical,
  LabelOrderBy,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Case from '../../models/Case';
import colors from '../../styles/colors';
import { ListRenderItem } from 'react-native';
import { Separator, Spacer, TextInfo, TextSubTitle } from '../../components/RowCases/styles';
import { formatMoney } from '../../utils';
import RowHistorical from '../../components/RowHistorical';
import Historical from '../../models/Historical';

interface Props {
  data: Case;
}

const CaseDetailScreen: React.FC<Props> = (props) => {
  const { item } = props.route.params;
  const [historical, setHistorical] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setHistorical(item.historicals);
  }, [item]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AttachButton>
          <Icon name={'paperclip'} size={20} color={colors.base} />
        </AttachButton>
      ),
    });
  }, [navigation]);

  const renderItem: ListRenderItem<Historical> = ({ item }) => {
    return <RowHistorical item={item} />;
  };

  return (
    <Container>
      <ContainerCase>
        <Spacer value={20} />
        <CaseTitle>{item.title}</CaseTitle>
        <Spacer value={8} />
        <TextSubTitle>Número</TextSubTitle>
        <Spacer value={4} />
        <TextInfo>{item.number}</TextInfo>
        <Spacer value={8} />
        <TextSubTitle>Cliente</TextSubTitle>
        <Spacer value={4} />
        <TextInfo>{item.customers[0].name}</TextInfo>
        <Spacer value={8} />
        <TextSubTitle>Parte</TextSubTitle>
        <TextInfo>{item.customers[0].roleName}</TextInfo>
        <Spacer value={8} />
        <TextSubTitle>Fórum</TextSubTitle>
        <Spacer value={4} />
        <TextInfo>{item.court}</TextInfo>
        <Spacer value={8} />
        <TextSubTitle>Valor</TextSubTitle>
        <Spacer value={4} />
        <TextInfo>{formatMoney(item.amount)}</TextInfo>
        <Spacer value={8} />
        <TextSubTitle>Anexo</TextSubTitle>
        <Spacer value={4} />
        <ContainerAttachment>
          <ViewAttachment>
            <TextAttachment>Parte.pdf</TextAttachment>
          </ViewAttachment>
          <DeleteButton>
            <Icon name={'x'} size={20} color={colors.slate} />
          </DeleteButton>
        </ContainerAttachment>
      </ContainerCase>
      <Spacer value={20} />
      <Separator />
      <Spacer value={20} />
      <ContainerHistoricalFilter>
        <LabelInfo>HISTÓRICO</LabelInfo>
        <ViewRow>
          <OrderByButton>
            <LabelOrderBy>Ordenado por</LabelOrderBy>
            <IconAwesome name={'caret-down'} size={16} color={colors.slate} />
          </OrderByButton>
          <AscDescButton>
            <IconAwesome name={'sort-amount-down'} size={16} color={colors.slate} />
          </AscDescButton>
        </ViewRow>
      </ContainerHistoricalFilter>
      <Spacer value={20} />
      <FlatListHistorical data={historical} renderItem={renderItem} />
    </Container>
  );
};

export default CaseDetailScreen;
