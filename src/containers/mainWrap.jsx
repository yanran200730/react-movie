import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as mainActions from './../redux/actions'
import App from './../App'

class MainWrap extends Component {
  static propTypes = {
    children: PropTypes.object,
    filmInfor: PropTypes.object,
    actions: PropTypes.object,
    title: PropTypes.object,
    isLoading: PropTypes.object,
    cinemaList: PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='main'>
        <App children={this.props.children}
          filmInfor={this.props.filmInfor}
          getFilm={this.props.actions.getFilm}
          clearFilm={this.props.actions.clearFilm}
          getTitle={this.props.actions.getTitle}
          title={this.props.title}
          loading={this.props.isLoading}
          getCinemaList={this.props.actions.getCinemaList}
          cinemaList={this.props.cinemaList} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filmInfor: state.film.filmInfor,
  title: state.publicState,
  isLoading: state.loading,
  cinemaList: state.cinemaList
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(mainActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWrap)
