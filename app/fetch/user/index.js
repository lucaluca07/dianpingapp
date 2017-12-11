import { get } from '../get'
import { post } from '../post'



//获取用户信息
export function getUserInfo(username) {
  const result = get(`/api/user/info/${username}`)
  return result
}

//获取用户订单
export function getDealList(username) {
  const result = get(`/api/user/deal/${username}`)
  return result
}

//提交评价
export function postAssess(id, value, star) {
  const obj={id, value, star}
  const result = post('/api/submitAssess', obj)
  return result
}

//登录
export function login(username, password) {
  const obj = {username,password}
  const result = post('/api/login', obj)
  return result
}
