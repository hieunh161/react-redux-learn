import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import {toggleTodo} from '../actions'

const getVisibileTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(
        t => !t.completed
      )
    case 'completed':
      return todos.filter(
        t => t.completed
      )
    default:
      return todos;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibileTodos(
      state.todos,
      ownProps.filter
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
