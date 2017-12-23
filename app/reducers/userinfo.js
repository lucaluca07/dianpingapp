import * as actionTypes from "../constants/userinfo";

const initialState = {
  data:{},
  userFetching:false,
  updataTime:"",
  message:""
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return Object.assign({}, state, {
        data:action.data,
        userFetching:action.userFetching,
        updataTime:action.receiverAt,
        code:action.code,
        message:action.message
      });
    default:
      return state;
  }
}
