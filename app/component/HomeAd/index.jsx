import React from 'react'
import './style.less'

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