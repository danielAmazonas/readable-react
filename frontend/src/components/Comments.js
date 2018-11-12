import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments, getAddComment, getDelComment, getVoteComment } from '../actions'
import { Link } from 'react-router-dom'
import If from '../utils/If'

class Comments extends Component {
  constructor(props) {
    super(props)
    this.keyCount = 0
    this.getKey = this.getKey.bind(this)

    this.state = {
      id: this.generateId(),
      timestamp: Date.now(),
      author: '',
      body: '',
      parentId: this.props.match.params.id
    }

  }

  generateId() {
    let number = Math.random()
    number.toString(36)
    let id = number.toString(36).substr(2, 9)
    return id
  }

  getKey() {
    return this.keyCount++
  }

  componentDidMount() {
    this.props.list(this.props.match.params.id)
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
    this.props.addComment(commentTemp)
    this.props.history.push('/')
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { local, comments, addComment, delComment, voteComment, history } = this.props
    const { author, body } = this.state

    let category = this.props.match.params.category

    let title = this.props.match.params.title

    const optionsDate = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }

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
              comments - {title} <span className='category-comments'>{category}</span>
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
        {comments.map(m => {
          return (
            <div className='card' key={this.getKey()}>
              <div className='card-body'>
                <h5 className='card-title text-capitalize'>
                  <span className='author'>{m.author}</span>
                  <span> </span>
                  <span className='date'>{m.timestamp = new Date(m.timestamp).toLocaleDateString('en-US', optionsDate)}</span>
                  <span className='text-capitalize float-right score'>score:
                    <span>  </span>
                    {m.voteScore}
                    <span>  </span>
                    <a href={`/${category}/${title}/${m.parentId}`} onClick={e => voteComment(m.id, 'downVote')} className='down'>
                      <span className='oi oi-thumb-down'></span>
                    </a>
                    <a href={`/${category}/${title}/${m.parentId}`} onClick={e => voteComment(m.id, 'upVote')} className='up'>
                      <span className='oi oi-thumb-up'></span>
                    </a>
                  </span>
                  <br />
                </h5>
                <p className='card-text'>
                  <span className='oi oi-double-quote-serif-left'></span>
                  {m.body}
                  <span className='oi oi-double-quote-serif-right'></span>
                </p>
                <a href='#' className='card-link'>
                  <span className='oi oi-pencil'></span>
                  Edit</a>
                <a href='/' onClick={e => delComment(m.id)} className='card-link'>
                  <span className='oi oi-trash'></span>
                  Delete</a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => ({
  comments,
})

const mapDispatchToProps = dispatch => ({
  list: (idPost) => dispatch(getComments(idPost)),
  delComment: (id) => dispatch(getDelComment(id)),
  addComment: (post) => dispatch(getAddComment(post)),
  voteComment: (data, vote) => dispatch(getVoteComment(data, vote)),
})

const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)

export default CommentsContainer;
