import React, { Component, PropTypes } from 'react'
import './film.scss'

export default class Film extends Component {
  static propTypes = {
    filmInfor: PropTypes.object,
    getFilm: PropTypes.func,
    params: PropTypes.object,
    clearFilm: PropTypes.func,
    loading: PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const currentFilmId = parseInt(this.props.params.id)
    const nextFilmId = this.props.filmInfor.film ? this.props.filmInfor.film.id : ''
    if (nextFilmId && currentFilmId !== nextFilmId) {
      this.props.clearFilm()
    }
  }

  componentDidMount () {
    const filmId = this.props.params.id
    const film = this.props.filmInfor.film

    if (!film) {
      this.props.getFilm(filmId)
    } else {
      if (parseInt(filmId) !== film.id) {
        this.props.getFilm(filmId)
      }
    }
  }

  componentWillReceiveProps (newProps) {
    newProps.filmInfor && newProps.filmInfor.film && (document.title = newProps.filmInfor.film.name)
  }

  getDate (timeStamp, isWeekDay) {
    const date = new Date(timeStamp)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const dateString = month + '月' + day + '日' + '上映'
    return dateString
  }

  prevPage = (event) => {
    history.back()
  }

  render () {
    return (
      <div>
        {this.props.loading.isLoading &&
        <div className='loading-wrap'>
          <div className='sk-fading-circle'>
            <div className='sk-circle1 sk-circle-ios' />
            <div className='sk-circle2 sk-circle-ios' />
            <div className='sk-circle3 sk-circle-ios' />
            <div className='sk-circle4 sk-circle-ios' />
            <div className='sk-circle5 sk-circle-ios' />
            <div className='sk-circle6 sk-circle-ios' />
            <div className='sk-circle7 sk-circle-ios' />
            <div className='sk-circle8 sk-circle-ios' />
            <div className='sk-circle9 sk-circle-ios' />
            <div className='sk-circle10 sk-circle-ios' />
            <div className='sk-circle11 sk-circle-ios' />
            <div className='sk-circle12 sk-circle-ios' />
          </div>
        </div>}
        <div className='prev'>
          <a onClick={this.prevPage}>
            <i className='iconfont icon-left' />
          </a>
          <h1>{this.props.filmInfor.film && this.props.filmInfor.film.name}</h1>
        </div>
        {this.props.filmInfor.film &&
          <div className='film-wrap'>
            <div className='img'>
              <img src={`${this.props.filmInfor.film.cover.origin}`} />
            </div>
            <div className='film-content'>
              <h1>影片简介</h1>
              <p>主演：{this.props.filmInfor.film.director}</p>
              <p>导演：{this.props.filmInfor.film.actors.map(actor =>
                <span key={Math.random()}>{actor.name}</span>
                )}
              </p>
              <p>地区语言：<span>{this.props.filmInfor.film.nation}</span><span>{this.props.filmInfor.film.language}</span></p>
              <p>类型：{this.props.filmInfor.film.category}</p>
              <p>上映时间：{this.getDate(this.props.filmInfor.film.premiereAt)}</p>
              <p>{this.props.filmInfor.film.synopsis}</p>
            </div>
          </div>
        }
      </div>
    )
  }
}
