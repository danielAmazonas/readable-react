import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Posts from './Posts'

const Main = () => {
  return (
    <div className='col-md-12'>
      <div className='row'>
        <Header
          title='readable'
          subtitle='react nanodegree'
          icon='oi oi-eye'
        />
      </div>
      <div className='row'>
        <Posts local='main' />
      </div>
      <br /><br /><br /><br />
      <div className='row'>
        <Footer
          name='daniel souza amazonas'
          year='2018'
          notice='all rights reserved'
        />
      </div>
    </div>
  )
}

export default Main