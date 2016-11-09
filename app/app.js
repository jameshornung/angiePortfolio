// Include the Main React Dependencies
// var React = require('react');
// var ReactDOM = require('react-dom');

// Include the Main Component
// var Main = require('./components/Main')

// This code here allows us to render our main component (in this case "Main")
// ReactDOM.render(

// 	<Main />,
// 	document.getElementById('app')
// )

import React from 'react'
import { render } from 'react-dom'
import Main from './Components/Main'
import Resume from './Components/Resume'
// import About from './modules/About'
// import Repos from './modules/Repos'
import { Router, Route, hashHistory } from 'react-router'
// render(<App/>, document.getElementById('app'))

render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/resume" component={Resume} />
    
  </Router>
), document.getElementById('app'))