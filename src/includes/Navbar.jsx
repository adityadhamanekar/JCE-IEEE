import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = e => {
    e.stopPropagation(); // Prevent event propagation to avoid closing the navbar
  };

  const handleDropdownItemClick = () => {
    closeNav(); // Close the dropdown when a dropdown item is clicked
  };

  return (
    <nav
      ref={navbarRef}
      className='navbar bg-body-light navbar-expand-lg border-bottom sticky-top'
    >
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/' onClick={closeNav}>
          <img src='/img/logo.png' alt='Logo' width='100' />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          onClick={toggleNav}
          aria-label='Toggle navigation'
        >
          <span>
            <i className='fa-solid fa-bars-staggered'></i>
          </span>
        </button>
        <div
          className={`offcanvas offcanvas-end${isNavOpen ? " show" : ""}`}
          tabIndex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header'>
            <button
              type='button'
              className='btn-close'
              onClick={closeNav}
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
            <ul
              className='navbar-nav justify-content-start flex-grow-1 pe-3 nav-underline'
              onClick={closeNav}
            >
              <li className='nav-item'>
                <NavLink className='nav-link' aria-current='page' to='/'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/events'>
                  Events
                </NavLink>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  onClick={handleDropdownClick}
                >
                  Communities
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/Wie'
                      onClick={handleDropdownItemClick}
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
                      onClick={handleDropdownItemClick}
                    >
                      AESS
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/team'>
                  Team
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link ' to='/contact'>
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
