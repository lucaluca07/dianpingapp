import React,{Component} from 'react'

export default class C extends Component{

  render(){
    return(
      <button onClick={() => (this.props.actions.changeInfo({name:123, city:"北京"}))}>修改</button>
    )
  }
}