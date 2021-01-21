import Customer from './Customer';
import Historical from './Historical';

export default interface Case {
  id: string;
  type: string;
  number: string;
  file: string;
  customers: Customer[];
  title: string;
  court: string;
  lawsuitType: string;
  amount: number;
  historicals: Historical[];
  active: boolean;
};
