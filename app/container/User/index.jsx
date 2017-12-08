import React, {Component} from 'react'
import Header from '../../component/Header'
import {connect} from 'react-redux'

import UserInfo from './subpage/UserInfo'
import DealList from './subpage/DealList'

class User extends Component{
  componentDidMount(){
    if(!this.props.userinfo.username){
      this.props.history.push('/login')
    }
  }
  render(){
    const username = this.props.userinfo.username
    return(
      <div>
        <Header title='用户中心' back='/'/>
        {
          username
            ?<div>
              <UserInfo username={username}/>
              <DealList username={username}/>
            </div>
            :''
        }

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    userinfo:state.userinfo
  }
}
function mapDispatchToProps(dispatch) {
  return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(User)