import React from 'react'
import black from '../assets/black-hole.png'

const Void = () => {
  return (
    <div className='row'>
      <p className='col-centered'>
        <br /><br />
        <img className='black-hole' src={black} />
        <br /><br />
        <h5 style={{ color: 'salmon' }}>There are no Posts!!! 😞</h5>
      </p>
    </div>
  )
}

export default Void