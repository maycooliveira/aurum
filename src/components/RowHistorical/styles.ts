import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  width: 100px;
  height: 100px;
  padding-horizontal: 32px;
`;
export const ViewInfo = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const ViewDate = styled.View`
  align-items: center;
`;

export const ContainerDate = styled.View`
  width: 32;
  height: 32;
  border-radius: 6;
  background-color: ${colors.base};
`;

export const Line = styled.View`
  flex: 1;
  width: 2;
  margin-vertical: 4px;
  background-color: ${colors.gray_30};
`;
