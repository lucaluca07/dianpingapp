import { get } from "../get";

//获取商户详情的数据
//'/api/detail/info/:shipId'
export function getShopInfo(id) {
  let result = get(`/api/detail/info/${id}`);
  return result;
}
//'/api/detail/component/:shipId/:page'
export function getComment(id, page) {
  let result = get(`/api/detail/comment/${id}/${page}`);
  return result;
}
