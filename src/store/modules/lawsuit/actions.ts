import LAWSUIT_TYPES from './types';
import Case from '../../../models/Case';

export function lawsuitListRequest() {
  return {
    type: LAWSUIT_TYPES.LIST_REQUEST,
  };
}
export function lawsuitListSuccess(data: Case[]) {
  return {
    type: LAWSUIT_TYPES.LIST_SUCCESS,
    payload: { data },
  };
}
export function lawsuitSortOrder(order: Case[]) {
  return {
    type: LAWSUIT_TYPES.UPDATE_SORT_ORDER,
    payload: { order },
  };
}
export function lawsuitListFailure(error: string) {
  return {
    type: LAWSUIT_TYPES.LIST_FAILURE,
    payload: { error },
  };
}
