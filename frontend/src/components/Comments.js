import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../actions'
import { Link } from 'react-router-dom'
import If from '../utils/If'

class Comments extends Component {
  constructor(props) {
    super(props)
    this.keyCount = 0
    this.getKey = this.getKey.bind(this)
  }

  getKey() {
    return this.keyCount++
  }

  componentDidMount() {
    this.props.list(this.props.match.params.id)
  }

  render() {
    const { local, comments } = this.props

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
            <form>
              <div className='col-md-4 form-group'>
                <label htmlFor='author' className='text-capitalize'>author:</label>
                <input
                  id='author'
                  type='text'
                  className='form-control'
                  placeholder='Enter your name'
                  required
                  autoFocus></input>
              </div>
              <div className='col form-group'>
                <label htmlFor='comment' className='text-capitalize'>comment:</label>
                <textarea className='form-control' rows='3' id='comment' placeholder='Enter your comment'></textarea>
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
                    <a href='#' className='down'>
                      <span className='oi oi-thumb-down'></span>
                    </a>
                    <a href='#' className='up'>
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
                <a href='#' className='card-link'>
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
  comments
})

const mapDispatchToProps = dispatch => ({
  list: data => dispatch(getComments(data))
})

const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)

export default CommentsContainer;
