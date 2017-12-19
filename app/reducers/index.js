import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import userinfo from "./userinfo";
import cityName from './cityName'
import getFirstPage from "./getFirstPage";

const rootReducer = combineReducers({
  userinfo,
  cityName,
  firstPageDate: getFirstPage,
  router: routerReducer
});

export default rootReducer;
