import styled from 'styled-components/native';
import Case from '../../models/Case';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const FlatListCases = styled.FlatList`
  flex: 1;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 10px;
  margin-bottom: 10px;
`;
