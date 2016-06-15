import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'

const AddTodo = ({onAddClick}) => {
  let textinput;
  return (
    <div>
      <input ref={ text => {
        textinput = text
      }}/>
      <button onClick={()=> {
        onAddClick(textinput.value);
        textinput.value = '';
      }}>Add Todo</button>
    </div>
  )
}

export default AddTodo
