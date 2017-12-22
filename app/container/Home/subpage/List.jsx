import React from "react";
import ListComponent from "../../../component/ListComponent";
import LoadMore from "../../../component/LoadMore";
import Footer from "../../../component/Footer";
import { getListData } from "../../../fetch/home/index";

export default class List extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [], //猜你喜欢数据列表
  //     hasMore: false, //是否有更多数据，有的话可以 加载更多
  //     isLoaddingMore: false, //是否正在加载数据，true 不会继续加载新的数据
  //     page: 1 //当前加载页面的数据
  //   };
  // }

  // componentDidMount() {
  //   this.loadFirstPageData();
  // }

  // //加载首屏数据
  // loadFirstPageData() {
  //   const cityName = this.props.cityName;
  //   const result = getListData(cityName, 0);
  //   const firstPageState = data => {
  //     this.setState({
  //       hasMore: data.hasMore,
  //       data: this.state.data.concat(data.list)
  //     });
  //   };
  //   this.resultHandle(result, firstPageState);
  // }

  //加载更多数据
  loadMoreData() {
    const {hasMore,page,cityName,isLoaddingMore,fetchList} = this.props ;
    if(isLoaddingMore){
      return
    }
    fetchList(cityName,page)
  }

  render() {
    const {hasMore,page,cityName,isLoaddingMore,fetchList,data} = this.props ;
    return (
      <div>
        <p className="list-title">猜你喜欢</p>
        <div>
          {data&&data.length ? (
            <ListComponent data={data} />
          ) : (
            ""
          )}
        </div>
        {hasMore || isLoaddingMore ? (
          <LoadMore
            isLoadMore={isLoaddingMore}
            onLoadMore={this.loadMoreData.bind(this)}
          />
        ) : (
          <Footer />
        )}
      </div>
    );
  }
}
