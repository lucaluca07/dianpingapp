import React from "react";
import HomeAd from "../../../component/HomeAd";
import { getAdData } from "../../../fetch/home/index";
import "./style.less";

//超值特惠 天天立减
export default class Ad extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        {
          data
            ? <div>
              <div>
                {/*标题*/}
                <div className="ad ">
                  <span className="czth">超值特惠 </span>
                  <span className="more">
                    更多优惠 <i className="icon-angle-right" />
                  </span>
                </div>
                <HomeAd data={data.czth} />
              </div>
              <div>
                {/*标题*/}
                <div className="ad ">
                  <span className="ttlj">天天立减</span>
                  <span className="more">
                    更多优惠 <i className="icon-angle-right" />
                  </span>
                </div>
                <HomeAd data={data.ttlj} />
              </div>
            </div>
            : ""
        }
        
      </div>
    );
  }
}
