import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'
import { connect } from 'react-redux'

let nextTodoId = 0;

let AddTodo = ({dispatch}) => {
    let input;
    return (
      <div>
        <input ref={ text => {
          input = text
        }}/>
        <button onClick={()=>{
            dispatch({
              type: types.ADD_TODO,
              id: nextTodoId++,
              text: input.value
            });
          input.value = '';
        }}>Add Todo</button>
      </div>
    )
}
AddTodo = connect()(AddTodo)
export default AddTodo
