import * as actionType from "../constants/getFirstPage";
import {
  getHeadLineData,
  getAdData,
  getListData
} from "../fetch/home";

//恢复默认值
export function recoverDefaultState() {
  return {
    type: actionType.RECOVER_DEFAULT_STATE,

  }
}

//开始请求headline数据
function getHeadline(isFetching = false, json = {}) {
  return {
    type: actionType.GET_HEADLINE,
    isFetching: isFetching,
    data: json.data,
    receiverAt: Date.now(),
    message: json.message || "",
  };
}


//请求headline数据
export function fetchHeadline() {
  return dispatch => {
    dispatch(getHeadline(true));
    return getHeadLineData()
      .then(res => res.json())
      .then(json => {
        return dispatch(getHeadline(false, json));
      }).catch(err => (dispatch(getHeadline(false, err))))
  };
}

function shouldFetchHeadline(state) {
  const headline = state.firstPageDate.headline || false;
  if (!headline) {
    return true
  } else {
    return !state.firstPageData.headlineFetching
  }
}
export function fetchHeadlineIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchHeadline(getState())) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchHeadline())
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}
//开始请求AD数据
function getAd(isFetching = false, json = {}) {
  return {
    type: actionType.GET_AD,
    isFetching: isFetching,
    data: json.data,
    receiverAt: Date.now(),
    message: json.message || "",
  };
}

//请求AD数据
export function fetchAD() {
  return dispatch => {
    dispatch(getAd(true));
    return getAdData()
      .then(res => res.json())
      .then(json => {
        //获取数据成功
        return dispatch(getAd(false, json));
      }).catch(err => (dispatch(getHeadline(false, err))));
  };
}

//开始请求list数据
function getList(isFetching = false, json = {}, page) {
  return {
    type: actionType.GET_LIST,
    isFetching: isFetching,
    list: json.data && json.data.list || [],
    hasMore: json.data && json.data.hasMore,
    page: page,
    receiverAt: Date.now(),
    message: json.message || "",
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
        return dispatch(getList(false, json, page + 1));
      }).catch(err => dispatch(getList(false, err, page)));
  };
}