import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import {toggleTodo} from '../actions'

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

const mapStateToProps = (state) => {
  return {
    todos: getVisibileTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {dispatch(toggleTodo(id))}
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
export default VisibleTodoList
