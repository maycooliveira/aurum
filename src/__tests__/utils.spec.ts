import {
  setHistoricalByDate,
  setHistoricalByDescription,
  setHistoricalByOrder,
} from '../tests/sort';

const mock = [
  {
    date: '2017-11-28T03:00:00.000Z',
    description: 'Concluso para despacho teste',
  },
  {
    date: '2017-11-29T03:00:00.000Z',
    description: 'Concluso para despacho teste 1',
  },
  {
    date: '2017-11-30T03:00:00.000Z',
    description: 'Concluso para despacho teste 2',
  },
];

const output = [
  {
    date: '2017-11-28T03:00:00.000Z',
    description: 'Concluso para despacho teste',
  },
  {
    date: '2017-11-29T03:00:00.000Z',
    description: 'Concluso para despacho teste 1',
  },
  {
    date: '2017-11-30T03:00:00.000Z',
    description: 'Concluso para despacho teste 2',
  },
];

describe('Sort function', () => {
  test('It shoud order the list by date', () => {
    expect(setHistoricalByDate(mock)).toEqual(output);
  });

  test('It shoud order this list by description', () => {
    expect(setHistoricalByDescription(mock)).toEqual(output);
  });

  test('It shoud order this list by  Asc', () => {
    expect(setHistoricalByOrder(mock)).toEqual(output);
  });
});
