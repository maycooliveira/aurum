import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Background = styled.TouchableOpacity`
  height: 40px;
  margin-top: 20px;
  padding-horizontal: 32px;
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-left: 16px;
  position: absolute;
  left: 50;
  color: ${colors.slate};
  font-weight: bold;
`;
