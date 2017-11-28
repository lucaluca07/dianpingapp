import React from 'react'
import ReactSwipe from 'react-swipe';

import './style.less'

export default class HeadLineComponent extends React.Component {
  render() {
    const opt = {
      auto: 1000,
      disableScroll: true,
      transitionEnd: function () {
        console.log(111)
      }

    }
    return (
      <div className='clear-fix headline'>
        <div className='float-left'>
          点评头条
        </div>
        <div className='headline-swipe'>
          <ReactSwipe swipeOptions={opt}>
            {this.props.data.map((val, index) => (
              <div className='clear-fix' key={index}>
                <div className='swipe-item'>
                  <div>{val.title}</div>
                  <img className='float-right' src={val.pic} alt=""/>
                </div>
              </div>
            ))}
          </ReactSwipe>
        </div>
      </div>
    )
  }
}