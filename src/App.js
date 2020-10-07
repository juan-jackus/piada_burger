import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PiadaContext } from './PiadaContext';

import Navbar from './Components/Navbar/Navbar';
import Builder from './Containers/Builder';
import Auth from './Containers/Auth';
import Orders from './Containers/Orders';

const App = () => {
  const { user, showLoginForm } = useContext(PiadaContext);

  return (
    <div id='main-div'>
      <Navbar />
      <Switch>
        {user && <Route path='/orders' component={Orders} />}
        <Route path='/' render={() => <Builder />} />
      </Switch>
      {showLoginForm && <Auth />}

      <Redirect to='/' />
    </div>
  );
};

export default App;
