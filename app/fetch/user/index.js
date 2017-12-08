import { get } from '../get'



//获取搜索结果页的数据
export function getUserInfo(username) {
  const result = get(`/api/user/info/${username}`)
  return result
}

export function geDealList(username) {
  const result = get(`/api/user/deal/${username}`)
  return result
}
