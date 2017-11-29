import React from 'react'
import './style.less'

//加载更多组件
export default class LoadMore extends React.Component {

  componentDidMount(){
    const loadMoreFn = this.props.onLoadMore
    const loadMore = this.refs.loadMore

    let timeoutId
    function callback() {
      //获取加载更多 Dom 距离屏幕顶端的距离
      const top = loadMore.getBoundingClientRect().top
      //屏幕的高度
      const windowHeight = window.screen.height
      if(top && top < windowHeight){
        loadMoreFn()
      }
    }
    //滚动到底部加载更多
    window.addEventListener('scroll',function () {
      if(this.props.isLoaddingMore){
        return
      }
      if(timeoutId){
        clearTimeout(timeoutId)
      }
      //节流
      timeoutId = setTimeout(callback,50)
    }.bind(this),false)
  }

  handleLoadMore(){
    this.props.onLoadMore()
  }

  render() {
    const isLoadMore = this.props.isLoadMore
    return (
      <div className='load-more' ref='loadMore'>
        {
          isLoadMore
              ? <span>正在加载</span>
              : <span onClick={this.handleLoadMore.bind(this)}>加载更多</span> //点击按钮 加载更多
        }
      </div>
    )
  }
}