import React, { useRef } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import piadaLogo from '../../Assets/logo.png';
import headerArrow from '../../Assets/arrows/left-header-arrow.svg';
import headerCross from '../../Assets/arrows/close-header-cross.svg';

import NavigationMenu from './NavigationMenu';

const Navbar = (props) => {
  let target = useRef(null); // Target to Animated Hamburger Menu Icon
  let mobilePathName = '';
  let logo = piadaLogo;
  let stickyNavbar = 'navbar navbar-dark navbar-expand-sm p-0 sticky-top';
  // Check if it is on Mobile Phone or Small Screen
  let mobile = window.matchMedia('(max-width: 576px)').matches;
  // Allow Nav Link to Collapse Navebar on Mobile
  let collapseNavbar = mobile ? '#navbarCollapse' : '';
  // Switch between "Realiser mon Burger" text or "Validation "text
  let builderText = 'Realiser mon Burger';

  // Toggle class to change icon and animate hamburger dropdown menu button
  function toggleClass(target) {
    if (mobile) {
      target.current.classList.toggle('open');
    }
  }

  // Function to control active class style for NavLink
  function onPaths(paths) {
    return (match, location) => paths.includes(location.pathname);
  }

  // Function to control navigation when header image clicked
  function headerImageNavigation() {
    if (props.history.location.pathname !== '/') {
      props.history.goBack();
    }
  }

  switch (props.history.location.pathname) {
    case '/': // Don't Make Nav Bar Sticky on Home Path
      stickyNavbar = 'navbar navbar-dark navbar-expand-sm p-0';
      break;
    case '/orders':
      mobilePathName = 'Commandes'; // Change the Header Name to Commandes On Mobile Only
      logo = headerArrow; // Change the Logo Image to Arrow Image to Go Back
      break;
    case '/checkout':
      mobilePathName = 'Validation'; // Change the Header Name to Commandes On Mobile Only
      builderText = 'Validation'; // Change The Menu Text on Checkout Path
      logo = headerArrow; // Change the Logo Image to Arrow Image to Go Back
      break;
    // When PathName is Order Summary
    default:
      // Split the Pathname to get the number of the Order
      const pathNameArray = props.history.location.pathname.split('_');
      // Get the Number of the Order by accessing the last Array item
      mobilePathName = 'Commande n°' + pathNameArray[pathNameArray.length - 1];
      logo = headerCross; // Change the Logo Image to Cross Image
      break;
  }

  // Style for header Text on Mobile
  let headerTextStyle = {
    color: 'white',
    fontWeight: 500,
    textAlign: 'center',
    fontSize: '1.2rem',
  };

  // Set a Margin Right to Header Text On Order Summary Path Mobile
  if (logo === headerCross) {
    headerTextStyle.marginRight = '3rem';
  }

  return (
    <nav className={stickyNavbar} id='navbar'>
      <div className='container'>
        {/* Logo For Desktop Screen Only*/}
        <NavLink to='/' className='navbar-brand my-1 d-none d-sm-block mx-4'>
          <img src={piadaLogo} height='45px' alt='logo' />
        </NavLink>
        {/* Header Image an Text For Mobile screen only */}
        <div
          className='navbar-brand d-sm-none my-1 ml-3 '
          onClick={headerImageNavigation}
        >
          <img
            src={logo}
            height={logo === piadaLogo ? '45px' : '30px'}
            with='auto'
            alt=''
          />
        </div>
        <span className='d-sm-none' style={headerTextStyle}>
          {mobilePathName}
        </span>

        {/* Hamburger Menu (Only on Small Screen) */}
        {logo !== headerCross && (
          <button
            className='navbar-toggler p-0 border-0 mx-4'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-label='navbar-toggler'
          >
            <div
              className='animated-icon'
              ref={target}
              onClick={() => toggleClass(target)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        )}
        {/* Navigation Menu */}
        <NavigationMenu
          target={target}
          collapseNavbar={collapseNavbar}
          toggleClass={toggleClass}
          onPaths={onPaths}
          builderText={builderText}
        />
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
