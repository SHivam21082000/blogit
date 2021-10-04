import React from 'react'
import Navbar from './components/navbar'
import Write from './components/Write'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Settings from './pages/Settings/Settings'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Single from './components/Single'
const App = () => {
  const user = true;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/settings">
        {user ? <Settings/> : <Register />}
          </Route>
          <Route path="/login">
          {user ? <Home/> : <Login />}
          </Route>
          <Route path="/register">
            {user ? <Home/> : <Register />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          <Route path="/write">
          {user ? <Write/> : <Register />}
          </Route>
      </Switch>
    </Router>
  )
}

export default App

