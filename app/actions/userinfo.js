import * as actionTypes from "../constants/userinfo";
import {login} from '../fetch/user'


function getUserInfo(isFetching=false,json={}){
  return {
    type: actionTypes.USERINFO_UPDATE,
    userFetching: isFetching,
    data: json.data || {},
    receiverAt: Date.now(),
    code:json.code,
    message: json.message || ""
  };
}
export function loginAction(username,password) {
  //更新用户信息
  return dispatch => {
      dispatch(getUserInfo(true));
      return login(username,password)
          .then(res => res.json())
          .then(json => {
              return dispatch(getUserInfo(false, json));
          }).catch(err => (dispatch(getUserInfo(false, err))))
  };
}