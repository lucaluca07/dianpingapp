import React, {Component} from 'react'
import Info from  './subpage/Info'
import List from './subpage/List'
import Header from '../../component/Header'

export default class Detail extends Component{
  render(){
    const shopId = this.props.match.params.shopId
    return(
      <div>
        <Header title="商户详情"/>
        <Info id={shopId}/>
        <List id={shopId}/>
      </div>

    )
  }
}