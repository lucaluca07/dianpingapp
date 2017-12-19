import React, { Component } from "react";
import { render } from "react-dom";
import App from "./container/index";
import { Provider } from "react-redux";
import configureState from "./store";
import { fetchHeadline } from "./actions/getFirstPage";

import "./static/css/common.less";
import "./static/css/font.css";

const store = configureState();
store
  .dispatch(fetchHeadline())
  .then(() => console.log("state", store.getState()));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
