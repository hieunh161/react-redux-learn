import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

let nextTodoId = 0;

let AddTodo = ({dispatch}) => {
    let input;
    return (
      <form onSubmit={e => {
        e.preventDefault();
        if(!input.value.trim()){
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={ text => {
          input = text
        }}/>
        <button type="submit">Add Todo</button>
      </form>
    )
}
AddTodo = connect()(AddTodo)
export default AddTodo
