import * as actionTypes from '../contant/userinfo'

export function update(data) { //更新用户信息
  return({
    type:actionTypes.USERINFO_UPDATE,
    data
  })
}