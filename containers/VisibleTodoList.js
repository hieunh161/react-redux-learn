import React,{ Component }  from 'react'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { withRouter } from 'react-router'
import { getVisibileTodos } from '../reducers'

const mapStateToProps = (state, ownProps) => {
  // TODO: undefined params when pass throught withrouter
  return {
    todos: getVisibileTodos(
      state, ownProps.filter
    )
  }
}
const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick : toggleTodo}
)(TodoList))
export default VisibleTodoList
