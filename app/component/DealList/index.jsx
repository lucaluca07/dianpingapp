import React from "react";
import DealItemComponent from "./DealItem";
import "./style.less";

export default class DealListComponent extends React.Component {
  render() {
    const dealList = this.props.dealList;
    return (
      <div className="deal-list">
        <h3 className="deal-list-title">我的订单</h3>
        {dealList.length
          ? dealList.map((item, index) => (
              <DealItemComponent
                key={index}
                data={item}
                onSubmit={this.props.onSubmit}
              />
            ))
          : ""}
      </div>
    );
  }
}
