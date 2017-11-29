import React, {Component} from 'react'
import { connect } from 'react-redux'

import HomeHeader from '../../component/HomeHeader'
import Category from '../../component/Category'
import HeadLine from './subpage/HeadLine'
import Ad from './subpage/Ad'


class Home extends Component{
  render(){
    return(
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName}/>
        <Category/>
        <HeadLine/>
        <Ad/>
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
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)