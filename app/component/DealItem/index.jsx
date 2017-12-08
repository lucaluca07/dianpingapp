import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'

export default class DealItemComponent extends React.Component {

  render() {
    const deal = this.props.data
    console.log(deal)
    return (
      <div className='deal-item'>
        <Link to={'/detail/'+deal.shopId} className='deal-left'>
          <div className='deal-pic'>
            <img src={deal.defaultPic} alt=""/>
          </div>
          <div className='deal-info'>
            <div className='shop-name'>{deal.shopName}</div>
            <div className='goods-name'>{deal.goodsName}</div>
            <div className='goods-number'>数量:{deal.goodsNumber}</div>
            <div className='price-count'> 价格:{deal.priceCount}</div>
          </div>
        </Link>
        <div className='deal-right'>
          <button className='deal-button'>评价</button>
        </div>
      </div>
    )
  }
}