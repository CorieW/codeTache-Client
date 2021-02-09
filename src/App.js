import { useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [userData, setUserData] = useState("Something")

  return (
    <div className="app">
      <Nav loggedIn={ userData !== undefined } />
      <Sidebar loggedIn={ userData !== undefined } />
    </div>
  )
}

export default App;
