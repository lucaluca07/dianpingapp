import React from 'react'
import RouterMap from '../router/routerMap'
import CITYNAME from '../config/localStoreKey'
import LocalStore from '../util/localStore'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActions from '../actions/userinfo'

class App extends React.Component {
  constructor() {
    super()
    this.state = {initDone: false}
  }

  componentDidMount() {
    //从localstorage中获取cityName
    let cityName = LocalStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '北京'
    }

    //设置cityName到redux中
    this.props.userinfo.update({
      cityName: cityName
    })

    this.setState({ initDone: true })
  }

  render() {
    return (
      <div>
        {this.state.initDone
          ? <RouterMap/>
          : <div>Loadding...</div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userinfo: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)