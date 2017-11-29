import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from '../container/Home'
import City from '../container/City'
import Detail from '../container/Detail'
import Search from '../container/Search'
import User from '../container/User'
import NotFound from '../container/404'

export default class RouterMap extends React.Component{
  render(){
    return(
      <Router>
        <div>
          {/*<ul className='clear-fix'>*/}
            {/*<li className='float-left'><Link to="/">Home</Link></li>*/}
            {/*<li className='float-left'><Link to="/city">City</Link></li>*/}
            {/*<li className='float-left'><Link to="/detail">Detail</Link></li>*/}
            {/*<li className='float-left'><Link to="/search">Search</Link></li>*/}
            {/*<li className='float-left'><Link to="/user">User</Link></li>*/}
            {/*<li className='float-left'><Link to="/use">NotFound</Link></li>*/}
          {/*</ul>*/}

          {/*<hr/>*/}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/city" component={City}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/search" component={Search}/>
            <Route path="/user" component={User}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }

}


