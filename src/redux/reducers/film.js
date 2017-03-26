import { REQUEST_FILM, REQUEST_FILM_ERROR, CLEAR_FILM } from '../constants/ActionTypes'

const initialState = {
  filmInfor: {
  }
}

export default function film (state = initialState, action) {
  switch (action.type) {
    case REQUEST_FILM:
      return {
        filmInfor: action.fetchData
      }
    case REQUEST_FILM_ERROR:
      return {
        filmInfor: {
          errmsg: action.fetchData
        }
      }
    case CLEAR_FILM:
      return {
        filmInfor: {}
      }
    default:
      return state
  }
}
