import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as setCityNameAction from "../../actions/setCityName";
import {recoverDefaultState} from '../../actions/getFirstPage.js'
import Header from "../../component/Header";
import CurrentCity from "../../component/CurrentCity";
import CityList from "../../component/CityList";
import CITYNAME from "../../config/localStoreKey";
import LocalStore from "../../util/localStore";

//城市列表页面
class City extends Component {
  //修改城市的页面
  handleChangeCity(newCity) {
    //修改redux
    const cityNameActions = this.props.cityNameActions;
    //firstPageData恢复默认值
    const recoverDefaultState = this.props.recoverDefaultState;
    cityNameActions.setCityName(newCity);
    recoverDefaultState() ;

    //修改localstore
    LocalStore.setItem(CITYNAME, newCity);

    //返回首页
    this.props.history.push("/");
  }
  render() {
    //redux传入的userinfo
    const cityName = this.props.cityName;
    return (
      <div>
        <Header title="选择城市" />
        <CurrentCity cityName={cityName} />
        <CityList onChangeCity={this.handleChangeCity.bind(this)} />
      </div>
    );
  }
}
//获取redux中的cityName
function mapStateToProps(state) {
  return { cityName: state.cityName };
}
//获取action
function mapDispatchToProps(dispatch) {
  return { 
    cityNameActions: bindActionCreators(setCityNameAction, dispatch),
    recoverDefaultState:bindActionCreators(recoverDefaultState,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
