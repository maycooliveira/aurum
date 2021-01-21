import styled from 'styled-components/native';
import Case from '../../models/Case';

export const TextTitle = styled.Text`
  font-size: 30px;
  color: #455a64;
  font-weight: bold;
  margin-top: 150px;
  margin-bottom: 20px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-left: 24px;
  padding-right: 24px;
`;

export const FlatListCases = styled.FlatList`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
`;
