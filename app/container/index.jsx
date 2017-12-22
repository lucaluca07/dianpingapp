import React from "react";
import RouterMap from "../router/routerMap";
import CITYNAME from "../config/localStoreKey";
import LocalStore from "../util/localStore";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as setCityNameAction from "../actions/setCityName";

class App extends React.Component {
  constructor() {
    super();
    this.state = { initDone: false };
  }

  componentDidMount() {
    //从localstorage中获取cityName,获取不到就设置为北京
    let cityName = LocalStore.getItem(CITYNAME);
    if (cityName == null) {
      cityName = "北京";
    }

    //设置cityName到redux中
    this.props.setCityName.setCityName(cityName);

    this.setState({ initDone: true });
  }

  render() {
    return (
      <div>{this.state.initDone ? <RouterMap /> : <div></div>}</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setCityName: bindActionCreators(setCityNameAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
