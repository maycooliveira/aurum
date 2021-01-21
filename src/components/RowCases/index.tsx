import React from 'react';
import Case from '../../models/Case';
import { TextTitle } from './styles';

interface RowCase {
  item: Case;
  index?: number;
}

const RowCases: React.FC<RowCase> = (props) => {
  return <TextTitle>{props.item.title}</TextTitle>;
};

export default RowCases;
