import React from 'react'
import { Link } from 'react-router-dom'
import error404 from '../assets/error404.png'

const Page404 = () => {
  return (
    <div className='col-md-12'>
      <Link to='/' className='btn btn-outline-dark btn-sm btn-back'>
        <span className='oi oi-action-undo'></span>
        Back Main
      </Link>
      <div className='row justify-content-center'>
        <h1><span className='text-uppercase'>#error 404</span></h1>
      </div>
      <div className='row justify-content-center'>
        <img src={error404}></img>
      </div>
      <div className='row justify-content-center text-center'>
        <h5><span className='text-uppercase'>i find your lack of navigation disturbing...</span></h5>
      </div>
    </div>
  )
}

export default Page404