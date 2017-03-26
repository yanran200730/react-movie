import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './Movie.scss'
import Loading from './../loading/Loading'

export default class Movie extends Component {
  static propTypes = {
    // getMoviesList: PropTypes.func,
    children: PropTypes.object,
    // playingMovieList: PropTypes.object,
    // comingMovieList: PropTypes.object,
    // getTitle: PropTypes.func,
    // title: PropTypes.object,
    loading: PropTypes.object
  }

  constructor (props) {
    super(props)
    const isPlaying = (props.children.props.route.path === 'playing')
    this.state = {
      isPlaying: isPlaying
    }
  }

  componentWillReceiveProps (newProps) {
    var oldPath = this.props.children.props.route.path
    var currentPath = newProps.children.props.route.path
    const currentPlaying = (newProps.children.props.route.path === 'playing')

    if (oldPath !== currentPath) {
      this.setState({
        isPlaying: currentPlaying
      })
    }
  }

  _scrollTop () {
    localStorage.scrollTop = 0
  }

  render () {
    return (
      <div className='movie'>
        <div className='tab' onClick={this._scrollTop}>
          <Link to='/movie/playing' activeClassName='active' className={this.state.isPlaying ? 'cheacked' : ''}>正在热映</Link>
          <Link to='/movie/coming' activeClassName='active' className={!this.state.isPlaying ? 'cheacked' : ''}>即将上映</Link>
        </div>
        {this.props.children && React.cloneElement(this.props.children, {
          ...this.props
        })}
        {this.props.loading.isLoading && <Loading />}
      </div>
    )
  }
}
