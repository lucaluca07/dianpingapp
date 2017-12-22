import * as actionType from "../constants/getFirstPage";

//默认的state
const defaultState = {
  headlineFetching: false,
  adFetching: false,
  listFetching: false,
  listData: false,
  headlineData: false,
  adData: false
};
//异步antion处理的reducer
export default function getFirstPage(state = defaultState, action) {
  switch (action.type) {
    case actionType.RECOVER_DEFAULT_STATE:
      return defaultState;
      //获取headline数据
    case actionType.GET_HEADLINE:
      return Object.assign({}, state, {
        headlineFetching: action.isFetching,
        headlineData: action.data,
        lastUpdated: action.receiverAt,
        errMsg: action.message
      });
      //获取ad数据
    case actionType.GET_AD:
      return Object.assign({}, state, {
        adFetching: action.isFetching,
        adData: action.data,
        lastUpdated: action.receiverAt,
        errMsg: action.message
      });
      //获取list数据
    case actionType.GET_LIST:
      return Object.assign({}, state, {
        listFetching: action.isFetching,
        listData: [...state.listData, ...action.list],
        hasMoreList: action.hasMore,
        currentPage: action.page,
        lastUpdated: action.receiverAt,
        errMsg: action.message
      });
    default:
      return state;
  }
}