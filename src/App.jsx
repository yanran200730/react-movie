import React, { Component, PropTypes } from 'react'
import Footer from 'components/footer/Footer'
import Header from 'components/header/Header'
import './assets/style/mixin.scss'
import './App.scss'
import './assets/font-icon/iconfont.css'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
    filmInfor: PropTypes.object,
    getFilm: PropTypes.func,
    clearFilm: PropTypes.func,
    title: PropTypes.object,
    getTitle: PropTypes.func,
    loading: PropTypes.object,
    getCinemaList: PropTypes.func,
    cinemaList: PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='App'>
        <Header title={this.props.title.pageTitle} />
        <div className='body'>
          {this.props.children && React.cloneElement(this.props.children, {
            filmInfor: this.props.filmInfor,
            getFilm: this.props.getFilm,
            clearFilm: this.props.clearFilm,
            getTitle: this.props.getTitle,
            title: this.props.title,
            loading: this.props.loading,
            getCinemaList: this.props.getCinemaList,
            cinemaList: this.props.cinemaList
          })}
        </div>
        <Footer />
      </div>
    )
  }
}
