import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav'
import Sidebar from './components/Sidebar/Sidebar'
import Conversation from './components/Conversation/Conversation'
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const [userData, setUserData] = useState('A')

  if (userData)
    return (
      <div className="app">
        <Nav />
        <Sidebar />
        <div id='content-container'>
          <Router>
            <Switch>
              <Route path='/conversation' component={Conversation} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  else
    return (
      <div className="app">
        <div id='content-container'>
          <Router>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='reset-password' component={null} />
              <Redirect push to="/login" /> { /** If no route matched, redirect to /login. **/ }
            </Switch>
          </Router>
        </div>
      </div>
    )
}

export default App;