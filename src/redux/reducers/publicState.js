import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  title: '炫酷电影小站',
  pageTitle: '正在热映'
}

export default function publicState (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_TITLE:
      return {
        title: action.title.title,
        pageTitle: action.title.pageTitle
      }

    default:
      return state
  }
}
