import React from 'react'
import {Link} from 'react-router-dom'
import Assess from '../Assess'
import './style.less'

export default class DealItemComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {showAssess:false}
  }
  handleBtnClick(){
    this.setState({showAssess:true})
  }
  hanleClick(){
    this.setState({showAssess:false})
  }
  render() {
    const deal = this.props.data
    return (
      <div className='deal-item'>
        <Link to={'/detail/' + deal.shopId} className='deal-left'>
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
          <button className='deal-button' onClick={this.handleBtnClick.bind(this)}>评价</button>
        </div>
        {this.state.showAssess
          ? <Assess data={deal} onClick={this.hanleClick.bind(this)}/>
          : ''
        }

      </div>
    )
  }
}