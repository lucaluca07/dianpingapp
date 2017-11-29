import React from 'react'
import './style.less'

/*
* 超值特惠 天天立减 通用组件 不含标题
* */
export default class HomeAd extends React.Component {
  render() {
    const data = this.props.data ? this.props.data : []
    return (
      <div className='home-ad'>
        {data.map((val, index) => (
          <div className='ad-item' key={index}>
            <div className='ad-img'>
              <img src={val.imageUrl} alt=""/>
            </div>
            <p className='ad-title'>{val.shortTitle}</p>
            <div>
              <span className='ad-price'>￥{parseInt(val.price)}</span>
              {/*如果有tag显示tag,没有tag显示原始价格*/}
              {val.tag == ''
                ? <span className='ad-market-price'>￥{parseInt(val.markPrice)}</span>
                : <span className='ad-tag'>{val.tag}</span>}
            </div>
          </div>
        ))}
      </div>

    )
  }
}