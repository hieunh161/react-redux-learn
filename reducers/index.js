import {combineReducers} from 'redux'
import todos, * as fromTodos from './todos'

const rootReducer = combineReducers({
  todos
})
export default rootReducer

// this transfer state to state.todos
export const getVisibileTodos = (state, filter) =>
  fromTodos.getVisibileTodos(state.todos, filter)
