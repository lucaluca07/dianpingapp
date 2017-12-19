import React from "react";
import "./style.less";

export default class CurrentCity extends React.Component {
  render() {
    return <h3 className="current-city">{this.props.cityName}</h3>;
  }
}
