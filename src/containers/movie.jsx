import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as movieActions from './../redux/actions'
import MovieList from './../components/movie/Movie'

class Movie extends Component {
  static propTypes = {
    playingMovieList: PropTypes.object,
    comingMovieList: PropTypes.object,
    actions: PropTypes.object,
    children: PropTypes.object,
    title: PropTypes.object,
    isLoading: PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='wrap'>
        <MovieList children={this.props.children} playingMovieList={this.props.playingMovieList}
          comingMovieList={this.props.comingMovieList}
          getMoviesList={this.props.actions.getMoviesList}
          getTitle={this.props.actions.getTitle}
          title={this.props.title}
          loading={this.props.isLoading}
           />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  playingMovieList: state.playingMovieList,
  comingMovieList: state.comingMovieList,
  title: state.publicState,
  isLoading: state.loading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(movieActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie)
