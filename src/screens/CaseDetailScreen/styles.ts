import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

export const ContainerCase = styled.View`
  padding-horizontal: 32px;
`;

export const AttachButton = styled.TouchableOpacity`
  margin-right: 10;
`;

export const DeleteButton = styled.TouchableOpacity`
  margin-left: 8px;
  align-items: center;
  justify-content: center;
`;

export const CaseTitle = styled.Text`
  font-size: 16px;
  color: #455a64;
  font-weight: 700;
`;

export const TextAttachment = styled.Text`
  font-size: 11px;
  font-weight: 500;
  color: ${colors.white};
`;

export const ContainerAttachment = styled.View`
  flex-direction: row;
`;

export const ViewAttachment = styled.View`
  align-items: center;
  height: 24px;
  padding-horizontal: 8px;
  border-radius: 4px;
  justify-content: center;
  background-color: ${colors.base};
`;

export const ContainerHistoricalFilter = styled.View`
  padding-horizontal: 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const OrderByButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 30px;
  align-items: center;
`;

export const AscDescButton = styled.TouchableOpacity``;

export const LabelInfo = styled.Text`
  font-size: 14px;
  color: ${colors.slate};
  letter-spacing: 1;
  font-weight: 600;
`;

export const ViewRow = styled.View`
  flex-direction: row;
`;

export const FlatListHistorical = styled.FlatList`
  flex: 1;
`;
