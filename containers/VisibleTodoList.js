import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { getVisibileTodos } from '../reducers'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibileTodos(
      state, ownProps.filter
    )
  }
}
const VisibleTodoList = connect(
  mapStateToProps,
  { onTodoClick : toggleTodo}
)(TodoList)
export default VisibleTodoList
