import { LOADING, LOAD_FINISHED } from '../constants/ActionTypes'

const initialState = {
  isLoading: false
}

export default function loading (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        isLoading: true
      }
    case LOAD_FINISHED:
      return {
        isLoading: false
      }
    default:
      return state
  }
}
