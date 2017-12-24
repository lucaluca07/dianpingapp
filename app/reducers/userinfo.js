import * as actionTypes from "../constants/userinfo";

const initialState = {
  data:{},
  listData:{},
  userFetching:false,
  listFetching:false,
  hasMoreDeal:false,
  code:"",
  updataTime:"",
  assessCode:"",
  message:"",
  dealId:""
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return Object.assign({}, state, {
        data:action.data,
        userFetching:action.userFetching,
        code:action.code,
        updataTime:action.receiverAt,
        message:action.message
      });
    case actionTypes.GET_DEAL_LIST:
      return Object.assign({}, state, {
        listData:action.listData,
        hasMoreDeal:action.hasMore,
        listFetching:action.listFetching,
        updataTime:action.receiverAt,
        message:action.message
      });
    case actionTypes.POST_USER_ASSESS:
    return Object.assign({}, state, {
      assessCode:action.assessCode,
      dealId:action.dealId,
      assessFetching:action.assessFetching,
      updataTime:action.receiverAt,
      message:action.message
    });
    default:
      return state;
  }
}
