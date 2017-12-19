import React from "react";
import "./style.less";

//搜索的输入框组件，约束性组件

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  componentDidMount() {
    const searchWord = this.props.searchWord;
    if (searchWord) {
      this.setState({ value: searchWord });
    }
  }
  handleChange(e) {
    this.setState({ value: e.target.value.trim() });
  }

  handleKeyUp(e) {
    //点击的不是enter键返回
    if (e.keyCode !== 13) {
      return;
    }
    //输入的值空返回
    if (!this.state.value.trim()) {
      return;
    }
    this.props.onEnter(this.state.value);
  }

  render() {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="请输入关键字搜索"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onKeyUp={this.handleKeyUp.bind(this)}
      />
    );
  }
}
