import { REQUEST_PLAYING_MOVIE, REQUEST_PLAYING_MOVIE_ERROR } from './../constants/ActionTypes'

var initialState = {}

export default function playingMovieList (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PLAYING_MOVIE:
      const films = (state.films) ? state.films.concat(action.fetchData.films) : action.fetchData.films
      return {
        films: films,
        page: action.fetchData.page
      }
    case REQUEST_PLAYING_MOVIE_ERROR :
      return {
        msg: action.fetchData
      }
    default :
      return state
  }
}
