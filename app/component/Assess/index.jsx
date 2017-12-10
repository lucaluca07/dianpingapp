import React from 'react'
import Star from '../Star'
import './style.less'

export default class Assess extends React.Component {
  constructor(props){
    super(props)
    this.state = { value:'', star:0 }
  }
  handleClick(){
    this.props.onClick()
  }
  render() {
    const deal = this.props.data
    return (
      <div>
        <div className='assess-component'>
          <div className='assess-header'>
            <span onClick={this.handleClick.bind(this)}>取消</span>
            <span className='assess-title'>评价订单</span>
          </div>
          <div className='assess'>
            <div className='assess-deal-left'>
              <div className='assess-deal-pic'>
                <img src={deal.defaultPic} alt=""/>
              </div>
              <div className='assess-deal-info'>
                <div className='assess-shop-name'>{deal.shopName}</div>
                <div className='assess-goods-name'>{deal.goodsName}</div>
              </div>
            </div>
            <textarea className='content' value={this.state.value}></textarea>
            <Star star={0} onOff={true}/>
            <button className='assess-btn'>
              提交评价
            </button>
          </div>
        </div>
      </div>
    )
  }
}