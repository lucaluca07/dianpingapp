import React from 'react'
import './style.less'

export default class Star extends React.Component {
  render() {
    let star = this.props.star
    if (star > 5) {
      star = star % 5
    }
    return (
      <div className='star-container'>
        {
          [1,2,3,4,5].map(val => {
            let starClass = star >= val? ' light' : ''
            return(
              <i key={val} className={`icon-star${starClass}`}></i>
            )
          })
        }
      </div>
    )
  }
}