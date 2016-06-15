import React,{ Component }  from 'react'
import * as types from '../constants/ActionTypes'

let nextTodoId = 0;
export default class AddTodo extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const state = props.store.getState();
    let textinput;
    return (
      <div>
        <input ref={ text => {
          textinput = text
        }}/>
        <button onClick={()=>{
            props.store.dispatch({
              type: types.ADD_TODO,
              id: nextTodoId++,
              text: textinput.value
            });
          textinput.value = '';
        }}>Add Todo</button>
      </div>
    )
  }
}
