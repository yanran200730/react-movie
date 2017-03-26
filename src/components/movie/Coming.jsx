import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './Playing.scss'

export default class Playing extends Component {
  static propTypes = {
    comingMovieList: PropTypes.object,
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

  componentWillMount () {

  }

  componentDidMount () {
    const scrollTop = parseInt(localStorage.scrollTop)
    scrollTop > 0 && window.scrollTo(0, parseInt(scrollTop))

    this.props.getTitle('即将上映', '即将上映')
    document.title = '即将上映'
    !this.props.comingMovieList.films && this.props.getMoviesList('coming-soon')
    document.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.handleScroll, false)
  }

  _getDate (timeStamp, isWeekDay) {
    const date = new Date(timeStamp)
    const week = ['日', '一', '二', '三', '四', '五', '六']
    const weekday = week[date.getDay()]
    const month = date.getMonth() + 1
    const day = date.getDate()

    var dateString
    if (isWeekDay) {
      dateString = '星期' + weekday
    } else {
      dateString = month + '月' + day + '日' + '上映'
    }
    return dateString
  }

    // 下拉加载时提交的异步请求
  _handleScroll (event) {
    var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight)
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    var totalPages = this.props.comingMovieList.films && this.props.comingMovieList.page.total
    var currentPage = this.props.comingMovieList.films && this.props.comingMovieList.page.current
    if (scrollHeight && pageHeight - viewportHeight - scrollHeight === 0 && currentPage < totalPages && this.state.flag) {
      this.setState({
        flag: false
      }, () => {
        var nextPage = currentPage + 1
        var type = 'coming-soon'
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
    console.log(localStorage.scrollTop)
  }

  render () {
    return (
      <div className='movie-list'>
        <ul>
          {this.props.comingMovieList.films && this.props.comingMovieList.films.map(moviesList =>
            <Link to={`/film/${moviesList.id}`} key={Math.random()} onClick={this._getScrollTop}>
              <li>
                <div className='films-img'>
                  <img src={`${moviesList.poster.thumbnail}`} />
                </div>
                <div className='films-content'>
                  <div className='films-name'>
                    <h3>{moviesList.name}</h3>
                    <span>{moviesList.grade}</span>
                  </div>
                  <p>{moviesList.intro}</p>
                  <div className='date'>
                    <span>{this._getDate(moviesList.premiereAt, false)}</span>
                    <span className='weekDay'>{this._getDate(moviesList.premiereAt, true)}</span>
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
