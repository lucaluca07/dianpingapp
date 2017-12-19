import React, { Component } from "react";
import { render } from "react-dom";
import App from "./container/index";
import { Provider } from "react-redux";
import configureState from "./store";
import { fetchHeadline, fetchAD, fetchList,fetchPostsIfNeeded } from "./actions/getFirstPage";
import { getListData } from "./fetch/home";

import "./static/css/common.less";
import "./static/css/font.css";

const store = configureState();
store.dispatch(fetchHeadline());
store.dispatch(fetchPostsIfNeeded("北京", 1));
store
  .dispatch(fetchPostsIfNeeded("ad",fetchAD))
  .then(() => console.log("state", store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
