import React from "react";
import { connect } from "react-redux";
import { getSearchData } from "../../../fetch/search/index";
import ListComponent from "../../../component/ListComponent";
import LoadMore from "../../../component/LoadMore";
import Footer from "../../../component/Footer";

export default class List extends React.Component {

  //再次搜索
  componentDidUpdate(prevProps, prevState) {
    const keyword = this.props.keyword;
    const type = this.props.type;
    //搜索条件不变的直接返回
    if (keyword === prevProps.keyword && type === prevProps.type) {
      return;
    }
    this.props.onReloadData();
  }
  //加载更多数据
  loadMoreData() {
    const loadMoreData = this.props.onLoadMoreData ;
    loadMoreData()
  }

  render() {
    const {hasMoreSearchData, searchCurrentPage, searchData, searchFetching} = this.props.data ;
    return (
      <div>
        {searchData&&searchData.length ? (
          <div>
            <ListComponent data={searchData} />
            {hasMoreSearchData || searchFetching ? (
              <LoadMore
                isLoadMore={searchFetching}
                onLoadMore={this.loadMoreData.bind(this)}
              />
            ) : (
              <Footer />
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
