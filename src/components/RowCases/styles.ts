import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface SpacerValue {
  value: number;
}

export const TextTitle = styled.Text`
  font-size: 14px;
  color: #455a64;
  font-weight: 700;
`;

export const Container = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const ViewInfo = styled.View`
  padding-horizontal: 22px;
`;

export const TextSubTitle = styled.Text`
  font-size: 11px;
  margin-right: 10px;
  color: ${colors.black_60};
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.black};
`;

export const Separator = styled.View`
  height: 1;
  background-color: ${colors.gray_20};
`;

export const Spacer = styled.View<SpacerValue>`
  height: ${(props) => props.value};
`;
