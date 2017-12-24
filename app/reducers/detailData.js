import * as actionType from "../constants/detailData";

//默认的state
const defaultState = {
  shopinfoFetching: false,
  commentFetching: false,
  commentData: false,
  shopinfoData: false,
  hasMoreComment:false,
  currentPage:0,
  commentCount:0,
  lastUpdated:""
};
//异步antion处理的reducer
export default function getDetailData(state = defaultState, action) {
  switch (action.type) {
    case actionType.RECOVER_DETAIL_DATA:
      return defaultState;
      //获取headline数据
    case actionType.GET_SHOP_INFO:
      return Object.assign({}, state, {
        shopinfoFetching: action.isFetching,
        shopinfoData: action.data,
        lastUpdated: action.receiverAt,
        errMsg: action.message
      });
      //获取list数据
    case actionType.GET_COMMENT_LIST:
      return Object.assign({}, state, {
        commentFetching: action.isFetching,
        commentData: [...state.commentData, ...action.list],
        hasMoreComment: action.hasMore,
        currentPage: action.page,
        commentCount:action.commentCount,
        lastUpdated: action.receiverAt,
        errMsg: action.message
      });
    default:
      return state;
  }
}