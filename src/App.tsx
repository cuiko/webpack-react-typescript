import React from 'react'
import { Route, HashRouter as Router, Redirect } from 'react-router-dom'
import routes from '@/routes/index'
import './App.scss'

const App: React.FC = () => (
  <Router>
    {
      routes.map((route, i) => (
        <Route key={i} exact={route.exact} path={route.path} component={route.compontent} />
      ))
    }
    <Redirect to="/Home" from="/" />
  </Router>
)

export default App