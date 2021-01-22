import React, { useState } from 'react';
import {
  Container,
  ViewDate,
  ViewInfo,
  ContainerDate,
  Line,
  DateTitle,
  LabelYear,
  LabelDetail,
  LabelDate,
} from './styles';
import Historical from '../../models/Historical';
import { format } from 'date-fns';
import locale from 'date-fns/locale/pt';

interface RowHistorical {
  item: Historical;
}

const RowHistorical: React.FC<RowHistorical> = (props) => {
  const { item } = props;
  const [date] = useState(new Date(item.date));

  const getMonth = (monthString: string) => {
    let firstLetter = monthString.charAt(0).toUpperCase();
    return firstLetter + monthString.slice(1);
  };
  return (
    <Container>
      <ViewInfo>
        <ViewDate>
          <ContainerDate>
            <LabelDate>{format(date, 'dd')}</LabelDate>
          </ContainerDate>
          <Line />
        </ViewDate>
        <ViewDate>
          <DateTitle>{getMonth(format(date, 'MMMM', { locale: locale }))}</DateTitle>
          <LabelYear>{format(date, 'yyyy')}</LabelYear>
          <LabelDetail>{item.description}</LabelDetail>
        </ViewDate>
      </ViewInfo>
    </Container>
  );
};

export default RowHistorical;
