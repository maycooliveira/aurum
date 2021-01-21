import produce from 'immer';
import LAWSUIT_TYPES from './types';
import Case from '../../../models/Case';
import { Reducer, Action } from 'redux';

export enum SORT_ORDER {
  BY_ASC = 0,
  BY_DESC = 1,
}

export enum SORT_FILTER {
  BY_DATE = 0,
  BY_DECRIPTION = 1,
}

interface LawSuitState {
  cases: Case[];
  sortFilter: SORT_FILTER;
  sortOrder: SORT_ORDER;
  loading: boolean;
}

interface LawSuitActions extends Action<LAWSUIT_TYPES> {
  data: Case[];
  sortOrder: SORT_ORDER;
  sortFilter: SORT_FILTER;
}

// Reducer
const initialState: LawSuitState = {
  cases: [],
  sortOrder: SORT_ORDER.BY_ASC,
  sortFilter: SORT_FILTER.BY_DATE,
  loading: true,
};

const reducer: Reducer<LawSuitState, LawSuitActions> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LAWSUIT_TYPES.UPDATE_SORT_ORDER:
        draft.sortOrder = action.sortOrder;
        break;
      case LAWSUIT_TYPES.LIST_REQUEST:
        draft.loading = true;
        break;

      case LAWSUIT_TYPES.LIST_FAILURE:
        draft.loading = false;
        break;

      case LAWSUIT_TYPES.LIST_SUCCESS: {
        draft.cases = action.payload.data;
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
};

export default reducer;
