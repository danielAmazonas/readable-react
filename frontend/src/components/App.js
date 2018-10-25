import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div
        className='container'>
        <header>
          <div
            className='row'>
            <Header
              title='readable'
              subtitle='react nanodegree'
              icon='oi oi-eye' />
          </div>
        </header>
        <footer>
          <div className='row'>
            <Footer
              name='Daniel Souza Amazonas'
              year='2018'
              notice='all rights reserved' />
          </div>
        </footer>
      </div>
    )
  }
}

export default App
