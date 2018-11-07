import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEditPost } from '../actions'
import { Link } from 'react-router-dom'
import If from '../utils/If'

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.keyCount = 0
    this.getKey = this.getKey.bind(this)

    this.state = {
      id: props.post.id,
      timestamp: Date.now(),
      title: props.post.title,
      author: props.post.author,
      category: props.post.category,
      body: props.post.body
    }
  }

  getKey() {
    return this.keyCount++
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
    this.props.editPost(postTemp.id, postTemp)
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
              edit post
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
                  disabled>
                </input>
              </div>
              <div className='col-md-4 form-group'>
                <label htmlFor='category' className='text-capitalize'>category:</label>
                <input
                  id='category'
                  type='text'
                  name='category'
                  className='form-control text-capitalize'
                  defaultValue={category}
                  disabled>
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
                  defaultValue={body}></textarea>
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

const mapStateToProps = (state, props) => {
  //props.match.params - Acessar Parâmetros de Rota no Componente
  if (props.match) {
    return {
      post: state.posts.find(f => f.id === props.match.params.id)
    }
  } else {
    return {
      post: {}
    }
  }
}

const mapDispatchToProps = dispatch => ({
  editPost: (id, post) => dispatch(getEditPost(id, post)),
})

const PostEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit)

export default PostEditContainer;
