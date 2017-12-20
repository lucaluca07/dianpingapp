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
    case actionType.GET_SEARCH_DATA:
      console.log("searchData",state.data)
      return Object.assign({}, state, {
        searchFetching: action.searchFetching ,
        searchData: [...state.searchData,...action.list] ,
        hasMoreSearchData: false,
        searchCurrentPage: action.page ,
        errMsg: "",
      });
    default:
      return state;
  }
}