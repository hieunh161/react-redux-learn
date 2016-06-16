import * as types from '../constants/ActionTypes'
import {v4} from 'node-uuid'

export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    id: v4(),
    text: text
  }
}

export const setVisibileFilter = (filter) => {
  return {
      type: types.SET_VISIBILITY_FILTER,
      filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}
