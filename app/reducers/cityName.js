import * as actionTypes from "../constants/setCityName";

const initialState = "上海";

export default function updateCity(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CITY_NAME:
      return action.cityName;
    default:
      return state;
  }
}
