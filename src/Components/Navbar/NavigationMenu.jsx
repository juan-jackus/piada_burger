import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PiadaContext } from '../../PiadaContext';

function NavigationMenu({
  target,
  collapseNavbar,
  toggleClass,
  onPaths,
  builderText,
}) {
  // Get the Login Value, showModalHandler and LogOutHandler From Piada Context
  const { logOutHandler, login, showModalHandler } = useContext(PiadaContext);
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
        Orders
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
          logOutHandler();
        }}
      >
        Sign Out
      </a>
    </li>,
  ];
  // Assign the JSX for the Login Menu to a variable
  const loginMenu = [
    // Login Menu
    <li
      className='nav-item '
      key='login'
      data-toggle='collapse'
      data-target={collapseNavbar}
    >
      <span
        className='nav-link text-white p-3'
        onClick={() => {
          toggleClass(target);
          showModalHandler(true);
        }}
      >
        Sign In
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
        {login ? oderLogoutMenu : loginMenu}
      </ul>
    </div>
  );
}

export default NavigationMenu;
