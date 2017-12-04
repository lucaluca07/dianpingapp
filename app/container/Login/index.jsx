import React from 'react'
import {connect} from 'react-redux'

class Login extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    if(this.props.userinfo.username){
      this.props.history.push('/user')
    }
  }
  render() {
    console.log(this.props)
    return (
      <h3>
        Login
      </h3>
    )
  }
}
function mapStateToProps(state) {
  return{ userinfo: state.userinfo }
}
function mapDispatchToProps(dispatch) {
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)