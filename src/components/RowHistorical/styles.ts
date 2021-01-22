import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 32px;
`;
export const ViewInfo = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const View = styled.View`
  flex: 1;
`;

export const ViewDate = styled.View`
  align-items: center;
`;

export const ContainerDate = styled.View`
  width: 32;
  height: 32;
  border-radius: 6;
  align-items: center;
  justify-content: center;
  background-color: ${colors.base};
`;

export const Line = styled.View`
  flex: 1;
  width: 2;
  margin-vertical: 4px;
  background-color: ${colors.gray_30};
`;

export const DateTitle = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  align-self: flex-start;
  font-weight: bold;
  margin-top: 2px;
  color: ${colors.slate};
`;

export const LabelYear = styled.Text`
  font-size: 10px;
  margin-left: 10px;
  margin-top: 2px;
  font-weight: bold;
  align-self: flex-start;
  color: ${colors.black_30};
`;

export const LabelDate = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
`;

export const LabelDetail = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 10px;
  font-weight: 400;
  align-self: flex-start;
  margin-bottom: 20px;
  color: ${colors.slate};
`;
