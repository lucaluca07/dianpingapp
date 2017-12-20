import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import userinfo from "./userinfo";
import cityName from './cityName'
import getFirstPage from "./getFirstPage";
import searchData from './searchData'

const rootReducer = combineReducers({
  userinfo,
  cityName,
  firstPageDate: getFirstPage,
  searchData,
  router: routerReducer
});

export default rootReducer;
