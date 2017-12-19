import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import userinfo from "./userinfo";
import getFirstPage from "./getFirstPage";

const rootReducer = combineReducers({
  userinfo,
  firstPageDate: getFirstPage,
  router: routerReducer
});

export default rootReducer;
