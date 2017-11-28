import React from 'react'
import HeadLineComponent from '../../../component/HeadLine'
import {getHeadLineData} from "../../../fetch/home/index";

export default class HeadLine extends React.Component {
  constructor() {
    super()
    this.state = {data: []}
  }

  componentDidMount() {
    const result = getHeadLineData()
    result.then((res) => (res.json()))
      .then((json) => {
        if (json.data && json.data.list) {
          this.setState({data: json.data.list})
        }
      })
  }

  render() {
    return (
      <div>
        {
          this.state.data.length ?
            < HeadLineComponent data={this.state.data}/>
            : <div>Loadding...</div>
        }
      </div>
    )
  }
}