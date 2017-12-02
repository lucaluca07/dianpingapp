import React from 'react'
import { connect } from 'react-redux'
import { getSearchData } from "../../../fetch/search/index"
import ListComponent from '../../../component/ListComponent'
import LoadMore from '../../../component/LoadMore'
import Footer from '../../../component/Footer'

//初始化state
const initialState = {
  data:[],
  hasMore:false,
  isLoaddingMore:false,
  page:1
}

class List extends React.Component {

  constructor(props){
    super(props)
    this.state = initialState
  }
  componentDidMount(){
    this.loadFirstPageData()
  }

  //再次搜索
  componentDidUpdate(prevProps, prevState){
    const keyword = this.props.keyword
    const type = this.props.type
    //搜索条件不变的直接返回
    if(keyword === prevProps.keyword && type === prevProps.type){
      return
    }
    this.setState(initialState)
    this.loadFirstPageData()
  }
  //加载首页数据
  loadFirstPageData(){
    //page,city,type, keyword
    const city = this.props.userinfo.cityName
    const type = this.props.type
    const keyword = this.props.keyword || ''
    const result = getSearchData(0,city,type,keyword)
    this.handleResult(result)
  }
  //加载更多数据
  loadMoreData(){
    this.setState({isLoaddingMore:true})
    const page = this.state.page
    const city = this.props.userinfo.cityName
    const type = this.props.type
    const keyword = this.props.keyword || ''
    const result = getSearchData(page,city,type,keyword)

    //传入handleResult,加载完成之后改变isLoaddingMore为false
    const stateFn = () => {this.setState({isLoaddingMore:false,page:page+1})}
    this.handleResult(result,stateFn)
  }

  //处理搜索结果
  handleResult(result,stateFn){
    result.then(res => res.json())
      .then(json => {
        this.setState({data:this.state.data.concat(json.data.list),hasMore:json.data.hasMore})
        stateFn && stateFn()//加载完成是用来设置state
      })
  }
  render() {
    const hasMore = this.state.hasMore
    const data = this.state.data
    const isLoaddingMore = this.state.isLoaddingMore

    return (
      <div>
        {data.length
          ? <div>
            <ListComponent data={data}/>
            {hasMore
              ?<LoadMore isLoadMore={isLoaddingMore} onLoadMore={this.loadMoreData.bind(this)}/>
              :<Footer/>
            }
          </div>
          : <div>正在加载...</div>
        }
      </div>
    )
  }
}

//- - - - - - - - react-redux 绑定 - - - - - - - - -
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

export default connect(mapStateToProps)(List)