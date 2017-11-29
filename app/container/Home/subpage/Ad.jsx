import React from 'react'
import HomeAd from '../../../component/HomeAd'
import { getAdData } from "../../../fetch/home/index";
import './style.less'

//超值特惠 天天立减
export default class Ad extends React.Component {
  constructor(){
    super()
    this.state = {data : {}}
  }
  componentDidMount(){
    const result = getAdData()
    result.then(res => res.json())
      .then((json => this.setState({data:json.data})))
  }
  render() {
    const data = this.state.data
    return (
      <div>
        <div>
          <div className='ad '>
            <span className='czth'>超值特惠</span>
            <span className='more'>更多优惠 ></span>
          </div>
          <HomeAd data={data.czth}/>
        </div>
        <div>
          <div className='ad '>
            <span className='ttlj'>天天立减</span>
            <span className='more'>更多优惠 ></span>
          </div>
          <HomeAd data={data.ttlj}/>
        </div>
      </div>
    )
  }
}