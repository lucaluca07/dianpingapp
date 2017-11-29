import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActions from '../../actions/userinfo'

import Header from '../../component/Header'

class City extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Header title="选择城市"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {userinfo: state.userinfo}
}

function mapDispatchToProps(dispatch) {
  return{action:bindActionCreators(userInfoActions,dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)