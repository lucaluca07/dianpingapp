import * as actionType from "../constants/getFirstPage";
import {
  getHeadLineData,
  getAdData,
  getListData
} from "../fetch/home";

//开始请求headline数据
function getHeadline(isFetching, json) {
  return {
    type: actionType.GET_HEADLINE,
    isFetching: isFetching || false,
    data: json && json.data,
    receiverAt: Date.now(),
    message: json && json.message || "",
  };
}


//请求headline数据
export function fetchHeadline() {
  return dispatch => {
    dispatch(getHeadline(true));
    return getHeadLineData()
      .then(res => res.json())
      .then(json => {
        console.log("json", json)
        return dispatch(getHeadline(false, json));
      }).catch(err => (dispatch(getHeadline(false, err))))
  };
}

//开始请求AD数据
function getAd(isFetching, json) {
  return {
    type: actionType.GET_AD,
    isFetching: isFetching || false,
    data: json && json.data,
    receiverAt: Date.now(),
    message: json && json.message || "",
  };
}

//请求AD数据
export function fetchAD() {
  return dispatch => {
    dispatch(getAd());
    return getAdData()
      .then(res => res.json())
      .then(json => {
        //获取数据成功
        return dispatch(getAd(false, json));
      }).catch(err => (dispatch(getHeadline(false, err))));
  };
}

//开始请求headline数据
function getList(isFetching, json, page) {
  return {
    type: actionType.GET_LIST,
    isFetching: isFetching || false,
    data: json && json.data,
    page: page,
    receiverAt: Date.now(),
    message: json && json.message || "",
  };
}

//请求List数据
export function fetchList(city, page) {
  return dispatch => {
    dispatch(getList(true));
    return getListData(city, page)
      .then(res => res.json())
      .then(json => {
        //获取数据成功
        return dispatch(getList(false, json, page));
      }).catch(err => dispatch(getList(false, json, page)));
  };
}

// //判读是否需要发起请求
// function shouldFetchPosts(name, state) {
//   console.log("shoufetch",state)
//   const posts = state.firstPageDate[name];
//   if (!posts) {
//     return true;
//   } else if (posts.isFetching) {
//     return false;
//   } else {
//     return posts.didInvalidate;
//   }
// }

// //这个函数调用的是fetchPosts，在发起请求直接，先判断一下缓存是否可用
// export function fetchPostsIfNeeded(name,fn) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(name,getState())) {
//       return dispatch(fn());
//     } else {
//       return Promise.resolve();
//     }
//   };
// }