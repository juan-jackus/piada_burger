import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../../ReduxStore/actions';
import { NavLink } from 'react-router-dom';

function NavigationMenu({
  target,
  collapseNavbar,
  toggleClass,
  onPaths,
  builderText,
  ...props
}) {
  // Assign the JSX for the Oder and Logout Menu to a variable
  const oderLogoutMenu = [
    // Oder Menu
    <li
      className='nav-item '
      key='order'
      data-toggle='collapse'
      data-target={collapseNavbar}
    >
      <NavLink
        to='/orders'
        activeClassName='active-nav-link'
        className='nav-link text-white p-3 '
        onClick={() => toggleClass(target)}
      >
        Commandes
      </NavLink>
    </li>,
    // Logout Menu
    <li
      className='nav-item '
      key='logout'
      data-toggle='collapse'
      data-target={collapseNavbar}
    >
      <a
        href='/'
        className='nav-link text-white p-3'
        onClick={() => {
          toggleClass(target);
          props.logOutHandler();
        }}
      >
        Deconnexion
      </a>
    </li>,
  ];
  // Assign the JSX for the Login Menu to a variable
  const loginMenu = [
    // Login Menu
    <li
      className='nav-item '
      key='user'
      data-toggle='collapse'
      data-target={collapseNavbar}
    >
      <span
        className='nav-link text-white p-3'
        onClick={() => {
          toggleClass(target);
          props.showModalHandler(true);
        }}
      >
        Se Connecter
      </span>
    </li>,
  ];
  return (
    <div className='collapse navbar-collapse' id='navbarCollapse'>
      <ul className='navbar-nav ml-auto '>
        {/* Burger Builder Menu */}
        <li
          className='nav-item pl-0 pl-sm-0'
          data-toggle='collapse'
          data-target={collapseNavbar}
        >
          <div>
            <NavLink
              to='/'
              activeClassName='active-nav-link'
              isActive={onPaths(['/', '/checkout'])}
              className='nav-link text-white p-3 close-modal '
              onClick={() => toggleClass(target)}
            >
              {builderText}
            </NavLink>
          </div>
        </li>
        {/* Show Oders Menu and Logout button when Login  */}
        {props.user ? oderLogoutMenu : loginMenu}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModalHandler: (val) => dispatch(actions.showModalHandler(val)),
    logOutHandler: () => dispatch(actions.logOutHandler()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);
