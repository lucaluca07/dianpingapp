import * as actionTypes from "../constants/userinfo";

const initialState = {};

export default function login(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
