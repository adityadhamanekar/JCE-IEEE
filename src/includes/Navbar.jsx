import React from "react";

function Navbar() {
  return (
    <nav className='navbar bg-body-light navbar-expand-lg border-bottom sticky-top'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <img src='/img/logo.png' alt='Logo' width='100' />
        </a>
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
                <a className='nav-link active' aria-current='page' href='/'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/events'>
                  Events
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Communities
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='/Wie'>
                      Women in Engineering
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='/aess'>
                      AESS
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/team'>
                  Team
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
