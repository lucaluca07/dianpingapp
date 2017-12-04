import React from 'react'
import {getComment} from "../../../fetch/detail/index"
import CommentList from '../../../component/CommentList'
import LoadMore from '../../../component/LoadMore'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMore: false,
      data: [],
      isLoaddingMore: false,
      page: 1,
      commentCount: 0
    }
  }

  componentDidMount() {
    this.getFirstListPage()
  }

  getFirstListPage() {
    const id = this.props.id
    const result = getComment(id, 0)
    this.handleResult(result)
  }

  loadMoreData() {
    this.setState({isLoaddingMore: true})
    const page = this.state.page
    const id = this.props.id
    const result = getComment(id, page)
    const stateFn = () => {
      this.setState({isLoaddingMore: false, page: this.state.page + 1})
    }
    this.handleResult(result,stateFn)
  }

  handleResult(result, stateFn) {
    result
      .then(res => res.json())
      .then(json => {
        this.setState({
          hasMore: json.hasMore,
          data: this.state.data.concat(json.data),
          commentCount: json.commentCount
        })
        stateFn && stateFn()
      })
  }

  render() {
    console.log(this.state)
    const hasMore = this.state.hasMore
    const page = this.state.page
    const isLoaddingMore = this.state.isLoaddingMore
    const data = this.state.data
    const commentCount = this.state.commentCount
    return (
      <div>
        <CommentList data={data} commentCount={commentCount}/>
        {hasMore
          ? <LoadMore onLoadMore={this.loadMoreData.bind(this)}/>
          : ''}
      </div>
    )
  }
}