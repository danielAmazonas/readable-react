import React from 'react';

const Header = ({ title, subtitle, icon }) => {
  return (
    <div
      className='col-md-12'
      id='header-padding'>
      <nav
        className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a
          className='navbar-brand text-capitalize'
          id='nav-readable'
          href='#'>
          <h4>
            <span className={icon}></span>
            {title}
          </h4>
          <h6>{subtitle}</h6>
        </a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'>
          <span className='navbar-toggler-icon'></span>
        </button>
      </nav>
    </div>
  )
}

export default Header