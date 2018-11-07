import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAddPost } from '../actions'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'
import If from '../utils/If'

class PostAdd extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      id: v4(),
      timestamp: Date.now(),
      title: '',
      author: '',
      category: '',
      body: ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const postTemp = {
      id: this.state.id,
      timestamp: this.state.timestamp,
      title: this.state.title,
      author: this.state.author,
      category: this.state.category,
      body: this.state.body
    }
    this.props.addPost(postTemp)
    this.props.history.push('/')
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { local, history } = this.props
    let { title, author, category, body } = this.state
    
    return (
      <div className='col-md-12'>
        <If test={local !== 'main'}>
          <Link to='/' className='btn btn-outline-dark btn-sm btn-back'>
            <span className='oi oi-action-undo'></span>
            Back Main
           </Link>
        </If>
        <div className='row'>
          <div className='col'>
            <h5 className='text-capitalize post-category'>
              <span className='oi oi-bookmark'></span>
              add post
            </h5>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
              <div className='col-md-4 form-group'>
                <label htmlFor='title' className='text-capitalize'>title:</label>
                <input
                  id='title'
                  type='text'
                  name='title'
                  className='form-control text-capitalize'
                  defaultValue={title}
                  onChange={this.onChange}
                  required
                  autoFocus></input>
              </div>
              <div className='col-md-4 form-group'>
                <label htmlFor='author' className='text-capitalize'>author:</label>
                <input
                  id='author'
                  type='text'
                  name='author'
                  className='form-control text-capitalize'
                  defaultValue={author}
                  onChange={this.onChange}
                  required>
                </input>
              </div>
              <div className='col-md-4 form-group'>
                <label htmlFor='category' className='text-capitalize'>category:</label>
                <input
                  id='category'
                  type='text'
                  name='category'
                  className='form-control'
                  defaultValue={category}
                  onChange={this.onChange}
                  required>
                </input>
              </div>
              <div className='col form-group'>
                <label htmlFor='body' className='text-capitalize'>body:</label>
                <textarea
                  className='form-control'
                  rows='3'
                  id='body'
                  name='body'
                  onChange={this.onChange}
                  defaultValue={body}
                  required></textarea>
              </div>
              <div className='col'>
                <button
                  type='submit'
                  className='btn btn-outline-dark btn-sm text-capitalize'>
                  <span className='oi oi-cloud-upload'></span>
                  save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => ({
  post
})

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(getAddPost(post)),
})

const PostAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAdd)

export default PostAddContainer;
