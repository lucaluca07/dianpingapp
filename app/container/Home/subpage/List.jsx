import React from 'react'
import ListComponent from '../../../component/ListComponent'
import LoadMore from '../../../component/LoadMore'
import {getListData} from "../../../fetch/home/index"

export default class List extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],                   //猜你喜欢数据列表
      hasMore: false,            //是否有更多数据，有的话可以 加载更多
      isLoaddingMore: false,     //是否正在加载数据，true 不会继续加载新的数据
      page: 1                     //当前加载页面的数据
    }
  }

  componentDidMount() {
    this.loadFirstPageData()
  }

  //加载首屏数据
  loadFirstPageData() {
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)
    const firstPageState = (data) => {
      this.setState({hasMore: data.hasMore, data: this.state.data.concat(data.list)})
    }
    this.resultHandle(result,firstPageState)
  }

  //加载更多数据
  loadMoreData() {
    this.setState({isLoaddingMore: true})
    const cityName = this.props.cityName
    const page = this.state.page
    const result = getListData(cityName, page)
    const morePageState = (data) => {
      this.setState({
        hasMore: data.hasMore,
        data: this.state.data.concat(data.list),
        isLoaddingMore: false,
        page: this.state.page + 1
      })
    }
    this.resultHandle(result,morePageState)
  }

  //处理数据，stateFn是回调函数，请求成功后传入一个函数 setState
  resultHandle(result, stateFn) {
    result.then((res) => res.json())
      .then(json => json.data)
      .then(data => {
        stateFn(data)
      })
  }

  render() {
    return (
      <div>
        <p className='list-title'>
          猜你喜欢
        </p>
        <div>
          {this.state.data.length
            ? <ListComponent data={this.state.data}/>
            : ''}
        </div>
        {
          this.state.hasMore
            ? <LoadMore
              isLoadMore={this.state.isLoaddingMore}
              onLoadMore={this.loadMoreData.bind(this)}/>
            : ''
        }

      </div>
    )
  }
}