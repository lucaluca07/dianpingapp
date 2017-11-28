import React, {Component} from 'react'
import {render} from 'react-dom'
import App from './container/index'
import {Provider} from 'react-redux'
import configureState from './store'

import './static/css/common.less'
import './static/css/font.css'

const store = configureState()

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)