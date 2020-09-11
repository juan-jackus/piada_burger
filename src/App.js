import React, { useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PiadaContext } from './PiadaContext';

import Navbar from './Components/Navbar/Navbar';
import Builder from './Containers/Builder';
import Auth from './Containers/Auth';
import Orders from './Containers/Orders';

const App = () => {
  // Get Login, LogInHandler and ShowLoginForm From Piada Context
  const { login, logInHandler, showLoginForm } = useContext(PiadaContext);

  useEffect(() => {
    const username = localStorage.getItem('username');
    // Persistent Login if user already Log In
    if (username) {
      logInHandler(username);
    }
  }, [logInHandler]);

  return (
    <div id='main-div'>
      <Navbar />
      <Switch>
        {login && <Route path='/orders' component={Orders} />}
        <Route path='/' render={() => <Builder />} />
      </Switch>
      {showLoginForm && <Auth />}

      <Redirect to='/' />
    </div>
  );
};

export default App;
