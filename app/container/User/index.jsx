import React, { Component } from "react";
import Header from "../../component/Header";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/userinfo';
import UserInfo from "./subpage/UserInfo";
import DealList from "./subpage/DealList";

class User extends Component {
  componentDidMount() {
    if (!this.props.userinfo.data.userName) {
      this.props.history.push("/login");
      return
    }
    const userId = this.props.userinfo.data.userId ;
    const listAction = this.props.actions.fetchDealList;
    listAction(userId)
  }
  handlePostAssess(id,text,star,callback){
    const postAssess = this.props.actions.fetchUserAssess
    postAssess(id,text,star,callback)
  }
  render() {
    const userinfo = this.props.userinfo;
    const {data, listData, hasMoreDeal, dealId, assessCode} = userinfo ;
    return (
      <div>
        <Header title="用户中心" back="/" />
        {data.userName ? (
          <div>
            {/*用户信息*/}
            <UserInfo userinfo={data} />
            {/*用户订单列表*/}
            { <DealList 
              dealList={listData}
              postAssess={this.handlePostAssess.bind(this)}
            /> }
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(userActions,dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
