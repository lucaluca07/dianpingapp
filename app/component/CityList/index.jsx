import React from "react";
import "./style.less";

export default class CityList extends React.Component {
  //点击修改城市
  handleClick(newCity) {
    this.props.onChangeCity(newCity);
  }

  render() {
    //模拟城市数据
    const cityList = [
      "北京",
      "天津",
      "上海",
      "南京",
      "杭州",
      "合肥",
      "福州",
      "厦门",
      "济南",
      "郑州",
      "武汉",
      "广州",
      "深圳",
      "成都",
      "无锡"
    ];
    return (
      <div className="city-list">
        <h3 className="city-list-title">热门城市</h3>
        <ul className="city-list-container">
          {cityList.map((city, index) => (
            <li
              className="city-list-item"
              key={index}
              onClick={this.handleClick.bind(this, city)}
            >
              <span>{city}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
