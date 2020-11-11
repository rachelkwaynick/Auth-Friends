import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import EditFriend from './components/EditFriend';

import './App.css';
import { axiosWithAuth } from './utilities/axiosWithAuth';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(req => {
        localStorage.removeItem('token');
        setLoggedIn(false)
      })
      .catch(err=>console.log(err))
  }

  return (
    <Router>
      <ul>
        {!isLoggedIn ? <li><Link to='/login'>Login</Link></li> : <div></div>}
        <li>
          <Link to='#' onClick={logout}>Logout</Link>
        </li>

        { isLoggedIn ? <li><Link to='/friendslist'>Friends List</Link></li> : <div></div>}
      </ul>

      <Switch>
        <PrivateRoute path='/editfriend' component={EditFriend} />
        <PrivateRoute path='/friendslist' component={FriendsList} />
        <Route path='/login' render={(props) => {
          return <Login {...props} setLoggedIn={setLoggedIn} />
        }} /> 
        {/* <Route component={Login} /> */}
      </Switch>
    </Router>
  );
}

export default App;
