import * as actions from '../actions';

const initialState = {
  text: 'initial state'
};

const reducer = (state=initialState, action) => {
  if (action.type === actions.CHANGE_TEXT) {
    return Object.assign({}, state, {
      text: action.text
    });
  }
  return state;
};

export default reducer;