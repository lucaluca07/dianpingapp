import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as getFirstPageDataActions from '../../actions/getFirstPage'

import HeadLineComponent from "../../component/HeadLine";
import Category from '../../component/Category';
import HomeHeader from '../../component/HomeHeader';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends Component{
  componentDidMount(){
    const { firstPageData, cityName, actions } = this.props ;
    const { fetchAD, fetchHeadlineIfNeeded, fetchList } = actions ;
    const { currentPage } = firstPageData ;
    const page = currentPage||0 ;
    fetchAD() ;
    fetchHeadlineIfNeeded() ;
    fetchList(cityName,page) ;
  }

  render(){
    const { firstPageData, cityName, actions } = this.props ;
    const { adFetching, headlineFetching, listFetching } = firstPageData
    const { headlineData, adData, listData, hasMoreList, currentPage } = firstPageData ;
    const { fetchAD, fetchHeadlineIfNeeded, fetchList } = actions ;
    const isFetching = adFetching||headlineFetching;
    const headline = headlineData&&headlineData.list
    return <div>
        <HomeHeader cityName={cityName} />
        <Category />
        {isFetching
          ? <div>Loading...</div>
          : <div>
              {headline&&headline.length 
                ? <HeadLineComponent data={headline} />
                : ""
              }
              <Ad data={adData}/>
              <List 
                data={listData} 
                hasMore={hasMoreList} 
                page={currentPage} 
                cityName={cityName} 
                isLoaddingMore={listFetching}
                fetchList={fetchList}
              />
            </div>
        }      
      </div>;
  }
}

// - - - - - - - - - - - react redux 绑定 - - - - - - - - - - -
function mapStateToProps(state) {
  return {
    userinfo:state.userinfo,
    cityName:state.cityName,
    firstPageData:state.firstPageDate,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(getFirstPageDataActions,dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)