import React from 'react'
import ReactSwipe from 'react-swipe';

import './style.less'
/*
* 点评头条组件
* */
export default class HeadLineComponent extends React.Component {
  render() {
    const opt = {
      auto: 1000,
      speed: 1000,
      disableScroll: true
    }
    return (
      <div className='headline'>
        <div className='headline-title'>
        </div>
        <div className='headline-swipe'>
          <ReactSwipe swipeOptions={opt}>
            {this.props.data.map((val, index) => (
              <div className='swipe-item' key={index}>
                <div className='swipe-title'>
                  {/*标题*/}
                  <span className='title-text'>{val.title}</span>
                </div>
                {/*图片*/}
                <img className='swipe-pic' src={val.pic} alt=""/>
              </div>
            ))}
          </ReactSwipe>
        </div>
      </div>
    )
  }
}