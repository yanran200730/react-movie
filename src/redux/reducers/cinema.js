import * as ActionTypes from './../constants/ActionTypes'

const initialState = {

}

export default function cinema (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_CINEMA_LIST:
      return {
        cinemas: action.fetchData
      }
    case ActionTypes.GET_CINEMA_LIST_ERROR:
      return {
        error: action.fetchData
      }
    default:
      return state
  }
}
