import React, { Component, PropTypes } from 'react'
import './Header.scss'

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <header id='header'>
        <div className='wrap'>
          <a className='position'>
            <i className='iconfont icon-position' />
            <span className='city'>武汉</span>
          </a>
          <span className='title'>{this.props.title}</span>
          <a className='search'>
            <i className='iconfont icon-bookaskicon1419' />
          </a>
        </div>
      </header>
    )
  }
}
