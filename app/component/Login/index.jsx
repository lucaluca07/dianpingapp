import React from 'react'
import './style.less'

export default class LoginComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:''
    }
  }
  handleUsernameChange(e){
    this.setState({username:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }
  handleClick(){
    const username = this.state.username
    const password = this.state.password
    this.props.onLogin(username,password)
  }
  render() {
    return (
      <div className='login-box'>
        <div className='username'>
          <span>用户名</span>
          <input type="text" onChange={this.handleUsernameChange.bind(this)}/>
        </div>
        <div className='password'>
          <span>密码</span>
          <input type="password" onChange={this.handlePasswordChange.bind(this)}/>
        </div>
        <button className='login-btn' onClick={this.handleClick.bind(this)}>登录</button>
      </div>
    )
  }
}