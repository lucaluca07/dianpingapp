import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as detailActions from '../../actions/getDetaiData'
import Info from "./subpage/Info";
import List from "./subpage/List";
import Header from "../../component/Header";

class Detail extends Component {
  componentWillMount(){
    console.log(this.props)
    const shopId = this.props.match.params.shopId;
    const actions = this.props.actions;
    actions.recoverDetailData();
    actions.fetchCommentList(shopId,0);
    actions.fetchShopInfo(shopId) ;
  }
  render() {
    const shopId = this.props.match.params.shopId;
    const data = this.props.data ;
    const { commentData, commentFetching, currentPage, hasMoreComment, shopinfoData,commentCount } = data ;
    const fetchCommentList = this.props.actions.fetchCommentList ;
    return (
      <div>
        <Header title="商户详情" />
        <Info id={shopId} data={shopinfoData} />
        <List 
          id={shopId} 
          data={commentData}
          page={currentPage}
          hasMore={hasMoreComment}
          isLoaddingMore={commentFetching}
          commentCount={commentCount}
          fetchCommentList={fetchCommentList}
        />
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    data:state.detailData
  }
}
function mapDisPatchToProps(dispatch){
  return{
    actions:bindActionCreators(detailActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDisPatchToProps)(Detail)