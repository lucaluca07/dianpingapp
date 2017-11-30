import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActions from '../../actions/userinfo'
import Header from '../../component/Header'
import CurrentCity from '../../component/CurrentCity'
import CityList from '../../component/CityList'
import CITYNAME from '../../config/localStoreKey'
import LocalStore from '../../util/localStore'

//城市列表页面
class City extends Component {

  //修改城市的页面
  handleChangeCity(newCity){
    //修改redux
    const action = this.props.action
    action.update({cityName:newCity})

    //修改localstore
    LocalStore.setItem(CITYNAME,newCity)

    //返回首页
    this.props.history.push('/')
  }
  render() {
    //redux传入的userinfo
    const userinfo = this.props.userinfo
    return (
      <div>
        <Header title="选择城市"/>
        <CurrentCity cityName={userinfo.cityName}/>
        <CityList onChangeCity={this.handleChangeCity.bind(this)}/>
      </div>
    )
  }
}
//获取redux中的userinfo
function mapStateToProps(state) {
  return {userinfo: state.userinfo}
}
//获取action
function mapDispatchToProps(dispatch) {
  return{action:bindActionCreators(userInfoActions,dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)