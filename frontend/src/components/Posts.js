import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import If from '../utils/If'
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
    const { local, posts, category } = this.props

    console.log('>>> ', posts)

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
        <div className='col-md-12'>
          <p className='text-capitalize'>
            {category === 'react' ?
              'react posts' : (category === 'redux' ?
                'redux posts' : (category === 'udacity') ?
                  'udacity posts' : 'all posts')}
          </p>
        </div>
        {posts.map(m => {
          return (
            <div className='card' key={this.getKey()}>
              <div className='card-body'>
                <h5 className='card-title text-capitalize'>
                  <span>{m.author}</span>
                  <span> - </span>
                  <span>{m.timestamp = new Date(m.timestamp).toLocaleDateString('en-US', optionsDate)}</span>
                  <br />
                  <span>{m.title}</span>
                </h5>
                <h6 className='card-subtitle mb-2 text-muted text-capitalize'>{m.category}</h6>
                <p className='card-text'>{m.body}</p>
                <a href='#' className='card-link'>
                  <span className='oi oi-comment-square'></span>
                  Comments {m.commentCount}</a>
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

const mapStateToProps = ({ posts }, props) => {
  //props.match.params - Acessar Parâmetros de Rota no Componente
  if (props.match) {
    return {
      //Posts por Categoria
      posts: posts.filter(f => f.category === props.match.params.category),
      //Setar Categoria p/ Título do DataTable
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
  list: () => dispatch(getPosts())
})

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostsContainer