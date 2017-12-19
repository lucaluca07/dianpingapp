import React from "react";
import "./style.less";
import { Link, withRouter } from "react-router-dom";
import SearchInput from "../SearchInput";
/*
* 头部组件，图标使用的icomoon
* */
class HomeHeader extends React.Component {
  handleEnter(value) {
    this.props.history.push(`/search/all/${value}`);
  }

  render() {
    return (
      <div className="clear-fix home-header">
        <Link to="/city" className="float-left home-header-left">
          <span>{this.props.cityName}</span>
          &nbsp;
          <i className="icon-angle-down" />
        </Link>
        <Link to="/login">
          <div className="float-right home-header-right">
            <i className="icon-user" />
          </div>
        </Link>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search" />
            <SearchInput onEnter={this.handleEnter.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
//react-router-dom 获取history,进行页面跳转
export default withRouter(HomeHeader);
