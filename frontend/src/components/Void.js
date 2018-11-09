import React from 'react'
import black from '../assets/black-hole.png'

const Void = () => {
  return (
    <div className='row'>
      <h5 className='col-centered'>
        <br /><br />
        <img className='black-hole' src={black} />
        <br /><br />
        <p style={{ color: 'salmon' }}>There are no Posts!!! 😞</p>
      </h5>
    </div>
  )
}

export default Void