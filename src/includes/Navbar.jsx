import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const handleNavLinkClick = () => {
    // Close the navbar when a navigation link is clicked
    document.querySelector(".navbar-toggler").click();
  };

  return (
    <nav className='navbar bg-body-light navbar-expand-lg border-bottom sticky-top'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          <img src='/img/logo.png' alt='Logo' width='100' />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
          aria-label='Toggle navigation'
        >
          <span>
            <i className='fa-solid fa-bars-staggered'></i>
          </span>
        </button>
        <div
          className='offcanvas offcanvas-end'
          tabIndex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header'>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-start flex-grow-1 pe-3 nav-underline'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link active'
                  aria-current='page'
                  to='/'
                  onClick={handleNavLinkClick}
                >
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/events'
                  onClick={handleNavLinkClick}
                >
                  Events
                </NavLink>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  to='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Communities
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/Wie'
                      onClick={handleNavLinkClick}
                    >
                      Women in Engineering
                    </NavLink>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/aess'
                      onClick={handleNavLinkClick}
                    >
                      AESS
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/team'
                  onClick={handleNavLinkClick}
                >
                  Team
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  to='/contact'
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
