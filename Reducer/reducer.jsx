import {CHANGE_CURRENT_NOTE} from '../Actions/actionTypes';

const initialState = {
  currentNote: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_NOTE:
      return {
        ...state,
        currentNote: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
