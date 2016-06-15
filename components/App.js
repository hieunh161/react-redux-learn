import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import FilterLink from './FilterLink'

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
class App extends Component {
  render(){
    const { todos, visibilityFilter, store } = this.props
    const visibleTodos = getVisibileTodos(
      todos,
      visibilityFilter,
      store
    )
    return (
      <div>
        <input ref={ text => {
          this.textinput = text
        }}/>
        <button onClick={()=>{
          store.dispatch({
            type: types.ADD_TODO,
            id: nextTodoId++,
            text: this.textinput.value
          });
          this.textinput.value = '';
        }}>Add Todo</button>
        <ul>
          {visibleTodos.map(todo =>
            <li key={todo.id} onClick={() => store.dispatch({
              type: types.TOGGLE_TODO,
              id: todo.id
            })} style={{textDecoration: todo.completed?
                        'line-through':'none'}}>
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show:
          {' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter = {visibilityFilter}
            store={store}>All</FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter = {visibilityFilter}
            store={store}>Active</FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter = {visibilityFilter}
            store={store}>Completed</FilterLink>
        </p>
      </div>
    )}
}

export default App
