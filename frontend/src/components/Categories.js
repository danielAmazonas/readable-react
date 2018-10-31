import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions'
import { Link } from 'react-router-dom'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.keyCount = 0
    this.getKey = this.getKey.bind(this)
  }

  getKey() {
    return this.keyCount++
  }

  componentDidMount() {
    this.props.list()
  }

  render() {
    const { categories } = this.props
    return (
      <div
        className='collapse navbar-collapse'
        id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          {categories.map(m => {
            return (
              <li
                className='nav-item text-capitalize active'
                key={this.getKey()}>
                <Link
                  to={`/${m.name}`}
                  key={this.getKey()}
                  className='nav-link'
                  role='button'>
                  <span className='oi oi-link-intact'></span>
                  {m.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
})

const mapDispatchToProps = dispatch => ({
  list: () => dispatch(getCategories())
})

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)

export default CategoriesContainer;
