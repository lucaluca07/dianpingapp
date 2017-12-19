import React from "react";
import DealListComponent from "../../../component/DealList";
import { getDealList } from "../../../fetch/user/index";
import { postAssess } from "../../../fetch/user/index";

export default class DealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { delaList: false, hasMore: false };
  }

  componentDidMount() {
    //获取用户订单
    const username = this.props.username;
    const result = getDealList(username);
    this.handleResult(result);
  }

  //提交评论组件
  handleSubmit(id, value, star, callback) {
    const result = postAssess(id, value, star);
    result.then(res => res.json()).then(json => {
      if (json.code === 200) {
        callback(); //评论成功之后回调函数
      }
    });
  }
  //处理数据
  handleResult(result) {
    result
      .then(res => res.json())
      .then(json =>
        this.setState({ delaList: json.data.list, hasMore: json.data.hasMore })
      );
  }

  render() {
    const dealList = this.state.delaList;
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
