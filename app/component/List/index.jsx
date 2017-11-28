import React, {Component} from 'react'

export default class List extends Component{
  handleDeleteClick(id){
    console.log(id)
    this.props.onDeleteClick(id)
  }
  render(){
    return(
      <div>
        {console.log(this.props.list)}
        {this.props.list.map((val) => (
          <li key={val.id} onClick={this.handleDeleteClick.bind(this,val.id)}>
            {val.text}
          </li>
        ))}
      </div>
    )
  }
}