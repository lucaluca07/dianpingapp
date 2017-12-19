import * as actionTypes from "../constants/setCityName";

export function setCityName(cityName) {
  //更新用户信息
  return {
    type: actionTypes.SET_CITY_NAME,
    cityName
  };
}