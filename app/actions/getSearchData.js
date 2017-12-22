import * as actionType from "../constants/getSearchData";
import {
    getSearchData
} from "../fetch/search";

//开始请求headline数据
function getSeatchData(isFetching = false, json = {}, page) {
    return {
        type: actionType.GET_SEARCH_DATA,
        searchFetching: isFetching,
        list: json.data && json.data.list || [],
        hasMore: json.data && json.data.hasMore || false,
        page,
        receiverAt: Date.now(),
        message: json.message || "",
    };
}


//请求search数据
export function fetchSearchData(page, city, type, keyword) {
    return dispatch => {
        dispatch(getSeatchData(true));
        return getSearchData(page, city, type, keyword)
            .then(res => res.json())
            .then(json => {
                console.log("json", json)
                return dispatch(getSeatchData(false, json, page));
            }).catch(err => (dispatch(getSeatchData(false, err, page))))
    };
}