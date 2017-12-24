import * as actionTypes from "../constants/userinfo";
import {login, getDealList, postAssess} from '../fetch/user'


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

function getDeal(isFetching=false,json={}){
  return {
    type: actionTypes.GET_DEAL_LIST,
    listFetching: isFetching,
    listData: json.data && json.data.list || {},
    hasMore:json.data && json.data.hasMore || false,
    receiverAt: Date.now(),
    message: json.message || ""
  };
}
export function fetchDealList(username) {
  //更新用户信息
  return dispatch => {
      dispatch(getDeal(true));
      return getDealList(username)
          .then(res => res.json())
          .then(json => {
              return dispatch(getDeal(false, json));
          }).catch(err => (dispatch(getDeal(false, err))))
  };
}
function postUserAssess(isFetching,dealId,json={}){
  return{
    type:actionTypes.POST_USER_ASSESS,
    assessFetching:isFetching,
    assessCode:json.code,
    dealId:dealId
  }
}
export function fetchUserAssess(id,text,star,callback){
  return dispatch => {
    dispatch(postUserAssess(true));
      return postAssess(id,text,star)
          .then(res => res.json())
          .then(json => {
            if (json.code === 200) {
              callback&&callback(); //评论成功之后回调函数
            }
            return dispatch(postUserAssess(false,id,json));
          }).catch(err => (dispatch(postUserAssess(false,id,err))))
  };
}