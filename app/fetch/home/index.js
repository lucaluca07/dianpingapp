import { get } from "../get";

//获取点评头条数据
export function getHeadLineData() {
  const result = get("/api/homeheadline");
  return result;
}

//获取超值特惠天天立减数据
export function getAdData() {
  const result = get("/api/homead");
  return result;
}

//获取猜你喜欢数据
export function getListData(city, page) {
  const result = get(`/api/homelist/${encodeURIComponent(city)}/${page}`);
  return result;
}

export function getFirstPageData(city, page, name) {
  switch (name) {
    case "headline":
      return getHeadLineData();
    case "AD":
      return getAdData();
    case "list":
      return getListData(city, page);
  }
}
