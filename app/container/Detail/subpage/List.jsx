import React from "react";
import { getComment } from "../../../fetch/detail/index";
import CommentList from "../../../component/CommentList";
import LoadMore from "../../../component/LoadMore";

export default class List extends React.Component {
  loadMoreData() {
    const page = this.props.page;
    const id = this.props.id;
    const fetchCommentList = this.props.fetchCommentList
    fetchCommentList(id,page)
  }

  render() {
    const hasMore = this.props.hasMore;
    const isLoaddingMore = this.props.isLoaddingMore;
    const data = this.props.data;
    const commentCount = this.props.commentCount;
    return (
      <div>
        <CommentList data={data} commentCount={commentCount} />
        {hasMore || isLoaddingMore
          ? <LoadMore isLoadMore={isLoaddingMore} onLoadMore={this.loadMoreData.bind(this)} /> 
          : ""}
      </div>
    );
  }
}
