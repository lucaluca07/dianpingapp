import React, {Component} from 'react'

export default class Detail extends Component{
  render(){
    console.log(this.props)
    const shopId = this.props.match.params.shopId
    return(
      <div>{ shopId }</div>
    )
  }
}