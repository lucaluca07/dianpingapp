import React from 'react'
import './style.less'
/*
* Header组件
* */
export default class HomeHeader extends React.Component {
  render() {
    return (
      <div className='clear-fix home-header'>
        <div className='float-left home-header-left'>
          <span>{this.props.cityName}</span>
          &nbsp;
          <i className='icon-angle-down'></i>
        </div>
        <div className='float-right home-header-right'>
          <i className='icon-user'></i>
        </div>
        <div className='home-header-middle'>
          <div className='search-container'>
            <i className='icon-search'></i>
            <input type="text" placeholder='输入关键字'/>
          </div>
        </div>
      </div>
    )
  }
}