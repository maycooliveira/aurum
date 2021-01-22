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
import * as DocumentPicker from 'expo-document-picker';
import Icon from 'react-native-vector-icons/Feather';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Case from '../../models/Case';
import colors from '../../styles/colors';
import { ListRenderItem } from 'react-native';
import { Separator, Spacer, TextInfo, TextSubTitle } from '../../components/RowCases/styles';
import { confirmDenyMessage, formatMoney } from '../../utils';
import RowHistorical from '../../components/RowHistorical';
import Historical from '../../models/Historical';
import { LoadingAction } from '../../components/BaseButton/styles';
import { doc } from 'prettier';

interface Props {
  data: Case;
}

const CaseDetailScreen: React.FC<Props> = (props) => {
  const { item } = props.route.params;
  const [historical, setHistorical] = useState([]);
  const [document, setDocument] = useState({});
  const [isDocumentSelected, setIsDocumentSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setHistorical(item.historicals);
  }, [item]);

  // useEffect(() => {
  //   setIsDocumentSelected(document.type === 'success');
  // }, [document]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AttachButton
          onPress={() => {
            confirmDenyMessage(
              'Escolha o tipo do anexo',
              () => {
                getArchive('application/pdf');
              },
              () => {
                getArchive('image/*');
              },
              'Pdf',
              'Imagem',
            );
          }}>
          <Icon name={'paperclip'} size={20} color={colors.base} />
        </AttachButton>
      ),
    });
  }, [navigation]);

  const renderItem: ListRenderItem<Historical> = ({ item }) => {
    return <RowHistorical item={item} />;
  };

  const getArchive = async (mime: string) => {
    setLoading(true);
    try {
      let result = await DocumentPicker.getDocumentAsync({ type: mime });
      if (result.uri) {
        setDocument(result);
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('error', err);
    }
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
        {document.uri && (
          <ContainerAttachment>
            <ViewAttachment>
              <TextAttachment>{document.name}</TextAttachment>
            </ViewAttachment>
            <DeleteButton onPress={() => setDocument({})}>
              <Icon name={'x'} size={20} color={colors.slate} />
            </DeleteButton>
          </ContainerAttachment>
        )}
        {!document.uri && <TextInfo>{'-'}</TextInfo>}
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
