import * as actionType from "../constants/detailData";
import {
  getComment,
  getShopInfo
} from "../fetch/detail";

//恢复默认值
export function recoverDetailData() {
  return {
    type: actionType.RECOVER_DETAIL_DATA,

  }
}

//开始请求headline数据
function getShopInfoData(isFetching = false, json = {}) {
  return {
    type: actionType.GET_SHOP_INFO,
    isFetching: isFetching,
    data: json.data,
    receiverAt: Date.now(),
    message: json.message || "",
  };
}


//请求headline数据
export function fetchShopInfo(id) {
  return dispatch => {
    dispatch(getShopInfoData(true));
    return getShopInfo(id)
      .then(res => res.json())
      .then(json => {
        return dispatch(getShopInfoData(false, json));
      }).catch(err => (dispatch(getShopInfoData(false, err))))
  };
}

//开始请求list数据
function getCommentList(isFetching = false, json = {}, page) {
  return {
    type: actionType.GET_COMMENT_LIST,
    isFetching: isFetching,
    list: json.data || [],
    commentCount: json.commentCount,
    hasMore: json.hasMore,
    page: page,
    receiverAt: Date.now(),
    message: json.message || "",
  };
}

//请求List数据
export function fetchCommentList(id, page) {
  return dispatch => {
    dispatch(getCommentList(true));
    return getComment(id, page)
      .then(res => res.json())
      .then(json => {
        //获取数据成功
        return dispatch(getCommentList(false, json, page + 1));
      }).catch(err => dispatch(getCommentList(false, err, page)));
  };
}