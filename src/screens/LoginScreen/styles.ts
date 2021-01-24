import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const StatusBar = styled.StatusBar``;

export const TextTitle = styled.Text`
  font-size: 30px;
  color: #455a64;
  font-weight: bold;
  margin-top: 150px;
  margin-bottom: 20px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Input = styled.TextInput`
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border-color: ${colors.gray_70};
  border-width: 1px;
  border-radius: 8px;
`;
