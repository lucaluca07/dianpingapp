import React from 'react'
import {withRouter} from 'react-router-dom'
import SearchInput from '../SearchInput'
import './style.less'

//搜索结果页头部

class SearchHeader extends React.Component {
  handleClick(){
    window.history.back()//返回上一页
  }
  handleEnter(value){
    if(this.props.keyword === value){
      return
    }
    this.props.history.push(`/search/all/${value}`)
  }
  render() {
    return (
      <div className='search-header'>
        <span onClick={this.handleClick.bind(this)} className='search-header-back'>
          <i className="icon-chevron-left"></i>
        </span>
        <div className='input-container'>
          <i className='icon-search'></i>
          <SearchInput searchWord={this.props.keyword} onEnter={this.handleEnter.bind(this)}/>
        </div>
      </div>
    )
  }
}
export default withRouter(SearchHeader)