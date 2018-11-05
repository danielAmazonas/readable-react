import React from 'react';

const Footer = ({ name, year, notice }) => {
  return (
    <div
      className='col-md-12 text-center fixed-bottom text-capitalize footer-div'>
      <footer>
        <p>© {year} {name} - {notice}</p>
      </footer>
    </div>
  )
}

export default Footer