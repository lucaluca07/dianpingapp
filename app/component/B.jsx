import React,{Component} from 'react'

export default class B extends Component{

  render(){
    return(
      <h3>{this.props.userinfo.city}</h3>
    )
  }
}