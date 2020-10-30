import React, { useEffect } from 'react';
import { auth } from './firebase';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './ReduxStore/actions';

import Navbar from './Components/Navbar/Navbar';
import Builder from './Containers/Builder';
import Auth from './Containers/Auth';
import Orders from './Containers/Orders';

const App = (props) => {
  useEffect(() => {
    // Listen to Auth change to set user
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        props.authStateChanged(authUser);
      }
    });
  });

  return (
    <div id='main-div'>
      <Navbar />
      <Switch>
        {props.user && <Route path='/orders' component={Orders} />}
        <Route path='/' render={() => <Builder />} />
      </Switch>
      {props.showLoginForm && <Auth />}

      <Redirect to='/' />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    showLoginForm: state.showLoginForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authStateChanged: (authUser) =>
      dispatch(actions.authStateChanged(authUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
