import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Counter from './counter'

const SubHome = ({ match }) => (
  <div>
    <h1>SubHome {match.params.subHomeId}</h1>
  </div>
)
const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)
const About = () => (
  <div>
    <h1>About</h1>
  </div>
)
const Case = () => <h1>Case</h1>

const App = () => (
  <div>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/case">Case</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/subhome/1">1</Link></li>
          <li><Link to="/subhome/2">2</Link></li>
          <li><Link to="/subhome/3">3</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path={`/subhome/:subHomeId`} component={SubHome} />
        <Route path="/about" component={About}/>
        <Route path="/case" component={Case}/>
        <Route exact path="/counter" component={Counter}/>
        <Route path="/counter/:init" component={Counter}/>
      </div>
    </Router>
  </div>
)

export default App