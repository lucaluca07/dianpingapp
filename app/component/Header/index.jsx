import React from "react";
import { withRouter } from "react-router-dom";
import "./style.less";

class Header extends React.Component {
  //返回按钮，如果传入指定返回的地址就跳转到该地址，否则就返回上一个页面
  handleClick() {
    const backUrl = this.props.back;
    if (backUrl) {
      this.props.history.push(backUrl);
    } else {
      window.history.back();
    }
  }
  render() {
    return (
      <div className="header">
        <span className="header-back" onClick={this.handleClick.bind(this)}>
          <i className="icon-chevron-left" />
        </span>
        <h3 className="header-title">{this.props.title}</h3>
      </div>
    );
  }
}
export default withRouter(Header);
