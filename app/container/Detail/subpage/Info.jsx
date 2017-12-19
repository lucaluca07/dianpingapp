import React from "react";
import InfoComponent from "../../../component/InfoComponent";
import { withRouter } from "react-router-dom";
import { getShopInfo } from "../../../fetch/detail/index";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: false };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    const id = this.props.id;
    const result = getShopInfo(id);
    result.then(res => res.json()).then(json => {
      this.setState({ info: json.data });
    });
  }
  handleBuy() {
    console.log("买单成功");
    this.props.history.push("/login/" + encodeURI("detail&&" + this.props.id));
  }
  render() {
    const info = this.state.info;
    return (
      <div>
        {info ? (
          <InfoComponent
            data={info}
            onClickBuyBtn={this.handleBuy.bind(this)}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default withRouter(Info);
