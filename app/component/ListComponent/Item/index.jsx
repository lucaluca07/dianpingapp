import React from "react";
import { Link } from "react-router-dom";
import "./style.less";

//猜你喜欢单独一个 的组件
export default class Item extends React.Component {
  render() {
    const data = this.props.data;
    const shopId = this.props.shopId;
    return (
      <Link to={`/detail/${shopId}`}>
        <div className="item">
          {/*左边图片区域*/}
          <div className="item-left">
            {/*如果有tag显示tag 没有tag不显示*/}
            {data.pictag.tag ? (
              <span className="pic-tag" style={{ color: data.pictag.color }}>
                {data.pictag.tag}
              </span>
            ) : (
              ""
            )}
            <img className="item-pic" src={data.defaultPic} alt="" />
          </div>
          {/*右边标题价格区域*/}
          <div className="item-right">
            <div className="item-title">
              <h3 className="shop-title">{data.shopName}</h3>
              {/*距离不会null时显示*/}
              {data.distance ? (
                <span className="shop-distance">{data.distance}</span>
              ) : (
                ""
              )}
            </div>
            <div className="shop-name-sub">{data.dealGroupTitle}</div>
            <div className="item-price">
              <div>
                <span className="price-current">￥{data.dealgroupPrice}</span>
                <span className="price-old">￥{data.marketPrice}</span>
              </div>
              <span className="sold-num">{data.salesdesc}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
