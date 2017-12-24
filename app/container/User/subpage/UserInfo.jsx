import React from "react";
import UserInfoComponent from "../../../component/UserInfo";
import { getUserInfo } from "../../../fetch/user/index";

export default class UserInfo extends React.Component {

  render() {
    const userinfo = this.props.userinfo;
    return (
      <div>{userinfo ? <UserInfoComponent userinfo={userinfo} /> : ""}</div>
    );
  }
}
