import React from 'react';
import ButtonSelect from '../ButtonSelect';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Separator } from '../RowCases/styles';
import { Container } from './styles';
import { lawsuitSortFilter, lawsuitSortOrder } from '../../store/modules/lawsuit/actions';
import { useSelector, useDispatch } from 'react-redux';
import { SORT_FILTER, SORT_ORDER } from '../../store/modules/lawsuit/reducer';

interface Props {
  refInside: React.RefObject<RBSheet>;
}

const SortSheet: React.FC<Props> = ({ refInside }) => {
  const { lawsuit } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <RBSheet ref={refInside} closeOnDragDown={true} height={300}>
      <ButtonSelect
        onPress={async () => {
          dispatch(lawsuitSortFilter(SORT_FILTER.BY_DATE));
          if (refInside.current) {
            refInside.current.close();
          }
        }}
        selected={lawsuit.sortFilter === SORT_FILTER.BY_DATE}
        title={'Ordenar por data'}
      />

      <ButtonSelect
        onPress={async () => {
          dispatch(lawsuitSortFilter(SORT_FILTER.BY_DECRIPTION));
          if (refInside.current) {
            refInside.current.close();
          }
        }}
        selected={lawsuit.sortFilter === SORT_FILTER.BY_DECRIPTION}
        title={'Ordenar por descrição'}
      />

      <Separator />

      <ButtonSelect
        onPress={async () => {
          dispatch(lawsuitSortOrder(SORT_ORDER.BY_ASC));
          if (refInside.current) {
            refInside.current.close();
          }
        }}
        selected={lawsuit.sortOrder === SORT_ORDER.BY_ASC}
        title={'Crescente'}
      />

      <ButtonSelect
        onPress={async () => {
          dispatch(lawsuitSortOrder(SORT_ORDER.BY_DESC));
          if (refInside.current) {
            refInside.current.close();
          }
        }}
        selected={lawsuit.sortOrder === SORT_ORDER.BY_DESC}
        title={'Decrescente'}
      />
    </RBSheet>
  );
};

export default SortSheet;
