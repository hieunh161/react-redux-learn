import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import TodoList from '../components/TodoList'

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
class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const state = props.store.getState();
    return (
      <TodoList
      todos={
        getVisibileTodos(
          state.todos,
          state.visibilityFilter
        )
        }
        onTodoClick={
          (id) => props.store.dispatch({
            type: types.TOGGLE_TODO,
            id
          })
        }></TodoList>
    )
  }
}

export default VisibleTodoList
