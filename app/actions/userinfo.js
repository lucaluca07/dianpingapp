import * as actionTypes from "../constants/userinfo";

export function update(data) {
  //更新用户信息
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  };
}
