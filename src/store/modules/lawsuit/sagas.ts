import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { lawsuitListSuccess, lawsuitListFailure } from './actions';
import { flashError } from '../../../utils';
import LAWSUIT_TYPES from './types';

export function* getCases() {
  try {
    const { data = [] } = yield call(api.get, 'lawsuit/all');
    const list = data?.cases || [];
    yield put(lawsuitListSuccess(list));
  } catch (error) {
    yield put(lawsuitListFailure(error));
    flashError(error);
  }
}

export default all([takeLatest(LAWSUIT_TYPES.LIST_REQUEST, getCases)]);
