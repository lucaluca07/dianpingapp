import React, {Component} from 'react'

export default class Input extends Component{
  constructor(){
    super()
    this.state = {text:''}
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this)
  }
  handleTextChange(e){
    this.setState({text:e.target.value})
  }
  handleOnKeyUp(e){
    if(e.keyCode === 13 && this.state.text.trim()){
      this.props.onSubmit(this.state.text)
      this.setState({text:''})
    }
  }
  render(){
    return(
      <div className='input-box'>
        <input type="text"
               value={this.state.text}
               onChange={this.handleTextChange}
               onKeyUp={this.handleOnKeyUp}
        />
      </div>
    )
  }
}