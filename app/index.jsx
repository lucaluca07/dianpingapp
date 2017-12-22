import React, { Component } from "react";
import { render } from "react-dom";
import App from "./container/index";
import { Provider } from "react-redux";
import configureState from "./store";
import { fetchHeadline, fetchAD, fetchList } from "./actions/getFirstPage";
import { setCityName } from './actions/setCityName'
import { fetchSearchData } from "./actions/getSearchData";

import "./static/css/common.less";
import "./static/css/font.css";

const store = configureState();
// store.dispatch(fetchAD());
// store.dispatch(fetchList("北京",2));
// store.dispatch(setCityName("北京"));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
