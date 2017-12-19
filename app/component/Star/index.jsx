import React from "react";
import "./style.less";

/*
* 评价 星星组件
* */
export default class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: 0, //星星的数量
      onOff: false //星星能不能点击，true可以点击
    };
  }
  componentDidMount() {
    //获取调用组件传入的值
    this.setState({
      star: this.props.star,
      onOff: this.props.onOff
    });
  }

  //点击星星评分，并把评分传给父组件
  handleClick(star) {
    this.setState({ star: star });
    this.props.onSetStar(star);
  }
  render() {
    let star = this.state.star;
    if (star > 5) {
      star = star % 5;
    }
    return (
      <div className="star-container">
        {[1, 2, 3, 4, 5].map(val => {
          let starClass = star >= val ? " light" : "";
          return (
            <i
              key={val}
              className={`icon-star${starClass}`}
              onClick={
                this.state.onOff ? this.handleClick.bind(this, val) : null
              }
            />
          );
        })}
      </div>
    );
  }
}
