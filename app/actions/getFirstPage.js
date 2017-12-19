import * as actionType from "../constants/getFirstPage";
import {
  getHeadLineData,
  getAdData,
  getListData,
  getFirstPageData
} from "../fetch/home";

//开始请求数据
function getHeadlineStart() {
  return {
    type: actionType.GET_HEADLINE_START
  };
}
//获取数据成功
function getHeadlineSuccess(json) {
  return {
    type: actionType.GET_HEADLINE_SUCCESS,
    data: json.data,
    name: "headLineData",
    receiverAt: Date.now(),
    message: ""
  };
}
//获取数据失败
function getHeadlineFaild(json) {
  return {
    type: actionType.GET_HEADLINE_FAILD,
    name: "headLineData",
    message: json.message,
    receiverAt: Date.now()
  };
}

//请求数据
export function fetchHeadline() {
  return dispatch => {
    dispatch(getHeadlineStart());
    return getHeadLineData()
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          //如果返回的数据中有error字段代表获取数据失败，但是程序中没有做错误的处理
          return dispatch(getHeadlineFaild(json));
        }
        //获取数据成功
        return dispatch(getHeadlineSuccess(json));
      });
  };
}

function getADStart() {
  return {
    type: actionType.GET_AD_START
  };
}
//获取数据成功
function getADSuccess(json) {
  return {
    type: actionType.GET_AD_SUCCESS,
    data: json.data,
    name: "ADData",
    receiverAt: Date.now(),
    message: ""
  };
}
//获取数据失败
function getADFaild(json) {
  return {
    type: actionType.GET_AD_FAILD,
    name: "ADData",
    message: json.message,
    receiverAt: Date.now()
  };
}

//请求数据
export function fetchAD() {
  return dispatch => {
    dispatch(getADStart());
    return getAdData()
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          //如果返回的数据中有error字段代表获取数据失败，但是程序中没有做错误的处理
          return dispatch(getADFaild(json));
        }
        //获取数据成功
        return dispatch(getADSuccess(json));
      });
  };
}

//判读是否需要发起请求
function shouldFetchPosts(name, state) {
  const posts = state.getFirstPage[name];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

//这个函数调用的是fetchPosts，在发起请求直接，先判断一下缓存是否可用
export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchHeadline());
    } else {
      return Promise.resolve();
    }
  };
}
