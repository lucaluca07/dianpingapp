import * as actionType from "../constants/getSearchData";

//默认的state
const defaultState = {
    searchFetching: false ,
    searchData: [] ,
    hasMoreSearchData: false,
    searchCurrentPage: 0 ,
    errMsg: "",
};
//异步antion处理的reducer
export default function searchData(state = defaultState, action) {
  switch (action.type) {
    case actionType.RECOVER_SEARCH_DATA:
      return defaultState ;

    case actionType.GET_SEARCH_DATA:
      return Object.assign({}, state, {
        searchFetching: action.searchFetching ,
        searchData: [...state.searchData,...action.list] ,
        hasMoreSearchData: action.hasMore,
        searchCurrentPage: action.page ,
        errMsg: "",
      });

    default:
      return state;
  }
}