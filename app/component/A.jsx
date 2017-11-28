import React,{Component} from 'react'

export default class A extends Component{

  render(){
    return(
      <h3>{this.props.userinfo.name}</h3>
    )
  }
}