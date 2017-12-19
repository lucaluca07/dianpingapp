import React, {Component} from 'react'
import { connect } from 'react-redux'

import HomeHeader from '../../component/HomeHeader'
import Category from '../../component/Category'
import HeadLine from './subpage/HeadLine'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends Component{
  render(){
    const cityName = this.props.cityName;
    return <div>
        <HomeHeader cityName={cityName} />
        <Category />
        <HeadLine />
        <Ad/>
        <List cityName={cityName} />
      </div>;
  }
}

// - - - - - - - - - - - react redux 绑定 - - - - - - - - - - -
function mapStateToProps(state) {
  return {
    userinfo:state.userinfo,
    cityName:state.cityName
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