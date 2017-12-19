import React from "react";
import { Link } from "react-router-dom";
import Assess from "../Assess/index";
import "./style.less";

export default class DealItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAssess: false, assessState: 0 };
  }
  componentDidMount() {
    //获取订单，并且设置订单的评价状态
    const deal = this.props.data;
    this.setState({ assessState: parseInt(deal.assessState) });
  }
  //点击评价 显示评价页面
  handleBtnClick() {
    this.setState({ showAssess: true });
  }
  //评价取消 不显示评价页面
  hanleClick() {
    this.setState({ showAssess: false });
  }
  //评论成功回调
  assessSuccess() {
    this.setState({ assessState: 1, showAssess: false });
  }
  //点击提交评论
  handleSubmit(id, value, star) {
    this.props.onSubmit(id, value, star, this.assessSuccess.bind(this));
  }
  render() {
    const deal = this.props.data;
    const assessState = this.state.assessState;
    return (
      <div className="deal-item">
        <Link to={"/detail/" + deal.shopId} className="deal-left">
          <div className="deal-pic">
            <img src={deal.defaultPic} alt="" />
          </div>
          <div className="deal-info">
            <div className="shop-name">{deal.shopName}</div>
            <div className="goods-name">{deal.goodsName}</div>
            <div className="goods-number">数量:{deal.goodsNumber}</div>
            <div className="price-count"> 价格:{deal.priceCount}</div>
          </div>
        </Link>
        <div className="deal-right">
          {/*评价状态为0，允许评价，为1表示已评价，不允许评价*/}
          {assessState === 0 ? (
            <button
              className="deal-button"
              onClick={this.handleBtnClick.bind(this)}
            >
              评价
            </button>
          ) : (
            <button className="did-button">已评价</button>
          )}
        </div>
        {this.state.showAssess ? (
          <Assess
            data={deal}
            onClick={this.hanleClick.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
