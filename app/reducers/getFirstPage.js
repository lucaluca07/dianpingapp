import * as actionType from "../constants/getFirstPage";

//默认的state
const defaultState = {
  headlineFetching: false,
  adFetching: false,
  listFetching: false
};
//异步antion处理的reducer
export default function getFirstPage(state = defaultState, action) {
  switch (action.type) {
      //获取数据成功更新state
    case actionType.GET_HEADLINE:
      return Object.assign({}, state, {
        headlineFetching: action.isFetching,
        headlineData: action.data,
        lastUpdated: action.receiverAt,
        errMsg: action.message
      });
      //获取数据失败更新state

    case actionType.GET_AD:
      return Object.assign({}, state, {
        adFetching: action.isFetching,
        adData: action.data,
        lastUpdated: action.receiverAt,
        errMsg: action.message
      });

    case actionType.GET_LIST:
      return Object.assign({}, state, {
        listFetching: action.isFetching,
        listData: action.list,
        hasMoreList: action.hasMore,
        currentPage:action.page,
        lastUpdated: action.receiverAt,
        errMsg: action.message
      });
    default:
      return state;
  }
}