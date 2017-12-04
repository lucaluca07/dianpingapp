import React from 'react'
import Star from '../Star'
import './style.less'

export default class InfoComponent extends React.Component{

  render(){
    const data = this.props.data
    return(
      <div className='info'>
        <div className='info-header'>
          <div className='header-img'>
            <img src={data.defaultPic} alt=""/>
          </div>
          <div className='info-shop-name'>
            <h3 className='shop-name'>{data.shopName}</h3>
            <div className='shop-info'>
              <div className='shop-star'>
                <Star star={data.star}/>
                </div>
              <div className='info-comment-count'>{data.commentCount}条</div>
              <div className='info-price'>￥{data.price}/人</div>
            </div>
            <div className='info-about-type'>{data.aboutType}</div>
          </div>
        </div>
        <div className='btn-box'>
          <span className='info-desc'>{data.desc}</span>
          <button className='info-btn'>收藏</button>
        </div>
        <hr/>
        <div className='shop-address'>
          <i className='icon-map-marker'></i>
          <span>
            {data.address}
            </span>
        </div>
        <div className='shop-tel'>
          <i className='icon-phone'></i>
          <span>{data.tel}</span>
        </div>
        <div className='info-businesstime'>
          <span>
            {data.businesstime}
          </span>
        </div>
      </div>
    )
  }
}