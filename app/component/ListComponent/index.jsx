import React from "react";
import Item from "./Item";
import "./style.less";

//店铺列表组件
export default class ListComponent extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="list-component">
        {data.map((val, index) => (
          <Item key={index} data={val} shopId={val.shopId} />
        ))}
      </div>
    );
  }
}
