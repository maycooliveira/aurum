import produce from 'immer';
import User from '../../../models/User';
import { Reducer } from 'redux';

interface UserState {
  user: User;
}

// Reducer
const initialState: UserState = {
  user: { login: '' },
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/UPDATE_USER': {
        draft.user = action.payload.user;
        break;
      }

      default:
        return state;
    }
  });
};

export default reducer;
