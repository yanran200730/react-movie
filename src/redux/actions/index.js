import * as ActionTypes from './../constants/ActionTypes'
import axios from 'axios'
axios.defaults.withCredentials = true

function getActionType (type) {
  var errorType, requestType

  if (type === 'now-playing') {
    errorType = ActionTypes.REQUEST_PLAYING_MOVIE_ERROR
    requestType = ActionTypes.REQUEST_PLAYING_MOVIE
  } else {
    errorType = ActionTypes.REQUEST_COMING_MOVIE_ERROR
    requestType = ActionTypes.REQUEST_COMING_MOVIE
  }

  const actionTypes = {
    errorType: errorType,
    requestType: requestType
  }

  return actionTypes
}

export const getMoviesList = (type = 'now-playing', page = 1) => dispatch => {
  var actionTypes = getActionType(type)
  dispatch({type: ActionTypes.LOADING})
  axios.get('http://192.168.0.200:8080/api/v4/api/film/' + type, {
    params: {
      page: page,
      count: 16
    }
  }).then(response => {
    dispatch({type: ActionTypes.LOAD_FINISHED})
    dispatch({
      type: actionTypes.requestType,
      fetchData: {
        films: response.data.data.films,
        page: response.data.data.page,
        type: type
      }
    })
  }).catch(error => {
    dispatch({
      type: actionTypes.errorType,
      fetchData: 'error:' + error
    })
  })
}

export const getFilm = (id) => dispatch => {
  dispatch({type: ActionTypes.LOADING})
  axios.get('http://192.168.0.200:8080/api/v4/api/film/' + id, {
    params: {
      __t: new Date().getTime()
    }
  }).then(response => {
    dispatch({type: ActionTypes.LOAD_FINISHED})
    dispatch({
      type: ActionTypes.REQUEST_FILM,
      fetchData: response.data.data
    })
  }).catch(error => {
    dispatch({
      type: ActionTypes.REQUEST_FILM_ERROR,
      fetchData: 'error:' + error
    })
  })
}

export const clearFilm = () => ({
  type: ActionTypes.CLEAR_FILM
})

export const getTitle = (title, pageTitle) => ({
  type: ActionTypes.GET_TITLE,
  title: {
    title: title,
    pageTitle: pageTitle
  }
})

export const getLoading = () => ({
  type: ActionTypes.LOADING
})

function getNewData (cinemaList) {
  let list = []
  let districtList = []
  let cinemas = []
  for (let i = 0; i < cinemaList.length; i++) {
    list.push(cinemaList[i].district.name)
  }
  for (let districtName of list) {
    if (districtList.indexOf(districtName) === -1) {
      districtList.push(districtName)
    }
  }
  for (let districtName of districtList) {
    var districtArray = []
    for (let cinemaInfor of cinemaList) {
      if (cinemaInfor.district.name === districtName) {
        districtArray.push(cinemaInfor)
      }
    }
    cinemas.push(districtArray)
  }
  return cinemas
}

export const getCinemaList = () => dispatch => {
  axios.get('http://192.168.0.200:8080/api/v4/api/cinema', {
    params: {
      _t: new Date().getTime()
    }
  }).then(response => {
    const cinemas = getNewData(response.data.data.cinemas)
    dispatch({
      type: ActionTypes.GET_CINEMA_LIST,
      fetchData: cinemas
    })
  }).catch(error => {
    dispatch({
      type: ActionTypes.GET_CINEMA_LIST_ERROR,
      fetchData: 'error:' + error
    })
  })
}
