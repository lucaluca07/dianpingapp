import React from "react";
import "./style.less";

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleClick() {
    const username = this.state.username;
    const password = this.state.password;
    this.props.onLogin(username, password);
  }
  /*
  * 用户名和密码输入框都为受控组件
  * */
  render() {
    return (
      <div className="login-box">
        <div className="username">
          <span>用户名</span>
          <input
            type="text"
            onChange={this.handleUsernameChange.bind(this)}
            placeholder="请输入用户名"
          />
        </div>
        <div className="password">
          <span>密码</span>
          <input
            type="password"
            onChange={this.handlePasswordChange.bind(this)}
            placeholder="请输入密码"
          />
        </div>
        <button className="login-btn" onClick={this.handleClick.bind(this)}>
          登录
        </button>
      </div>
    );
  }
}
