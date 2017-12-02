import React, {Component} from 'react'
import SearchHeader from '../../component/SearchHeader'
import List from './subpage/List'

export default class Search extends Component{

  render(){
    //获取url中的参数
    const params = this.props.match.params
    const type = params.type
    const keyword = params.keyword
    return(
      <div>
        <SearchHeader keyword={keyword}/>
        <List type={type} keyword={keyword}/>
      </div>
    )
  }
}