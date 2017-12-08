import React from 'react'
import * as userinfoActions from '../../actions/userinfo'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LoginComponent from '../../component/Login'
import Header from '../../component/Header'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {errPassword:false}
  }
  componentDidMount(){
    //如果用户已登录跳转至用户中心页面
    if(this.props.userinfo.username){
      this.props.history.push('/user')
    }
  }
  //登录按钮点击事件
  handleLogin(username,password){
    const loginFlag = this.check(username,password)
    const userinfo = this.props.userinfo
    const router = this.props.match.params.router
    if(loginFlag){
      //更新userinfo的名字
      userinfo.username = username
      this.props.action.update({
        userinfo
      })
      //更新后跳转页面
      //如果参入router 登录后返回原页面
      //未传入登录后跳转user页面
      if(router){
        //替换router参数中的 && 为 /
        const url = router.replace('&&','/')
        this.props.history.push('/' + url)
      }else{
        this.props.history.push('/user')
      }
    }else{
      //检查未通过提示
      this.setState({errPassword:true})
      setTimeout(() => {
        this.setState({errPassword:false})
      },3000)
    }
  }
  //检查登录名和密码是否正确
  check(username,password){
    console.log(password)
    if(password === '123456'){
      return true
    }
    return false
  }
  render() {
    console.log(this.props)
    return (
      <div style={{"background":"#fff, height:100%"}}>
        <Header title="登录"/>
        <LoginComponent onLogin={this.handleLogin.bind(this)}/>
        {this.state.errPassword
          ?<div style={{"textAlign": "center", "color":"#FF3030"}}>用户名或密码错误</div>
          :''}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return{ userinfo: state.userinfo }
}
function mapDispatchToProps(dispatch) {
  return{
    action:bindActionCreators(userinfoActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)