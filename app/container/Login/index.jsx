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
    if (this.props.userinfo.data.userName) {
      this.props.history.push("/user");
    }
  }
  componentDidUpdate(){
  
    const username = this.props.userinfo.data.userName;
    const router = this.props.match.params.router;
    if(username){
      if (router) {
        //替换router参数中的 && 为 /
        const url = router.replace("&&", "/");
        this.props.history.push("/" + url);
      } else {
        this.props.history.push("/user");
      }
    }
    
  }

  //登录按钮点击事件
  handleLogin(username, password) {
    if (username == "" || password == "") {
      return;
    }
    this.props.action.loginAction(username,password)
  }

  render() {
    const userinfo = this.props.userinfo ;
    const {code,message,userFetching} = userinfo ;
    return (
      <div style={{ background: "#fff, height:100%" }}>
        <Header title="登录" />
        <LoginComponent isDisabled={userFetching} onLogin={this.handleLogin.bind(this)} />
        {code !== 200 ? (
          <div style={{ textAlign: "center", color: "#FF3030" }}>
            {message}
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
