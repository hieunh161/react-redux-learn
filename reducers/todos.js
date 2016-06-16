import * as types from '../constants/ActionTypes'

const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return  {
        id: action.id,
        text: action.text,
        completed: false
      }
    case types.TOGGLE_TODO:
        if (state.id !== action.id) {
          return state;
        }
        return Object.assign({}, state, {
          completed: !state.completed
        });
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case types.TOGGLE_TODO:
      return state.map(t => {
        return todo(t, action);
      })
    default:
      return state;
  }
}

export default todos

// selector function
export const getVisibileTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;
    case 'active':
      return state.filter(
        t => !t.completed
      )
    case 'completed':
      return state.filter(
        t => t.completed
      )
    default:
      return state;
  }
}
