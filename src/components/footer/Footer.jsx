import React, { Component } from 'react'
import './Footer.scss'
import { Link } from 'react-router'

export default class Footer extends Component {
  render () {
    return (
      <footer>
        <Link to='/movie' className='tab-link' activeClassName='active'>
          <i className='iconfont icon-movie' />
          <span>上映</span>
        </Link>
        <Link to='/cinema' className='tab-link' activeClassName='active'>
          <i className='iconfont icon-hollowcinema' />
          <span>影院</span>
        </Link>
        <Link to='/shop' className='tab-link' activeClassName='active'>
          <i className='iconfont icon-shop' />
          <span>商城</span>
        </Link>
        <Link to='/me' className='tab-link' activeClassName='active'>
          <i className='iconfont icon-me' />
          <span>我的</span>
        </Link>
      </footer>
    )
  }
}

