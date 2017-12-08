import React from 'react'
import DealListComponent from '../../../component/DealList'
import {geDealList} from '../../../fetch/user/index'


export default class DealList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {delaList: false, hasMore: false}
  }

  componentDidMount() {
    const username = this.props.username
    const result = geDealList(username)
    this.handleResult(result)
  }

  handleResult(result) {
    result.then(res => res.json())
      .then(json => this.setState({delaList: json.data.list, hasMore: json.data.hasMore}))
  }

  render() {
    const dealList = this.state.delaList
    return (
      <div>
        {
          dealList
            ? <DealListComponent dealList={dealList}/>
            : <div>暂无订单</div>
        }
      </div>
    )
  }
}