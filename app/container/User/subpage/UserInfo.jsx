import React from 'react'
import UserInfoComponent from '../../../component/UserInfo'
import {getUserInfo} from "../../../fetch/user/index";

export default class UserInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { userinfo: '' }
  }

  componentDidMount() {
    const username = this.props.username
    //通过username获取用户信息
    const result = getUserInfo(username)
    this.handleResult(result)
  }
  //处理数据
  handleResult(result) {
    result.then(res => res.json())
      .then(json => this.setState({userinfo: json.data}))
  }

  render() {
    const userinfo = this.state.userinfo
    return (
      <div>
        {
          userinfo
            ? <UserInfoComponent userinfo={userinfo}/>
            : ''
        }

      </div>
    )
  }
}