import React from "react";
import * as userinfoActions from "../../actions/userinfo";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LoginComponent from "../../component/Login";
import Header from "../../component/Header";
import { login } from "../../fetch/user/index";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errPassword: false, tipInfo: "" };
  }

  componentDidMount() {
    //如果用户已登录跳转至用户中心页面
    if (this.props.userinfo.username) {
      this.props.history.push("/user");
    }
  }

  //登录按钮点击事件
  handleLogin(username, password) {
    if (username == "" || password == "") {
      this.setState({ errPassword: true, tipInfo: "用户名或密码不能为空" });
      return;
    }
    //检查登录
    this.check(
      username,
      password,
      this.loginSuccess.bind(this),
      this.loginFail.bind(this)
    );
  }

  //检查登录，校验用户名密码
  check(username, password, success, err) {
    const result = login(username, password);
    result.then(res => res.json()).then(json => {
      if (json.code === 200) {
        //登录成功
        success(json.message, username);
      } else {
        //登录失败
        err(json.message);
      }
    });
  }
  //登录成功回调函数
  loginSuccess(msg, username) {
    const userinfo = this.props.userinfo;
    const router = this.props.match.params.router;
    this.setState({ errPassword: true, tipInfo: msg });
    userinfo.username = username;
    this.props.action.update({
      userinfo
    });
    //更新后跳转页面
    //如果参入router 登录后返回原页面
    //未传入登录后跳转user页面
    if (router) {
      //替换router参数中的 && 为 /
      const url = router.replace("&&", "/");
      this.props.history.push("/" + url);
    } else {
      this.props.history.push("/user");
    }
  }
  //登录失败回调函数
  loginFail(msg) {
    this.setState({ errPassword: true, tipInfo: msg });
  }

  render() {
    return (
      <div style={{ background: "#fff, height:100%" }}>
        <Header title="登录" />
        <LoginComponent onLogin={this.handleLogin.bind(this)} />
        {this.state.errPassword ? (
          <div style={{ textAlign: "center", color: "#FF3030" }}>
            {this.state.tipInfo}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { userinfo: state.userinfo };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(userinfoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
