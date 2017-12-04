import React from 'react'
import InfoComponent from '../../../component/InfoComponent'
import {getShopInfo} from "../../../fetch/detail/index";

export default class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {info: false}
  }

  componentDidMount() {
    this.getInfo()
  }

  getInfo() {
    const id = this.props.id
    const result = getShopInfo(id)
    result
      .then(res => res.json())
      .then(json => {
        this.setState({info: json.data})
      })
  }

  render() {
    const info = this.state.info
    return (
      <div>
        {
          info
            ? <InfoComponent data={info}/>
            : ''
        }

      </div>
    )
  }
}