import React from "react";
import DealListComponent from "../../../component/DealList";
import { getDealList } from "../../../fetch/user/index";
import { postAssess } from "../../../fetch/user/index";

export default class DealList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { delaList: false, hasMore: false };
  // }

  //提交评论组件
  handleSubmit(id, value, star, callback) {
    const {assessCode,postAssess,dealId} = this.props
    postAssess(id, value, star,callback);
  }

  render() {
    const {dealList} = this.props
    return (
      <div>
        {dealList ? (
          <DealListComponent
            dealList={dealList}
            onSubmit={this.handleSubmit.bind(this)}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
