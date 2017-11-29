import React from 'react'
import './style.less'

export default class Header extends React.Component {

  handleClick(){
    window.history.back()
  }
  render() {
    return (
      <div className='header'>
        <span className='header-back' onClick={this.handleClick.bind(this)}>
          <i className="icon-chevron-left"></i>
        </span>
        <h3 className='header-title'>{this.props.title}</h3>
      </div>
    )
  }
}