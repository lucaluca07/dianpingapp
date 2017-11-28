import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userinfoActions from '../actions/userinfo'

import A from '../component/A'
import B from '../component/B'
import C from '../component/C'

class Hello extends Component{

  componentDidMount(){
    console.log(this.props)
    this.props.userinfoActions.login({
      name:'abc',
      city:'上海'
    })
  }
  render(){
    return(
      <div>
        <A userinfo={this.props.userinfo}/>
        <B userinfo={this.props.userinfo}/>
        <C actions={this.props.userinfoActions}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({userinfo:state.userinfo})

const dispathcStateToProps = (dispatch) => ({ userinfoActions:bindActionCreators(userinfoActions, dispatch)})


export default connect(mapStateToProps,dispathcStateToProps)(Hello)