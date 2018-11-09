import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts, getDelPost, getVotePost } from '../actions'
import If from '../utils/If'
import Void from './Void'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.keyCount = 0
    this.getKey = this.getKey.bind(this)
  }

  getKey() {
    return this.keyCount++
  }

  static propTypes = {
    local: PropTypes.string
  }

  componentDidMount() {
    this.props.list()
  }

  render() {
    const { local, posts, category, delPost, votePost } = this.props

    console.log('>>> ', posts)

    const optionsDate = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }

    delPost.bind(this)

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
              {category === 'react' ?
                'react posts' : (category === 'redux' ?
                  'redux posts' : (category === 'udacity') ?
                    'udacity posts' : 'all posts')}
            </h5>
          </div>
          <div className='col'>
            <Link to={`/post/add`}>
              <button
                type='button'
                className='btn btn-primary float-right text-capitalize btn-outline-dark btn-sm'>
                <span className='oi oi-plus'></span>
                add post
            </button>
            </Link>
          </div>
        </div>
        <If test={posts.length === 0}>
          <Void />
        </If>
        {posts.map(m => {
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
                    <a href='/' onClick={e => votePost(m.id, 'downVote')} className='down'>
                      <span className='oi oi-thumb-down'></span>
                    </a>
                    <a href='/' onClick={e => votePost(m.id, 'upVote')} className='up'>
                      <span className='oi oi-thumb-up'></span>
                    </a>
                  </span>
                  <br />
                  <span className='title'>
                    {m.title}
                  </span>
                </h5>
                <h6 className='card-subtitle mb-2 text-muted text-capitalize'>{m.category}</h6>
                <p className='card-text'>
                  <span className='oi oi-double-quote-serif-left'></span>
                  {m.body}
                  <span className='oi oi-double-quote-serif-right'></span>
                </p>
                <Link to={`/${m.category}/${m.title}/${m.id}`} className='card-link'>
                  <span className='oi oi-comment-square'></span>
                  Comments {m.commentCount}
                </Link>
                <Link to={`/edit/${m.id}`} className='card-link'>
                  <span className='oi oi-pencil'></span>
                  Edit
                </Link>
                <a href='/' onClick={e => delPost(m.id)} className='card-link'>
                  <span className='oi oi-trash'></span>
                  Delete
                </a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, props) => {
  //props.match.params - Acessar Parâmetros de Rota no Componente
  if (props.match) {
    return {
      //Posts por Categoria
      posts: posts.filter(f => f.category === props.match.params.category),
      //Setar Categoria p/ Título
      category: props.match.params.category
    }
  } else {
    return {
      //Todos os Posts
      posts
    }
  }
}

const mapDispatchToProps = dispatch => ({
  list: () => dispatch(getPosts()),
  delPost: (id) => dispatch(getDelPost(id)),
  votePost: (data, vote) => dispatch(getVotePost(data, vote)),
})

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostsContainer