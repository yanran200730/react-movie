import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './Playing.scss'

export default class Playing extends Component {
  static propTypes = {
    playingMovieList: PropTypes.object,
    getMoviesList: PropTypes.func,
    getTitle: PropTypes.func,
    loading: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.handleScroll = this._handleScroll.bind(this)
    this.state = {
      flag: true
    }
  }

  componentDidMount () {
    const scrollTop = parseInt(localStorage.scrollTop)
    scrollTop > 0 && window.scrollTo(0, parseInt(scrollTop))

    this.props.getTitle('上映电影', '正在热映')
    document.title = '正在热映'
    !this.props.playingMovieList.films && this.props.getMoviesList()
    document.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.handleScroll, false)
  }

    // 下拉加载时提交的异步请求
  _handleScroll (event) {
    const pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight)
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    const totalPages = this.props.playingMovieList.films && this.props.playingMovieList.page.total
    let currentPage = this.props.playingMovieList.films && this.props.playingMovieList.page.current
    if (scrollHeight && pageHeight - viewportHeight - scrollHeight === 0 && currentPage < totalPages && this.state.flag) {
      this.setState({
        flag: false
      }, () => {
        var nextPage = currentPage + 1
        var type = 'now-playing'
        !this.props.loading.isLoading && this.props.getMoviesList(type, nextPage)
        this.setState({
          flag: true
        })
      })
    }
  }

  _getScrollTop (event) {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    localStorage.scrollTop = scrollTop
  }

  render () {
    return (
      <div className='movie-list'>
        <ul>
          {this.props.playingMovieList.films && this.props.playingMovieList.films.map(moviesList =>
            <Link to={`/film/${moviesList.id}`} key={Math.random()} onClick={this._getScrollTop}>
              <li data-reactid={moviesList.id}>
                <div className='films-img'>
                  <img src={`${moviesList.poster.thumbnail}`} />
                </div>
                <div className='films-content'>
                  <div className='films-name'>
                    <h3>{moviesList.name}</h3>
                    <span>{moviesList.grade}</span>
                  </div>
                  <p>{moviesList.intro}</p>
                  <div className='films-count'>
                    <span className='count'><span className='active'>{moviesList.cinemaCount}</span>家影院在上映</span>
                    <span><span className='active'>{moviesList.watchCount}</span>人购票</span>
                  </div>
                </div>
              </li>
            </Link>
          )}
        </ul>
      </div>
    )
  }
}
