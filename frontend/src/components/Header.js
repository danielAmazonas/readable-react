import React from 'react'
import Categories from './Categories'

const Header = ({ title, subtitle, icon }) => {
  return (
    <div className='col-md-12 header-padding'>
      <nav
        id='animate-area'
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
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <Categories />
      </nav>
    </div>
  )
}

export default Header