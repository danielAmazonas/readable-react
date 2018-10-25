import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import Header from './Header'

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
      </div>
    )
  }
}

export default App
