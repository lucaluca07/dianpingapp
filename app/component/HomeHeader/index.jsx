import React from 'react'
import './style.less'
import { Link } from 'react-router-dom'
/*
* 头部组件，图标使用的icomoon
* */
export default class HomeHeader extends React.Component {
  render() {
    return (
      <div className='clear-fix home-header'>
        <Link to="/city" className='float-left home-header-left'>
          <span>{this.props.cityName}</span>
          &nbsp;
          <i className='icon-angle-down'></i>
        </Link>
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