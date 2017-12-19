import React from "react";
import Star from "../Star";
import "./style.less";

export default class CommentList extends React.Component {
  render() {
    return (
      <div className="comment-list">
        <h3 className="comment-list-title">
          热门评论({this.props.commentCount})
        </h3>
        {this.props.data.map((val, index) => (
          <div className="list-item" key={index}>
            <div className="list-user">
              <span>{val.username}</span>
              <Star star={val.star} />
            </div>
            <div className="comment">{val.comment}</div>
          </div>
        ))}
      </div>
    );
  }
}
