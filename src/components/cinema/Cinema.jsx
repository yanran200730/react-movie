import React, { Component, PropTypes } from 'react'
import './Cinema.scss'

export default class Cinema extends Component {
  static propTypes = {
    getCinemaList: PropTypes.func,
    cinema: PropTypes.object,
    getTitle: PropTypes.func
  }

  constructor (props) {
    super(props)
    var cinemaList = {}
    this.state = cinemaList
  }

  componentWillReceiveProps (newProps) {
    var stateObj = {}
    if (newProps.cinema.cinemas) {
      var len = newProps.cinema.cinemas && newProps.cinema.cinemas.length
      for (let i = 0; i < len; i++) {
        i === 8 ? stateObj['isShow' + i] = true : stateObj['isShow' + i] = false
      }
      this.setState(stateObj)
    }
  }

  componentDidMount () {
    document.title = '全部影院'
    this.props.getTitle('全部影院', '全部影院')
    !this.props.cinema.cinemas && this.props.getCinemaList()
  }

  _getLabel (label) {
    const labelNames = ['订座退票', 'iMax']
    for (let labelName of labelNames) {
      if (label.name === labelName) {
        return ''
      } else if (label.name === '观影小食') {
        return '可乐爆米花'
      } else {
        return label.name
      }
    }
  }

  _getLabelClass (label) {
    if (label.name === '观影小食') {
      return 'tip1'
    } else if (label.name === '特价场次') {
      return 'tip2'
    } else if (label.name === '订座退票' || label.name === 'iMax') {
      return 'hide'
    } else {
      return 'tip3'
    }
  }

  _slideDown = (event) => {
    const index = event.target.getAttribute('data-index')
    this.setState({
      ['isShow' + index]: !this.state['isShow' + index]
    })
  }

  render () {
    return (
      <div className='cinemaList'>
        {this.props.cinema.cinemas && this.props.cinema.cinemas.map((item, index) =>
          <div className='cinemas' key={Math.random()}>
            <h1 onClick={this._slideDown} data-index={8 - index}>{item[0].district.name}</h1>
            {this.state['isShow' + (8 - index)] && <ul>
              {item.map(cinema =>
                <li key={Math.random()}>
                  <h2>{cinema.name}</h2>
                  <div className='labels'>
                    {cinema.labels && cinema.labels.map(label =>
                      <span key={Math.random()} className={this._getLabelClass(label)}>{this._getLabel(label)}</span>
                    )}
                  </div>
                  <p className='content'>{cinema.address}</p>
                  <p className='content'>距离未知</p>
                </li>
              )}
            </ul>}
          </div>
        )}
      </div>
    )
  }
}
