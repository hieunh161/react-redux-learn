import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

const getVisibileTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      )
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      )
    default:
      return todos;
  }
}

let nextTodoId = 0;
const App = ({todos, visibilityFilter, store}) => (
      <div>
        <AddTodo onAddClick={(text) => {
          store.dispatch({
            type: types.ADD_TODO,
            id: nextTodoId++,
            text: text
          });
        }}/>
        <TodoList todos={getVisibileTodos(
          todos,
          visibilityFilter
        )} onTodoClick={
          (id) => store.dispatch({
            type: types.TOGGLE_TODO,
            id
          })
        }/>
        <Footer visibilityFilter onFilterClick={(filter) =>
          store.dispatch({
            type: types.SET_VISIBILITY_FILTER,
            filter
          })
        }/>
      </div>
    )

export default App
