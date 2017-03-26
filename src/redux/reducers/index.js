import { combineReducers } from 'redux'
import comingMovieList from './comingMovieList'
import playingMovieList from './playingMovieList'
import film from './film'
import publicState from './publicState'
import loading from './loading'
import cinemaList from './cinemaList'

export default combineReducers({
  comingMovieList,
  playingMovieList,
  film,
  publicState,
  loading,
  cinemaList
})
