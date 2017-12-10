import React from 'react'
import './style.less'

export default class Star extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      star : 0,
      onOff:false
    }
  }
  componentDidMount(){
    this.setState({
      star:this.props.star,
      onOff:this.props.onOff
    })
  }

  handleClick(star){
    this.setState({star:star})
  }
  render() {
    let star = this.state.star
    if (star > 5) {
      star = star % 5
    }
    return (
      <div className='star-container'>
        {
          [1,2,3,4,5].map(val => {
            let starClass = star >= val? ' light' : ''
            return(
              <i key={val} className={`icon-star${starClass}`}
              onClick = {this.state.onOff?this.handleClick.bind(this,val):null}
              ></i>
            )
          })
        }
      </div>
    )
  }
}