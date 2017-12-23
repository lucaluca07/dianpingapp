import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux' ;
import SearchHeader from "../../component/SearchHeader";
import * as searchDataActions from '../../actions/getSearchData' ;
import List from "./subpage/List";

class Search extends Component {
  componentDidMount(){
    this.handleLoadOrReLoadData()
  }
  //第一次加载数据或者重新加载数据
  handleLoadOrReLoadData(){
    const {cityName, searchActions} = this.props;
    const params = this.props.match.params;
    const type = params.type;
    const keyword = params.keyword;
    searchActions.recoverSearchData()
    searchActions.fetchSearchData(0, cityName, type, keyword)
  }
  //加载更多数据
  handleLoadMoreData(){
    const {cityName, searchActions, searchData} = this.props;
    const params = this.props.match.params;
    const type = params.type;
    const keyword = params.keyword;
    const page = searchData.searchCurrentPage ;
    searchActions.fetchSearchData(page, cityName, type, keyword)
  }
  render() {
    //获取url中的参数
    const params = this.props.match.params;
    const type = params.type;
    const keyword = params.keyword;
    const searchData = this.props.searchData;
    return (
      <div>
        <SearchHeader keyword={keyword} />
        <List 
          keyword={keyword}
          type={type}
          data={searchData}
          onLoadMoreData = {this.handleLoadMoreData.bind(this)}
          onReloadData={this.handleLoadOrReLoadData.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    cityName:state.cityName,
    searchData:state.searchData
  };
}
function mapDispatchToProps(dispatch){
  return{
    searchActions:bindActionCreators(searchDataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
