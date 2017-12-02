import { get } from '../get'



//获取搜索结果页的数据
export function getSearchData(page,city,type, keyword) {
  let result;
  if(keyword){
    //包含keyword的搜索结果
    result = get(`/api/search/${page}/${city}/${type}/${keyword}`)
  }else{
    //不包含keyword的搜索结果
    result = get(`/api/search/${page}/${city}/${type}}`)
  }
  return result
}
