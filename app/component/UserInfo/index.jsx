import React from "react";
import "./style.less";

export default class UserInfoComponent extends React.Component {
  render() {
    const userinfo = this.props.userinfo;
    return (
      <div className="user-container">
        <div className="user-pic">
          <img src={userinfo.defaultPic} alt="" />
        </div>
        <div className="userinfo">
          <div className="username">{userinfo.userName}</div>
          <div className="user-tel">{userinfo.tel}</div>
          <div className="user-address">{userinfo.address}</div>
        </div>
      </div>
    );
  }
}
