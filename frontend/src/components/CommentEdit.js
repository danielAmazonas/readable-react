import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEditComment } from '../actions'
import { Link } from 'react-router-dom'
import If from '../utils/If'

class CommentEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.comment.id,
      timestamp: Date.now(),
      author: props.comment.author,
      body: props.comment.body,
      parentId: props.comment.parentId
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const commentTemp = {
      id: this.state.id,
      timestamp: this.state.timestamp,
      author: this.state.author,
      body: this.state.body,
      parentId: this.state.parentId
    }
    this.props.editComment(commentTemp.id, commentTemp)
    this.props.history.push(`/${this.props.match.params.category}/${this.state.parentId}`)
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { local } = this.props
    const { author, body } = this.state

    return (
      <div className='col-md-12'>
        <If test={local !== 'main'}>
          <a href='/' className='btn btn-outline-dark btn-sm btn-back'>
            <span className='oi oi-action-undo'></span>
            Back Main
           </a>
        </If>
        <div className='row'>
          <div className='col'>
            <h5 className='text-capitalize post-category'>
              <span className='oi oi-bookmark'></span>
              edit comment - {this.props.match.params.title} <span className='category-comments'>
                {this.props.match.params.category}
              </span>
            </h5>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
              <div className='col-md-4 form-group'>
                <label htmlFor='author' className='text-capitalize'>author:</label>
                <input
                  id='author'
                  type='text'
                  name='author'
                  className='form-control text-capitalize'
                  placeholder='Enter your name'
                  defaultValue={author}
                  onChange={this.onChange}
                  required
                  autoFocus></input>
              </div>
              <div className='col form-group'>
                <label htmlFor='body' className='text-capitalize'>comment:</label>
                <textarea
                  id='body'
                  className='form-control'
                  name='body'
                  defaultValue={body}
                  onChange={this.onChange}
                  required
                  rows='3'
                  placeholder='Enter your comment'></textarea>
              </div>
              <div className='col'>
                <button type='submit' className='btn btn-outline-dark btn-sm text-capitalize'>
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
      comment: state.comments.find(f => f.id === props.match.params.id)
    }
  } else {
    return {
      comment: {}
    }
  }
}

const mapDispatchToProps = dispatch => ({
  editComment: (idComment, comment) => dispatch(getEditComment(idComment, comment)),
})

const CommentEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentEdit)

export default CommentEditContainer;
