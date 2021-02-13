import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav'
import Sidebar from './components/Sidebar/Sidebar'
import Conversation from './components/Conversation/Conversation'

function App() {
  const [userData, setUserData] = useState("Something")

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
  else return null
}

export default App;