import React from 'react';
import { Container, ViewDate, ViewInfo, ContainerDate, Line } from './styles';
import Historical from '../../models/Historical';

interface RowHistorical {
  item: Historical;
}

const RowHistorical: React.FC<RowHistorical> = (props) => {
  const { item } = props;
  return (
    <Container>
      <ViewInfo>
        <ViewDate>
          <ContainerDate />
          <Line />
        </ViewDate>
      </ViewInfo>
    </Container>
  );
};

export default RowHistorical;
