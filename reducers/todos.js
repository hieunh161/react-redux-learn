import * as types from '../constants/ActionTypes'
import {combineReducers} from 'redux'
import todo from './todo'

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TODO:
    case types.TOGGLE_TODO:
    return {
      ...state,
      [action.id]: todo(state[action.id], action)
    }
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, action.id]
    default:
      return state;
  }
}

const todos = combineReducers({
  byId,
  allIds
})

export default todos

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);
// selector function
export const getVisibileTodos = (state, filter) => {
  const allTodos = getAllTodos(state)
  switch (filter) {
    case 'all':
      return allTodos;
    case 'active':
      return allTodos.filter(
        t => !t.completed
      )
    case 'completed':
      return allTodos.filter(
        t => t.completed
      )
    default:
      return state;
  }
}
