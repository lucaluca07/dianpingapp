import * as actionType from "../constants/getFirstPage";
import { getHeadLineData, getAdData, getListData } from "../fetch/home";

//开始请求headline数据
function getHeadlineStart() {
  return {
    type: actionType.GET_HEADLINE_START
  };
}
//获取headline数据成功
function getHeadlineSuccess(json) {
  return {
    type: actionType.GET_HEADLINE_SUCCESS,
    data: json.data,
    receiverAt: Date.now(),
    message: ""
  };
}
//获取headline数据失败
function getHeadlineFaild(json) {
  return {
    type: actionType.GET_HEADLINE_FAILD,
    message: json.message,
    receiverAt: Date.now()
  };
}

//请求headline数据
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

//开始请求AD数据
function getAdStart() {
  return {
    type: actionType.GET_AD_START
  };
}
//获取AD数据成功
function getAdSuccess(json) {
  return {
    type: actionType.GET_AD_SUCCESS,
    data: json.data,
    receiverAt: Date.now(),
    message: ""
  };
}
//获取ad数据失败
function getAdFaild(json) {
  return {
    type: actionType.GET_AD_FAILD,
    message: json.message,
    receiverAt: Date.now()
  };
}

//请求AD数据
export function fetchAD(city) {
  return dispatch => {
    dispatch(getAdStart());
    return getAdData(city)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          //如果返回的数据中有error字段代表获取数据失败，但是程序中没有做错误的处理
          return dispatch(getAdFaild(json));
        }
        //获取数据成功
        return dispatch(getAdSuccess(json));
      });
  };
}

//开始请求headline数据
function getListStart() {
  return {
    type: actionType.GET_LIST_START
  };
}
//获取List数据成功
function getListSuccess(json, page) {
  console.log();
  return {
    type: actionType.GET_LIST_SUCCESS,
    data: json.data,
    page,
    receiverAt: Date.now(),
    message: ""
  };
}
//获取List数据失败
function getListFaild(json, page) {
  return {
    type: actionType.GET_LIST_FAILD,
    page,
    message: json.message,
    receiverAt: Date.now()
  };
}

//请求List数据
export function fetchList(city, page) {
  return dispatch => {
    dispatch(getListStart());
    return getListData(city, page)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          //如果返回的数据中有error字段代表获取数据失败，但是程序中没有做错误的处理
          return dispatch(getListFaild(json, page));
        }
        //获取数据成功
        return dispatch(getListSuccess(json, page));
      });
  };
}

//判读是否需要发起请求
function shouldFetchPosts(name, state) {
  console.log("shoufetch",state)
  const posts = state.firstPageDate[name];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

//这个函数调用的是fetchPosts，在发起请求直接，先判断一下缓存是否可用
export function fetchPostsIfNeeded(name,fn) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(name,getState())) {
      return dispatch(fn());
    } else {
      return Promise.resolve();
    }
  };
}
