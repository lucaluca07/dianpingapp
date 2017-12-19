import React from "react";
import ReactSwipe from "react-swipe";
import { Link } from "react-router-dom";

import "./style.less";
import meishi from "./categoryIcon/01meishiicon_1.png";
import dianying from "./categoryIcon/01电影icon_2.png";
import jiudian from "./categoryIcon/01酒店icon_3.png";
import xiuxian from "./categoryIcon/01休闲娱乐icon_4.png";
import waimai from "./categoryIcon/01外卖icon_5.png";
import huoguo from "./categoryIcon/01火锅icon_6.png";
import liren from "./categoryIcon/01丽人icon_7.png";
import dujia from "./categoryIcon/01度假出行icon_8.png";
import zuliao from "./categoryIcon/01足疗按摩icon_9.png";
import zhoubianyou from "./categoryIcon/01周边游icon_10png.png";
import jingdian from "./categoryIcon/02景点icon_1.png";
import ktv from "./categoryIcon/02KTVicon_2.png";
import gouwu from "./categoryIcon/02购物icon_3.png";
import shenghuo from "./categoryIcon/02生活服务icon_4.png";
import yundong from "./categoryIcon/02运动健身icon_5.png";
import meifa from "./categoryIcon/02美发icon_6.png";
import qinzi from "./categoryIcon/02亲子icon_7.png";
import xiaochi from "./categoryIcon/02小吃快餐icon_8.png";
import zizhucan from "./categoryIcon/02自助餐icon_9.png";
import jiuba from "./categoryIcon/02酒吧icon_10.png";
import ribancai from "./categoryIcon/03日本菜icon_1.png";
import spa from "./categoryIcon/03SPAicon_2.png";
import jiehun from "./categoryIcon/03结婚icon_3.png";
import xuexi from "./categoryIcon/03学习培训icon_4.png";
import xican from "./categoryIcon/03西餐icon_5.png";
import huoche from "./categoryIcon/03火车机票icon_6.png";
import shaokao from "./categoryIcon/03烧烤icon_7.png";
import jiazhuang from "./categoryIcon/03家装icon_8.png";
import chongwu from "./categoryIcon/03宠物icon_9.png";
import quanbu from "./categoryIcon/03全部分类icon_10.png";

/*
* 顶层轮播的组件
* 轮播图使用的是 react-swipe 插件
* */

export default class Category extends React.Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }

  render() {
    //ReactSwipe配置项
    const opt = {
      continuous: false,
      callback: index => {
        this.setState({ index: index });
      }
    };
    return (
      <div className="home-category">
        <ReactSwipe className="carousel" swipeOptions={opt}>
          <div className="category-item">
            <ul className="clear-fix">
              <Link to="/search/meishi">
                <li className="float-left">
                  <div>
                    <img src={meishi} />
                  </div>
                  <span>美食</span>
                </li>
              </Link>
              <Link to="/search/dianying">
                <li className="float-left">
                  <div>
                    <img src={dianying} />
                  </div>
                  <span>电影</span>
                </li>
              </Link>
              <Link to="/search/jiudian">
                <li className="float-left">
                  <div>
                    <img src={jiudian} />
                  </div>
                  <span>酒店</span>
                </li>
              </Link>
              <Link to="/search/xiuxian">
                <li className="float-left">
                  <div>
                    <img src={xiuxian} />
                  </div>
                  <span>休闲娱乐</span>
                </li>
              </Link>
              <Link to="/search/waimai">
                <li className="float-left">
                  <div>
                    <img src={waimai} />
                  </div>
                  <span>外卖</span>
                </li>
              </Link>
              <Link to="/search/huoguo">
                <li className="float-left">
                  <div>
                    <img src={huoguo} />
                  </div>
                  <span>火锅</span>
                </li>
              </Link>
              <Link to="/search/liren">
                <li className="float-left">
                  <div>
                    <img src={liren} />
                  </div>
                  <span>丽人</span>
                </li>
              </Link>
              <Link to="/search/dujia">
                <li className="float-left">
                  <div>
                    <img src={dujia} />
                  </div>
                  <span>度假旅行</span>
                </li>
              </Link>
              <Link to="/search/zuliao">
                <li className="float-left">
                  <div>
                    <img src={zuliao} />
                  </div>
                  <span>足疗按摩</span>
                </li>
              </Link>
              <Link to="/search/zhoubianyou">
                <li className="float-left">
                  <div>
                    <img src={zhoubianyou} />
                  </div>
                  <span>周边游</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="category-item">
            <ul>
              <Link to="/search/jingdian">
                <li className="float-left">
                  <div>
                    <img src={jingdian} />
                  </div>
                  <span>景点</span>
                </li>
              </Link>
              <Link to="/search/ktv">
                <li className="float-left">
                  <div>
                    <img src={ktv} />
                  </div>
                  <span>KTV</span>
                </li>
              </Link>
              <Link to="/search/gouwu">
                <li className="float-left">
                  <div>
                    <img src={gouwu} />
                  </div>
                  <span>购物</span>
                </li>
              </Link>
              <Link to="/search/shenghuo">
                <li className="float-left">
                  <div>
                    <img src={shenghuo} />
                  </div>
                  <span>生活服务</span>
                </li>
              </Link>
              <Link to="/search/yundong">
                <li className="float-left">
                  <div>
                    <img src={yundong} />
                  </div>
                  <span>运动健身</span>
                </li>
              </Link>
              <Link to="/search/meifa">
                <li className="float-left">
                  <div>
                    <img src={meifa} />
                  </div>
                  <span>美发</span>
                </li>
              </Link>
              <Link to="/search/qinzi">
                <li className="float-left">
                  <div>
                    <img src={qinzi} />
                  </div>
                  <span>亲子</span>
                </li>
              </Link>
              <Link to="/search/xiaochi">
                <li className="float-left">
                  <div>
                    <img src={xiaochi} />
                  </div>
                  <span>小吃快餐</span>
                </li>
              </Link>
              <Link to="/search/zizhucan">
                <li className="float-left">
                  <div>
                    <img src={zizhucan} />
                  </div>
                  <span>自助餐</span>
                </li>
              </Link>
              <Link to="/search/jiuba">
                <li className="float-left">
                  <div>
                    <img src={jiuba} />
                  </div>
                  <span>酒吧</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="category-item">
            <ul>
              <Link to="/search/ribancai">
                <li className="float-left">
                  <div>
                    <img src={ribancai} />
                  </div>
                  <span>日本菜</span>
                </li>
              </Link>
              <Link to="/search/spa">
                <li className="float-left">
                  <div>
                    <img src={spa} />
                  </div>
                  <span>SPA</span>
                </li>
              </Link>
              <Link to="/search/jiehun">
                <li className="float-left">
                  <div>
                    <img src={jiehun} />
                  </div>
                  <span>结婚</span>
                </li>
              </Link>
              <Link to="/search/xuexi">
                <li className="float-left">
                  <div>
                    <img src={xuexi} />
                  </div>
                  <span>学习培训</span>
                </li>
              </Link>
              <Link to="/search/xican">
                <li className="float-left">
                  <div>
                    <img src={xican} />
                  </div>
                  <span>西餐</span>
                </li>
              </Link>
              <Link to="/search/huoche">
                <li className="float-left">
                  <div>
                    <img src={huoche} />
                  </div>
                  <span>火车机票</span>
                </li>
              </Link>
              <Link to="/search/shaokao">
                <li className="float-left">
                  <div>
                    <img src={shaokao} />
                  </div>
                  <span>烧烤</span>
                </li>
              </Link>
              <Link to="/search/jiazhuang">
                <li className="float-left">
                  <div>
                    <img src={jiazhuang} />
                  </div>
                  <span>家装</span>
                </li>
              </Link>
              <Link to="/search/chongwu">
                <li className="float-left">
                  <div>
                    <img src={chongwu} />
                  </div>
                  <span>宠物</span>
                </li>
              </Link>
              <Link to="/search/quanbu">
                <li className="float-left">
                  <div>
                    <img src={quanbu} />
                  </div>
                  <span>全部分类</span>
                </li>
              </Link>
            </ul>
          </div>
        </ReactSwipe>
        <div className="category-index">
          <ul className="clear-fix">
            {/*//为当前激活的dot添加 seleted 类*/}
            <li
              className={
                this.state.index === 0 ? "seleted float-left" : "float-left"
              }
            />
            <li
              className={
                this.state.index === 1 ? "seleted float-left" : "float-left"
              }
            />
            <li
              className={
                this.state.index === 2 ? "seleted float-left" : "float-left"
              }
            />
          </ul>
        </div>
      </div>
    );
  }
}
